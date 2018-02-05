var ARGON = require('../')

ARGON.Background.register('color', {
  init: function() {
    var displayFrame = ARGON.ReferenceFrame.subscribe('display')
    displayFrame.on('pushState', state => {
      this.frame.pushState(state)
      this.update(state.timestamp)
    })
  },
  renderScript: function() {
    port.on('options', function(e){
      document.body.style.backgroundColor = e.options.color
    })
  },
  options: {
    color: 'white'
  },
  _internal: true
})
