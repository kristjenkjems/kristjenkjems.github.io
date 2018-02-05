'use strict';

var EventHandler = require('./events').EventHandler
var OptionsManager = require('famous/core/OptionsManager')


var urlParser  = document.createElement("a");

var Util = {
	cuid: require('cuid'),
	resolveURL: function (inURL) {
		urlParser.href = null
	  urlParser.href = inURL
	  return urlParser.href
	},
	parseURL: function (inURL) {
		urlParser.href = null
		urlParser.href = inURL
		return {
			href: urlParser.href,
			protocol: urlParser.protocol,
			hostname: urlParser.hostname,
			port: urlParser.port,
			pathname: urlParser.pathname,
			search: urlParser.search,
			hash: urlParser.hash,
			host: urlParser.host
		}
	},
	resolvePropertyPath: function (path, obj) {
    return [obj || self].concat(path.split('.')).reduce(function(prev, curr) {
      return prev ? prev[curr] : undefined
    })
	},
	dispatch: function() {
		var immediateChannel = new MessageChannel()
		var taskQueue = []
		immediateChannel.port1.onmessage = function () {
			if (taskQueue.length === 0) return
			var q = taskQueue
			taskQueue = []
			while (q.length > 0) {
				q.shift()()
			}
		}
		return function (task) {
			taskQueue.push(task)
			immediateChannel.port2.postMessage(0)
		}
	}(),
	// not good if code is mangled in minification
	// getFunctionName: function (f) {
	// 	var FUNCTION_NAME = /function\s+([^\s(]+)/;
	// 	var name = '';
	//
	// 	if (f instanceof Function) {
	// 		if (f.name) {
	// 			return f.name;
	// 		}
	//
	// 		var match = f.toString().match(FUNCTION_NAME);
	//
	// 		if (match) {
	// 			name = match[1];
	// 		}
	// 	} else if (f && f.constructor instanceof Function) {
	// 		name = Util.getFunctionName(f.constructor);
	// 	}
	//
	// 	return name;
	// },
	mixinEventHandler: function(obj) {
		obj._eventHandler = new EventHandler()
		EventHandler.setInputHandler(obj, obj._eventHandler)
		EventHandler.setOutputHandler(obj, obj._eventHandler)
		obj.emit = obj._eventHandler.emit.bind(obj._eventHandler)
	},
	mixinInputOutputEventHandlers: function(obj) {
		obj._eventInput = new EventHandler()
		obj._eventOutput = new EventHandler()
		EventHandler.setInputHandler(obj, obj._eventInput)
		EventHandler.setOutputHandler(obj, obj._eventOutput)
		obj._emit = obj._eventOutput.emit.bind(obj._eventOutput)
		obj._on = obj._eventInput.on.bind(obj._eventInput)
	},
	mixinStateManager: function(obj) { // make this obsolete
		obj.state = {}
		obj._stateManager = new OptionsManager(obj.state)
		obj._stateManager.pipe(obj._eventOutput)
		obj.set = obj._stateManager.set.bind(obj._stateManager)
		obj.get = obj._stateManager.get.bind(obj._stateManager)
		obj.getState = obj._stateManager.getOptions.bind(obj._stateManager)
		obj.setState = obj._stateManager.setOptions.bind(obj._stateManager)

		obj._stateManager.on('change', function(event) {
			obj._emit('change:'+event.id, event)
		})
	},
	mixinOptionsManager: function(obj) {
		obj.options = {}
		obj._optionsManager = new OptionsManager(obj.options)
		obj._optionsManager.pipe(obj._eventOutput)
		obj.set = obj._optionsManager.set.bind(obj._optionsManager)
		obj.get = obj._optionsManager.get.bind(obj._optionsManager)
		obj.getOptions = obj._optionsManager.getOptions.bind(obj._optionsManager)
		obj.setOptions = obj._optionsManager.setOptions.bind(obj._optionsManager)

		obj._optionsManager.on('change', function(event) {
			obj._emit('change:'+event.id, event)
		})
	}
}

module.exports = Util
