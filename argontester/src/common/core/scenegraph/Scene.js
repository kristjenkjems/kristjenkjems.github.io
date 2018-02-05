var ARGON = require('../ARGON')
var SG = require('./SG')
var THREE = SG._

import ReferenceFrame from './ReferenceFrame'

class Scene extends THREE.Scene {

  constructor(...args) {
    super()
  }

  update(context, force) {
    for ( var i = 0, l = this.children.length; i < l; i ++ ) {
      this.children[ i ].update( context, force || context.needsUpdate )
    }
    context.needsUpdate = false
  }

}

export default Scene
