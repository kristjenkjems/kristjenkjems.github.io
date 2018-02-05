var EventEmitter = require('famous/core/EventEmitter')
var EventHandler = require('famous/core/EventHandler')
var EventArbiter = require('famous/events/EventArbiter')
var EventFilter = require('famous/events/EventFilter')
var EventMapper = require('famous/events/EventMapper')

// re-export Famous event classes

module.exports =  { EventEmitter: EventEmitter
                  , EventHandler: EventHandler
                  , EventArbiter: EventArbiter
                  , EventFilter: EventFilter
                  , EventMapper: EventMapper
                  }
