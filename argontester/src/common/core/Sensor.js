
var ARGON = require('./ARGON')

var Sensor = {}

export default Sensor

Sensor.getFrame = function(idOrName) {
  return ARGON.SG.sharedFrames[idOrName]
}

Sensor.getState = function(idOrName) {
  var frame = Sensor.getFrame(idOrName)
  return frame ? frame.currentState : null
}

Sensor.getTransform = function(idOrName, options) {
  var frame = Sensor.getFrame(idOrName)
  return frame ? frame.getTransform(options) : null
}
