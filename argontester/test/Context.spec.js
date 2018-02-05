var should = require('chai/lib/chai').should()

describe('Context', function() {

  var context = null
  beforeEach(function(){ context = new ARGON.Context })
  afterEach(function(){ context.destroy() })

  it('new Context', function() {
    should.exist(context)
  })

  it('request a specific background', function() {
    var background = new ARGON.Background()
    return context.requestBackground(background).then(function() {
      background.should.equal(context.background)
    })
  })


})
