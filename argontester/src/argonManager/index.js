window.__ARGON_MANAGER = true

var asap = require('asap/browser-raw')

var ARGON = module.exports = require('../')

// native <-> channel manager communication
var nativePort = new ARGON.EventPort

// channel manager <-> channel communication
var channelPort = new ARGON.EventPort
channelPort.input.pipe(function(type, event) {
  for (var id in ARGON.channels) {
    ARGON.channels[id].port.trigger(type, event)
  }
})

var channelRequestHandlers = {}

channelPort.on('REQUEST', function(request) {
  var channel = ARGON.Channel.eventMap.get(request)
  if (channelRequestHandlers[request.type]) {
    new Promise(function(resolve, reject) {
      channelRequestHandlers[request.type](channel, request.event, resolve, reject)
    }).then(function(e) {
      channel.port.trigger('RESPONSE', {id: request.id, resolve: e})
      channel.port.trigger('FLUSH')
    }, function(e) {
      channel.port.trigger('RESPONSE', {id: request.id, reject: e.toString()})
      channel.port.trigger('FLUSH')
    })
  } else {
    channel.port.trigger('RESPONSE', {id: request.id, reject: 'unhandled request'})
    channel.port.trigger('FLUSH')
  }
})

asap(function() {
  ARGON.on('setup', function() {
    if (!ARGON.ReferenceFrame.collection.display)
      ARGON.ReferenceFrame.collection.display = ARGON.Device.frame
  })

  ARGON.setup({
    nativePort: nativePort,
    channelPort: channelPort,
    channelRequestHandlers: channelRequestHandlers
  })

  ARGON.Channel = require('./Channel')
  ARGON.channels = ARGON.Channel.collection
})

ARGON.createChannel = function(config) {
  new ARGON.Channel(config)
}


// notify Argon when DOM is loaded, so that plugin scripts can be injected
if (navigator.userAgent.indexOf('Argon') !== -1) {
  document.addEventListener('DOMContentLoaded', function(event) {
    document.location = 'arc://ready'
  })
}

// fast dispatcher
ARGON.dispatch = function() {
  var immediateChannel = new MessageChannel()
  var taskQueue = []
  immediateChannel.port1.onmessage = function () {
    if (taskQueue.length === 0) return
    // console.time('dispatch')
    var q = taskQueue
    taskQueue = []
    // console.time('dispatchTasks')
    while (q.length > 0) {
      q.shift()()
    }
    // console.timeEnd('dispatchTasks')
    _handleARData()
    // console.timeEnd('dispatch')
  }
  return function (task) {
    // console.time('dispatch')
    taskQueue.push(task)
    immediateChannel.port2.postMessage(0)
    // console.timeEnd('dispatch')
  }
}()


// If running in the (native) Argon App
// if (navigator.userAgent.indexOf('Argon') !== -1) {

  var _ARData = null

  var _handleARData = function() {
    // if we have any new data to report
    if (_ARData) {

      // console.timeEnd('frame')
      //
      _ARData.timestamp = Date.now()
      // XXX: ^ rewriting timestamp value because the native timestamp is
      // based on NSTimeInterval (submillisecond precision) which is the
      // time since the system uptime, which we are currently not passing
      // in from native. If we want to rely on the native timestamp, then
      // we need to expose the system uptime to channels so that they can
      // generate correct timestamps in relation to everything else in
      // the scenegraph.

      // console.time('update')

      // update systems
      // console.time('stateUpdates')

      ARGON.Device.pushGeoPoseState({
        deviceAttitude: _ARData.deviceAttitude,
        geolocation: _ARData.geolocation,
        timestamp: _ARData.timestamp
      })

      var vuforiaTrackables = {}
      var transpose = ARGON.SG.Transform.transpose
      if (_ARData.trackables !== 'null') {
        for (var i=0; i< _ARData.trackables.length; i++) {
          var trackable = _ARData.trackables[i]
          vuforiaTrackables[trackable.targetName] = {
            name: trackable.targetName,
            transform: transpose(trackable.modelViewMatrix)
          }
        }
      }
      ARGON.System.Vuforia.updateData({
        trackables: vuforiaTrackables,
        timestamp: _ARData.timestamp,
        volatile: true
      })

      // console.timeEnd('stateUpdates')

      // console.time('sync')
      var sync = {timestamp: _ARData.timestamp, volatile: true}
      ARGON.emit('SYNC_INTERNAL', sync)
      ARGON.channelPort.trigger('SYNC_INTERNAL', sync)
      // console.timeEnd('sync')

      // clear data
      _ARData = null

      // console.log('VuforiaUpdates:' + _VuforiaUpdates.length + ' GeoUpdates: ' + _GeoUpdates.length)

      // console.timeEnd('update')

      // console.time('frame')

    }

    ARGON.channelPort.trigger('FLUSH')
  }

  var tasks = []
  // Below are the entry points from native code
  // TODO: AR.dispatch should be the only entry point
  window.dispatch = function(task) {
    tasks.push(task)
    asap(function() {
      if (tasks.length === 0) return
      var q = tasks; tasks = []

      try {
        while (q.length > 0) {
          q.shift()()
        }
        _handleARData()
      } catch (e) { asap.requestFlush(); throw e }
    })
  }
  window.AR = {}
  AR.onUpdateARState = function(event) {
    _ARData = event
  }
  AR.onCameraCalibration = function(event) {
    // console.time('dispatchTask:onCameraCalibration')
    // emit from native port and forward to channel ports
    var fSH = event.frameSizeHorizontal
    var fSV = event.frameSizeVertical
    var fLH = event.focalLengthHorizontal
    var fLV = event.focalLengthVertical

    var fovH = 2 * Math.atan( fSH / ( fLH * 2 ) ) * 180/Math.PI
    var fovV = 2 * Math.atan( fSV / ( fLV * 2 ) ) * 180/Math.PI

    ARGON.Device.setCameraCalibration({
      frameSize: [fSH, fSV],
      focalLength: [fLH, fLV],
      fov: [fovH, fovV]
    })

    // console.timeEnd('dispatchTask:onCcameraCalibration')
  }
  AR.emitEvent = function(event) {
    if (event.eventName === 'AR.DataSetLoadedInternalEvent') {
      ARGON.nativePort.output.emit('Vuforia#loadDataSetResponse', event)
    } else {
      ARGON.nativePort.output.emit(event.eventName, event)
    }
  }
  AR.setSplashURL = function() {

  }

// }
