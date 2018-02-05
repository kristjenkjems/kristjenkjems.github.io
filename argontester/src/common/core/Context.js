import ARGON from './ARGON'
import Promise from 'bluebird'
import 'javascript-detect-element-resize'

document.documentElement.style.position = 'fixed'
document.documentElement.style.width = '100%'
document.documentElement.style.height = '100%'

/**
 * @class ARGON.Context
 * @description Contexts are 2D regions of 3D graphics registered
 * against a background.
 */
class Context {

  constructor(args) {

    this.id = ARGON.Util.cuid()
    ARGON.Util.mixinInputOutputEventHandlers(this)
    Context.collection[this.id] = this

    /**
     * This context's DOM element
     * @type Element
     */
    this.element = document.createElement('div')
    this.element.classList.add('argon-context')
    this.element.style.position = 'absolute'
    this.element.style.height = '100%'
    this.element.style.width = '100%'
    this.element.style.left = 0
    this.element.style.top = 0
    this.element.style.margin = 0
    this.element.style.zIndex = -1
    var _updateSize = () => {
      this.size = [this.element.clientWidth, this.element.clientHeight]
      this._emit('resize', this.size)
    }
    window.addResizeListener(this.element, _updateSize)
    _updateSize()

    var container = document.documentElement
    if (args && args.container) container = args.container
    container.appendChild(this.element)

    // frame data
    this.frameTransforms = new WeakMap
    this.frameStates = new WeakMap
    this.updatedFrames = []

    /**
     * The utm origin for this context, if it exists
     * @type {Location}
     */
    this.originLocation = new ARGON.SG.Location

    /**
     * This context's background view
     */
    this.backgroundView = new ARGON.BackgroundView
    this.element.appendChild(this.backgroundView.element)
    this.pipe(this.backgroundView.renderPort)

    this._setBackground(new ARGON.Background('transparent'))
  }

  /**
  * Try to change the background. Returns a promise that fulfills on success.
  */
  requestBackground(background) {
    if (background instanceof ARGON.Background === false)
      throw new Error('background must be instanceof ARGON.Background')
    return this._setBackground(background)
  }

  releaseBackground() {
    return Promise.resolve()
  }

  _setBackground(background, noRender) {
    if (background instanceof ARGON.Background === false)
      throw new Error('background must be instanceof ARGON.Background')

    if (this.background) {
      this.background.removeListener('update', this._backgroundUpdateListener)
      this.background.removeListener('options', this._backgroundOptionsListener)
      var previousType = this.background.type
      var previousBackground = this.background
    }

    this.background = background

    this._backgroundUpdateListener = event => {
      this.timestamp = event.timestamp

      var backgroundState = background.frame.getState(event.timestamp)
      if (backgroundState && backgroundState.pose)
        this.setOriginLocation(backgroundState.pose.location)

      ARGON.scene.update(this)
      var state = this.frameStates.get(background.frame)
      var transform = this.frameTransforms.get(background.frame)

      var update = {timestamp: this.timestamp, state, transform}

      this._emit('update', update)
      this.emitUpdates()
    }

    this._backgroundOptionsListener = event => {
      this._emit('options', event)
    }

    background.on('update', this._backgroundUpdateListener)
    background.on('options', this._backgroundOptionsListener)

    this._emit('backgroundChange', {
      previousBackgroundId: previousBackground && previousBackground.id
    })

    if (!previousType || previousType !== background.type) {
      if (background.remote || noRender) {
        this.backgroundView.setNull()
      } else {
        this.backgroundView.setResourcesFromBackground(background)
      }
      return Promise.resolve().then(() => this.backgroundView.commit())
        .then(() => { background.emitOptions() })
    } else return Promise.resolve()

  }

  emitUpdates() {
    var frames = this.updatedFrames
    for (var i=0; i<frames.length; i++) {
      frames[i].emitUpdate(this)
    }
    this.updatedFrames = []
  }

  getLocation() {
    var pose = this.backgroundView.currentState.pose
    return (pose.location) ? pose.location : null
  }

  getTransform() {
    return this.backgroundView.getTransform()
  }

