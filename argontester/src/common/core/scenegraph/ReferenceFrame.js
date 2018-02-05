
var ARGON = require('../ARGON')
var SG = require('./SG')
var THREE = SG._

class ReferenceFrame extends THREE.Object3D {

  constructor(options) {
    super()
    var _this = Object.create(this) // change back to `this` after removing THREE.Object3D baseclass

    if (options && typeof options !== 'object')
      throw new Error('options must be typeof "object"')

    Object.defineProperty( _this, 'id', {
      value: (options && options.id) || ARGON.Util.cuid()
    })
    _this.name = (options && options.name) || 'referenceFrame-' + _this.id
    _this.states = []

    ARGON.Util.mixinInputOutputEventHandlers(_this)

    if (ReferenceFrame.collection[_this.id])
      throw new Error('A ReferenceFrame with id ' + _this.id + ' already exists.')

    ReferenceFrame.collection[_this.id] = _this
    ARGON.scene.add(_this)

    return _this
  }

  /**
   * Push the next state
   *
   * state <Object> an object with at minimum the following properties:
   *   state.pose <Array.Number> (4x4 matrix)
   *   or
   *   state.pose.location <Location>
   *   state.pose.orientation <Array.Number> [phi, theta, psi] in radians
   *
   * The following properties are optional:
   * state.timestamp <Number> (Date.now() by default)
   */
  pushState(state) {
    var now = Date.now()
    var expiration = now - ReferenceFrame.OPTIONS.expires

    // make a deep clone
    var s = JSON.parse(JSON.stringify(state))
    s.timestamp = state.timestamp || now

    this.states.unshift(s)

    while (this.states.length > 0 &&
      this.states[this.states.length-1].timestamp < expiration &&
      this.states.length > ReferenceFrame.OPTIONS.maxStates) {
      this.states.pop()
    }

    this._emit('pushState', s)

    if (ARGON.isManager && ReferenceFrame.subscribers[this.id]) {
      ReferenceFrame.emitStateToSubscribers(this)
    }
  }

  getState(timestamp) {
    var state = null
    if (timestamp) state = this.states.find( state => {
      return state.timestamp <= timestamp
    })
    else state = this.states[0] // most recent state
    return state || {}
  }

  update(context, force) {
    var nextState = this.getState(context.timestamp)
    var currentState = context.frameStates.get(this)

    if ( currentState !== nextState || force === true ) {
      var pose = nextState.pose
      if (pose) {
        if (_isNormalPose(pose)) {
          _setTransformFromNormalPose.call(this, context, pose)
        } else if (_isGeoPose(pose)) {
          _setTransformFromGeoPose.call(this, context, pose)
        } else {
          console.error('Unknown pose format', pose)
          context.frameTransforms.set(this, null)
        }
      } else {
        context.frameTransforms.set(this, null)
      }
      force = true
      context.frameStates.set(this, nextState)
      context.updatedFrames.push(this)
    }
    // update children
    for ( var i = 0, l = this.children.length; i < l; i ++ ) {
      this.children[ i ].update( context, force )
    }
  }

  emitUpdate(context) {
    this._emit('update', {
      contextId: context.id
    })
  }

  /**
   * Returns the transform of this frame relative to the given reference frame,
   * if the transform is defined.
   * options.relativeTo default is parent reference frame
   */
  getTransform(context, options) {
    if (options && options.relativeTo) {
      return this.getTransformRelativeTo(context, options.relativeTo)
    } else {
      return this.getTransformRelativeTo(context, this.parent)
    }
  }

  getTransformRelativeTo(context, other) {
    if (this === other) return SG.Transform.translate(0,0,0)
    var thisTransform = context.frameTransforms.get(this)
    var otherTransform = context.frameTransforms.get(other)

    if (ARGON.scene === other)
      return thisTransform
    if (thisTransform && otherTransform)
      return SG.Transform.multiply(
        SG.Transform.inverse(otherTransform),
        thisTransform
      )
    return null
  }

  getGeoPose(context) {
    var currentState = this.currentState
    var pose = currentState.pose
    var originUTM = context.originLocaiton.utm

    if (pose.location && pose.orientation)
      return JSON.parse(JSON.stringify(pose))

    var thisTransform = context.frameTransforms.get(this)
    if (originUTM && thisTransform) {
      var spec = SG.Transform.interpret(thisTransform)

      var utm = {
        easting: originUTM.easting - spec.translate[0]/100,
        altitude: originUTM.altitude||0 + spec.translate[1]/100,
        northing: originUTM.northing + spec.translate[2]/100,
      }

      return {
        location: {utm: utm},
        orientation: spec.rotate
      }
    }

    var frame = this
    while (frame = frame.parent) {
      var frameState = frame.currentState
      var framePose = frameState.pose
      if (!framePose) break;
      if (framePose.location && framePose.orientation) {
        var frameUTM = framePose.location.utm
        var frameOrientation = framePose.orientation

        var frameTransform = context.frameTransforms.get(frame)
        var spec = SG.Transform.interpret(
          SG.Transform.multiply(
            SG.Transform.inverse(frameTransform),
            thisTransform
          )
        )

        var utm = {
          easting: frameUTM.easting - spec.translate[0]/100,
          altitude: frameUTM.altitude||0 + spec.translate[1]/100,
          northing: frameUTM.northing + spec.translate[2]/100,
        }

        var orientation = [
          frameOrientation[0] + spec.rotate[0],
          frameOrientation[1] + spec.rotate[1],
          frameOrientation[2] + spec.rotate[2]
        ]

        return {
          location: {utm: utm},
          orientation: orientation
        }
      }
    }

    return null
  }

}

