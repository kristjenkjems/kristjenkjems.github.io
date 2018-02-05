var ARGON = require('../')

ARGON.Background.register('device-video', {
  init: function() {
    var displayFrame = ARGON.ReferenceFrame.subscribe('display')
    displayFrame.on('pushState', state => {
      this.frame.pushState(state)
      this.update(state.timestamp)
    })
  },
  _internal: true
})
