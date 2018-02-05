var ARGON = require('./')
var VersionTransformer = require('./VersionTransformer')


var CSSClass = 'argon-channel'

class Channel {

  constructor(options={}) {

    this.id = ARGON.Util.cuid()
    Channel.collection[this.id] = this
    ARGON.Util.mixinInputOutputEventHandlers(this)

    this._url = null
    this._messagePort = null
    this._messageQueue = []

    this.autoFlush = false

    this.port = new ARGON.EventPort(_queueToChannel.bind(this), function output(type, event) {
      ARGON.channelPort.output.emit(type, event)
      return true
    }.bind(this))

    this.element = options.element || document.createElement('iframe')
    this.element.webkitallowfullscreen = false
    this.element.sandbox = 'allow-forms allow-scripts allow-same-origin'
    this.element.classList.add(CSSClass)
    this.element.id = CSSClass + '-' + this.id
    this.element.channel = this

    if (!options.element) {
      var container = document.documentElement
      if (options && options.container) container = options.container
      container.appendChild(this.element)
    }

    // 'unload' event from argon.js
    this.port.on('unload', function(event) {
      _cleanUp.call(this)

    }.bind(this))

    this.element.onload = _onload.bind(this)

    if (options.src) this.setURL(options.src)
  }

  setURL(url) {
    _cleanUp.call(this)
    _setURL.call(this, url)
    this.element.src = undefined
    this.element.src = this._url
    this._waitingForLoad = true
  }

  getURL() {
    return this._url
  }

  focus() {
    this.port.trigger('focus')
    this._emit('focus')
  }

  blur() {
    this.port.trigger('blur')
    this._emit('blur')
  }

  destroy() {
    delete Channel.collection[this.id]
    if (this.element.parentNode)
      this.element.parentNode.removeChild(this.element)
  }

}

Channel.collection = {}
Channel.eventMap = new WeakMap

export default Channel


// Manager.on('focus', function(event) {
//   var channel = channels[event.ChannelID]
//   if (Manager.activeChannel !== channel) {
//     if (Manager.activeChannel) Manager.activeChannel.blur()
//     Manager.activeChannel = channel
//   }
// })
//
// Manager.on('blur', function(event) {
//   var channel = channels[event.ChannelID]
//   if (Manager.activeChannel === channel)
//     Manager.activeChannel = undefined
// })



function _onload() {
  if (this._waitingForLoad) {
  // this page load was expected
    this._waitingForLoad = false
  } else {
    // this page load was not expected
    _cleanUp.call(this)
    _setURL.call(this, '***')
  }
  this._emit('load')
}

function _parseVersion(version) {
  var tokens = version.split('.')
  return {
    major: tokens[0],
    minor: tokens[1],
    patch: tokens[2]
  }
}

function _onconnect(channelInfo) {
  this.version = channelInfo.ARGON_VERSION_STRING
  this.semver = _parseVersion(this.version)

  // TODO: Once argon.js is beyond major version 0, only
  // check major & minor versions here. Also, maybe should
  // use a semver library for comparing semvers.
  // TODO: backwards compatability
  if (this.semver.major > ARGON.semver.major ||
      this.semver.minor > ARGON.semver.minor ||
      this.semver.patch > ARGON.semver.patch) {
    alert('The channel at ' + this._url + ' requires a newer version of Argon (' + this.version + '). You are currently running version ' + ARGON.version + '. Please update Argon in order to open this channel.')
    _cleanUp.call(this)
    _setURL.call(this, null)
    return
  } else if (this.semver.major < ARGON.semver.major ||
             this.semver.minor < ARGON.semver.minor ||
             this.semver.patch < ARGON.semver.patch) {
    alert('The channel at ' + this._url + ' uses an older version argon.js, which may not work be compatible with your version of Argon ('+ARGON.version+'). Please update the channel to the latest argon.js')
    _cleanUp.call(this)
    _setURL.call(this, null)
    return
  }

  if (this._waitingForLoad === false) {
    _cleanUp.call(this)
    this._waitingForLoad = true
  }
  _setURL.call(this, channelInfo.ARGON_URL)

  var mc = new MessageChannel()
  var connectMessage = {msg:'ARGON_CONNECT', capabilities: {}}
  this.element.contentWindow.postMessage(connectMessage, '*', [mc.port2])
  this._messagePort = mc.port1

  this._messagePort.onmessage = (message) => {
    var data = message.data
    var event = data.event || {}
    // associate the event to the source channel via a weakmap
    Channel.eventMap.set(event, this)
    this.port.output.emit(data.type, event)
  }

}

function _sendToChannel(type, event) {
  // transform outgoing messages for backwards compatability
  var message = VersionTransformer.toChannel(type, event, this.semver)
  this._messagePort.postMessage(message)
  // TODO: In iOS 8, with native WKWebview APIs, we should be able to detect
  // iframe navigation, and then we can notify the appropriate channel.
}

function _queueToChannel(type, event) {
  // only enqueue messages marked 'volatile' if there is an active connection
  if (this.autoFlush) {
    this._messageQueue.push({type, event})
    _flushMessages.call(this)
  } else if (type === 'FLUSH') _flushMessages.call(this)
  else if (!(event && event.volatile)) this._messageQueue.push({type, event})
  else if (this._messagePort) this._messageQueue.push({type, event})
}

function _flushMessages() {
  if (!this._messagePort) return // iframe is not connected
  _sendToChannel.call(this, 'MESSAGE_QUEUE', this._messageQueue)
  this._messageQueue = []
}

function _cleanUp() {
  if (this._messagePort) this._messagePort.close()
  this._messagePort = null
  this._messageQueue = []
  this._url = null
  this.version = null
  this.semver = null
  this._emit('cleanUp')
  this._emit('unload')
}

function _setURL(url) {
  if (this._url != url) {
    this._url = url
    this._emit('navigation', {url: this._url})
  }
}

window.addEventListener('message', function (event) {
  if  (event.data.ARGON_URL) {
    for (var i in ARGON.channels) {
      var channel = ARGON.channels[i]
      if (channel.element.contentWindow === event.source) {
        _onconnect.call(channel, event.data)
        channel._emit('ARGON_CHANNEL_CONNECTED')
        channel._emit('connect')
        ARGON.emit('channelConnection', channel)
        return
      }
    }
  }
}, true)
