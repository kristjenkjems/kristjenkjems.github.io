import ARGON from './ARGON'
import Promise from 'bluebird'

var CSSClass = 'argon-background'

class BackgroundView {

  constructor(args) {
    ARGON.Util.mixinInputOutputEventHandlers(this)

    this.element = document.createElement('iframe')
    this.element.sandbox = 'allow-forms allow-scripts allow-same-origin'
    this.element.classList.add(CSSClass)
    this.element.style.position = 'absolute'
    this.element.style.height = '100%'
    this.element.style.width = '100%'
    this.element.style.left = 0
    this.element.style.top = 0
    this.element.style.margin = 0
    this.element.style.zIndex = -2
    this.element.style.border = 0
    this.element.style.pointerEvents = 'none'
    this.element.argonBackgroundObject = this

    // workaround for bug with copy/paste menu over an iframe in UIWebView
    // (I think we can remove the overlayElement when we switch to WKWebView)
    this.overlayElement = document.createElement('div')
    this.overlayElement.style.position = 'absolute'
    this.overlayElement.style.height = '100%'
    this.overlayElement.style.width = '100%'
    this.overlayElement.style.left = 0
    this.overlayElement.style.top = 0
    this.overlayElement.style.zIndex = -1
    this.overlayElement.style.pointerEvents = 'none'

    this.container = (args && args.container) || document.documentElement

    this.resources = null

    this.renderPort = new ARGON.EventPort
    this.renderPort.input.pipe( (type, event) => {
      var contentWindow = this.element.contentWindow
      if (contentWindow && this.renderPort.connected) {
        var listeners = contentWindow.__listeners[type]
        if (listeners) {
          for (var i=0; i<listeners.length; i++) {
            listeners[i].call(null, event)
          }
        }
      }
    })

    window.addEventListener('message', message => {
      if (message.data._key === this._key) {
        var type = message.data.type
        var event = message.data.event
        if (type === 'connect') {
          this.renderPort.connected = true
          try {
            this.renderPort.input.emit('startRenderScript')
          } catch (e) {
            this._deferredReady.reject(e)
          }
        }
        if (type === 'ready') { this._deferredReady.resolve() }
        this.renderPort.output.emit(type, event)
      }
    })
  }

  setNull() {
    this.resources = null
  }

  setResourcesFromBackground(background) {
    this.setJSResources(background.jsResourcesPromise)
    this.setCSSResources(background.cssResourcesPromise)
    this.setRenderScript(background.renderScript)
  }

  setCSSResources(cssResources) {
    this.resources = this.resources || {}
    this.resources.css = cssResources
  }

  setJSResources(jsResources) {
    this.resources = this.resources || {}
    this.resources.js = jsResources
  }

  setRenderScript(script) {
    this.resources = this.resources || {}
    this.resources.renderScript = script || function() {}
  }

  commit() {
    if (!this.resources) {
      this.destroy()
      return Promise.resolve()
    }

    var resources = [
      this.resources.css,
      this.resources.js,
      this.resources.renderScript
    ]

    return   Promise.all(resources).then( resources => {
      _commitContent.call(this, resources[0], resources[1], resources[2])
      this._deferredReady = Promise.defer()
      return this._deferredReady.promise
    })
  }

  destroy() {
    this.resources = null
    if (this.element.parentNode)
      this.element.parentNode.removeChild(this.element)
  }

}

export default BackgroundView

var beginScript = '<scr'+'ipt>'
var endScript = '</scr'+'ipt>'

var _commitContent = function(cssResources, jsResources, renderScript) {

  this._key = ARGON.Util.cuid()

  var content = []

  content.push('<!DOCTYPE html>')

  if (cssResources) cssResources.forEach( css => {
    content.push('<st'+'yle>' + css + '</sty'+'le>')
  })

  content.push(beginScript)
  content.push('window.__key = "' + this._key + '"')
  content.push('document.documentElement.style.position = "fixed"')
  content.push('document.documentElement.style.width = "100%"')
  content.push('document.documentElement.style.height = "100%"')
  content.push(endScript)

  content.push('<body></body>')

  if (jsResources) jsResources.forEach( js => {
    content.push(beginScript + js + endScript)
  })

  content.push(beginScript)
  content.push('window.__listeners = {}')
  content.push('var port = {}')
  content.push('port.on = function(type, listener) { __listeners[type] = __listeners[type] || []; __listeners[type].push(listener) }')
  content.push('port.emit = function(type, listener) { window.parent.postMessage({_key:__key, type:type, event:event}, "*") }')
  content.push('port.on("startRenderScript", function() { (' + renderScript + ')(port); port.emit("ready") })')
  content.push('port.emit("connect")')
  content.push(endScript)

  this.renderPort.connected = false
  var b = new Blob([content.join('\n')], { type: 'text/html' })
  this.element.src = URL.createObjectURL(b)
  // this.element.srcdoc = content.join('\n')

  if (!this.element.parentNode) {
    this.container.appendChild(this.element)
    this.container.appendChild(this.overlayElement)
  }

  basket.clear(true) // clear expired files
}