ReferenceFrame.OPTIONS = {
  expires: 10000, // ms
  maxStates: 100
}

ReferenceFrame.collection = {}
ReferenceFrame.updatedFrames = []

export default ReferenceFrame

var _isNormalPose = function(pose) {
  return pose instanceof Array
}

var _isGeoPose = function(pose) {
  return pose.location && pose.orientation
}

var _setTransformFromNormalPose = function(context, pose) {
  var transform = null
  if (pose && this.parent && this.parent instanceof SG.Scene === false) {
    transform = SG.Transform.multiply(
      context.frameTransforms.get(this.parent),
      pose
    )
  } else if (pose) {
    transform = pose
  }
  context.frameTransforms.set(this, transform)
}

var _setTransformFromGeoPose = function(context, pose) {
  var transform = null
  if (pose.orientation.length !== 3)
    throw new Error('Expected pose.orientation to be an array of length 3')
  var position = context.getPositionForLocation(pose.location)
  if (position) {
    transform = SG.Transform.thenMove(
      SG.Transform.rotate.apply(null, pose.orientation),
      position
    )
  }
  context.frameTransforms.set(this, transform)
}

ReferenceFrame.emitUpdates = function() {
  var frames = ReferenceFrame.updatedFrames
  for (var i=0; i < frames.length; i++) {
    var frame = frames[i]
    frame.emitStateUpdate()
  }
  ReferenceFrame.updatedFrames = []
}

if (ARGON.isManager) {
  let subscribers = ReferenceFrame.subscribers = {}

  ARGON.channelPort.on('ReferenceFrame#subscribe', function(event) {
    var requestedId = event.id
    var frame = ReferenceFrame.collection[requestedId]
    var frameId = (frame && frame.id) || requestedId
    var channel = ARGON.Channel.eventMap.get(event)
    var subscriptions = subscribers[frameId] = subscribers[frameId] || {}
    var subscriptionId = channel.id+'.'+requestedId
    if (!subscriptions[subscriptionId]) {
      subscriptions[subscriptionId] = {channel: channel, requestedId: requestedId}
      if (frame) {
        var json = ReferenceFrame.toJSON(frame)
        json.id = requestedId
        channel.port.trigger('ReferenceFrame#update', json)
      }
      var onCleanUp = function() {
        delete subscriptions[subscriptionId]
        channel.removeListener('cleanUp', onCleanUp)
      }
      channel.on('cleanUp', onCleanUp)
    }
  })

  ReferenceFrame.emitStateToSubscribers = function(frame) {
    var referenceFrameJSON = null
    var subscriptions = subscribers[frame.id]
    for (var subscriberId in subscriptions) {
      var subscription = subscriptions[subscriberId]
      var channel = subscription.channel
      referenceFrameJSON = ReferenceFrame.toJSON(frame)
      referenceFrameJSON.id = subscription.requestedId
      channel.port.trigger('ReferenceFrame#update', referenceFrameJSON)
    }
  }

  ReferenceFrame.toJSON = function(frame) {
    return {
      id: frame.id,
      state: frame.states[0],
      parentID: frame.parent && frame.parent !== ARGON.scene ?
        frame.parent.id : null
    }
  }
}

ReferenceFrame.get = function(id) {
  return ReferenceFrame.collection[id]
}

ReferenceFrame.getOrCreate = function(id) {
  var frame = null
  if (id) frame = ReferenceFrame.collection[id]
    if (!frame) {
      frame = new ReferenceFrame({id: id})
    }
  return frame
}

if (ARGON.isManager) {
  ReferenceFrame.subscribe = ReferenceFrame.getOrCreate
}


if (ARGON.isChannel) {

  ARGON.managerPort.on('ReferenceFrame#update', function(event) {
    var frame = ReferenceFrame.get(event.id)
    if (!frame) {
      // TODO: Fix this (security bug).
      // The problem is that channel instances don't change between iframe loads
      // So, any events we were sending to the previous channel may
      // slip into the next one if we arent careful.
      console.warn('Receiving data for unsubscribed reference frame: ' + event.id)
      return
    }
    if (event.state) frame.pushState(event.state)
    if (event.parentID) {
      var parent = ReferenceFrame.get(event.parentID)
      if (!parent.subscribed) ReferenceFrame.subscribe(event.parentID)
      if (frame.parent !== parent)
        parent.add(frame)
    }
  })

  ReferenceFrame.subscribe = function(frameID) {
    if (frameID instanceof ReferenceFrame) frameID = frameID.id
      var frame = ReferenceFrame.getOrCreate(frameID)
    if (!frame.subscribed) {
      ARGON.managerPort.trigger('ReferenceFrame#subscribe', {id: frameID})
      frame.subscribed = true
    }
    return frame
  }
}
