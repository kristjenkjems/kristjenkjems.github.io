module.exports = Matrix4
var THREE = require('./SG')._

function Matrix4() {
  THREE.Matrix4.call(this)

  // use 64bit floats for better precision in UTM zone
  this.elements = new Float64Array(16)
  this.identity()
}

Matrix4.prototype = Object.create(THREE.Matrix4.prototype)
Matrix4.prototype.constructor = Matrix4
