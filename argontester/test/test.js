window.ARGON = require('../dist/argonManager')
window.Promise = require('bluebird')

Promise.onPossiblyUnhandledRejection(function(e) {
  throw e
})


require('./ReferenceFrame.spec.js')
require('./BackgroundView.spec.js')
require('./Background.spec.js')
require('./Context.spec.js')
require('./Channel.spec.js')
require('./ArgonApp.spec.js')
