
var ARGON = require('./ARGON')

class Component {

  constructor(options) {
    ARGON.Util.mixinInputOutputEventHandlers(this)
    ARGON.Util.mixinOptionsManager(this)
    if (options) this.setOptions(options)
    this._proxyMap = new WeakMap
  }

  getProxy(context) {
    var proxy = this._proxyMap.get(context)

    if (!proxy) {
      proxy = Object.create(this)
      proxy.context = context
      proxy.referenceFrame = null
      proxy.handler = {}
      ARGON.Util.mixinInputOutputEventHandlers(proxy.handler)

      proxy.bindReferenceFrame = _bindReferenceFrame.bind(proxy)
      proxy.unbindReferenceFrame = _unbindReferenceFrame.bind(proxy)

      proxy.getState = _getState.bind(proxy)
      proxy.getFinalTransform = _getFinalTransform.bind(proxy)

      this._proxyMap.set(context, proxy)
      this._emit('proxy', {proxy, context})
    }

    return proxy
  }

  setFilter(filter) {
    this.filter = filter
  }

}

export default Component

var _bindReferenceFrame = function(frame) {
  if (!frame) this.unbindReferenceFrame()
  else if (this.referenceFrame !== frame) {
    this.unbindReferenceFrame()
    var contextId = this.context.id
    this._updateListener = e => {
      if (e.contextId === contextId) {
        this.handler._emit('update')
      }
    }
    frame.on('update', this._updateListener)
    frame.emitUpdate(this.context)
    this.referenceFrame = frame
  }
}

var _unbindReferenceFrame = function() {
  if (this.referenceFrame) {
    this.referenceFrame.removeListener('update', this._updateListener)
    this.referenceFrame = null
    this._updateListener = null
  }
}

var _getState = function() {
  return this.referenceFrame ?
    this.context.frameStates.get(this.referenceFrame) : null
}

var _getFinalTransform = function() {
  var finalTransform = this.referenceFrame ?
    this.context.frameTransforms.get(this.referenceFrame) : null
  if (this.filter && finalTransform)
    finalTransform = this.filter(finalTransform)
  return finalTransform
}
