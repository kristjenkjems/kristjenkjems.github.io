var ARGON = require('./ARGON')
var Transform = ARGON.SG.Transform
var _location = new ARGON.SG.Location
var _orientation = [0,0,0]

var DEG2RAD = Math.PI/180
var SCREEN_SIZE = [window.screen.width, window.screen.height]

var Device = ARGON.Device = {}
export default Device

ARGON.Util.mixinInputOutputEventHandlers(Device)

Device.frame = ARGON.SG.ReferenceFrame.getOrCreate('device')

// {size: [], orientation: 0|90|-90|180, direction: 0|1 (horizontal|vertical)}
Device.screen = {}

var emitScreen = function(screenState) {
  var o = (screenState && screenState.orientation) || window.orientation || 0
  Device.screen = {
    size: (screenState && screenState.size) || SCREEN_SIZE,
    orientation: o,
    transform: Transform.rotateZ(DEG2RAD*-o),
    verticalDirection: (o === 90 || o === -90) ? 0 : 1
  }
  if (ARGON.isManager)
    ARGON.channelPort.trigger('Device#screenState', Device.screen)
}

emitScreen()
window.addEventListener('orientationchange', emitScreen)

if (ARGON.isChannel) {
  ARGON.managerPort.on('Device#screenState', emitScreen)
  ARGON.on('connect', () => {
    window.removeEventListener('orientationchange', emitScreen)
  })
}

if (!ARGON.isArgonAppEnvironment) {
  // get geolocation from web api
  if (navigator.geolocation) {
    var watchId = navigator.geolocation.watchPosition(function onLocation(event) {
        _location.setLLA(event.coords)
        Device.frame.pushState({
          pose: {
            location: _location.toJSON(),
            orientation: _orientation,
          },
          timestamp: event.timestamp
        })
    }, function onError(error) {
      console.warn(error)
    }, {
      enableHighAccuracy: true,
      maximumAge        : 30000,
      timeout           : 27000
    })

    if (ARGON.isChannel) {
      ARGON.on('connect', () => navigator.geolocation.clearWatch(watchId) )
    }
  }

  // get deviceorientation from web api
  if (window.DeviceOrientationEvent) {

    var Transform = ARGON.SG.Transform
    var worldTransform = Transform.rotateX( DEG2RAD*-90 )

    var _deviceOrientationListener = function (event) {
      var alpha = event.alpha
      var beta = event.beta
      var gamma = event.gamma
      if (event.webkitCompassHeading > 0) {
          //XXX: on iOS, to get absolute heading need to use webkitCompassHeading
          // but it doesn't seem to be working right... :/
          // alpha = 360-event.webkitCompassHeading
      }
      if ( alpha !== 0 && beta !== 0 && gamma !== 0) {
        var rotationTransform = Transform.multiply(
          Transform.rotateZ( DEG2RAD*alpha ),
          Transform.multiply(
            Transform.rotateX( DEG2RAD*beta ),
            Transform.rotateY( DEG2RAD*gamma )
          )
        )

        var screenAdjustedTransform = Transform.multiply(
          rotationTransform,
          Device.screen.transform
        )
        var finalRotationTransform = Transform.multiply(
          worldTransform,
          screenAdjustedTransform
        )

        if (event.absolute) {
          var orientation = Transform.interpret(finalRotationTransform).rotate
          Device.frame.pushState({
            pose: {
              location: _location.toJSON(),
              orientation: orientation,
            },
            timestamp: event.timestamp
          })
        } else {
          Device.frame.pushState({
            pose: finalRotationTransform,
            timestamp: event.timestamp
          })
        }
      }
    }

    window.addEventListener('deviceorientation', _deviceOrientationListener, false)
    if (ARGON.isChannel) {
      ARGON.on('connect', () => {
        window.removeEventListener('deviceorientation', _deviceOrientationListener)
      })
    }
  }

}


if (ARGON.isManager) {

  Device.cameraCalibration = {}

  Device.setCameraCalibration = function(cameraCalibration) {
    Device.cameraCalibration = cameraCalibration
  }

  Device.pushGeoPoseState = function(event) {
    var a = event.deviceAttitude
    var rotationTransform = Transform.transpose([
      a[1], a[5], a[9], a[13],
      a[2], a[6], a[10],a[14],
      a[0], a[4], a[8], a[12],
      a[3], a[7], a[11],a[15]
    ])
    var screenAdjustedTransform = Transform.multiply(
      rotationTransform,
      Device.screen.transform
    )

    _location.setUTM(event.geolocation)
    _orientation = Transform.interpret(screenAdjustedTransform).rotate

    Device.frame.pushState({
      pose: {
        location: _location.toJSON(),
        orientation: _orientation
      },
      fov: calculateRenderFOV(Device.cameraCalibration),
      timestamp: event.timestamp
    })
  }

  function calculateRenderFOV(cameraCalibration) {
    var screenSize = Device.screen.size
    var screenVerticalDirection = Device.screen.verticalDirection

    var videoScale = screenSize[1] / cameraCalibration.frameSize[1] //this.getVideoScale()
    var videoVerticalDirection = screenVerticalDirection
    // var videoHorizontalDirection = +!screenVerticalDirection
    // var renderWidth  = cameraCalibration.frameSize[videoHorizontalDirection] * videoScale
    var renderHeight = cameraCalibration.frameSize[videoVerticalDirection] * videoScale
    var ratio = screenSize[screenVerticalDirection] / renderHeight

    // var renderSize = [renderWidth, renderHeight]
    var renderFOV = cameraCalibration.fov[screenVerticalDirection] * ratio

    return renderFOV
  }

}
