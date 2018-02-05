/**
 * @module ARGON
 */
function _setup(setupObj) {
  for (var key in setupObj) {
    ARGON[key] = setupObj[key]
  }

  /*@const*/
  Object.defineProperty(ARGON, "isManager", {
    value: !!window.__ARGON_MANAGER
  })
  /*@const*/
  Object.defineProperty(ARGON, "isChannel", {
    value: !!window.__ARGON_CHANNEL
  })
  /*@const*/
  Object.defineProperty(ARGON, "isTop", {value: window.top === window.self})
  /*@const*/
  Object.defineProperty(ARGON, "isArgonAppEnvironment", {
    value: navigator.userAgent.indexOf('Argon') !== -1
  })
  /*@const*/
  Object.defineProperty(ARGON, "isMobileWebEnvironment", {
    value: navigator.userAgent.indexOf('Mobile') !== -1
  })
  /*@const*/
  Object.defineProperty(ARGON, "isDesktopWebEnvironment", {
    value: !ARGON.isMobileWebEnvironment
  })

  // var CzmlDataSource = require('cesiumjs/Source/DataSources/CzmlDataSource')
  // ARGON.czmlDataSource = new CzmlDataSource()

  ARGON.SG            = require('./scenegraph/SG')
  ARGON.scene         = new ARGON.SG.Scene()

  ARGON.ReferenceFrame  = ARGON.SG.ReferenceFrame
  ARGON.Device          = require('./Device')
  ARGON.Component       = require('./Component')
  ARGON.Background      = require('./Background2')
  ARGON.BackgroundView  = require('./BackgroundView')
  ARGON.Context         = require('./Context')
  ARGON.Sensor          = require('./Sensor')
  ARGON.System = {}

  ARGON.filters = require('./filters')
  ARGON.emit('setup')
  ARGON.immersiveContext = require('./immersiveContext')

  delete ARGON.setup
  return ARGON
}

var events = require('./events')
var ARGON = module.exports = {
  setup: _setup,
  EventHandler: events.EventHandler,
  EventMapper: events.EventMapper,
  EventFilter: events.EventFilter,
  EventPort: require('./EventPort'),
  Util: require('./Util')
}

ARGON.Util.mixinEventHandler(ARGON)

require('array.prototype.find')
ARGON._basketScript = require('raw!basket.js/dist/basket.full.min')
new Function(ARGON._basketScript).call(window)
// require('script!rsvp/dist/rsvp')
// require('script!basket.js/dist/basket')
