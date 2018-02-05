var should = require('chai/lib/chai').should();

describe('BackgroundView', function() {
  var backgroundView = null
  after(function() {
    backgroundView.destroy()
  })

  it('new BackgroundView', function() {
    backgroundView = new ARGON.BackgroundView
    should.exist(backgroundView)
    should.exist(backgroundView.element)
  })

  it('setRenderScript', function() {
    backgroundView.setRenderScript(function(port) {})
  })

  it('commit should return promise and fulfill when ready', function(){
    return backgroundView.commit()
  })

  it('commit with broken script should catch', function(done){
    backgroundView.setRenderScript(function(port) {blablabla(hi)})
    backgroundView.commit().catch(function() {
      done()
    })
  })

  it('renderScript should emit events', function(done){
    backgroundView.setRenderScript(function(port) {
      port.emit('done')
    })
    backgroundView.renderPort.on('done', function() {
      done()
    })
    backgroundView.commit()
  })

  it('renderScript should receive events', function(done){
    backgroundView.setRenderScript(function(port) {
      port.on('hello', function() {
        port.emit('done')
      })
    })
    backgroundView.renderPort.on('done', function() {
      done()
    })
    backgroundView.commit().then(function() {
      backgroundView.renderPort.emit('hello')
    })
  })

})