  setOriginLocation(location) {
    if (!location) {
      if (this.originLocation.utm) {
        this.originLocation.setUndefined()
        this.needsUpdate = true
      }
      return
    }
    var originUTM = this.originLocation.utm
    if (!originUTM ||
      originUTM.zoneLetter !== location.utm.zoneLetter ||
      originUTM.zoneNumber !== location.utm.zoneNumber ||
      Math.abs(originUTM.easting - location.utm.easting) > 1000 ||
      Math.abs(originUTM.northing - location.utm.northing) > 1000) {
        this.originLocation.copy(location)
        this.needsUpdate = true
    }
  }

  getPositionForLocation(location) {
    var localUTM = this.originLocation.getLocalUTM(location)
    var originUTM = this.originLocation.utm
    if (localUTM && originUTM) {
      // (x100 for cm scale)
      return [
        (localUTM.easting - originUTM.easting) * -100,   // x
        (localUTM.altitude||0 - originUTM.altitude||0) * 100, // y
        (localUTM.northing - originUTM.northing) * 100  // z
      ]
    }
    return null
  }

  /**
   * Get size
   */
  getSize() {
    return this.size
  }

  /**
   * Get screen position.
   * (Does not report the correct position if the element or any ancessors
   * has a transform applied). Performs DOM access, so should be used
   * sparingly XXX: Algorithm for getting correct transform is in Ethereal,
   * but its lengthly, and again, performs a lot of DOM access, so it's not
   * ideal. Also, its probably unlikely that normal webpages would apply css
   * transforms to top-level content. Famo.us webpages, on the other hand...
   * these would allow us to access the true final transform of a surface/view
   * (without accessing the DOM!)
   *
   */
  getScreenBounds() {
    var left = 0
    var top = 0

    var element = this.element
    while(element) {
      // eek DOM access.... need to use famous!
      left += (element.offsetLeft - element.scrollLeft + element.clientLeft)
      top += (element.offsetTop - element.scrollTop + element.clientTop)
      element = element.offsetParent
    }

    var width = this.size[0]
    var height = this.size[1]

    return {left, top, width, height, size:[width, height]}
  }

  destroy() {
    this.backgroundView.destroy()
    // this.backgroundView = null
    delete Context.collection[this.id]
    if (this.element.parentNode)
      this.element.parentNode.removeChild(this.element)
  }

}

Context.collection = {}

Context.className = 'Context'

Context.componentBindHandlers = []

export default Context

if (ARGON.isManager) {
  ARGON.channelPort.on('renderPort#update', function() {

  })
}

if (ARGON.isChannel) {

  // Context.defaultBackground = new ARGON.Background
  // Context.defaultBackground.set
  // Context.defaultBackground.set('fov', 60)

  var _setupPanAndZoomGestures = function(context) {

    var Hammer = require('hammerjs')
    var hammer = new Hammer(this.element)
    var pinch = hammer.get('pinch')
    var pan = hammer.get('pan')
    var doubletap = hammer.get('doubletap')
    pinch.set({ enable: true, threshold:0 })
    pan.set({ enable: true, threshold:0, pointers: 2 }) // two-finger pan
    pan.recognizeWith(pinch)
    pinch.recognizeWith(pan)
    doubletap.recognizeWith(pinch)
    doubletap.recognizeWith(pan)
    doubletap.set({ pointers:2, posThreshold: 100, threshold: 40, interval: 500, time: 350 })

    hammer.on('pinchstart', event => {
      this.backgroundView.trigger('zoomStart')
    })
    hammer.on('pinchmove', event => {
      this.backgroundView.trigger('zoomMove', {
        scale: event.scale
      })
    })
    hammer.on('pinchend', event => {
      this.backgroundView.trigger('zoomEnd')
    })

    hammer.on('panstart', event => {
      this.backgroundView.trigger('panStart')
    })
    hammer.on('panmove', event => {
      this.backgroundView.trigger('panMove', {
        deltaX: event.deltaX,
        deltaY: event.deltaY
      })
    })
    hammer.on('panend', event => {
      this.backgroundView.trigger('panEnd', {
        velocityX: event.velocityX,
        velocityY: event.velocityY
      })
    })

    hammer.on('doubletap', event => {
      this.backgroundView.trigger('zoomReset')
      this.backgroundView.trigger('panReset')
    })

    // this.element.addEventListener('gesturestart', event => {
    //   currentFOV = this.backgroundView.cameraFrame.currentState.fov
    // }, false)
    //
    // this.element.addEventListener('gesturechange', event => {
    //   this.context.set('zoomFOV',
    //     Math.max(Math.min(currentFOV / event.scale, maxFOV), minFOV)
    //   )
    // }, false)
  }

}
