var ARGON = require('../')
var SG = ARGON.SG

ARGON.Component.CameraTarget = class CameraTarget extends ARGON.Component {

  constructor(...args) {
    super(...args)

    this.on('proxy', event => {
      var proxy = event.proxy
      var context = proxy.context
      proxy.bindReferenceFrame(context.background.frame)
      context.on('backgroundChange', event => {
        proxy.bindReferenceFrame(context.background.frame)
      })
    })
  }

}
