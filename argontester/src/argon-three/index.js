var ARGON = module.exports = require('argon')
var THREE = require('external-three')
THREE.Bootstrap = require('external-threestrap')

if (!THREE) throw new Error("three.js must be loaded before argon-three.js")
if (!THREE.Bootstrap) throw new Error("threestrap.js must be loaded before argon-three.js")

require('./argon-plugin')

var _argonCorePlugins = ['bind', 'renderer', 'size', 'fill', 'time', 'scene', 'camera', 'render', /*'warmup',*/ 'argon']
THREE.Bootstrap.registerAlias('argon-core', _argonCorePlugins)

if (!THREE.CSS3DRenderer) require('./CSS3DRenderer')

/** These are deprecated. Remove later. **/
var _bind = require('./bindComponent')
ARGON.THREE = {
  MultiRenderer: require('./MultiRenderer'),
  objectToContextMap: new WeakMap,
  bind: function(context, component, object) {
    console.warn('ARGON.THREE.bind is deprecated. Use {threestrapObject}.argon.bindComponent(component, object) instead.')
    return _bind(context, component, object)
  }
}

/**
 * Deprecated. Remove later.
 */
ARGON.THREE.Bootstrap = function(context, options) {
  console.warn('ARGON.THREE.Bootstrap is deprecated. Use THREE.Bootstrap.createArgonOptions(context) with THREE.Bootstrap(options)')
  options = options || {}
  options.plugins = options.plugins || _argonCorePlugins
  options.element = context.element

  // options.size = options.size || {
  //   maxRenderWidth: 800
  // }

  options.renderer = options.renderer || {
    klass: THREE.MultiRenderer,
    parameters: {
      renderers: [THREE.WebGLRenderer, THREE.CSS3DRenderer], // stacked back to front
      parameters: [
        {
          alpha: true,
          depth: true,
          stencil: true,
          preserveDrawingBuffer: true,
          antialias: true
        },
        {} // CSS3DRenderer doesn't have any parameters
      ]
    }
  }

  var three = THREE.Bootstrap(options)

  if (!three.scene) throw "Expected three.scene object"
  if (!three.camera) throw "Expected three.camera object"

  ARGON.THREE.objectToContextMap.set(three.scene, context)
  ARGON.THREE.objectToContextMap.set(three.camera, context)

  return three
}

THREE.Bootstrap.createArgonOptions = function(context) {
  var options = {}
  options.plugins = options.plugins || _argonCorePlugins

  options.argon = {
    context: context || ARGON.immersiveContext
  }

  options.size = options.size || {
    maxRenderWidth: 800,
    maxRenderHeight: 800
  }

  options.element = options.argon.context.element

  options.renderer = options.renderer || {
    klass: THREE.MultiRenderer,
    parameters: {
      renderers: [THREE.WebGLRenderer, THREE.CSS3DRenderer], // stacked back to front
      parameters: [
        {
          alpha: true,
          depth: true,
          stencil: true,
          preserveDrawingBuffer: true,
          antialias: true,
          logarithmicDepthBuffer: true
        },
        {} // CSS3DRenderer doesn't have any parameters
      ]
    }
  }

  return options
}

THREE.MultiRenderer = THREE.MultiRenderer || require('./MultiRenderer')
