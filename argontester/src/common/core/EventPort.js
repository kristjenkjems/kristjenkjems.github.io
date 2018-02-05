'use strict';

var EventMapper = require('./events').EventMapper
var EventHandler = require('./events').EventHandler
var EventFilter = require('./events').EventFilter

/**
 * An input & output event mapper/filter.
 * @private
 */
function EventPort(inputHandler, outputHandler) {
  this.input = this._eventInput = new EventHandler
  this.input.subscribe = false
  this.output = this._eventOutput = new EventHandler
  EventHandler.setInputHandler(this, this.input)
  EventHandler.setOutputHandler(this, this.output)
  this.emit = this.trigger
  if (inputHandler) this.input.pipe(inputHandler)
  if (outputHandler) this.output.pipe(outputHandler)
}

module.exports = EventPort
