window.__ARGON_CHANNEL = true

var Promise = require('bluebird')
var readyDeferred = Promise.defer()

var ARGON = module.exports = require('../')
ARGON.ready = readyDeferred.promise

// Let Argon Channel Manager know that this is an Argon channel (vs a regular webpage).
if (document.readyState === 'complete') {
  notifyParent()
} else {
  window.addEventListener('load', function load() {
    notifyParent()
  }, false)
}

function notifyParent() {
  window.parent.postMessage({
    ARGON_URL: window.location.href,
    ARGON_VERSION_STRING: ARGON.version
  }, '*')
}

ARGON.init = function(capabilites) {
  ARGON.isConnected = true
  ARGON.emit('connect')
  ARGON.managerPort.trigger('ARGON_CHANNEL_CONNECTED')
  readyDeferred.resolve(capabilites)
}

window.addEventListener('message',function(messageEvent) {
  if( messageEvent.data.msg === 'ARGON_CONNECT' ) {
    ARGON._messagePort = messageEvent.ports[0]
    ARGON._messagePort.onmessage = function(event) {
      ARGON._onmessage(event.data)
    }
    ARGON.init(messageEvent.data.capabilites) // TODO: pass capabilities
  }
},false)

window.addEventListener('unload', function(event) {
  ARGON.managerPort.trigger('unload')
})

// Setup channelManager <-> channel communication
var managerPort = new ARGON.EventPort
managerPort.input.pipe(function(type, event) {
  if (ARGON.isConnected) {
    if (ARGON._messagePort) ARGON._messagePort.postMessage({type, event})
  } else {
    ARGON.ready.then(function() {
      managerPort.trigger(type, event)
    })
  }
})

managerPort.requests = {}

managerPort.request = function(type, event) {
  var deferred = Promise.defer()
  var id = ARGON.Util.cuid()
  managerPort.requests[id] = deferred
  managerPort.trigger('REQUEST', {type, event, id})
  return deferred.promise
}

managerPort.on('RESPONSE', function(e) {
  var deferred = managerPort.requests[e.id]
  delete managerPort.requests[e.id]
  if (e.reject) deferred.reject(e.reject)
  else deferred.resolve(e.resolve)
})

ARGON.setup({
  managerPort: managerPort
})


ARGON._onmessage = function(message) {
  if (message.type === 'MESSAGE_QUEUE') {
    var queue = message.event
    for (var i in queue) {
      var m = queue[i]
      managerPort.output.emit(m.type, m.event)
    }
  } else {
    managerPort.output.emit(message.type, message.event)
  }
}


// create update loop, rely on SYNC from channel manager if available
var loopRequestId = null
ARGON.on('SYNC_INTERNAL', event => {
  ARGON.syncTimestamp = event.timestamp
  ARGON.emit('SYNC', event)
})
ARGON.managerPort.on('SYNC_INTERNAL', event => {
  if (loopRequestId) {
    window.cancelAnimationFrame(loopRequestId)
    loopRequestId = null
  }
  ARGON.emit('SYNC_INTERNAL', event)
})


ARGON.SG.ReferenceFrame.subscribe('device')

var loop = () => {
  loopRequestId = window.requestAnimationFrame(loop)
  ARGON.emit('SYNC_INTERNAL', {timestamp: Date.now()})
}
loop()
