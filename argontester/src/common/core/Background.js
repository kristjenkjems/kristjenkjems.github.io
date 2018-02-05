var ARGON = require('./ARGON')

class Background {

  constructor() {
    this.id = ARGON.Util.cuid()
    ARGON.Util.mixinInputOutputEventHandlers(this)
    ARGON.Util.mixinStateManager(this)
    Background.collection[this.id] = this
  }

  getPose() {
    return this.state.pose
  }

  getFOV() {
    return this.state.fov
  }

}


Background.collection = {}

Background.className = 'Background'

Background.query = function(backgroundSelector) {
  var matchingBackgrounds = []

  if (backgroundSelector.id) {
    matchingBackgrounds.push(ARGON.Background.collection[backgroundSelector.id])
  } else if (backgroundSelector.type) {
    var BackgroundConstructor = ARGON.Util.resolvePropertyPath(backgroundSelector.type, ARGON)
    var backgroundObjects = ARGON.Background.collection
    for (var id in backgroundObjects) {
      var background = backgroundObjects[id]
      if (background instanceof BackgroundConstructor)
        matchingBackgrounds.push(background)
    }
  }

  return matchingBackgrounds
}

Background.Controller = class Controller {

  constructor() {

    ARGON.Util.mixinInputOutputEventHandlers(this)
    ARGON.Util.mixinStateManager(this)

    this.element = document.createElement('div')
    this.element.classList.add('argon-background-controller')
    this.element.style.position = 'fixed'
    this.element.style.height = '100%'
    this.element.style.width = '100%'
    this.element.style.left = 0
    this.element.style.top = 0
    this.element.style.margin = 0
    this.element.style.zIndex = -2
    var onResize = () => {
      this.size = [this.element.clientWidth, this.element.clientHeight]
      this.aspect = this.size[0]/this.size[1]
      this._emit('resize')
    }
    window.addResizeListener(this.element, onResize)

    this.size = [undefined, undefined]
    this.aspect = undefined

    this.background = null
    this.backgroundEvents = new ARGON.EventHandler
    this.backgroundEvents.subscribe = false
    this.backgroundEvents.on('change', event => {
      this.set(event.key, event.value)
    })

    this.cameraFrame = new ARGON.SG.ReferenceFrame

    this.pan = null
    this.panSupported = true
    _bindPanEvents.call(this)

    this.zoom = null
    this.zoomSupported = true
    _bindZoomEvents.call(this)

  }

  setBackground(background) {
    if (this.background) this.background.unpipe(this.backgroundEvents)
    this.background = background
    this.background.pipe(this.backgroundEvents)
    this.setState(JSON.parse(JSON.stringify(this.background.state)))
    this._emit('backgroundChange')
  }

  getPose() {
    return this.background && this.background.getPose()
  }

  getFOV() {
    return this.background && this.background.getFOV()
  }

  applyPan(state) {
    var Transform = ARGON.SG.Transform
    var Vector = ARGON.SG.Vector
    if (this.pan) {
      this.pan[0] -= this.panVelocity[0] * 10
      this.pan[1] -= this.panVelocity[1] * 10
      this.panVelocity[0] *= 0.9
      this.panVelocity[1] *= 0.9
      var phi = this.pan[1] / 180 * Math.PI * 0.5
      var theta = this.pan[0] / 180 * Math.PI * 0.5

      if (state.pose instanceof Array) {
        var spec = Transform.interpret(state.pose)
        var rotationTransform = Transform.rotate.apply(null, spec.rotate)
      } else if (state.pose.orientation) {
        var rotationTransform = Transform.rotate.apply(null, state.pose.orientation)
      }

      var rotationTransform = Transform.multiply(
        Transform.rotateY(theta),
        rotationTransform
      )

      var rotationTransform = Transform.multiply(
        rotationTransform,
        Transform.rotateX(phi)
      )

      if (state.pose instanceof Array) {
        spec.rotate = Transform.interpret(rotationTransform).rotate
        state.pose = Transform.build(spec)
      } else if (state.pose.orientation) {
        state.pose.orientation = Transform.interpret(rotationTransform).rotate
      }
    }
  }

  applyZoom(state) {
    if (state.fov && this.zoom) {
      state.fov = Math.max(Math.min(150, state.fov/this.zoom), 30)
    }
  }

  update() {
    var DeviceVideo = ARGON.Background.DeviceVideo
    var state = {}
    var deviceFrame = ARGON.SG.ReferenceFrame.get('device')
    state.pose = this.getPose() || deviceFrame.currentState ? deviceFrame.currentState.pose : null
    state.fov = this.getFOV() ||
      (DeviceVideo.background && DeviceVideo.background.getFOV()) || 80
    if (this.panSupported) this.applyPan(state)
    if (this.zoomSupported) this.applyZoom(state)
    this.cameraFrame.pushState(state)
    this.currentState = state
    this.emitStateUpdate()
  }

  emitStateUpdate() {
    this._emit('stateUpdate', {state: this.currentState})
  }

}

Background.Controller.className = 'Background.Controller'

export default Background

var _bindZoomEvents = function() {
  var currentZoom = 1
  this._on('zoomMove', event => {
    this.zoom = Math.max(Math.min(currentZoom * event.scale, 5), 0.25)
  })
  this._on('zoomEnd', event => {
    currentZoom = this.zoom
  })
  this._on('zoomReset', event => {
    currentZoom = 1
    this.zoom = null
  })
}

var _bindPanEvents = function() {
  var currentPan = [0,0]
  this._on('panMove', event => {
    this.pan = [
      currentPan[0] + (event.deltaX * (this.currentState.fov / 170)),
      currentPan[1] + (event.deltaY * (this.currentState.fov / 170)),
    ]
    this.panVelocity = [0,0]
  })
  this._on('panEnd', event => {
    currentPan = this.pan || [0,0]
    this.panVelocity = [event.velocityX, event.velocityY]
  })
  this._on('panReset', event => {
    currentPan = [0,0]
    this.pan = null
    this.panStartTransform = null
  })
}
