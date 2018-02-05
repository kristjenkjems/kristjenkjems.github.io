var should = require('chai/lib/chai').should()

describe('ReferenceFrame', function() {
  var referenceFrame = null

  it('new ReferenceFrame', function() {
    referenceFrame = new ARGON.ReferenceFrame({name: 'test'})
    should.exist(referenceFrame)
    should.exist(referenceFrame.id)
    referenceFrame.name.should.equal('test')
  })

  it('pushState should emit pushState event', function(done) {
    referenceFrame.on('pushState', function(state){
      state.test.should.equal('hi')
      done()
    })
    referenceFrame.pushState({test: 'hi'})
  })

  it('update should emit update event', function(done) {
    referenceFrame.on('pushState', function(state){
      state.test.should.equal('hi')
      done()
    })
    referenceFrame.pushState({test: 'hi'})
  })

})
