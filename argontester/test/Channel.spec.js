var should = require('chai/lib/chai').should()
var argonScript = require('raw!../dist/argon.js')
var argonHeaderContent = '<!DOCTYPE html><script>'+argonScript+'</script>'

describe('Channel', function() {
  var content = null
  var channel = null

  beforeEach(function() {
    content = []
    content.push(argonHeaderContent)
    channel = new ARGON.Channel
    channel.autoFlush = true
  })

  afterEach(function() {channel.destroy()})

  it('new Channel', function() {
    should.exist(channel)
    should.exist(channel.element)
  })

  it('empty argon channel', function(done) {
    content.push("I'm a Channel")
    var b = new Blob(content, { type: 'text/html' })
    channel.setURL(URL.createObjectURL(b))
    channel.on('connect', function() {
      done()
    })
  })

  it('receive message via channel port (manager port in channel)', function(done) {
    content.push("<script>")
    content.push("ARGON.managerPort.trigger('hello manager')")
    content.push("</script>")
    var b = new Blob([content.join('\n')], { type: 'text/html' })
    channel.setURL(URL.createObjectURL(b))
    channel.port.on('hello manager', function(e) {
      done()
    })
  })

  it('send/receive messages', function(done) {
    content.push("<script>")
    content.push("ARGON.managerPort.on('get it?', function(e) {")
    content.push("  if (e.it) ARGON.managerPort.trigger('got it.', {what: 'good!'})")
    content.push("})")
    content.push("</script>")
    var b = new Blob([content.join('\n')], { type: 'text/html' })
    channel.setURL(URL.createObjectURL(b))
    channel.on('connect', function() {
      channel.port.trigger('get it?', {it: true})
    })
    channel.port.on('got it.', function(e) {
      e.what.should.equal('good!')
      done()
    })
  })

  it('should respond to requests', function(done) {
    content.push("<script>")
    content.push("ARGON.managerPort.request('money', {ammount:1000}).then(function(money) {")
    content.push("  if (money === 1000) ARGON.managerPort.trigger('thanks!')")
    content.push("})")
    content.push("</script>")
    var b = new Blob([content.join('\n')], { type: 'text/html' })

    ARGON.channelRequestHandlers['money'] = function(channel, event, resolve, reject) {
      event.ammount.should.equal(1000)
      resolve(event.ammount)
    }

    channel.setURL(URL.createObjectURL(b))
    channel.port.on('thanks!', function(e) {
      done()
    })
  })

  it('channel should receive updates for subscribed reference frames', function(done) {
    content.push("<script>")
    content.push("var frame = ARGON.ReferenceFrame.subscribe('testFrame')")
    content.push("frame.on('pushState', function(state) { ")
    content.push("  if (state.test === 'hi') ARGON.managerPort.emit('done')")
    content.push("})")
    content.push("</script>")
    var b = new Blob([content.join('\n')], { type: 'text/html' })
    channel.setURL(URL.createObjectURL(b))
    channel.port.on('done', function() {
      done()
    })
    var testFrame = new ARGON.ReferenceFrame({id: 'testFrame'})
    channel.on('connect', function() {
      testFrame.pushState({test: 'hi'})
    })
  })


  it('request a background from channel', function(done) {
    content.push("<script>")
    content.push("var myBackground = new ARGON.Background('color')")
    content.push("ARGON.immersiveContext.requestBackground(myBackground).then(function(){")
    content.push("  if (ARGON.immersiveContext.background.type !== 'color') throw new Error('Assertion failed')")
    content.push("  ARGON.managerPort.emit('done')")
    content.push("})")
    content.push("</script>")
    var b = new Blob([content.join('\n')], { type: 'text/html' })
    channel.setURL(URL.createObjectURL(b))
    // override the background request handler
    var backgroundHandler = ARGON.channelRequestHandlers['background']
    ARGON.channelRequestHandlers['background'] = function(channel, event, resolve, reject) {
      event.type.should.equal('color')
      backgroundHandler(channel, event, resolve, reject)
      ARGON.channelRequestHandlers['background'] = backgroundHandler
    }
    channel.port.on('done', function() {
      done()
    })
  })

  it('options set on immersiveContext\'s background should be received in manager', function(done) {
    content.push("<script>")
    content.push("var myBackground = new ARGON.Background('color')")
    content.push("myBackground.setOptions({hello: 'world'})")
    content.push("ARGON.immersiveContext.requestBackground(myBackground)")
    content.push("</script>")
    var b = new Blob([content.join('\n')], { type: 'text/html' })
    channel.setURL(URL.createObjectURL(b))
    channel.port.on('immersiveContext#options', function(e) {
      if (e.options.hello === 'world')
        done()
    })
  })

})
