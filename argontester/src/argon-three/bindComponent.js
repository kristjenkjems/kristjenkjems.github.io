
var THREE = require('external-three')

var _mat = new THREE.Matrix4
var _mat2 = new THREE.Matrix4

var bindObjectToContext = function(context, component, threeObject) {

  var proxy = component.getProxy(context)
  var hasTransform = false

  proxy.handler.on('update', function() {
    var state = proxy.getState()
    var finalTransform = proxy.getFinalTransform()

    if (state && state.fov && threeObject instanceof THREE.Camera) {
      threeObject.fov = state.fov
      threeObject.updateProjectionMatrix()
    }

    if (finalTransform) {
      if (threeObject.parent) {
        _mat.getInverse(threeObject.parent.matrixWorld)
        _mat.multiply(_mat2.fromArray(finalTransform))
        threeObject.matrix.copy(_mat)
        threeObject.matrixWorldNeedsUpdate = true
      } else {
        threeObject.matrix.fromArray(finalTransform)
        threeObject.matrixWorld.fromArray(finalTransform)
      }

      if (!hasTransform) {
        threeObject.dispatchEvent( { type: 'found' } )
        hasTransform = true
      }
    } else if (hasTransform) {
      threeObject.dispatchEvent( { type: 'lost' } )
      hasTransform = false
    }

  })

  threeObject.matrixAutoUpdate = false
}

module.exports = function bind (context, argonComponent, threeObject) {
  if (context instanceof ARGON.Component) {
    threeObject = argonComponent
    argonComponent = context
    context = ARGON.immersiveContext
  }
  if (!threeObject) threeObject = new THREE.Object3D()

  // bind the object the scene's context
  bindObjectToContext(context, argonComponent, threeObject)

  return threeObject
}
