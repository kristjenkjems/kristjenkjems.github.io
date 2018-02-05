var should = require('chai/lib/chai').should()

describe('Background', function() {

  var context = null
  beforeEach(function(){ context = new ARGON.Context })
  afterEach(function(){ if (context) context.destroy() })

  it('new Background', function() {
    var background = new ARGON.Background()
  })

  it('update should emit update event', function(done) {
    var timestamp = Date.now()
    var background = new ARGON.Background()
    background.on('update', function(event) {
      timestamp.should.equal(event.timestamp)
      done()
    })
    background.update(timestamp)
  })

  it('update should emit update event on context', function() {
    var timestamp = Date.now()
    var deferred = Promise.defer()
    context.on('update', function(event) {
      timestamp.should.equal(event.timestamp)
      deferred.resolve()
    })
    var background = new ARGON.Background()
    return context.requestBackground(background).then(function() {
      background.update(timestamp)
    }).then(deferred.promise)
  })

  it('register a custom background', function() {
    ARGON.Background.register('myCustomBackground', {
      init: function() {
        this.frame.pushState({test: 'sayYEAH'})
        this.update(Date.now())
      },
      renderScript: function(port){
        port.on('update', function(event) {
          if (event.state.test === 'sayYEAH')
            port.emit('YEAH')
        })
        port.on('change:something', function() {
          port.emit('something changed')
        })
      }
    })
    ARGON.Background.registry.should.have.property('myCustomBackground')
  })

  it('custom background test #1', function() {
    var myCustomBackground = new ARGON.Background('myCustomBackground')
    return context.requestBackground(myCustomBackground).then(function() {
      context.background.should.equal(myCustomBackground)
    })
  })

  it('custom background test #2', function() {
    var deferred = Promise.defer()
    context.backgroundView.renderPort.on('YEAH', function() {
      deferred.resolve()
    })
    var customBackground = new ARGON.Background('myCustomBackground')
    return context.requestBackground(customBackground).then(function() {
      context.background.should.equal(customBackground)
      customBackground.frame.pushState({test: 'sayYEAH'})
      customBackground.update(Date.now())
    }).then(deferred.promise)
  })

})
