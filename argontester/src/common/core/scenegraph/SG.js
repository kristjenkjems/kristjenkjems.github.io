var ARGON = require('../ARGON')
var SG = {} // scenegraph namespace
export default SG

SG._ = require('three')

SG.Transform = require('famous/core/Transform')
SG.Matrix = require('famous/math/Matrix')
SG.Quaternion = require('famous/math/Quaternion')
SG.Vector = require('famous/math/Vector')

SG.Location = require('./Location')
SG.MGRS = require('./MGRS')

SG.Scene = require('./Scene')
SG.ReferenceFrame = require('./ReferenceFrame')

// TODO: move everything below into a new module

// SG.sharedScene = new SG.Scene
// SG.sharedScene.name = 'SharedScene'
// SG.sharedFrames = {}
//
// if (ARGON.isManager) {
//   SG.emitSharedFrames = function() {
//     var framesJSON = []
//     SG.sharedScene.traverse(rf => framesJSON.push(rf.toJSON))
//     _emitFrames(framesJSON)
//   }
// }

// var _emitFrames = function(framesJSON) {
//   ARGON.channelPort.trigger('SG.ReferenceFrame#sharedFrames', {
//     frames: framesJSON, volatile: true
//   })
// }

// var _assignAliases = function(frame) {
//   SG.sharedFrames[frame.uuid] = frame
//   if (frame.name) SG.sharedFrames[frame.name] = frame
//   for (var i in frame.aliases) {
//     var alias = frame.aliases[i]
//     SG.sharedFrames[alias] = frame
//   }
// }
//
// SG.sharedScene.on('update', function(event) {
//   var framesJSON = event.frameUpdates.map(frame => {
//     _assignAliases(frame)
//     return frame.toJSON()
//   })
//   if (ARGON.isManager) {
//     _emitFrames(framesJSON)
//   }
// })

// if (ARGON.isChannel) {
//   ARGON.managerPort.on('SG.ReferenceFrame#sharedFrames', function(event) {
//     var framesJSON = event.frames
//     for (var i in framesJSON) {
//       var frameData = framesJSON[i]
//       var frame = SG.sharedFrames[frameData.name || frameData.uuid]
//
//       if (!frame) {
//         frame = new SG.ReferenceFrame
//         frame.name = frameData.name
//         frame.uuid = frameData.uuid
//       }
//
//       if (frameData.parent.name === 'SharedScene') {
//         if (frame.parent !== SG.sharedScene) SG.sharedScene.add(frame)
//       } else {
//         var parent = SG.sharedFrames[frameData.parent.uuid || frameData.parent.name]
//         if (frame.parent !== parent) parent.add(frame)
//       }
//
//       frame.pushState(frameData.state)
//     }
//   })
// }
