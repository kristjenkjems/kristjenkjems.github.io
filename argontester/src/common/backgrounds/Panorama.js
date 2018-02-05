var ARGON = require('../')

// temporarily expose (internal) THREE so (internal) threestrap can find it
// TODO: it would be nice if we didn't have to rely on the entire three.js
// library just to render panoramas...
// var THREE = window.__ARGON_THREE = ARGON.SG._
// require('imports?THREE=>window.__ARGON_THREE!threestrap')
// delete window.__ARGON_THREE

class PanoramaBackground extends ARGON.Background {

  constructor(...args) {
    super(...args)
  }

}

PanoramaBackground.className = 'Background.Panorama'
ARGON.Background.Panorama = PanoramaBackground

PanoramaBackground.Controller = class Controller extends ARGON.Background.Controller {

  constructor(...args) {
    super(...args)

    var three = THREE.Bootstrap({
      element: this.element
    })

    var blankCanvas = document.createElement( 'canvas' );
    blankCanvas.width = 256;
    blankCanvas.height = 256;

    var texture = new THREE.Texture( blankCanvas );
    texture.needsUpdate = true;

    var sphereGeometry = new THREE.SphereGeometry( 50, 60, 40 )
    sphereGeometry.applyMatrix( new THREE.Matrix4().makeScale( -1, 1, 1 ) )
    var sphereMaterial = new THREE.MeshBasicMaterial({map: texture})

    var sphereMesh = new THREE.Mesh( sphereGeometry, sphereMaterial )
    three.scene.add(sphereMesh)

    this.on('resize', () => {
      three.plugins.size.queue(null, three)
    })

    three.camera.matrixAutoUpdate = false
    this.cameraFrame.on('stateUpdate', function(event) {
      three.camera.fov = event.state.fov
      three.camera.updateProjectionMatrix()
      three.camera.matrix.fromArray(event.finalTransform)
      three.camera.matrix.setPosition({x:0,y:0,z:0})
      three.camera.matrixWorldNeedsUpdate = true
    })

    this.on('change:source', event => {
      if (this.state.source.equirectangular) {
        _loadEquirectangular()
      } else if (this.state.source.skybox) {
        _loadSkybox()
      }
    })

    var _loadEquirectangular = () => {
      var equirectangular = this.state.source.equirectangular
      var equirectnagularFullURL = ARGON.Util.resolveURL(equirectangular)
      sphereMaterial.map = THREE.ImageUtils.loadTexture( equirectnagularFullURL,
        undefined, function() {
        sphereMaterial.needsUpdate = true
      })
    }

  }
}

PanoramaBackground.Controller.className = 'Background.Panorama.Controller'
