var ARGON = require('../')

class VuforiaImageTarget extends ARGON.Component {
  constructor(...args) {
    super(...args)
    this.on('proxy', _onProxy)
  }

  setName(name) {
    this.set('name', name)
  }
}

class VuforiaFrameMarkerTarget extends ARGON.Component {
  constructor(...args) {
    super(...args)
    this.on('proxy', _onProxy)
  }

  setMarkerID(name) {
    this.set('name', name)
  }

  setMarkerSize(size) {
    this.set('size', size)
  }
}

var _onProxy = event => {
  var proxy = event.proxy
  var context = event.context
  proxy.frame = new ARGON.SG.ReferenceFrame
  proxy.bindReferenceFrame(proxy.frame)
  ARGON.Device.frame.add(proxy.frame)
  Vuforia.componentProxies.push(proxy)
}

var Vuforia = {}
Vuforia.events = new ARGON.EventHandler
Vuforia.componentProxies = []

Vuforia.events.on('data', (event) => {
  var data = event.data
  Vuforia.componentProxies.forEach(component => {
    var targetName = component.options.name
    var targetTrackable = data.trackables[targetName]
    component.frame.pushState({
      pose: targetTrackable && targetTrackable.transform,
      timestamp: data.timestamp
    })
  })
})

Vuforia.emitData = function(data) {
  Vuforia.events.trigger('data', {data})
}

if (ARGON.isChannel) {

  ARGON.managerPort.on('System.Vuforia#data', function(event) {
    Vuforia.emitData(event.data)
  })

  Vuforia.loadAndActivateDataSet = function(dataSetURL, success, fail) {
    var url = ARGON.Util.resolveURL(dataSetURL)
    var requestId = ARGON.Util.cuid()
    ARGON.managerPort.trigger('Vuforia#loadDataSet', {
      url: url,
      userData: {requestId: requestId}
    })

    var loadResponse = function (event) {
      if (event.userData.reqeustId === requestId) {
        if (event.eventInfo.error && fail) return fail(event)
        success(event)
        // Vuforia.activateDataSet(dataSetURL, success, fail)
        ARGON.managerPort.removeListener('Vuforia#loadDataSetResponse', loadResponse)
      }
    }
    ARGON.managerPort.on('Vuforia#loadDataSetResponse', loadResponse)
  }

  Vuforia.loadDataSet = function(dataSetURL, success, fail) {
    var url = ARGON.Util.resolveURL(dataSetURL)
    var requestId = ARGON.Util.cuid()
    ARGON.managerPort.trigger('Vuforia#loadDataSet', {
      url: url,
      userData: {requestId: requestId}
    })
    var loadResponse = function(event) {
      if (event.userData.reqeustId === requestId) {
        if (event.eventInfo.error && fail) return fail(event)
        if (success) success(event)
        ARGON.managerPort.removeListener('Vuforia#loadDataSetResponse', loadResponse)
      }
    }
    ARGON.managerPort.on('Vuforia#loadDataSetResponse', loadResponse)
  }

  Vuforia.activateDataSet = function(dataSetURL, success, fail) {
    var url = ARGON.Util.resolveURL(dataSetURL)
    var requestId = ARGON.Util.cuid()
    ARGON.managerPort.trigger('Vuforia#activateDataSet', {
      url: url,
      userData: {requestId: requestId}
    })
    var activateResponse = function(event) {
      if (event.userData.reqeustId === requestId) {
        if (event.error && fail) return fail(event)
        if (success) success(event)
        ARGON.managerPort.removeListener('Vuforia#activateDataSetResponse', activateResponse)
      }
    }
    ARGON.managerPort.on('Vuforia#activateDataSetResponse', activateResponse)
  }

}

if (ARGON.isManager) {

  Vuforia.events.on('data', function(event) {
    ARGON.channelPort.trigger('System.Vuforia#data', event)
  })

  Vuforia.updateData = function(data) {
    Vuforia.emitData(data)
  }

  ARGON.channelPort.on('Vuforia#loadDataSet', function(event) {
    var requestId = event.userData.requestId
    var channel = ARGON.Channel.eventMap.get(event)
    VuforiaPlugin.loadDataSet(event)
    var loadResponse = function (event) {
      if (event.userData.requestId === requestId) {
        channel.trigger('Vuforia#loadDataSetResponse', event)
        ARGON.nativePort.removeListener('Vuforia#loadDataSetResponse', loadResponse)
      }
    }
    ARGON.nativePort.on('Vuforia#loadDataSetResponse', loadResponse)
  })

  ARGON.channelPort.on('Vuforia#activateDataSet', function(event) {
    var requestId = event.userData.requestId
    var channel = ARGON.Channel.eventMap.get(event)
    VuforiaPlugin.activateDataSet(event)
    var activateResponse = function(event) {
      if (event.userData.requestId === requestId) {
        channel.trigger('Vuforia#activateDataSetResponse', event)
        ARGON.nativePort.removeListener('Vuforia#activateDataSetResponse', activateResponse)
      }
    }
    ARGON.nativePort.on('Vuforia#activateDataSetResponse', activateResponse)
  })

}

// only register if current platform supports Vuforia
// if (navigator.userAgent.indexOf('Vuforia') !== -1 || ARGON.__enableVuforiaAPI) {
  ARGON.System.Vuforia = Vuforia
  ARGON.Vuforia = Vuforia
  ARGON.Component.VuforiaImageTarget = VuforiaImageTarget
  ARGON.Component.VuforiaFrameMarkerTarget = VuforiaFrameMarkerTarget
// }
