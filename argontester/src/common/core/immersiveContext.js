import ARGON from './ARGON'
import Promise from 'bluebird'

var iC = new ARGON.Context()
export default iC

if (ARGON.isManager) {
  iC.on('backgroundChange', function() {
    ARGON.channelPort.trigger('setBackground', {id: iC.background.id})
  })
  iC.on('update', function(e) {
    ARGON.channelPort.trigger('update', {timestamp: e.timestamp})
  })
  ARGON.on('channelConnection', function(channel) {
    channel.port.trigger('setBackground', {id: iC.background.id})
  })

  window.addEventListener('orientationchange', function() {
    iC._emit('resize')
  })

  ARGON.channelPort.on('immersiveContext#update', function(e) {
    iC.background.frame.pushState(e.state)
    iC.background.update(e.timestamp)
  })
  ARGON.channelPort.on('immersiveContext#options', function(e) {
    for (var k in e.options)
      iC.background.set(k, e.options[k])
  })

  ARGON.channelRequestHandlers.background = function(channel, event, resolve, reject) {
    var background = ARGON.Background.getOrCreate(event)
    ARGON.immersiveContext.requestBackground(background).then(function() {
      resolve()
      channel.on('unload', function onUnload() {
        ARGON.immersiveContext.requestBackground(ARGON.deviceVideoBackground)
        channel.removeListener('unload', onUnload)
      })
    }).catch(function(e) {
      reject(e.toString())
    })
  }

  ARGON.channelRequestHandlers.releaseBackground = function(channel, event, resolve, reject) {
    resolve(ARGON.immersiveContext.requestBackground(ARGON.deviceVideoBackground))
  }


  ARGON.deviceVideoBackground = new ARGON.Background('device-video')
  iC._setBackground(ARGON.deviceVideoBackground)
}


if (ARGON.isChannel) {
  iC.requestBackground = function(background) {
    return background.getJSON().then( backgroundJSON => {
      return ARGON.managerPort.request('background', backgroundJSON).then( () => {
        return iC._setBackground(background, true)
      }).timeout(300).catch(Promise.TimeoutError, function(e) {
        return !ARGON.isConnected ? iC._setBackground(background) : null
      })
    })
  }
  iC.releaseBackground = function() {
    return ARGON.managerPort.request('releaseBackground', {id: this.background.id})
  }

  ARGON.managerPort.on('setBackground', function(e) {
    var background = ARGON.Background.collection[e.id]
    if (!background) background = new ARGON.Background({id: e.id, remote: true})
    iC._setBackground(background, true)
  })

  ARGON.managerPort.on('update', function(e) {
    if (iC.background.remote || iC.background.internal)
      iC.background._emit('update', e)
  })

  iC.on('update', function(e) {
    if (!iC.background.remote && !iC.background.internal)
      ARGON.managerPort.trigger('immersiveContext#update', e)
  })

  iC.on('options', function(e) {
    if (!iC.background.remote)
      ARGON.managerPort.trigger('immersiveContext#options', e)
  })
}
