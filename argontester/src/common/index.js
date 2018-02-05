var ARGON = module.exports = require('./core/ARGON')

ARGON.on('setup', function() {
  // require('./backgrounds/Video')
  require('./backgrounds/DeviceVideo')
  require('./backgrounds/Color')

  require('./components/CameraTarget')
  require('./components/GeoTarget')
  require('./components/VuforiaTargets')
})
