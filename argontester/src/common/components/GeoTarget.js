var ARGON = require('../')

ARGON.Component.GeoTarget = class GeoTarget extends ARGON.Component {
  constructor(...args) {
    super(...args)

    // use identity orientation as default
    this.setOrientation([0,0,0])

    this.on('proxy', event => {
      var proxy = event.proxy
      var context = event.context
      var frame = new ARGON.ReferenceFrame()
      proxy.bindReferenceFrame(frame)

      var pushNextState = () => {
        if (this.options.location && this.options.orientation)
          frame.pushState({
            pose: {
              location: this.options.location,
              orientation: this.options.orientation
            }
          })
      }
      pushNextState()

      this.on('change:location', pushNextState)
      this.on('change:orientation', pushNextState)
    })
  }

  setLocation(location) {
    this.set('location', location)
  }

  setOrientation(transform) {
    this.set('orientation', transform)
  }

}
