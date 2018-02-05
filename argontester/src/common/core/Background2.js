
import ARGON from './ARGON'
import Promise from 'bluebird'

class Background {
  constructor(args) {
    if (typeof args === 'string') args = {type: args}
    if (args && args.type && !Background.registry[args.type])
      throw new Error('Unregistered type: ' + args.type)
    if (args && args.remote && !args.id)
      throw new Error('Remote backgrounds should have an id')

    ARGON.Util.mixinInputOutputEventHandlers(this)
    ARGON.Util.mixinOptionsManager(this)

    this.id = (args && args.id) || ARGON.Util.cuid()
    this.type = (args && args.type)
    Background.collection[this.id] = this

    if (args && args.remote) {
      this.frame = ARGON.ReferenceFrame.subscribe(this.id)
      this.remote = true
    } else {
      this.frame = new ARGON.ReferenceFrame({id: this.id})
    }

    if (this.type && Background.registry[this.type]) {
      var config = Background.registry[this.type]
      this.cssResourcesPromise = getResources(config.cssDeps)
      this.jsResourcesPromise = getResources(config.jsDeps)
      this.renderScript = config.renderScript || function() {}
      if (config.options) this.setOptions(config.options)
      if (config._internal) {
        this.internal = true
        ARGON.ReferenceFrame.subscribe(this.id)
      }
      if (config.init instanceof Function && (!ARGON.isManager || this.internal))
        config.init.call(this,this)
    } else if (args) {
      this.cssResourcesPromise = Promise.resolve(args.cssResources || getResources(args.cssDeps))
      this.jsResourcesPromise = Promise.resolve(args.jsResources || getResources(args.jsDeps))
      this.renderScript = args.renderScript || function() {}
      if (args.init instanceof Function) args.init.call(this, this)
    }

    if (args && args.options) this.setOptions(args.options)

    this._optionsManager.on('change', (e) => {
      this.emitOptions()
    })
  }

  pushState(state) {
    if (ARGON.isManager || !ARGON.isConnected || !this.internal)
      this.frame.pushState(state)
  }

  update(timestamp=Date.now()) {
    if (ARGON.isManager || !ARGON.isConnected || !this.internal) {
      this.timestamp = timestamp
      this.emitUpdate()
    }
  }

  emitOptions() {
    this._emit('options', {options: this.options})
  }

  emitUpdate() {
    this._emit('update', {timestamp: this.timestamp || Date.now()})
  }

  getJSON() {
    var resourcePromises = [this.cssResourcesPromise, this.jsResourcesPromise]
    return Promise.all(resourcePromises).then( resources => {
      return {
        id: this.id,
        type: (this.internal) ? this.type : undefined,
        cssResources: resources[0],
        jsResources: resources[1],
        renderScript: this.renderScript.toString(),
        options: this.options
      }
    })
  }

  destroy() {
    delete Background.collection[this.id]
  }

}

export default Background

Background.collection = {}

Background.registry = {}

Background.register = function(type, options={}) {
  if (Background.registry[type]) {
    console.warn('Overwriting background type: '+type)
  }
  Background.registry[type] = options
}

Background.query = function(identifier) {
  var results = []
  for (var b in Background.collection) {
    if (b.type === identifier.type) results.push(b)
  }
  return results
}

Background.getOrCreate = function(options) {
  return Background.collection[options.id] || new Background(options)
}



Background.register('transparent', {
  init: function() {
    var displayFrame = ARGON.ReferenceFrame.getOrCreate('display')
    displayFrame.on('pushState', state => {
      this.pushState(state)
      this.update(state.timestamp)
    })
  },
  _internal: true
})


function getResources(deps=[]) {
  return Promise.resolve(basket.require.apply(basket, deps.map(dep => {
    return {url: dep, execute:false}
  }))).then(function() {
    return deps.map(dep => basket.get(dep).data)
  }).catch(function(e) {
    throw new Error('Unable to load resources: ' + e.toString())
  })
}
