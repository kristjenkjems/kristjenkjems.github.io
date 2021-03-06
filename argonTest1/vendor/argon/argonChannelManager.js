(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["ARGON"] = factory();
	else
		root["ARGON"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(57);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var global = {};

	(function(global){var to5Runtime=global.to5Runtime={};to5Runtime.inherits=function(child,parent){child.prototype=Object.create(parent&&parent.prototype,{constructor:{value:child,enumerable:false,writable:true,configurable:true}});if(parent)child.__proto__=parent};to5Runtime.defaults=function(obj,defaults){for(var key in defaults){if(obj[key]===undefined){obj[key]=defaults[key]}}return obj};to5Runtime.prototypeProperties=function(child,staticProps,instanceProps){if(staticProps)Object.defineProperties(child,staticProps);if(instanceProps)Object.defineProperties(child.prototype,instanceProps)};to5Runtime.applyConstructor=function(Constructor,args){var instance=Object.create(Constructor.prototype);var result=Constructor.apply(instance,args);return result!=null&&(typeof result=="object"||typeof result=="function")?result:instance};to5Runtime.taggedTemplateLiteral=function(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))};to5Runtime.interopRequire=function(obj){return obj&&(obj["default"]||obj)};to5Runtime.toArray=function(arr){return Array.isArray(arr)?arr:Array.from(arr)};to5Runtime.slicedToArray=function(arr,i){if(Array.isArray(arr)){return arr}else{var _arr=[];for(var _iterator=arr[Symbol.iterator](),_step;!(_step=_iterator.next()).done;){_arr.push(_step.value);if(i&&_arr.length===i)break}return _arr}};to5Runtime.objectWithoutProperties=function(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i]}return target};to5Runtime.hasOwn=Object.prototype.hasOwnProperty;to5Runtime.slice=Array.prototype.slice;to5Runtime.defineProperty=function(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}})(typeof global==="undefined"?self:global);

	/*** EXPORTS FROM exports-loader ***/
	module.exports = global.to5Runtime

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * @module ARGON
	 */
	var ARGON = module.exports = {};

	ARGON._basketScript = __webpack_require__(55);
	new Function(ARGON._basketScript).call(window);

	// var THREE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r69/three.min.js'
	// ARGON._THREE = basket.require(THREE_URL)

	var events = __webpack_require__(5);
	ARGON.EventHandler = events.EventHandler;
	ARGON.EventMapper = events.EventMapper;
	ARGON.EventFilter = events.EventFilter;
	ARGON.EventPort = __webpack_require__(45);
	ARGON.Util = __webpack_require__(48);
	ARGON.Util.mixinEventHandler(ARGON);

	/*@const*/
	Object.defineProperty(ARGON, "isTop", { value: window.top === window.self });
	/*@const*/
	Object.defineProperty(ARGON, "isArgonAppEnvironment", {
	  value: navigator.userAgent.indexOf("Argon") !== -1
	});
	/*@const*/
	Object.defineProperty(ARGON, "isMobileWebEnvironment", {
	  value: navigator.userAgent.indexOf("Mobile") !== -1
	});
	/*@const*/
	Object.defineProperty(ARGON, "isDesktopWebEnvironment", {
	  value: !ARGON.isMobileWebEnvironment
	});

	ARGON._setup = function (options) {
	  options = options || {};

	  /*@const*/
	  Object.defineProperty(ARGON, "isChannelManager", { value: !!options.channelManager });
	  /*@const*/
	  Object.defineProperty(ARGON, "isChannel", { value: !!!options.channelManager });

	  ARGON.SG = __webpack_require__(7);
	  ARGON.scene = new ARGON.SG.Scene();

	  ARGON.ManagedObject = __webpack_require__(46);
	  ARGON.Component = __webpack_require__(42);
	  ARGON.Background = __webpack_require__(40);
	  ARGON.Background2 = __webpack_require__(41);
	  ARGON.Context = __webpack_require__(43);
	  ARGON.Sensor = __webpack_require__(47);
	  ARGON.Device = __webpack_require__(44);
	  ARGON.System = {};

	  ARGON.filters = __webpack_require__(49);

	  delete ARGON._setup;
	  ARGON.emit("setup");

	  return ARGON;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ARGON = module.exports = __webpack_require__(2);

	ARGON.on("setup", function () {
	  __webpack_require__(36);
	  __webpack_require__(34);
	  __webpack_require__(35);

	  __webpack_require__(37);
	  __webpack_require__(38);
	  __webpack_require__(39);
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var EventEmitter = __webpack_require__(9);

	    /**
	     * EventHandler forwards received events to a set of provided callback functions.
	     * It allows events to be captured, processed, and optionally piped through to other event handlers.
	     *
	     * @class EventHandler
	     * @extends EventEmitter
	     * @constructor
	     */
	    function EventHandler() {
	        EventEmitter.apply(this, arguments);

	        this.downstream = []; // downstream event handlers
	        this.downstreamFn = []; // downstream functions

	        this.upstream = []; // upstream event handlers
	        this.upstreamListeners = {}; // upstream listeners
	    }
	    EventHandler.prototype = Object.create(EventEmitter.prototype);
	    EventHandler.prototype.constructor = EventHandler;

	    /**
	     * Assign an event handler to receive an object's input events.
	     *
	     * @method setInputHandler
	     * @static
	     *
	     * @param {Object} object object to mix trigger, subscribe, and unsubscribe functions into
	     * @param {EventHandler} handler assigned event handler
	     */
	    EventHandler.setInputHandler = function setInputHandler(object, handler) {
	        object.trigger = handler.trigger.bind(handler);
	        if (handler.subscribe && handler.unsubscribe) {
	            object.subscribe = handler.subscribe.bind(handler);
	            object.unsubscribe = handler.unsubscribe.bind(handler);
	        }
	    };

	    /**
	     * Assign an event handler to receive an object's output events.
	     *
	     * @method setOutputHandler
	     * @static
	     *
	     * @param {Object} object object to mix pipe, unpipe, on, addListener, and removeListener functions into
	     * @param {EventHandler} handler assigned event handler
	     */
	    EventHandler.setOutputHandler = function setOutputHandler(object, handler) {
	        if (handler instanceof EventHandler) handler.bindThis(object);
	        object.pipe = handler.pipe.bind(handler);
	        object.unpipe = handler.unpipe.bind(handler);
	        object.on = handler.on.bind(handler);
	        object.addListener = object.on;
	        object.removeListener = handler.removeListener.bind(handler);
	    };

	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.emit = function emit(type, event) {
	        EventEmitter.prototype.emit.apply(this, arguments);
	        var i = 0;
	        for (i = 0; i < this.downstream.length; i++) {
	            if (this.downstream[i].trigger) this.downstream[i].trigger(type, event);
	        }
	        for (i = 0; i < this.downstreamFn.length; i++) {
	            this.downstreamFn[i](type, event);
	        }
	        return this;
	    };

	    /**
	     * Alias for emit
	     * @method addListener
	     */
	    EventHandler.prototype.trigger = EventHandler.prototype.emit;

	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    EventHandler.prototype.pipe = function pipe(target) {
	        if (target.subscribe instanceof Function) return target.subscribe(this);

	        var downstreamCtx = (target instanceof Function) ? this.downstreamFn : this.downstream;
	        var index = downstreamCtx.indexOf(target);
	        if (index < 0) downstreamCtx.push(target);

	        if (target instanceof Function) target('pipe', null);
	        else if (target.trigger) target.trigger('pipe', null);

	        return target;
	    };

	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe".
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    EventHandler.prototype.unpipe = function unpipe(target) {
	        if (target.unsubscribe instanceof Function) return target.unsubscribe(this);

	        var downstreamCtx = (target instanceof Function) ? this.downstreamFn : this.downstream;
	        var index = downstreamCtx.indexOf(target);
	        if (index >= 0) {
	            downstreamCtx.splice(index, 1);
	            if (target instanceof Function) target('unpipe', null);
	            else if (target.trigger) target.trigger('unpipe', null);
	            return target;
	        }
	        else return false;
	    };

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.on = function on(type, handler) {
	        EventEmitter.prototype.on.apply(this, arguments);
	        if (!(type in this.upstreamListeners)) {
	            var upstreamListener = this.trigger.bind(this, type);
	            this.upstreamListeners[type] = upstreamListener;
	            for (var i = 0; i < this.upstream.length; i++) {
	                this.upstream[i].on(type, upstreamListener);
	            }
	        }
	        return this;
	    };

	    /**
	     * Alias for "on"
	     * @method addListener
	     */
	    EventHandler.prototype.addListener = EventHandler.prototype.on;

	    /**
	     * Listen for events from an upstream event handler.
	     *
	     * @method subscribe
	     *
	     * @param {EventEmitter} source source emitter object
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.subscribe = function subscribe(source) {
	        var index = this.upstream.indexOf(source);
	        if (index < 0) {
	            this.upstream.push(source);
	            for (var type in this.upstreamListeners) {
	                source.on(type, this.upstreamListeners[type]);
	            }
	        }
	        return this;
	    };

	    /**
	     * Stop listening to events from an upstream event handler.
	     *
	     * @method unsubscribe
	     *
	     * @param {EventEmitter} source source emitter object
	     * @return {EventHandler} this
	     */
	    EventHandler.prototype.unsubscribe = function unsubscribe(source) {
	        var index = this.upstream.indexOf(source);
	        if (index >= 0) {
	            this.upstream.splice(index, 1);
	            for (var type in this.upstreamListeners) {
	                source.removeListener(type, this.upstreamListeners[type]);
	            }
	        }
	        return this;
	    };

	    module.exports = EventHandler;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var EventEmitter = __webpack_require__(9);
	var EventHandler = __webpack_require__(4);
	var EventArbiter = __webpack_require__(23);
	var EventFilter = __webpack_require__(24);
	var EventMapper = __webpack_require__(25);

	// re-export Famous event classes

	module.exports = { EventEmitter: EventEmitter,
	  EventHandler: EventHandler,
	  EventArbiter: EventArbiter,
	  EventFilter: EventFilter,
	  EventMapper: EventMapper
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     *  A high-performance static matrix math library used to calculate
	     *    affine transforms on surfaces and other renderables.
	     *    Famo.us uses 4x4 matrices corresponding directly to
	     *    WebKit matrices (column-major order).
	     *
	     *    The internal "type" of a Matrix is a 16-long float array in
	     *    row-major order, with:
	     *    elements [0],[1],[2],[4],[5],[6],[8],[9],[10] forming the 3x3
	     *          transformation matrix;
	     *    elements [12], [13], [14] corresponding to the t_x, t_y, t_z
	     *           translation;
	     *    elements [3], [7], [11] set to 0;
	     *    element [15] set to 1.
	     *    All methods are static.
	     *
	     * @static
	     *
	     * @class Transform
	     */
	    var Transform = {};

	    // WARNING: these matrices correspond to WebKit matrices, which are
	    //    transposed from their math counterparts
	    Transform.precision = 1e-6;
	    Transform.identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

	    /**
	     * Multiply two or more Transform matrix types to return a Transform matrix.
	     *
	     * @method multiply4x4
	     * @static
	     * @param {Transform} a left Transform
	     * @param {Transform} b right Transform
	     * @return {Transform}
	     */
	    Transform.multiply4x4 = function multiply4x4(a, b) {
	        return [
	            a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3],
	            a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3],
	            a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3],
	            a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3],
	            a[0] * b[4] + a[4] * b[5] + a[8] * b[6] + a[12] * b[7],
	            a[1] * b[4] + a[5] * b[5] + a[9] * b[6] + a[13] * b[7],
	            a[2] * b[4] + a[6] * b[5] + a[10] * b[6] + a[14] * b[7],
	            a[3] * b[4] + a[7] * b[5] + a[11] * b[6] + a[15] * b[7],
	            a[0] * b[8] + a[4] * b[9] + a[8] * b[10] + a[12] * b[11],
	            a[1] * b[8] + a[5] * b[9] + a[9] * b[10] + a[13] * b[11],
	            a[2] * b[8] + a[6] * b[9] + a[10] * b[10] + a[14] * b[11],
	            a[3] * b[8] + a[7] * b[9] + a[11] * b[10] + a[15] * b[11],
	            a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12] * b[15],
	            a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13] * b[15],
	            a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14] * b[15],
	            a[3] * b[12] + a[7] * b[13] + a[11] * b[14] + a[15] * b[15]
	        ];
	    };

	    /**
	     * Fast-multiply two or more Transform matrix types to return a
	     *    Matrix, assuming bottom row on each is [0 0 0 1].
	     *
	     * @method multiply
	     * @static
	     * @param {Transform} a left Transform
	     * @param {Transform} b right Transform
	     * @return {Transform}
	     */
	    Transform.multiply = function multiply(a, b) {
	        return [
	            a[0] * b[0] + a[4] * b[1] + a[8] * b[2],
	            a[1] * b[0] + a[5] * b[1] + a[9] * b[2],
	            a[2] * b[0] + a[6] * b[1] + a[10] * b[2],
	            0,
	            a[0] * b[4] + a[4] * b[5] + a[8] * b[6],
	            a[1] * b[4] + a[5] * b[5] + a[9] * b[6],
	            a[2] * b[4] + a[6] * b[5] + a[10] * b[6],
	            0,
	            a[0] * b[8] + a[4] * b[9] + a[8] * b[10],
	            a[1] * b[8] + a[5] * b[9] + a[9] * b[10],
	            a[2] * b[8] + a[6] * b[9] + a[10] * b[10],
	            0,
	            a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12],
	            a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13],
	            a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14],
	            1
	        ];
	    };

	    /**
	     * Return a Transform translated by additional amounts in each
	     *    dimension. This is equivalent to the result of
	     *
	     *    Transform.multiply(Matrix.translate(t[0], t[1], t[2]), m).
	     *
	     * @method thenMove
	     * @static
	     * @param {Transform} m a Transform
	     * @param {Array.Number} t floats delta vector of length 2 or 3
	     * @return {Transform}
	     */
	    Transform.thenMove = function thenMove(m, t) {
	        if (!t[2]) t[2] = 0;
	        return [m[0], m[1], m[2], 0, m[4], m[5], m[6], 0, m[8], m[9], m[10], 0, m[12] + t[0], m[13] + t[1], m[14] + t[2], 1];
	    };

	    /**
	     * Return a Transform atrix which represents the result of a transform matrix
	     *    applied after a move. This is faster than the equivalent multiply.
	     *    This is equivalent to the result of:
	     *
	     *    Transform.multiply(m, Transform.translate(t[0], t[1], t[2])).
	     *
	     * @method moveThen
	     * @static
	     * @param {Array.Number} v vector representing initial movement
	     * @param {Transform} m matrix to apply afterwards
	     * @return {Transform} the resulting matrix
	     */
	    Transform.moveThen = function moveThen(v, m) {
	        if (!v[2]) v[2] = 0;
	        var t0 = v[0] * m[0] + v[1] * m[4] + v[2] * m[8];
	        var t1 = v[0] * m[1] + v[1] * m[5] + v[2] * m[9];
	        var t2 = v[0] * m[2] + v[1] * m[6] + v[2] * m[10];
	        return Transform.thenMove(m, [t0, t1, t2]);
	    };

	    /**
	     * Return a Transform which represents a translation by specified
	     *    amounts in each dimension.
	     *
	     * @method translate
	     * @static
	     * @param {Number} x x translation
	     * @param {Number} y y translation
	     * @param {Number} z z translation
	     * @return {Transform}
	     */
	    Transform.translate = function translate(x, y, z) {
	        if (z === undefined) z = 0;
	        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
	    };

	    /**
	     * Return a Transform scaled by a vector in each
	     *    dimension. This is a more performant equivalent to the result of
	     *
	     *    Transform.multiply(Transform.scale(s[0], s[1], s[2]), m).
	     *
	     * @method thenScale
	     * @static
	     * @param {Transform} m a matrix
	     * @param {Array.Number} s delta vector (array of floats &&
	     *    array.length == 3)
	     * @return {Transform}
	     */
	    Transform.thenScale = function thenScale(m, s) {
	        return [
	            s[0] * m[0], s[1] * m[1], s[2] * m[2], 0,
	            s[0] * m[4], s[1] * m[5], s[2] * m[6], 0,
	            s[0] * m[8], s[1] * m[9], s[2] * m[10], 0,
	            s[0] * m[12], s[1] * m[13], s[2] * m[14], 1
	        ];
	    };

	    /**
	     * Return a Transform which represents a scale by specified amounts
	     *    in each dimension.
	     *
	     * @method scale
	     * @static
	     * @param {Number} x x scale factor
	     * @param {Number} y y scale factor
	     * @param {Number} z z scale factor
	     * @return {Transform}
	     */
	    Transform.scale = function scale(x, y, z) {
	        if (z === undefined) z = 1;
	        return [x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform which represents a clockwise
	     *    rotation around the x axis.
	     *
	     * @method rotateX
	     * @static
	     * @param {Number} theta radians
	     * @return {Transform}
	     */
	    Transform.rotateX = function rotateX(theta) {
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        return [1, 0, 0, 0, 0, cosTheta, sinTheta, 0, 0, -sinTheta, cosTheta, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform which represents a clockwise
	     *    rotation around the y axis.
	     *
	     * @method rotateY
	     * @static
	     * @param {Number} theta radians
	     * @return {Transform}
	     */
	    Transform.rotateY = function rotateY(theta) {
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        return [cosTheta, 0, -sinTheta, 0, 0, 1, 0, 0, sinTheta, 0, cosTheta, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform which represents a clockwise
	     *    rotation around the z axis.
	     *
	     * @method rotateZ
	     * @static
	     * @param {Number} theta radians
	     * @return {Transform}
	     */
	    Transform.rotateZ = function rotateZ(theta) {
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        return [cosTheta, sinTheta, 0, 0, -sinTheta, cosTheta, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform which represents composed clockwise
	     *    rotations along each of the axes. Equivalent to the result of
	     *    Matrix.multiply(rotateX(phi), rotateY(theta), rotateZ(psi)).
	     *
	     * @method rotate
	     * @static
	     * @param {Number} phi radians to rotate about the positive x axis
	     * @param {Number} theta radians to rotate about the positive y axis
	     * @param {Number} psi radians to rotate about the positive z axis
	     * @return {Transform}
	     */
	    Transform.rotate = function rotate(phi, theta, psi) {
	        var cosPhi = Math.cos(phi);
	        var sinPhi = Math.sin(phi);
	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);
	        var cosPsi = Math.cos(psi);
	        var sinPsi = Math.sin(psi);
	        var result = [
	            cosTheta * cosPsi,
	            cosPhi * sinPsi + sinPhi * sinTheta * cosPsi,
	            sinPhi * sinPsi - cosPhi * sinTheta * cosPsi,
	            0,
	            -cosTheta * sinPsi,
	            cosPhi * cosPsi - sinPhi * sinTheta * sinPsi,
	            sinPhi * cosPsi + cosPhi * sinTheta * sinPsi,
	            0,
	            sinTheta,
	            -sinPhi * cosTheta,
	            cosPhi * cosTheta,
	            0,
	            0, 0, 0, 1
	        ];
	        return result;
	    };

	    /**
	     * Return a Transform which represents an axis-angle rotation
	     *
	     * @method rotateAxis
	     * @static
	     * @param {Array.Number} v unit vector representing the axis to rotate about
	     * @param {Number} theta radians to rotate clockwise about the axis
	     * @return {Transform}
	     */
	    Transform.rotateAxis = function rotateAxis(v, theta) {
	        var sinTheta = Math.sin(theta);
	        var cosTheta = Math.cos(theta);
	        var verTheta = 1 - cosTheta; // versine of theta

	        var xxV = v[0] * v[0] * verTheta;
	        var xyV = v[0] * v[1] * verTheta;
	        var xzV = v[0] * v[2] * verTheta;
	        var yyV = v[1] * v[1] * verTheta;
	        var yzV = v[1] * v[2] * verTheta;
	        var zzV = v[2] * v[2] * verTheta;
	        var xs = v[0] * sinTheta;
	        var ys = v[1] * sinTheta;
	        var zs = v[2] * sinTheta;

	        var result = [
	            xxV + cosTheta, xyV + zs, xzV - ys, 0,
	            xyV - zs, yyV + cosTheta, yzV + xs, 0,
	            xzV + ys, yzV - xs, zzV + cosTheta, 0,
	            0, 0, 0, 1
	        ];
	        return result;
	    };

	    /**
	     * Return a Transform which represents a transform matrix applied about
	     * a separate origin point.
	     *
	     * @method aboutOrigin
	     * @static
	     * @param {Array.Number} v origin point to apply matrix
	     * @param {Transform} m matrix to apply
	     * @return {Transform}
	     */
	    Transform.aboutOrigin = function aboutOrigin(v, m) {
	        var t0 = v[0] - (v[0] * m[0] + v[1] * m[4] + v[2] * m[8]);
	        var t1 = v[1] - (v[0] * m[1] + v[1] * m[5] + v[2] * m[9]);
	        var t2 = v[2] - (v[0] * m[2] + v[1] * m[6] + v[2] * m[10]);
	        return Transform.thenMove(m, [t0, t1, t2]);
	    };

	    /**
	     * Return a Transform representation of a skew transformation
	     *
	     * @method skew
	     * @static
	     * @param {Number} phi scale factor skew in the x axis
	     * @param {Number} theta scale factor skew in the y axis
	     * @param {Number} psi scale factor skew in the z axis
	     * @return {Transform}
	     */
	    Transform.skew = function skew(phi, theta, psi) {
	        return [1, 0, 0, 0, Math.tan(psi), 1, 0, 0, Math.tan(theta), Math.tan(phi), 1, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform representation of a skew in the x-direction
	     *
	     * @method skewX
	     * @static
	     * @param {Number} angle the angle between the top and left sides
	     * @return {Transform}
	     */
	    Transform.skewX = function skewX(angle) {
	        return [1, 0, 0, 0, Math.tan(angle), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Return a Transform representation of a skew in the y-direction
	     *
	     * @method skewY
	     * @static
	     * @param {Number} angle the angle between the top and right sides
	     * @return {Transform}
	     */
	    Transform.skewY = function skewY(angle) {
	        return [1, Math.tan(angle), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
	    };

	    /**
	     * Returns a perspective Transform matrix
	     *
	     * @method perspective
	     * @static
	     * @param {Number} focusZ z position of focal point
	     * @return {Transform}
	     */
	    Transform.perspective = function perspective(focusZ) {
	        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, -1 / focusZ, 0, 0, 0, 1];
	    };

	    /**
	     * Return translation vector component of given Transform
	     *
	     * @method getTranslate
	     * @static
	     * @param {Transform} m Transform
	     * @return {Array.Number} the translation vector [t_x, t_y, t_z]
	     */
	    Transform.getTranslate = function getTranslate(m) {
	        return [m[12], m[13], m[14]];
	    };

	    /**
	     * Return inverse affine transform for given Transform.
	     *   Note: This assumes m[3] = m[7] = m[11] = 0, and m[15] = 1.
	     *   Will provide incorrect results if not invertible or preconditions not met.
	     *
	     * @method inverse
	     * @static
	     * @param {Transform} m Transform
	     * @return {Transform}
	     */
	    Transform.inverse = function inverse(m) {
	        // only need to consider 3x3 section for affine
	        var c0 = m[5] * m[10] - m[6] * m[9];
	        var c1 = m[4] * m[10] - m[6] * m[8];
	        var c2 = m[4] * m[9] - m[5] * m[8];
	        var c4 = m[1] * m[10] - m[2] * m[9];
	        var c5 = m[0] * m[10] - m[2] * m[8];
	        var c6 = m[0] * m[9] - m[1] * m[8];
	        var c8 = m[1] * m[6] - m[2] * m[5];
	        var c9 = m[0] * m[6] - m[2] * m[4];
	        var c10 = m[0] * m[5] - m[1] * m[4];
	        var detM = m[0] * c0 - m[1] * c1 + m[2] * c2;
	        var invD = 1 / detM;
	        var result = [
	            invD * c0, -invD * c4, invD * c8, 0,
	            -invD * c1, invD * c5, -invD * c9, 0,
	            invD * c2, -invD * c6, invD * c10, 0,
	            0, 0, 0, 1
	        ];
	        result[12] = -m[12] * result[0] - m[13] * result[4] - m[14] * result[8];
	        result[13] = -m[12] * result[1] - m[13] * result[5] - m[14] * result[9];
	        result[14] = -m[12] * result[2] - m[13] * result[6] - m[14] * result[10];
	        return result;
	    };

	    /**
	     * Returns the transpose of a 4x4 matrix
	     *
	     * @method transpose
	     * @static
	     * @param {Transform} m matrix
	     * @return {Transform} the resulting transposed matrix
	     */
	    Transform.transpose = function transpose(m) {
	        return [m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]];
	    };

	    function _normSquared(v) {
	        return (v.length === 2) ? v[0] * v[0] + v[1] * v[1] : v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
	    }
	    function _norm(v) {
	        return Math.sqrt(_normSquared(v));
	    }
	    function _sign(n) {
	        return (n < 0) ? -1 : 1;
	    }

	    /**
	     * Decompose Transform into separate .translate, .rotate, .scale,
	     *    and .skew components.
	     *
	     * @method interpret
	     * @static
	     * @param {Transform} M transform matrix
	     * @return {Object} matrix spec object with component matrices .translate,
	     *    .rotate, .scale, .skew
	     */
	    Transform.interpret = function interpret(M) {

	        // QR decomposition via Householder reflections
	        //FIRST ITERATION

	        //default Q1 to the identity matrix;
	        var x = [M[0], M[1], M[2]];                // first column vector
	        var sgn = _sign(x[0]);                     // sign of first component of x (for stability)
	        var xNorm = _norm(x);                      // norm of first column vector
	        var v = [x[0] + sgn * xNorm, x[1], x[2]];  // v = x + sign(x[0])|x|e1
	        var mult = 2 / _normSquared(v);            // mult = 2/v'v

	        //bail out if our Matrix is singular
	        if (mult >= Infinity) {
	            return {translate: Transform.getTranslate(M), rotate: [0, 0, 0], scale: [0, 0, 0], skew: [0, 0, 0]};
	        }

	        //evaluate Q1 = I - 2vv'/v'v
	        var Q1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

	        //diagonals
	        Q1[0]  = 1 - mult * v[0] * v[0];    // 0,0 entry
	        Q1[5]  = 1 - mult * v[1] * v[1];    // 1,1 entry
	        Q1[10] = 1 - mult * v[2] * v[2];    // 2,2 entry

	        //upper diagonal
	        Q1[1] = -mult * v[0] * v[1];        // 0,1 entry
	        Q1[2] = -mult * v[0] * v[2];        // 0,2 entry
	        Q1[6] = -mult * v[1] * v[2];        // 1,2 entry

	        //lower diagonal
	        Q1[4] = Q1[1];                      // 1,0 entry
	        Q1[8] = Q1[2];                      // 2,0 entry
	        Q1[9] = Q1[6];                      // 2,1 entry

	        //reduce first column of M
	        var MQ1 = Transform.multiply(Q1, M);

	        //SECOND ITERATION on (1,1) minor
	        var x2 = [MQ1[5], MQ1[6]];
	        var sgn2 = _sign(x2[0]);                    // sign of first component of x (for stability)
	        var x2Norm = _norm(x2);                     // norm of first column vector
	        var v2 = [x2[0] + sgn2 * x2Norm, x2[1]];    // v = x + sign(x[0])|x|e1
	        var mult2 = 2 / _normSquared(v2);           // mult = 2/v'v

	        //evaluate Q2 = I - 2vv'/v'v
	        var Q2 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];

	        //diagonal
	        Q2[5]  = 1 - mult2 * v2[0] * v2[0]; // 1,1 entry
	        Q2[10] = 1 - mult2 * v2[1] * v2[1]; // 2,2 entry

	        //off diagonals
	        Q2[6] = -mult2 * v2[0] * v2[1];     // 2,1 entry
	        Q2[9] = Q2[6];                      // 1,2 entry

	        //calc QR decomposition. Q = Q1*Q2, R = Q'*M
	        var Q = Transform.multiply(Q2, Q1);      //note: really Q transpose
	        var R = Transform.multiply(Q, M);

	        //remove negative scaling
	        var remover = Transform.scale(R[0] < 0 ? -1 : 1, R[5] < 0 ? -1 : 1, R[10] < 0 ? -1 : 1);
	        R = Transform.multiply(R, remover);
	        Q = Transform.multiply(remover, Q);

	        //decompose into rotate/scale/skew matrices
	        var result = {};
	        result.translate = Transform.getTranslate(M);
	        result.rotate = [Math.atan2(-Q[6], Q[10]), Math.asin(Q[2]), Math.atan2(-Q[1], Q[0])];
	        if (!result.rotate[0]) {
	            result.rotate[0] = 0;
	            result.rotate[2] = Math.atan2(Q[4], Q[5]);
	        }
	        result.scale = [R[0], R[5], R[10]];
	        result.skew = [Math.atan2(R[9], result.scale[2]), Math.atan2(R[8], result.scale[2]), Math.atan2(R[4], result.scale[0])];

	        //double rotation workaround
	        if (Math.abs(result.rotate[0]) + Math.abs(result.rotate[2]) > 1.5 * Math.PI) {
	            result.rotate[1] = Math.PI - result.rotate[1];
	            if (result.rotate[1] > Math.PI) result.rotate[1] -= 2 * Math.PI;
	            if (result.rotate[1] < -Math.PI) result.rotate[1] += 2 * Math.PI;
	            if (result.rotate[0] < 0) result.rotate[0] += Math.PI;
	            else result.rotate[0] -= Math.PI;
	            if (result.rotate[2] < 0) result.rotate[2] += Math.PI;
	            else result.rotate[2] -= Math.PI;
	        }

	        return result;
	    };

	    /**
	     * Weighted average between two matrices by averaging their
	     *     translation, rotation, scale, skew components.
	     *     f(M1,M2,t) = (1 - t) * M1 + t * M2
	     *
	     * @method average
	     * @static
	     * @param {Transform} M1 f(M1,M2,0) = M1
	     * @param {Transform} M2 f(M1,M2,1) = M2
	     * @param {Number} t
	     * @return {Transform}
	     */
	    Transform.average = function average(M1, M2, t) {
	        t = (t === undefined) ? 0.5 : t;
	        var specM1 = Transform.interpret(M1);
	        var specM2 = Transform.interpret(M2);

	        var specAvg = {
	            translate: [0, 0, 0],
	            rotate: [0, 0, 0],
	            scale: [0, 0, 0],
	            skew: [0, 0, 0]
	        };

	        for (var i = 0; i < 3; i++) {
	            specAvg.translate[i] = (1 - t) * specM1.translate[i] + t * specM2.translate[i];
	            specAvg.rotate[i] = (1 - t) * specM1.rotate[i] + t * specM2.rotate[i];
	            specAvg.scale[i] = (1 - t) * specM1.scale[i] + t * specM2.scale[i];
	            specAvg.skew[i] = (1 - t) * specM1.skew[i] + t * specM2.skew[i];
	        }
	        return Transform.build(specAvg);
	    };

	    /**
	     * Compose .translate, .rotate, .scale, .skew components into
	     * Transform matrix
	     *
	     * @method build
	     * @static
	     * @param {matrixSpec} spec object with component matrices .translate,
	     *    .rotate, .scale, .skew
	     * @return {Transform} composed transform
	     */
	    Transform.build = function build(spec) {
	        var scaleMatrix = Transform.scale(spec.scale[0], spec.scale[1], spec.scale[2]);
	        var skewMatrix = Transform.skew(spec.skew[0], spec.skew[1], spec.skew[2]);
	        var rotateMatrix = Transform.rotate(spec.rotate[0], spec.rotate[1], spec.rotate[2]);
	        return Transform.thenMove(Transform.multiply(Transform.multiply(rotateMatrix, skewMatrix), scaleMatrix), spec.translate);
	    };

	    /**
	     * Determine if two Transforms are component-wise equal
	     *   Warning: breaks on perspective Transforms
	     *
	     * @method equals
	     * @static
	     * @param {Transform} a matrix
	     * @param {Transform} b matrix
	     * @return {boolean}
	     */
	    Transform.equals = function equals(a, b) {
	        return !Transform.notEquals(a, b);
	    };

	    /**
	     * Determine if two Transforms are component-wise unequal
	     *   Warning: breaks on perspective Transforms
	     *
	     * @method notEquals
	     * @static
	     * @param {Transform} a matrix
	     * @param {Transform} b matrix
	     * @return {boolean}
	     */
	    Transform.notEquals = function notEquals(a, b) {
	        if (a === b) return false;

	        // shortci
	        return !(a && b) ||
	            a[12] !== b[12] || a[13] !== b[13] || a[14] !== b[14] ||
	            a[0] !== b[0] || a[1] !== b[1] || a[2] !== b[2] ||
	            a[4] !== b[4] || a[5] !== b[5] || a[6] !== b[6] ||
	            a[8] !== b[8] || a[9] !== b[9] || a[10] !== b[10];
	    };

	    /**
	     * Constrain angle-trio components to range of [-pi, pi).
	     *
	     * @method normalizeRotation
	     * @static
	     * @param {Array.Number} rotation phi, theta, psi (array of floats
	     *    && array.length == 3)
	     * @return {Array.Number} new phi, theta, psi triplet
	     *    (array of floats && array.length == 3)
	     */
	    Transform.normalizeRotation = function normalizeRotation(rotation) {
	        var result = rotation.slice(0);
	        if (result[0] === Math.PI * 0.5 || result[0] === -Math.PI * 0.5) {
	            result[0] = -result[0];
	            result[1] = Math.PI - result[1];
	            result[2] -= Math.PI;
	        }
	        if (result[0] > Math.PI * 0.5) {
	            result[0] = result[0] - Math.PI;
	            result[1] = Math.PI - result[1];
	            result[2] -= Math.PI;
	        }
	        if (result[0] < -Math.PI * 0.5) {
	            result[0] = result[0] + Math.PI;
	            result[1] = -Math.PI - result[1];
	            result[2] -= Math.PI;
	        }
	        while (result[1] < -Math.PI) result[1] += 2 * Math.PI;
	        while (result[1] >= Math.PI) result[1] -= 2 * Math.PI;
	        while (result[2] < -Math.PI) result[2] += 2 * Math.PI;
	        while (result[2] >= Math.PI) result[2] -= 2 * Math.PI;
	        return result;
	    };

	    /**
	     * (Property) Array defining a translation forward in z by 1
	     *
	     * @property {array} inFront
	     * @static
	     * @final
	     */
	    Transform.inFront = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1e-3, 1];

	    /**
	     * (Property) Array defining a translation backwards in z by 1
	     *
	     * @property {array} behind
	     * @static
	     * @final
	     */
	    Transform.behind = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, -1e-3, 1];

	    module.exports = Transform;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ARGON = __webpack_require__(2);
	var SG = {}; // scenegraph namespace
	module.exports = SG;


	SG._ = __webpack_require__(33);

	SG.Transform = __webpack_require__(6);
	SG.Matrix = __webpack_require__(11);
	SG.Quaternion = __webpack_require__(26);
	SG.Vector = __webpack_require__(12);

	SG.Location = __webpack_require__(50);
	SG.MGRS = __webpack_require__(13);

	SG.Scene = __webpack_require__(51);
	SG.ReferenceFrame = __webpack_require__(14);

	// TODO: move everything below into a new module

	SG.sharedScene = new SG.Scene();
	SG.sharedScene.name = "SharedScene";
	SG.sharedFrames = {};

	if (ARGON.isChannelManager) {
	  SG.emitSharedFrames = function () {
	    var framesJSON = [];
	    SG.sharedScene.traverse(function (rf) {
	      return framesJSON.push(rf.toJSON);
	    });
	    _emitFrames(framesJSON);
	  };
	}

	var _emitFrames = function (framesJSON) {
	  ARGON.channelPort.trigger("SG.ReferenceFrame#sharedFrames", {
	    frames: framesJSON, volatile: true
	  });
	};

	var _assignAliases = function (frame) {
	  SG.sharedFrames[frame.uuid] = frame;
	  if (frame.name) SG.sharedFrames[frame.name] = frame;
	  for (var i in frame.aliases) {
	    var alias = frame.aliases[i];
	    SG.sharedFrames[alias] = frame;
	  }
	};

	SG.sharedScene.on("update", function (event) {
	  var framesJSON = event.frameUpdates.map(function (frame) {
	    _assignAliases(frame);
	    return frame.toJSON();
	  });
	  if (ARGON.isChannelManager) {
	    _emitFrames(framesJSON);
	  }
	});

	if (ARGON.isChannel) {
	  ARGON.managerPort.on("SG.ReferenceFrame#sharedFrames", function (event) {
	    var framesJSON = event.frames;
	    for (var i in framesJSON) {
	      var frameData = framesJSON[i];
	      var frame = SG.sharedFrames[frameData.name || frameData.uuid];

	      if (!frame) {
	        frame = new SG.ReferenceFrame();
	        frame.name = frameData.name;
	        frame.uuid = frameData.uuid;
	      }

	      if (frameData.parent.name === "SharedScene") {
	        if (frame.parent !== SG.sharedScene) SG.sharedScene.add(frame);
	      } else {
	        var parent = SG.sharedFrames[frameData.parent.uuid || frameData.parent.name];
	        if (frame.parent !== parent) parent.add(frame);
	      }

	      frame.pushState(frameData.state);
	    }
	  });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    /**
	     * A singleton that maintains a global registry of Surfaces.
	     *   Private.
	     *
	     * @private
	     * @static
	     * @class Entity
	     */

	    var entities = [];

	    /**
	     * Get entity from global index.
	     *
	     * @private
	     * @method get
	     * @param {Number} id entity reigstration id
	     * @return {Surface} entity in the global index
	     */
	    function get(id) {
	        return entities[id];
	    }

	    /**
	     * Overwrite entity in the global index
	     *
	     * @private
	     * @method set
	     * @param {Number} id entity reigstration id
	     * @return {Surface} entity to add to the global index
	     */
	    function set(id, entity) {
	        entities[id] = entity;
	    }

	    /**
	     * Add entity to global index
	     *
	     * @private
	     * @method register
	     * @param {Surface} entity to add to global index
	     * @return {Number} new id
	     */
	    function register(entity) {
	        var id = entities.length;
	        set(id, entity);
	        return id;
	    }

	    /**
	     * Remove entity from global index
	     *
	     * @private
	     * @method unregister
	     * @param {Number} id entity reigstration id
	     */
	    function unregister(id) {
	        set(id, null);
	    }

	    module.exports = {
	        register: register,
	        unregister: unregister,
	        get: get,
	        set: set
	    };
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    /**
	     * EventEmitter represents a channel for events.
	     *
	     * @class EventEmitter
	     * @constructor
	     */
	    function EventEmitter() {
	        this.listeners = {};
	        this._owner = this;
	    }

	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    EventEmitter.prototype.emit = function emit(type, event) {
	        var handlers = this.listeners[type];
	        if (handlers) {
	            for (var i = 0; i < handlers.length; i++) {
	                handlers[i].call(this._owner, event);
	            }
	        }
	        return this;
	    };

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	   EventEmitter.prototype.on = function on(type, handler) {
	        if (!(type in this.listeners)) this.listeners[type] = [];
	        var index = this.listeners[type].indexOf(handler);
	        if (index < 0) this.listeners[type].push(handler);
	        return this;
	    };

	    /**
	     * Alias for "on".
	     * @method addListener
	     */
	    EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	   /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function} handler function object to remove
	     * @return {EventEmitter} this
	     */
	    EventEmitter.prototype.removeListener = function removeListener(type, handler) {
	        var index = this.listeners[type].indexOf(handler);
	        if (index >= 0) this.listeners[type].splice(index, 1);
	        return this;
	    };

	    /**
	     * Call event handlers with this set to owner.
	     *
	     * @method bindThis
	     *
	     * @param {Object} owner object this EventEmitter belongs to
	     */
	    EventEmitter.prototype.bindThis = function bindThis(owner) {
	        this._owner = owner;
	    };

	    module.exports = EventEmitter;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var EventHandler = __webpack_require__(4);

	    /**
	     *  A collection of methods for setting options which can be extended
	     *  onto other classes.
	     *
	     *
	     *  **** WARNING ****
	     *  You can only pass through objects that will compile into valid JSON.
	     *
	     *  Valid options:
	     *      Strings,
	     *      Arrays,
	     *      Objects,
	     *      Numbers,
	     *      Nested Objects,
	     *      Nested Arrays.
	     *
	     *    This excludes:
	     *        Document Fragments,
	     *        Functions
	     * @class OptionsManager
	     * @constructor
	     * @param {Object} value options dictionary
	     */
	    function OptionsManager(value) {
	        this._value = value;
	        this.eventOutput = null;
	    }

	    /**
	     * Create options manager from source dictionary with arguments overriden by patch dictionary.
	     *
	     * @static
	     * @method OptionsManager.patch
	     *
	     * @param {Object} source source arguments
	     * @param {...Object} data argument additions and overwrites
	     * @return {Object} source object
	     */
	    OptionsManager.patch = function patchObject(source, data) {
	        var manager = new OptionsManager(source);
	        for (var i = 1; i < arguments.length; i++) manager.patch(arguments[i]);
	        return source;
	    };

	    function _createEventOutput() {
	        this.eventOutput = new EventHandler();
	        this.eventOutput.bindThis(this);
	        EventHandler.setOutputHandler(this, this.eventOutput);
	    }

	    /**
	     * Create OptionsManager from source with arguments overriden by patches.
	     *   Triggers 'change' event on this object's event handler if the state of
	     *   the OptionsManager changes as a result.
	     *
	     * @method patch
	     *
	     * @param {...Object} arguments list of patch objects
	     * @return {OptionsManager} this
	     */
	    OptionsManager.prototype.patch = function patch() {
	        var myState = this._value;
	        for (var i = 0; i < arguments.length; i++) {
	            var data = arguments[i];
	            for (var k in data) {
	                if ((k in myState) && (data[k] && data[k].constructor === Object) && (myState[k] && myState[k].constructor === Object)) {
	                    if (!myState.hasOwnProperty(k)) myState[k] = Object.create(myState[k]);
	                    this.key(k).patch(data[k]);
	                    if (this.eventOutput) this.eventOutput.emit('change', {id: k, value: this.key(k).value()});
	                }
	                else this.set(k, data[k]);
	            }
	        }
	        return this;
	    };

	    /**
	     * Alias for patch
	     *
	     * @method setOptions
	     *
	     */
	    OptionsManager.prototype.setOptions = OptionsManager.prototype.patch;

	    /**
	     * Return OptionsManager based on sub-object retrieved by key
	     *
	     * @method key
	     *
	     * @param {string} identifier key
	     * @return {OptionsManager} new options manager with the value
	     */
	    OptionsManager.prototype.key = function key(identifier) {
	        var result = new OptionsManager(this._value[identifier]);
	        if (!(result._value instanceof Object) || result._value instanceof Array) result._value = {};
	        return result;
	    };

	    /**
	     * Look up value by key
	     * @method get
	     *
	     * @param {string} key key
	     * @return {Object} associated object
	     */
	    OptionsManager.prototype.get = function get(key) {
	        return this._value[key];
	    };

	    /**
	     * Alias for get
	     * @method getOptions
	     */
	    OptionsManager.prototype.getOptions = OptionsManager.prototype.get;

	    /**
	     * Set key to value.  Outputs 'change' event if a value is overwritten.
	     *
	     * @method set
	     *
	     * @param {string} key key string
	     * @param {Object} value value object
	     * @return {OptionsManager} new options manager based on the value object
	     */
	    OptionsManager.prototype.set = function set(key, value) {
	        var originalValue = this.get(key);
	        this._value[key] = value;
	        if (this.eventOutput && value !== originalValue) this.eventOutput.emit('change', {id: key, value: value});
	        return this;
	    };

	    /**
	     * Return entire object contents of this OptionsManager.
	     *
	     * @method value
	     *
	     * @return {Object} current state of options
	     */
	    OptionsManager.prototype.value = function value() {
	        return this._value;
	    };

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'change')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    OptionsManager.prototype.on = function on() {
	        _createEventOutput.call(this);
	        return this.on.apply(this, arguments);
	    };

	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'change')
	     * @param {function} handler function object to remove
	     * @return {EventHandler} internal event handler object (for chaining)
	     */
	    OptionsManager.prototype.removeListener = function removeListener() {
	        _createEventOutput.call(this);
	        return this.removeListener.apply(this, arguments);
	    };

	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    OptionsManager.prototype.pipe = function pipe() {
	        _createEventOutput.call(this);
	        return this.pipe.apply(this, arguments);
	    };

	    /**
	     * Remove handler object from set of downstream handlers.
	     * Undoes work of "pipe"
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    OptionsManager.prototype.unpipe = function unpipe() {
	        _createEventOutput.call(this);
	        return this.unpipe.apply(this, arguments);
	    };

	    module.exports = OptionsManager;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Vector = __webpack_require__(12);

	    /**
	     * A library for using a 3x3 numerical matrix, represented as a two-level array.
	     *
	     * @class Matrix
	     * @constructor
	     *
	     * @param {Array.Array} values array of rows
	     */
	    function Matrix(values) {
	        this.values = values ||
	            [
	                [1,0,0],
	                [0,1,0],
	                [0,0,1]
	            ];

	        return this;
	    }

	    var _register = new Matrix();
	    var _vectorRegister = new Vector();

	    /**
	     * Return the values in the matrix as an array of numerical row arrays
	     *
	     * @method get
	     *
	     * @return {Array.array} matrix values as array of rows.
	     */
	    Matrix.prototype.get = function get() {
	        return this.values;
	    };

	    /**
	     * Set the nested array of rows in the matrix.
	     *
	     * @method set
	     *
	     * @param {Array.array} values matrix values as array of rows.
	     */
	    Matrix.prototype.set = function set(values) {
	        this.values = values;
	    };

	    /**
	     * Take this matrix as A, input vector V as a column vector, and return matrix product (A)(V).
	     *   Note: This sets the internal vector register.  Current handles to the vector register
	     *   will see values changed.
	     *
	     * @method vectorMultiply
	     *
	     * @param {Vector} v input vector V
	     * @return {Vector} result of multiplication, as a handle to the internal vector register
	     */
	    Matrix.prototype.vectorMultiply = function vectorMultiply(v) {
	        var M = this.get();
	        var v0 = v.x;
	        var v1 = v.y;
	        var v2 = v.z;

	        var M0 = M[0];
	        var M1 = M[1];
	        var M2 = M[2];

	        var M00 = M0[0];
	        var M01 = M0[1];
	        var M02 = M0[2];
	        var M10 = M1[0];
	        var M11 = M1[1];
	        var M12 = M1[2];
	        var M20 = M2[0];
	        var M21 = M2[1];
	        var M22 = M2[2];

	        return _vectorRegister.setXYZ(
	            M00*v0 + M01*v1 + M02*v2,
	            M10*v0 + M11*v1 + M12*v2,
	            M20*v0 + M21*v1 + M22*v2
	        );
	    };

	    /**
	     * Multiply the provided matrix M2 with this matrix.  Result is (this) * (M2).
	     *   Note: This sets the internal matrix register.  Current handles to the register
	     *   will see values changed.
	     *
	     * @method multiply
	     *
	     * @param {Matrix} M2 input matrix to multiply on the right
	     * @return {Matrix} result of multiplication, as a handle to the internal register
	     */
	    Matrix.prototype.multiply = function multiply(M2) {
	        var M1 = this.get();
	        var result = [[]];
	        for (var i = 0; i < 3; i++) {
	            result[i] = [];
	            for (var j = 0; j < 3; j++) {
	                var sum = 0;
	                for (var k = 0; k < 3; k++) {
	                    sum += M1[i][k] * M2[k][j];
	                }
	                result[i][j] = sum;
	            }
	        }
	        return _register.set(result);
	    };

	    /**
	     * Creates a Matrix which is the transpose of this matrix.
	     *   Note: This sets the internal matrix register.  Current handles to the register
	     *   will see values changed.
	     *
	     * @method transpose
	     *
	     * @return {Matrix} result of transpose, as a handle to the internal register
	     */
	    Matrix.prototype.transpose = function transpose() {
	        var result = [];
	        var M = this.get();
	        for (var row = 0; row < 3; row++) {
	            for (var col = 0; col < 3; col++) {
	                result[row][col] = M[col][row];
	            }
	        }
	        return _register.set(result);
	    };

	    /**
	     * Clones the matrix
	     *
	     * @method clone
	     * @return {Matrix} New copy of the original matrix
	     */
	    Matrix.prototype.clone = function clone() {
	        var values = this.get();
	        var M = [];
	        for (var row = 0; row < 3; row++)
	            M[row] = values[row].slice();
	        return new Matrix(M);
	    };

	    module.exports = Matrix;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     * Three-element floating point vector.
	     *
	     * @class Vector
	     * @constructor
	     *
	     * @param {number} x x element value
	     * @param {number} y y element value
	     * @param {number} z z element value
	     */
	    function Vector(x,y,z) {
	        if (arguments.length === 1) this.set(x);
	        else {
	            this.x = x || 0;
	            this.y = y || 0;
	            this.z = z || 0;
	        }
	        return this;
	    }

	    var _register = new Vector(0,0,0);

	    /**
	     * Add this element-wise to another Vector, element-wise.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method add
	     * @param {Vector} v addend
	     * @return {Vector} vector sum
	     */
	    Vector.prototype.add = function add(v) {
	        return _setXYZ.call(_register,
	            this.x + v.x,
	            this.y + v.y,
	            this.z + v.z
	        );
	    };

	    /**
	     * Subtract another vector from this vector, element-wise.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method sub
	     * @param {Vector} v subtrahend
	     * @return {Vector} vector difference
	     */
	    Vector.prototype.sub = function sub(v) {
	        return _setXYZ.call(_register,
	            this.x - v.x,
	            this.y - v.y,
	            this.z - v.z
	        );
	    };

	    /**
	     * Scale Vector by floating point r.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method mult
	     *
	     * @param {number} r scalar
	     * @return {Vector} vector result
	     */
	    Vector.prototype.mult = function mult(r) {
	        return _setXYZ.call(_register,
	            r * this.x,
	            r * this.y,
	            r * this.z
	        );
	    };

	    /**
	     * Scale Vector by floating point 1/r.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method div
	     *
	     * @param {number} r scalar
	     * @return {Vector} vector result
	     */
	    Vector.prototype.div = function div(r) {
	        return this.mult(1 / r);
	    };

	    /**
	     * Given another vector v, return cross product (v)x(this).
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method cross
	     * @param {Vector} v Left Hand Vector
	     * @return {Vector} vector result
	     */
	    Vector.prototype.cross = function cross(v) {
	        var x = this.x;
	        var y = this.y;
	        var z = this.z;
	        var vx = v.x;
	        var vy = v.y;
	        var vz = v.z;

	        return _setXYZ.call(_register,
	            z * vy - y * vz,
	            x * vz - z * vx,
	            y * vx - x * vy
	        );
	    };

	    /**
	     * Component-wise equality test between this and Vector v.
	     * @method equals
	     * @param {Vector} v vector to compare
	     * @return {boolean}
	     */
	    Vector.prototype.equals = function equals(v) {
	        return (v.x === this.x && v.y === this.y && v.z === this.z);
	    };

	    /**
	     * Rotate clockwise around x-axis by theta radians.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     * @method rotateX
	     * @param {number} theta radians
	     * @return {Vector} rotated vector
	     */
	    Vector.prototype.rotateX = function rotateX(theta) {
	        var x = this.x;
	        var y = this.y;
	        var z = this.z;

	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);

	        return _setXYZ.call(_register,
	            x,
	            y * cosTheta - z * sinTheta,
	            y * sinTheta + z * cosTheta
	        );
	    };

	    /**
	     * Rotate clockwise around y-axis by theta radians.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     * @method rotateY
	     * @param {number} theta radians
	     * @return {Vector} rotated vector
	     */
	    Vector.prototype.rotateY = function rotateY(theta) {
	        var x = this.x;
	        var y = this.y;
	        var z = this.z;

	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);

	        return _setXYZ.call(_register,
	            z * sinTheta + x * cosTheta,
	            y,
	            z * cosTheta - x * sinTheta
	        );
	    };

	    /**
	     * Rotate clockwise around z-axis by theta radians.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     * @method rotateZ
	     * @param {number} theta radians
	     * @return {Vector} rotated vector
	     */
	    Vector.prototype.rotateZ = function rotateZ(theta) {
	        var x = this.x;
	        var y = this.y;
	        var z = this.z;

	        var cosTheta = Math.cos(theta);
	        var sinTheta = Math.sin(theta);

	        return _setXYZ.call(_register,
	            x * cosTheta - y * sinTheta,
	            x * sinTheta + y * cosTheta,
	            z
	        );
	    };

	    /**
	     * Return dot product of this with a second Vector
	     * @method dot
	     * @param {Vector} v second vector
	     * @return {number} dot product
	     */
	    Vector.prototype.dot = function dot(v) {
	        return this.x * v.x + this.y * v.y + this.z * v.z;
	    };

	    /**
	     * Return squared length of this vector
	     * @method normSquared
	     * @return {number} squared length
	     */
	    Vector.prototype.normSquared = function normSquared() {
	        return this.dot(this);
	    };

	    /**
	     * Return length of this vector
	     * @method norm
	     * @return {number} length
	     */
	    Vector.prototype.norm = function norm() {
	        return Math.sqrt(this.normSquared());
	    };

	    /**
	     * Scale Vector to specified length.
	     *   If length is less than internal tolerance, set vector to [length, 0, 0].
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     * @method normalize
	     *
	     * @param {number} length target length, default 1.0
	     * @return {Vector}
	     */
	    Vector.prototype.normalize = function normalize(length) {
	        if (arguments.length === 0) length = 1;
	        var norm = this.norm();

	        if (norm > 1e-7) return _setFromVector.call(_register, this.mult(length / norm));
	        else return _setXYZ.call(_register, length, 0, 0);
	    };

	    /**
	     * Make a separate copy of the Vector.
	     *
	     * @method clone
	     *
	     * @return {Vector}
	     */
	    Vector.prototype.clone = function clone() {
	        return new Vector(this);
	    };

	    /**
	     * True if and only if every value is 0 (or falsy)
	     *
	     * @method isZero
	     *
	     * @return {boolean}
	     */
	    Vector.prototype.isZero = function isZero() {
	        return !(this.x || this.y || this.z);
	    };

	    function _setXYZ(x,y,z) {
	        this.x = x;
	        this.y = y;
	        this.z = z;
	        return this;
	    }

	    function _setFromArray(v) {
	        return _setXYZ.call(this,v[0],v[1],v[2] || 0);
	    }

	    function _setFromVector(v) {
	        return _setXYZ.call(this, v.x, v.y, v.z);
	    }

	    function _setFromNumber(x) {
	        return _setXYZ.call(this,x,0,0);
	    }

	    /**
	     * Set this Vector to the values in the provided Array or Vector.
	     *
	     * @method set
	     * @param {object} v array, Vector, or number
	     * @return {Vector} this
	     */
	    Vector.prototype.set = function set(v) {
	        if (v instanceof Array)    return _setFromArray.call(this, v);
	        if (v instanceof Vector)   return _setFromVector.call(this, v);
	        if (typeof v === 'number') return _setFromNumber.call(this, v);
	    };

	    Vector.prototype.setXYZ = function(x,y,z) {
	        return _setXYZ.apply(this, arguments);
	    };

	    Vector.prototype.set1D = function(x) {
	        return _setFromNumber.call(this, x);
	    };

	    /**
	     * Put result of last internal register calculation in specified output vector.
	     *
	     * @method put
	     * @param {Vector} v destination vector
	     * @return {Vector} destination vector
	     */

	    Vector.prototype.put = function put(v) {
	        if (this === _register) _setFromVector.call(v, _register);
	        else _setFromVector.call(v, this);
	    };

	    /**
	     * Set this vector to [0,0,0]
	     *
	     * @method clear
	     */
	    Vector.prototype.clear = function clear() {
	        return _setXYZ.call(this,0,0,0);
	    };

	    /**
	     * Scale this Vector down to specified "cap" length.
	     *   If Vector shorter than cap, or cap is Infinity, do nothing.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method cap
	     * @return {Vector} capped vector
	     */
	    Vector.prototype.cap = function cap(cap) {
	        if (cap === Infinity) return _setFromVector.call(_register, this);
	        var norm = this.norm();
	        if (norm > cap) return _setFromVector.call(_register, this.mult(cap / norm));
	        else return _setFromVector.call(_register, this);
	    };

	    /**
	     * Return projection of this Vector onto another.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method project
	     * @param {Vector} n vector to project upon
	     * @return {Vector} projected vector
	     */
	    Vector.prototype.project = function project(n) {
	        return n.mult(this.dot(n));
	    };

	    /**
	     * Reflect this Vector across provided vector.
	     *   Note: This sets the internal result register, so other references to that vector will change.
	     *
	     * @method reflectAcross
	     * @param {Vector} n vector to reflect across
	     * @return {Vector} reflected vector
	     */
	    Vector.prototype.reflectAcross = function reflectAcross(n) {
	        n.normalize().put(n);
	        return _setFromVector(_register, this.sub(this.project(n).mult(2)));
	    };

	    /**
	     * Convert Vector to three-element array.
	     *
	     * @method get
	     * @return {array<number>} three-element array
	     */
	    Vector.prototype.get = function get() {
	        return [this.x, this.y, this.z];
	    };

	    Vector.prototype.get1D = function() {
	        return this.x;
	    };

	    module.exports = Vector;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	/*
	Portions of this software are based on a port of components from the OpenMap
	com.bbn.openmap.proj.coords Java package. An initial port was initially created
	by Patrice G. Cappelaere and included in Community Mapbuilder
	(http://svn.codehaus.org/mapbuilder/), which is licensed under the LGPL license
	as per http://www.gnu.org/copyleft/lesser.html. OpenMap is licensed under the
	following license agreement:


	               OpenMap Software License Agreement
	               ----------------------------------

	This Agreement sets forth the terms and conditions under which
	the software known as OpenMap(tm) will be licensed by BBN
	Technologies ("BBN") to you ("Licensee"), and by which Derivative
	Works (as hereafter defined) of OpenMap will be licensed by you to BBN.

	Definitions:

	 "Derivative Work(s)" shall mean any revision, enhancement,
	 modification, translation, abridgement, condensation or
	 expansion created by Licensee or BBN that is based upon the
	 Software or a portion thereof that would be a copyright
	 infringement if prepared without the authorization of the
	 copyright owners of the Software or portion thereof.

	 "OpenMap" shall mean a programmer's toolkit for building map
	 based applications as originally created by BBN, and any
	 Derivative Works thereof as created by either BBN or Licensee,
	 but shall include only those Derivative Works BBN has approved
	 for inclusion into, and BBN has integrated into OpenMap.

	 "Standard Version" shall mean OpenMap, as originally created by
	 BBN.

	 "Software" shall mean OpenMap and the Derivative Works created
	 by Licensee and the collection of files distributed by the
	 Licensee with OpenMap, and the collection of files created
	 through textual modifications.

	 "Copyright Holder" is whoever is named in the copyright or
	 copyrights for the Derivative Works.

	 "Licensee" is you, only if you agree to be bound by the terms
	 and conditions set forth in this Agreement.

	 "Reasonable copying fee" is whatever you can justify on the
	 basis of media cost, duplication charges, time of people
	 involved.

	 "Freely Available" means that no fee is charged for the item
	 itself, though there may be fees involved in handling the item.
	 It also means that recipients of the item may redistribute it
	 under the same conditions that they received it.

	1. BBN maintains all rights, title and interest in and to
	OpenMap, including all applicable copyrights, trade secrets,
	patents and other intellectual rights therein.  Licensee hereby
	grants to BBN all right, title and interest into the compilation
	of OpenMap.  Licensee shall own all rights, title and interest
	into the Derivative Works created by Licensee (subject to the
	compilation ownership by BBN).

	2. BBN hereby grants to Licensee a royalty free, worldwide right
	and license to use, copy, distribute and make Derivative Works of
	OpenMap, and sublicensing rights of any of the foregoing in
	accordance with the terms and conditions of this Agreement,
	provided that you duplicate all of the original copyright notices
	and associated disclaimers.

	3. Licensee hereby grants to BBN a royalty free, worldwide right
	and license to use, copy, distribute and make Derivative Works of
	Derivative Works created by Licensee and sublicensing rights of
	any of the foregoing.

	4. Licensee's right to create Derivative Works in the Software is
	subject to Licensee agreement to insert a prominent notice in
	each changed file stating how and when you changed that file, and
	provided that you do at least ONE of the following:

	    a) place your modifications in the Public Domain or otherwise
	       make them Freely Available, such as by posting said
	       modifications to Usenet or an equivalent medium, or
	       placing the modifications on a major archive site and by
	       providing your modifications to the Copyright Holder.

	    b) use the modified Package only within your corporation or
	       organization.

	    c) rename any non-standard executables so the names do not
	       conflict with standard executables, which must also be
	       provided, and provide a separate manual page for each
	       non-standard executable that clearly documents how it
	       differs from OpenMap.

	    d) make other distribution arrangements with the Copyright
	       Holder.

	5. Licensee may distribute the programs of this Software in
	object code or executable form, provided that you do at least ONE
	of the following:

	    a) distribute an OpenMap version of the executables and
	       library files, together with instructions (in the manual
	       page or equivalent) on where to get OpenMap.

	    b) accompany the distribution with the machine-readable
	       source code with your modifications.

	    c) accompany any non-standard executables with their
	       corresponding OpenMap executables, giving the non-standard
	       executables non-standard names, and clearly documenting
	       the differences in manual pages (or equivalent), together
	       with instructions on where to get OpenMap.

	    d) make other distribution arrangements with the Copyright
	       Holder.

	6. You may charge a reasonable copying fee for any distribution
	of this Software.  You may charge any fee you choose for support
	of this Software.  You may not charge a fee for this Software
	itself.  However, you may distribute this Software in aggregate
	with other (possibly commercial) programs as part of a larger
	(possibly commercial) software distribution provided that you do
	not advertise this Software as a product of your own.

	7. The data and images supplied as input to or produced as output
	from the Software do not automatically fall under the copyright
	of this Software, but belong to whomever generated them, and may
	be sold commercially, and may be aggregated with this Software.

	8. BBN makes no representation about the suitability of OpenMap
	for any purposes.  BBN shall have no duty or requirement to
	include any Derivative Works into OpenMap.

	9. Each party hereto represents and warrants that they have the
	full unrestricted right to grant all rights and licenses granted
	to the other party herein.

	10. THIS PACKAGE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY
	KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING (BUT NOT LIMITED TO)
	ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS, AND
	WITHOUT ANY WARRANTIES AS TO NONINFRINGEMENT.

	11. IN NO EVENT SHALL COPYRIGHT HOLDER BE LIABLE FOR ANY DIRECT,
	SPECIAL, INDIRECT OR CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING
	FROM LOSS OF USE OF DATA OR PROFITS, WHETHER IN AN ACTION OF
	CONTRACT, NEGLIGENCE OR OTHER TORTIOUS CONDUCT, ARISING OUT OF OR
	IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS PACKAGE.

	12. Without limitation of the foregoing, You agree to commit no
	act which, directly or indirectly, would violate any U.S. law,
	regulation, or treaty, or any other international treaty or
	agreement to which the United States adheres or with which the
	United States complies, relating to the export or re-export of
	any commodities, software, or technical data.
	*/

	// if (window.Proj4js && !Proj4js.util) { Proj4js.util = {}; }

	/**
	 * Converts between lat/lon and MGRS coordinates. Note that this static class
	 * is restricted to the WGS84 ellipsoid and does not support MGRS notations
	 * for polar regions (i.e. above 84° North and below 80° South).
	 *
	 * If Proj4js is loaded, this will be referenced as Proj4js.util.MGRS. If used
	 * standalone, it will be referenced as window.MGRS.
	 *
	 * @static
	 */
	//(window)["MGRS"] = (function() {
	(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === "object") {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.MGRS = factory();
	  }
	})(this, function () {
	  // Just return a value to define the module export.
	  // This example returns an object, but the module
	  // can return a function as the exported value.
	  return (function () {
	    /**
	     * UTM zones are grouped, and assigned to one of a group of 6
	     * sets.
	     *
	     * {int} @private
	     */
	    var NUM_100K_SETS = 6;

	    /**
	     * The column letters (for easting) of the lower left value, per
	     * set.
	     *
	     * {string} @private
	     */
	    var SET_ORIGIN_COLUMN_LETTERS = "AJSAJS";

	    /**
	     * The row letters (for northing) of the lower left value, per
	     * set.
	     *
	     * {string} @private
	     */
	    var SET_ORIGIN_ROW_LETTERS = "AFAFAF";

	    var A = 65; // A
	    var I = 73; // I
	    var O = 79; // O
	    var V = 86; // V
	    var Z = 90; // Z

	    /**
	     * Conversion of lat/lon to MGRS.
	     *
	     * @param {object} ll Object literal with lat and lon properties on a
	     *     WGS84 ellipsoid.
	     * @param {int} accuracy Accuracy in digits (5 for 1 m, 4 for 10 m, 3 for
	     *      100 m, 4 for 1000 m or 5 for 10000 m). Optional, default is 5.
	     * @return {string} the MGRS string for the given location and accuracy.
	     */
	    function forward(ll, accuracy) {
	      accuracy = accuracy || 5; // default accuracy 1m
	      return encode(LLtoUTM({ lat: ll.lat, lon: ll.lon }), accuracy);
	    }

	    /**
	     * Conversion of MGRS to lat/lon.
	     *
	     * @param {string} mgrs MGRS string.
	     * @return {array} An array with left (longitude), bottom (latitude), right
	     *     (longitude) and top (latitude) values in WGS84, representing the
	     *     bounding box for the provided MGRS reference.
	     */
	    function inverse(mgrs) {
	      var bbox = UTMtoLL(decode(mgrs.toUpperCase()));
	      return [bbox.left, bbox.bottom, bbox.right, bbox.top];
	    }

	    /**
	     * Conversion from degrees to radians.
	     *
	     * @private
	     * @param {number} deg the angle in degrees.
	     * @return {number} the angle in radians.
	     */
	    function degToRad(deg) {
	      return deg * (Math.PI / 180);
	    }

	    /**
	     * Conversion from radians to degrees.
	     *
	     * @private
	     * @param {number} rad the angle in radians.
	     * @return {number} the angle in degrees.
	     */
	    function radToDeg(rad) {
	      return 180 * (rad / Math.PI);
	    }

	    /**
	     * Converts a set of Longitude and Latitude co-ordinates to UTM
	     * using the WGS84 ellipsoid.
	     *
	     * @private
	     * @param {object} ll Object literal with lat and lon properties
	     *     representing the WGS84 coordinate to be converted.
	     * @return {object} Object literal containing the UTM value with easting,
	     *     northing, zoneNumber and zoneLetter properties, and an optional
	     *     accuracy property in digits. Returns null if the conversion failed.
	     */
	    function LLtoUTM(ll, zoneHint) {
	      var Lat = ll.lat;
	      var Long = ll.lon;
	      var a = 6378137; //ellip.radius;
	      var eccSquared = 0.00669438; //ellip.eccsq;
	      var k0 = 0.9996;
	      var LongOrigin;
	      var eccPrimeSquared;
	      var N, T, C, A, M;
	      var LatRad = degToRad(Lat);
	      var LongRad = degToRad(Long);
	      var LongOriginRad;
	      var ZoneNumber;
	      var ZoneLetter = getLetterDesignator(Lat);

	      // (int)
	      ZoneNumber = Math.floor((Long + 180) / 6) + 1;

	      //Make sure the longitude 180.00 is in Zone 60
	      if (Long == 180) {
	        ZoneNumber = 60;
	      }

	      // Special zone for Norway
	      if (Lat >= 56 && Lat < 64 && Long >= 3 && Long < 12) {
	        ZoneNumber = 32;
	      }

	      // Special zones for Svalbard
	      if (Lat >= 72 && Lat < 84) {
	        if (Long >= 0 && Long < 9) ZoneNumber = 31;else if (Long >= 9 && Long < 21) ZoneNumber = 33;else if (Long >= 21 && Long < 33) ZoneNumber = 35;else if (Long >= 33 && Long < 42) ZoneNumber = 37;
	      }

	      // check if we passed in a zone hint, and that it's a valid utm zone spec
	      // Want to let the programmer request a zone to guarantee that they're computing multiple
	      // values in the same zone if they're near a boundary.
	      if (zoneHint && zoneHint.zoneLetter && zoneHint.zoneNumber) {
	        var zn = zoneHint.zoneNumber;
	        var zlDiff = zoneHint.zoneLetter.toLowerCase().charCodeAt() - ZoneLetter.toLowerCase().charCodeAt();

	        // if the zone is adjacent to (or the same as) our computed zone, we'll use that.
	        if ((ZoneNumber === 1 && (zn === 60 || zn === 1 || zn === 2) || ZoneNumber === 60 && (zn === 59 || zn === 60 || zn === 1) || (ZoneNumber === zn || ZoneNumber - 1 === zn || ZoneNumber + 1 === zn)) && (zlDiff === -1 || zlDiff === 0 || zlDiff === 1) || // norway has weird zones
	        ZoneLetter === "X" && (ZoneNumber === 33 || ZoneNumber === 35) && (zn === 33 || zn == 35)) {
	          ZoneNumber = zn;
	          ZoneLetter = zoneHint.zoneLetter;
	        }
	      }

	      LongOrigin = (ZoneNumber - 1) * 6 - 180 + 3; //+3 puts origin
	      // in middle of
	      // zone
	      LongOriginRad = degToRad(LongOrigin);

	      eccPrimeSquared = eccSquared / (1 - eccSquared);

	      N = a / Math.sqrt(1 - eccSquared * Math.sin(LatRad) * Math.sin(LatRad));
	      T = Math.tan(LatRad) * Math.tan(LatRad);
	      C = eccPrimeSquared * Math.cos(LatRad) * Math.cos(LatRad);
	      A = Math.cos(LatRad) * (LongRad - LongOriginRad);

	      M = a * ((1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256) * LatRad - (3 * eccSquared / 8 + 3 * eccSquared * eccSquared / 32 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(2 * LatRad) + (15 * eccSquared * eccSquared / 256 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(4 * LatRad) - 35 * eccSquared * eccSquared * eccSquared / 3072 * Math.sin(6 * LatRad));

	      var UTMEasting = k0 * N * (A + (1 - T + C) * A * A * A / 6 + (5 - 18 * T + T * T + 72 * C - 58 * eccPrimeSquared) * A * A * A * A * A / 120) + 500000;

	      var UTMNorthing = k0 * (M + N * Math.tan(LatRad) * (A * A / 2 + (5 - T + 9 * C + 4 * C * C) * A * A * A * A / 24 + (61 - 58 * T + T * T + 600 * C - 330 * eccPrimeSquared) * A * A * A * A * A * A / 720));
	      if (Lat < 0) {
	        UTMNorthing += 10000000; //10000000 meter offset for
	        // southern hemisphere
	      }

	      return {
	        northing: UTMNorthing,
	        easting: UTMEasting,
	        zoneNumber: ZoneNumber,
	        zoneLetter: ZoneLetter
	      };
	    }

	    /**
	     * Converts UTM coords to lat/long, using the WGS84 ellipsoid. This is a convenience
	     * class where the Zone can be specified as a single string eg."60N" which
	     * is then broken down into the ZoneNumber and ZoneLetter.
	     *
	     * @private
	     * @param {object} utm An object literal with northing, easting, zoneNumber
	     *     and zoneLetter properties. If an optional accuracy property is
	     *     provided (in meters), a bounding box will be returned instead of
	     *     latitude and longitude.
	     * @return {object} An object literal containing either lat and lon values
	     *     (if no accuracy was provided), or top, right, bottom and left values
	     *     for the bounding box calculated according to the provided accuracy.
	     *     Returns null if the conversion failed.
	     */
	    function UTMtoLL(utm) {
	      var UTMNorthing = utm.northing;
	      var UTMEasting = utm.easting;
	      var zoneLetter = utm.zoneLetter;
	      var zoneNumber = utm.zoneNumber;
	      // check the ZoneNummber is valid
	      if (zoneNumber < 0 || zoneNumber > 60) {
	        return null;
	      }

	      var k0 = 0.9996;
	      var a = 6378137; //ellip.radius;
	      var eccSquared = 0.00669438; //ellip.eccsq;
	      var eccPrimeSquared;
	      var e1 = (1 - Math.sqrt(1 - eccSquared)) / (1 + Math.sqrt(1 - eccSquared));
	      var N1, T1, C1, R1, D, M;
	      var LongOrigin;
	      var mu, phi1Rad;

	      // remove 500,000 meter offset for longitude
	      var x = UTMEasting - 500000;
	      var y = UTMNorthing;

	      // HR - fixed this to use the zone letter properly
	      if (zoneLetter >= "C" && zoneLetter <= "M") {
	        y -= 10000000; // remove 10,000,000 meter offset used for souther hemisphere
	      }

	      // There are 60 zones with zone 1 being at West -180 to -174
	      LongOrigin = (zoneNumber - 1) * 6 - 180 + 3; // +3 puts origin
	      // in middle of
	      // zone

	      eccPrimeSquared = eccSquared / (1 - eccSquared);

	      M = y / k0;
	      mu = M / (a * (1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256));

	      phi1Rad = mu + (3 * e1 / 2 - 27 * e1 * e1 * e1 / 32) * Math.sin(2 * mu) + (21 * e1 * e1 / 16 - 55 * e1 * e1 * e1 * e1 / 32) * Math.sin(4 * mu) + 151 * e1 * e1 * e1 / 96 * Math.sin(6 * mu);
	      // double phi1 = ProjMath.radToDeg(phi1Rad);

	      N1 = a / Math.sqrt(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad));
	      T1 = Math.tan(phi1Rad) * Math.tan(phi1Rad);
	      C1 = eccPrimeSquared * Math.cos(phi1Rad) * Math.cos(phi1Rad);
	      R1 = a * (1 - eccSquared) / Math.pow(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad), 1.5);
	      D = x / (N1 * k0);

	      var lat = phi1Rad - N1 * Math.tan(phi1Rad) / R1 * (D * D / 2 - (5 + 3 * T1 + 10 * C1 - 4 * C1 * C1 - 9 * eccPrimeSquared) * D * D * D * D / 24 + (61 + 90 * T1 + 298 * C1 + 45 * T1 * T1 - 252 * eccPrimeSquared - 3 * C1 * C1) * D * D * D * D * D * D / 720);
	      lat = radToDeg(lat);

	      var lon = (D - (1 + 2 * T1 + C1) * D * D * D / 6 + (5 - 2 * C1 + 28 * T1 - 3 * C1 * C1 + 8 * eccPrimeSquared + 24 * T1 * T1) * D * D * D * D * D / 120) / Math.cos(phi1Rad);
	      lon = LongOrigin + radToDeg(lon);

	      var result;
	      if (utm.accuracy) {
	        var topRight = UTMtoLL({
	          northing: utm.northing + utm.accuracy,
	          easting: utm.easting + utm.accuracy,
	          zoneLetter: utm.zoneLetter,
	          zoneNumber: utm.zoneNumber
	        });
	        result = {
	          top: topRight.lat,
	          right: topRight.lon,
	          bottom: lat,
	          left: lon
	        };
	      } else {
	        result = {
	          lat: lat,
	          lon: lon
	        };
	      }
	      return result;
	    }

	    /**
	     * Calculates the MGRS letter designator for the given latitude.
	     *
	     * @private
	     * @param {number} lat The latitude in WGS84 to get the letter designator
	     *     for.
	     * @return {char} The letter designator.
	     */
	    function getLetterDesignator(lat) {
	      //This is here as an error flag to show that the Latitude is
	      //outside MGRS limits
	      var LetterDesignator = "Z";

	      if (84 >= lat && lat >= 72) LetterDesignator = "X";else if (72 > lat && lat >= 64) LetterDesignator = "W";else if (64 > lat && lat >= 56) LetterDesignator = "V";else if (56 > lat && lat >= 48) LetterDesignator = "U";else if (48 > lat && lat >= 40) LetterDesignator = "T";else if (40 > lat && lat >= 32) LetterDesignator = "S";else if (32 > lat && lat >= 24) LetterDesignator = "R";else if (24 > lat && lat >= 16) LetterDesignator = "Q";else if (16 > lat && lat >= 8) LetterDesignator = "P";else if (8 > lat && lat >= 0) LetterDesignator = "N";else if (0 > lat && lat >= -8) LetterDesignator = "M";else if (-8 > lat && lat >= -16) LetterDesignator = "L";else if (-16 > lat && lat >= -24) LetterDesignator = "K";else if (-24 > lat && lat >= -32) LetterDesignator = "J";else if (-32 > lat && lat >= -40) LetterDesignator = "H";else if (-40 > lat && lat >= -48) LetterDesignator = "G";else if (-48 > lat && lat >= -56) LetterDesignator = "F";else if (-56 > lat && lat >= -64) LetterDesignator = "E";else if (-64 > lat && lat >= -72) LetterDesignator = "D";else if (-72 > lat && lat >= -80) LetterDesignator = "C";
	      return LetterDesignator;
	    }

	    /**
	     * Encodes a UTM location as MGRS string.
	     *
	     * @private
	     * @param {object} utm An object literal with easting, northing,
	     *     zoneLetter, zoneNumber
	     * @param {number} accuracy Accuracy in digits (1-5).
	     * @return {string} MGRS string for the given UTM location.
	     */
	    function encode(utm, accuracy) {
	      var seasting = "" + utm.easting, snorthing = "" + utm.northing;

	      return utm.zoneNumber + utm.zoneLetter + get100kID(utm.easting, utm.northing, utm.zoneNumber) + seasting.substr(seasting.length - 5, accuracy) + snorthing.substr(snorthing.length - 5, accuracy);
	    }

	    /**
	       * Get the two letter 100k designator for a given UTM easting,
	       * northing and zone number value.
	       *
	       * @private
	       * @param {number} easting
	       * @param {number} northing
	       * @param {number} zoneNumber
	       * @return the two letter 100k designator for the given UTM location.
	       */
	    function get100kID(easting, northing, zoneNumber) {
	      var setParm = get100kSetForZone(zoneNumber);
	      var setColumn = Math.floor(easting / 100000);
	      var setRow = Math.floor(northing / 100000) % 20;
	      return getLetter100kID(setColumn, setRow, setParm);
	    }

	    /**
	       * Given a UTM zone number, figure out the MGRS 100K set it is in.
	       *
	       * @private
	       * @param {number} i An UTM zone number.
	       * @return {number} the 100k set the UTM zone is in.
	       */
	    function get100kSetForZone(i) {
	      var setParm = i % NUM_100K_SETS;
	      if (setParm == 0) setParm = NUM_100K_SETS;

	      return setParm;
	    }

	    /**
	      * Get the two-letter MGRS 100k designator given information
	      * translated from the UTM northing, easting and zone number.
	      *
	      * @private
	      * @param {number} column the column index as it relates to the MGRS
	      *        100k set spreadsheet, created from the UTM easting.
	      *        Values are 1-8.
	      * @param {number} row the row index as it relates to the MGRS 100k set
	      *        spreadsheet, created from the UTM northing value. Values
	      *        are from 0-19.
	      * @param {number} parm the set block, as it relates to the MGRS 100k set
	      *        spreadsheet, created from the UTM zone. Values are from
	      *        1-60.
	      * @return two letter MGRS 100k code.
	      */
	    function getLetter100kID(column, row, parm) {
	      // colOrigin and rowOrigin are the letters at the origin of the set
	      var index = parm - 1;
	      var colOrigin = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(index);
	      var rowOrigin = SET_ORIGIN_ROW_LETTERS.charCodeAt(index);

	      // colInt and rowInt are the letters to build to return
	      var colInt = colOrigin + column - 1;
	      var rowInt = rowOrigin + row;
	      var rollover = false;

	      if (colInt > Z) {
	        colInt = colInt - Z + A - 1;
	        rollover = true;
	      }

	      if (colInt == I || colOrigin < I && colInt > I || (colInt > I || colOrigin < I) && rollover) {
	        colInt++;
	      }

	      if (colInt == O || colOrigin < O && colInt > O || (colInt > O || colOrigin < O) && rollover) {
	        colInt++;

	        if (colInt == I) {
	          colInt++;
	        }
	      }

	      if (colInt > Z) {
	        colInt = colInt - Z + A - 1;
	      }

	      if (rowInt > V) {
	        rowInt = rowInt - V + A - 1;
	        rollover = true;
	      } else {
	        rollover = false;
	      }

	      if (rowInt == I || rowOrigin < I && rowInt > I || (rowInt > I || rowOrigin < I) && rollover) {
	        rowInt++;
	      }

	      if (rowInt == O || rowOrigin < O && rowInt > O || (rowInt > O || rowOrigin < O) && rollover) {
	        rowInt++;

	        if (rowInt == I) {
	          rowInt++;
	        }
	      }

	      if (rowInt > V) {
	        rowInt = rowInt - V + A - 1;
	      }

	      var twoLetter = String.fromCharCode(colInt) + String.fromCharCode(rowInt);
	      return twoLetter;
	    }

	    /**
	     * Decode the UTM parameters from a MGRS string.
	     *
	     * @private
	     * @param {string} mgrsString an UPPERCASE coordinate string is expected.
	     * @return {object} An object literal with easting, northing, zoneLetter,
	     *     zoneNumber and accuracy (in meters) properties.
	     */
	    function decode(mgrsString) {
	      if (mgrsString == null || mgrsString.length == 0) {
	        throw "MGRSPoint coverting from nothing";
	      }

	      var length = mgrsString.length;

	      var hunK = null;
	      var sb = "";
	      var testChar;
	      var i = 0;

	      // get Zone number
	      while (!/[A-Z]/.test(testChar = mgrsString.charAt(i))) {
	        if (i >= 2) {
	          throw "MGRSPoint bad conversion from: " + mgrsString;
	        }
	        sb += testChar;
	        i++;
	      }

	      var zoneNumber = parseInt(sb, 10);

	      if (i == 0 || i + 3 > length) {
	        // A good MGRS string has to be 4-5 digits long,
	        // ##AAA/#AAA at least.
	        throw "MGRSPoint bad conversion from: " + mgrsString;
	      }

	      var zoneLetter = mgrsString.charAt(i++);

	      // Should we check the zone letter here? Why not.
	      if (zoneLetter <= "A" || zoneLetter == "B" || zoneLetter == "Y" || zoneLetter >= "Z" || zoneLetter == "I" || zoneLetter == "O") {
	        throw "MGRSPoint zone letter " + zoneLetter + " not handled: " + mgrsString;
	      }

	      hunK = mgrsString.substring(i, i += 2);

	      var set = get100kSetForZone(zoneNumber);

	      var east100k = getEastingFromChar(hunK.charAt(0), set);
	      var north100k = getNorthingFromChar(hunK.charAt(1), set);

	      // We have a bug where the northing may be 2000000 too low.
	      // How
	      // do we know when to roll over?

	      while (north100k < getMinNorthing(zoneLetter)) {
	        north100k += 2000000;
	      }

	      // calculate the char index for easting/northing separator
	      var remainder = length - i;

	      if (remainder % 2 != 0) {
	        throw "MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters" + mgrsString;
	      }

	      var sep = remainder / 2;

	      var sepEasting = 0;
	      var sepNorthing = 0;

	      if (sep > 0) {
	        var accuracyBonus = 100000 / Math.pow(10, sep);
	        var sepEastingString = mgrsString.substring(i, i + sep);
	        sepEasting = parseFloat(sepEastingString) * accuracyBonus;
	        var sepNorthingString = mgrsString.substring(i + sep);
	        sepNorthing = parseFloat(sepNorthingString) * accuracyBonus;
	      }

	      var easting = sepEasting + east100k;
	      var northing = sepNorthing + north100k;

	      return {
	        easting: easting,
	        northing: northing,
	        zoneLetter: zoneLetter,
	        zoneNumber: zoneNumber,
	        accuracy: accuracyBonus
	      };
	    }

	    /**
	     * Given the first letter from a two-letter MGRS 100k zone, and given the
	     * MGRS table set for the zone number, figure out the easting value that
	     * should be added to the other, secondary easting value.
	     *
	     * @private
	     * @param {char} e The first letter from a two-letter MGRS 100´k zone.
	     * @param {number} set The MGRS table set for the zone number.
	     * @return {number} The easting value for the given letter and set.
	     */
	    function getEastingFromChar(e, set) {
	      // colOrigin is the letter at the origin of the set for the
	      // column
	      var curCol = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(set - 1);
	      var eastingValue = 100000;
	      var rewindMarker = false;

	      while (curCol != e.charCodeAt(0)) {
	        curCol++;
	        if (curCol == I) curCol++;
	        if (curCol == O) curCol++;
	        if (curCol > Z) {
	          if (rewindMarker) {
	            throw "Bad character: " + e;
	          }
	          curCol = A;
	          rewindMarker = true;
	        }
	        eastingValue += 100000;
	      }

	      return eastingValue;
	    }

	    /**
	     * Given the second letter from a two-letter MGRS 100k zone, and given the
	     * MGRS table set for the zone number, figure out the northing value that
	     * should be added to the other, secondary northing value. You have to
	     * remember that Northings are determined from the equator, and the vertical
	     * cycle of letters mean a 2000000 additional northing meters. This happens
	     * approx. every 18 degrees of latitude. This method does *NOT* count any
	     * additional northings. You have to figure out how many 2000000 meters need
	     * to be added for the zone letter of the MGRS coordinate.
	     *
	     * @private
	     * @param {char} n Second letter of the MGRS 100k zone
	     * @param {number} set The MGRS table set number, which is dependent on the
	     *     UTM zone number.
	     * @return {number} The northing value for the given letter and set.
	     */
	    function getNorthingFromChar(n, set) {
	      if (n > "V") {
	        throw "MGRSPoint given invalid Northing " + n;
	      }

	      // rowOrigin is the letter at the origin of the set for the
	      // column
	      var curRow = SET_ORIGIN_ROW_LETTERS.charCodeAt(set - 1);
	      var northingValue = 0;
	      var rewindMarker = false;

	      while (curRow != n.charCodeAt(0)) {
	        curRow++;
	        if (curRow == I) curRow++;
	        if (curRow == O) curRow++;
	        // fixing a bug making whole application hang in this loop
	        // when 'n' is a wrong character
	        if (curRow > V) {
	          if (rewindMarker) {
	            // making sure that this loop ends
	            throw "Bad character: " + n;
	          }
	          curRow = A;
	          rewindMarker = true;
	        }
	        northingValue += 100000;
	      }

	      return northingValue;
	    }

	    /**
	     * The function getMinNorthing returns the minimum northing value of a MGRS
	     * zone.
	     *
	     * Ported from Geotrans' c Lattitude_Band_Value structure table.
	     *
	     * @private
	     * @param {char} zoneLetter The MGRS zone to get the min northing for.
	     * @return {number}
	     */
	    function getMinNorthing(zoneLetter) {
	      var northing;
	      switch (zoneLetter) {
	        case "C":
	          northing = 1100000;
	          break;
	        case "D":
	          northing = 2000000;
	          break;
	        case "E":
	          northing = 2800000;
	          break;
	        case "F":
	          northing = 3700000;
	          break;
	        case "G":
	          northing = 4600000;
	          break;
	        case "H":
	          northing = 5500000;
	          break;
	        case "J":
	          northing = 6400000;
	          break;
	        case "K":
	          northing = 7300000;
	          break;
	        case "L":
	          northing = 8200000;
	          break;
	        case "M":
	          northing = 9100000;
	          break;
	        case "N":
	          northing = 0;
	          break;
	        case "P":
	          northing = 800000;
	          break;
	        case "Q":
	          northing = 1700000;
	          break;
	        case "R":
	          northing = 2600000;
	          break;
	        case "S":
	          northing = 3500000;
	          break;
	        case "T":
	          northing = 4400000;
	          break;
	        case "U":
	          northing = 5300000;
	          break;
	        case "V":
	          northing = 6200000;
	          break;
	        case "W":
	          northing = 7000000;
	          break;
	        case "X":
	          northing = 7900000;
	          break;
	        default:
	          northing = -1;
	      }
	      if (northing >= 0) {
	        return northing;
	      } else {
	        throw "Invalid zone letter: " + zoneLetter;
	      }
	    }

	    return {
	      forward: forward,
	      inverse: inverse,
	      encodeAsMGRS: encode,
	      decodeFromMGRS: decode,
	      LLtoUTM: LLtoUTM,
	      UTMtoLL: UTMtoLL
	    };
	  })();
	});

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime) {"use strict";

	var ARGON = __webpack_require__(2);
	var SG = __webpack_require__(7);
	var THREE = SG._;

	var ReferenceFrame = (function () {
	  var _THREE$Object3D = THREE.Object3D;
	  var ReferenceFrame = function ReferenceFrame(options) {
	    _THREE$Object3D.call(this);
	    ARGON.Util.mixinInputOutputEventHandlers(this);

	    this._id = options && options.id || ARGON.Util.cuid();
	    ReferenceFrame.frames[this._id] = this;

	    this.states = [];
	    this.currentState = {};
	  };

	  to5Runtime.inherits(ReferenceFrame, _THREE$Object3D);

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
	  ReferenceFrame.prototype.pushState = function (state) {
	    var now = Date.now();
	    var expiration = now - ReferenceFrame.OPTIONS.expires;

	    // make a deep clone
	    var s = JSON.parse(JSON.stringify(state));
	    s.timestamp = state.timestamp || now;

	    this.states.unshift(s);

	    while (this.states.length > 0 && this.states[this.states.length - 1].timestamp < expiration && this.states.length > ReferenceFrame.OPTIONS.maxStates) {
	      this.states.pop();
	    }

	    this._emit("pushState", s);

	    if (ARGON.isChannelManager && ReferenceFrame.subscribers[this._id]) {
	      ReferenceFrame.emitStateToSubscribers(this);
	    }
	  };

	  ReferenceFrame.prototype.getState = function (timestamp) {
	    var state = null;
	    if (timestamp) state = this.states.find(function (state) {
	      return state.timestamp <= timestamp;
	    });else state = this.states[0]; // most recent state
	    return state || {};
	  };

	  ReferenceFrame.prototype.update = function (context, force) {
	    var nextState = this.getState(context.timestamp);

	    if (this.currentState !== nextState || force === true) {
	      var pose = nextState.pose;
	      if (pose) {
	        if (_isNormalPose(pose)) {
	          _setTransformFromNormalPose.call(this, context, pose);
	        } else if (_isGeoPose(pose)) {
	          _setTransformFromGeoPose.call(this, context, pose);
	        } else {
	          console.error("Unknown pose format", pose);
	          context.frameTransforms.set(this, null);
	        }
	      } else {
	        context.frameTransforms.set(this, null);
	      }
	      force = true;
	      this.currentState = nextState;
	      ReferenceFrame.updatedFrames.push(this);
	    }
	    // update children
	    for (var i = 0, l = this.children.length; i < l; i++) {
	      this.children[i].update(context, force);
	    }
	  };

	  ReferenceFrame.prototype.emitStateUpdate = function () {
	    this._emit("stateUpdate", {
	      state: this.currentState
	    });
	  };

	  /**
	   * Returns the transform of this frame relative to the given reference frame,
	   * if the transform is defined.
	   * options.relativeTo default is parent reference frame
	   */
	  ReferenceFrame.prototype.getTransform = function (context, options) {
	    if (options && options.relativeTo) {
	      return this.getTransformRelativeTo(context, options.relativeTo);
	    } else {
	      return this.getTransformRelativeTo(context, this.parent);
	    }
	  };

	  ReferenceFrame.prototype.getTransformRelativeTo = function (context, other) {
	    if (this === other) return SG.Transform.translate(0, 0, 0);
	    var thisTransform = context.frameTransforms.get(this);
	    var otherTransform = context.frameTransforms.get(other);

	    if (ARGON.scene === other) return thisTranform;
	    if (thisTransform && otherTransform) return SG.Transform.multiply(SG.Transform.inverse(otherTransform), thisTransform);
	    return null;
	  };

	  ReferenceFrame.prototype.getGeoPose = function (context) {
	    var currentState = this.currentState;
	    var pose = currentState.pose;
	    var originUTM = context.originLocaiton.utm;

	    if (pose.location && pose.orientation) return JSON.parse(JSON.stringify(pose));

	    var thisTransform = context.frameTransforms.get(this);
	    if (originUTM && thisTransform) {
	      var spec = SG.Transform.interpret(thisTransform);

	      var utm = {
	        easting: originUTM.easting + spec.translate[0] / 100,
	        altitude: originUTM.altitude + spec.translate[1] / 100,
	        northing: originUTM.northing + spec.translate[2] / 100 };

	      return {
	        location: { utm: utm },
	        orientation: spec.rotate
	      };
	    }

	    var frame = this;
	    while (frame = frame.parent) {
	      var frameState = frame.currentState;
	      var framePose = frameState.pose;
	      if (!framePose) break;
	      if (framePose.location && framePose.orientation) {
	        var frameUTM = framePose.location.utm;
	        var frameOrientation = framePose.orientation;

	        var frameTransform = context.frameTransforms.get(frame);
	        var spec = SG.Transform.interpret(SG.Transform.multiply(SG.Transform.inverse(frameTransform), thisTransform));

	        var utm = {
	          easting: frameUTM.easting + spec.translate[0] / 100,
	          altitude: frameUTM.altitude + spec.translate[1] / 100,
	          northing: frameUTM.northing + spec.translate[2] / 100 };

	        var orientation = [frameOrientation[0] + spec.rotate[0], frameOrientation[1] + spec.rotate[1], frameOrientation[2] + spec.rotate[2]];

	        return {
	          location: { utm: utm },
	          orientation: orientation
	        };
	      }
	    }

	    return null;
	  };

	  return ReferenceFrame;
	})();

	ReferenceFrame.OPTIONS = {
	  expires: 10000, // ms
	  maxStates: 100
	};

	ReferenceFrame.updatedFrames = [];
	ReferenceFrame.frames = {};

	module.exports = ReferenceFrame;


	var _isNormalPose = function (pose) {
	  return pose instanceof Array;
	};

	var _isGeoPose = function (pose) {
	  return pose.location && pose.orientation;
	};

	var _setTransformFromNormalPose = function (context, pose) {
	  var transform = null;
	  if (pose && this.parent && this.parent instanceof SG.Scene === false) {
	    transform = SG.Transform.multiply(context.frameTransforms.get(this.parent), pose);
	  } else if (pose) {
	    transform = pose;
	  }
	  context.frameTransforms.set(this, transform);
	};

	var _setTransformFromGeoPose = function (context, pose) {
	  var transform = null;
	  if (pose.orientation.length !== 3) throw new Error("Expected pose.orientation to be an array of length 3");
	  var position = context.getPositionForLocation(pose.location);
	  if (position) {
	    transform = SG.Transform.thenMove(SG.Transform.rotate.apply(null, pose.orientation), position);
	  }
	  context.frameTransforms.set(this, transform);
	};

	ReferenceFrame.emitUpdates = function () {
	  var frames = ReferenceFrame.updatedFrames;
	  for (var i = 0; i < frames.length; i++) {
	    var frame = frames[i];
	    frame.emitStateUpdate();
	  }
	  ReferenceFrame.updatedFrames = [];
	};

	if (ARGON.isChannelManager) {
	  (function () {
	    var subscribers = ReferenceFrame.subscribers = {};

	    ReferenceFrame.alias = {};

	    ARGON.channelPort.on("ReferenceFrame#subscribe", function (event) {
	      var requestedID = event.id;
	      var id = ReferenceFrame.alias[requestedID] || requestedID;
	      var frame = ReferenceFrame.frames[id];
	      var channel = ARGON.Channel.eventMap.get(event);
	      var subscriptions = subscribers[id] = subscribers[id] || {};
	      if (!subscriptions[channel.id]) {
	        subscriptions[channel.id] = { channel: channel, requestedID: requestedID };
	        if (frame) {
	          var json = ReferenceFrame.toJSON(frame);
	          json.id = requestedID;
	          channel.port.trigger("ReferenceFrame#update", json);
	        }
	        var onCleanUp = function () {
	          delete subscriptions[channel.id];
	          channel.removeListener("cleanUp", onCleanUp);
	        };
	        channel.on("cleanUp", onCleanUp);
	      }
	    });

	    ReferenceFrame.emitStateToSubscribers = function (frame) {
	      var event = null;
	      var subscriptions = subscribers[frame._id];
	      for (var subscriberID in subscriptions) {
	        var subscription = subscriptions[subscriberID];
	        var channel = subscription.channel;
	        event = event || ReferenceFrame.toJSON(frame);
	        event.id = subscription.requestedID;
	        channel.port.trigger("ReferenceFrame#update", event);
	      }
	    };

	    ReferenceFrame.toJSON = function (frame) {
	      return {
	        id: frame._id,
	        state: frame.states[0],
	        parentID: frame.parent && frame.parent !== ARGON.scene ? frame.parent._id : null
	      };
	    };
	  })();
	}



	ReferenceFrame.get = function (id) {
	  var frame = null;
	  if (id) frame = ReferenceFrame.frames[id];
	  if (!frame) {
	    frame = new ReferenceFrame({ id: id });
	    ARGON.scene.add(frame);
	  }
	  return frame;
	};


	if (ARGON.isChannel) {
	  ARGON.managerPort.on("ReferenceFrame#update", function (event) {
	    var frame = ReferenceFrame.get(event.id);
	    if (event.state) frame.pushState(event.state);
	    if (event.parentID) {
	      var parent = ReferenceFrame.get(event.parentID);
	      if (!parent.subscribed) ReferenceFrame.subscribe(event.parentID);
	      if (frame.parent !== parent) parent.add(frame);
	    }
	  });

	  ReferenceFrame.subscribe = function (frameID) {
	    if (frameID instanceof ReferenceFrame) frameID = frameID._id;
	    var frame = ReferenceFrame.get(frameID);
	    if (!frame.subscribed) {
	      ARGON.managerPort.trigger("ReferenceFrame#subscribe", { id: frameID });
	      frame.subscribed = true;
	    }
	    return frame;
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var packageJSON = __webpack_require__(54);

	var ARGON = module.exports = __webpack_require__(3);
	ARGON.version = packageJSON.version;
	ARGON.semver = _parseVersion(ARGON.version);

	function _parseVersion(version) {
	  var tokens = version.split(".");
	  return {
	    major: tokens[0],
	    minor: tokens[1],
	    patch: tokens[2]
	  };
	}

/***/ },
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var RenderNode = __webpack_require__(20);
	    var EventHandler = __webpack_require__(4);
	    var ElementAllocator = __webpack_require__(19);
	    var Transform = __webpack_require__(6);
	    var Transitionable = __webpack_require__(29);

	    var _originZeroZero = [0, 0];

	    function _getElementSize(element) {
	        return [element.clientWidth, element.clientHeight];
	    }

	    /**
	     * The top-level container for a Famous-renderable piece of the document.
	     *   It is directly updated by the process-wide Engine object, and manages one
	     *   render tree root, which can contain other renderables.
	     *
	     * @class Context
	     * @constructor
	     * @private
	     * @param {Node} container Element in which content will be inserted
	     */
	    function Context(container) {
	        this.container = container;
	        this._allocator = new ElementAllocator(container);

	        this._node = new RenderNode();
	        this._eventOutput = new EventHandler();
	        this._size = _getElementSize(this.container);

	        this._perspectiveState = new Transitionable(0);
	        this._perspective = undefined;

	        this._nodeContext = {
	            allocator: this._allocator,
	            transform: Transform.identity,
	            opacity: 1,
	            origin: _originZeroZero,
	            align: null,
	            size: this._size
	        };

	        this._eventOutput.on('resize', function() {
	            this.setSize(_getElementSize(this.container));
	        }.bind(this));

	    }

	    // Note: Unused
	    Context.prototype.getAllocator = function getAllocator() {
	        return this._allocator;
	    };

	    /**
	     * Add renderables to this Context's render tree.
	     *
	     * @method add
	     *
	     * @param {Object} obj renderable object
	     * @return {RenderNode} RenderNode wrapping this object, if not already a RenderNode
	     */
	    Context.prototype.add = function add(obj) {
	        return this._node.add(obj);
	    };

	    /**
	     * Move this Context to another containing document element.
	     *
	     * @method migrate
	     *
	     * @param {Node} container Element to which content will be migrated
	     */
	    Context.prototype.migrate = function migrate(container) {
	        if (container === this.container) return;
	        this.container = container;
	        this._allocator.migrate(container);
	    };

	    /**
	     * Gets viewport size for Context.
	     *
	     * @method getSize
	     *
	     * @return {Array.Number} viewport size as [width, height]
	     */
	    Context.prototype.getSize = function getSize() {
	        return this._size;
	    };

	    /**
	     * Sets viewport size for Context.
	     *
	     * @method setSize
	     *
	     * @param {Array.Number} size [width, height].  If unspecified, use size of root document element.
	     */
	    Context.prototype.setSize = function setSize(size) {
	        if (!size) size = _getElementSize(this.container);
	        this._size[0] = size[0];
	        this._size[1] = size[1];
	    };

	    /**
	     * Commit this Context's content changes to the document.
	     *
	     * @private
	     * @method update
	     * @param {Object} contextParameters engine commit specification
	     */
	    Context.prototype.update = function update(contextParameters) {
	        if (contextParameters) {
	            if (contextParameters.transform) this._nodeContext.transform = contextParameters.transform;
	            if (contextParameters.opacity) this._nodeContext.opacity = contextParameters.opacity;
	            if (contextParameters.origin) this._nodeContext.origin = contextParameters.origin;
	            if (contextParameters.align) this._nodeContext.align = contextParameters.align;
	            if (contextParameters.size) this._nodeContext.size = contextParameters.size;
	        }
	        var perspective = this._perspectiveState.get();
	        if (perspective !== this._perspective) {
	            this.container.style.perspective = perspective ? perspective.toFixed() + 'px' : '';
	            this.container.style.webkitPerspective = perspective ? perspective.toFixed() : '';
	            this._perspective = perspective;
	        }

	        this._node.commit(this._nodeContext);
	    };

	    /**
	     * Get current perspective of this context in pixels.
	     *
	     * @method getPerspective
	     * @return {Number} depth perspective in pixels
	     */
	    Context.prototype.getPerspective = function getPerspective() {
	        return this._perspectiveState.get();
	    };

	    /**
	     * Set current perspective of this context in pixels.
	     *
	     * @method setPerspective
	     * @param {Number} perspective in pixels
	     * @param {Object} [transition] Transitionable object for applying the change
	     * @param {function(Object)} callback function called on completion of transition
	     */
	    Context.prototype.setPerspective = function setPerspective(perspective, transition, callback) {
	        return this._perspectiveState.set(perspective, transition, callback);
	    };

	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    Context.prototype.emit = function emit(type, event) {
	        return this._eventOutput.emit(type, event);
	    };

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} handler callback
	     * @return {EventHandler} this
	     */
	    Context.prototype.on = function on(type, handler) {
	        return this._eventOutput.on(type, handler);
	    };

	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on".
	     *
	     * @method removeListener
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function} handler function object to remove
	     * @return {EventHandler} internal event handler object (for chaining)
	     */
	    Context.prototype.removeListener = function removeListener(type, handler) {
	        return this._eventOutput.removeListener(type, handler);
	    };

	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    Context.prototype.pipe = function pipe(target) {
	        return this._eventOutput.pipe(target);
	    };

	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe".
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    Context.prototype.unpipe = function unpipe(target) {
	        return this._eventOutput.unpipe(target);
	    };

	    module.exports = Context;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     * Internal helper object to Context that handles the process of
	     *   creating and allocating DOM elements within a managed div.
	     *   Private.
	     *
	     * @class ElementAllocator
	     * @constructor
	     * @private
	     * @param {Node} container document element in which Famo.us content will be inserted
	     */
	    function ElementAllocator(container) {
	        if (!container) container = document.createDocumentFragment();
	        this.container = container;
	        this.detachedNodes = {};
	        this.nodeCount = 0;
	    }

	    /**
	     * Move the document elements from their original container to a new one.
	     *
	     * @private
	     * @method migrate
	     *
	     * @param {Node} container document element to which Famo.us content will be migrated
	     */
	    ElementAllocator.prototype.migrate = function migrate(container) {
	        var oldContainer = this.container;
	        if (container === oldContainer) return;

	        if (oldContainer instanceof DocumentFragment) {
	            container.appendChild(oldContainer);
	        }
	        else {
	            while (oldContainer.hasChildNodes()) {
	                container.appendChild(oldContainer.removeChild(oldContainer.firstChild));
	            }
	        }

	        this.container = container;
	    };

	    /**
	     * Allocate an element of specified type from the pool.
	     *
	     * @private
	     * @method allocate
	     *
	     * @param {string} type type of element, e.g. 'div'
	     * @return {Node} allocated document element
	     */
	    ElementAllocator.prototype.allocate = function allocate(type) {
	        type = type.toLowerCase();
	        if (!(type in this.detachedNodes)) this.detachedNodes[type] = [];
	        var nodeStore = this.detachedNodes[type];
	        var result;
	        if (nodeStore.length > 0) {
	            result = nodeStore.pop();
	        }
	        else {
	            result = document.createElement(type);
	            this.container.appendChild(result);
	        }
	        this.nodeCount++;
	        return result;
	    };

	    /**
	     * De-allocate an element of specified type to the pool.
	     *
	     * @private
	     * @method deallocate
	     *
	     * @param {Node} element document element to deallocate
	     */
	    ElementAllocator.prototype.deallocate = function deallocate(element) {
	        var nodeType = element.nodeName.toLowerCase();
	        var nodeStore = this.detachedNodes[nodeType];
	        nodeStore.push(element);
	        this.nodeCount--;
	    };

	    /**
	     * Get count of total allocated nodes in the document.
	     *
	     * @private
	     * @method getNodeCount
	     *
	     * @return {Number} total node count
	     */
	    ElementAllocator.prototype.getNodeCount = function getNodeCount() {
	        return this.nodeCount;
	    };

	    module.exports = ElementAllocator;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Entity = __webpack_require__(8);
	    var SpecParser = __webpack_require__(21);

	    /**
	     * A wrapper for inserting a renderable component (like a Modifer or
	     *   Surface) into the render tree.
	     *
	     * @class RenderNode
	     * @constructor
	     *
	     * @param {Object} object Target renderable component
	     */
	    function RenderNode(object) {
	        this._object = null;
	        this._child = null;
	        this._hasMultipleChildren = false;
	        this._isRenderable = false;
	        this._isModifier = false;

	        this._resultCache = {};
	        this._prevResults = {};

	        this._childResult = null;

	        if (object) this.set(object);
	    }

	    /**
	     * Append a renderable to the list of this node's children.
	     *   This produces a new RenderNode in the tree.
	     *   Note: Does not double-wrap if child is a RenderNode already.
	     *
	     * @method add
	     * @param {Object} child renderable object
	     * @return {RenderNode} new render node wrapping child
	     */
	    RenderNode.prototype.add = function add(child) {
	        var childNode = (child instanceof RenderNode) ? child : new RenderNode(child);
	        if (this._child instanceof Array) this._child.push(childNode);
	        else if (this._child) {
	            this._child = [this._child, childNode];
	            this._hasMultipleChildren = true;
	            this._childResult = []; // to be used later
	        }
	        else this._child = childNode;

	        return childNode;
	    };

	    /**
	     * Return the single wrapped object.  Returns null if this node has multiple child nodes.
	     *
	     * @method get
	     *
	     * @return {Ojbect} contained renderable object
	     */
	    RenderNode.prototype.get = function get() {
	        return this._object || (this._hasMultipleChildren ? null : (this._child ? this._child.get() : null));
	    };

	    /**
	     * Overwrite the list of children to contain the single provided object
	     *
	     * @method set
	     * @param {Object} child renderable object
	     * @return {RenderNode} this render node, or child if it is a RenderNode
	     */
	    RenderNode.prototype.set = function set(child) {
	        this._childResult = null;
	        this._hasMultipleChildren = false;
	        this._isRenderable = child.render ? true : false;
	        this._isModifier = child.modify ? true : false;
	        this._object = child;
	        this._child = null;
	        if (child instanceof RenderNode) return child;
	        else return this;
	    };

	    /**
	     * Get render size of contained object.
	     *
	     * @method getSize
	     * @return {Array.Number} size of this or size of single child.
	     */
	    RenderNode.prototype.getSize = function getSize() {
	        var result = null;
	        var target = this.get();
	        if (target && target.getSize) result = target.getSize();
	        if (!result && this._child && this._child.getSize) result = this._child.getSize();
	        return result;
	    };

	    // apply results of rendering this subtree to the document
	    function _applyCommit(spec, context, cacheStorage) {
	        var result = SpecParser.parse(spec, context);
	        var keys = Object.keys(result);
	        for (var i = 0; i < keys.length; i++) {
	            var id = keys[i];
	            var childNode = Entity.get(id);
	            var commitParams = result[id];
	            commitParams.allocator = context.allocator;
	            var commitResult = childNode.commit(commitParams);
	            if (commitResult) _applyCommit(commitResult, context, cacheStorage);
	            else cacheStorage[id] = commitParams;
	        }
	    }

	    /**
	     * Commit the content change from this node to the document.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context render context
	     */
	    RenderNode.prototype.commit = function commit(context) {
	        // free up some divs from the last loop
	        var prevKeys = Object.keys(this._prevResults);
	        for (var i = 0; i < prevKeys.length; i++) {
	            var id = prevKeys[i];
	            if (this._resultCache[id] === undefined) {
	                var object = Entity.get(id);
	                if (object.cleanup) object.cleanup(context.allocator);
	            }
	        }

	        this._prevResults = this._resultCache;
	        this._resultCache = {};
	        _applyCommit(this.render(), context, this._resultCache);
	    };

	    /**
	     * Generate a render spec from the contents of the wrapped component.
	     *
	     * @private
	     * @method render
	     *
	     * @return {Object} render specification for the component subtree
	     *    only under this node.
	     */
	    RenderNode.prototype.render = function render() {
	        if (this._isRenderable) return this._object.render();

	        var result = null;
	        if (this._hasMultipleChildren) {
	            result = this._childResult;
	            var children = this._child;
	            for (var i = 0; i < children.length; i++) {
	                result[i] = children[i].render();
	            }
	        }
	        else if (this._child) result = this._child.render();

	        return this._isModifier ? this._object.modify(result) : result;
	    };

	    module.exports = RenderNode;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Transform = __webpack_require__(6);

	    /**
	     *
	     * This object translates the rendering instructions ("render specs")
	     *   that renderable components generate into document update
	     *   instructions ("update specs").  Private.
	     *
	     * @private
	     * @class SpecParser
	     * @constructor
	     */
	    function SpecParser() {
	        this.result = {};
	    }
	    SpecParser._instance = new SpecParser();

	    /**
	     * Convert a render spec coming from the context's render chain to an
	     *    update spec for the update chain. This is the only major entry point
	     *    for a consumer of this class.
	     *
	     * @method parse
	     * @static
	     * @private
	     *
	     * @param {renderSpec} spec input render spec
	     * @param {Object} context context to do the parse in
	     * @return {Object} the resulting update spec (if no callback
	     *   specified, else none)
	     */
	    SpecParser.parse = function parse(spec, context) {
	        return SpecParser._instance.parse(spec, context);
	    };

	    /**
	     * Convert a renderSpec coming from the context's render chain to an update
	     *    spec for the update chain. This is the only major entrypoint for a
	     *    consumer of this class.
	     *
	     * @method parse
	     *
	     * @private
	     * @param {renderSpec} spec input render spec
	     * @param {Context} context
	     * @return {updateSpec} the resulting update spec
	     */
	    SpecParser.prototype.parse = function parse(spec, context) {
	        this.reset();
	        this._parseSpec(spec, context, Transform.identity);
	        return this.result;
	    };

	    /**
	     * Prepare SpecParser for re-use (or first use) by setting internal state
	     *  to blank.
	     *
	     * @private
	     * @method reset
	     */
	    SpecParser.prototype.reset = function reset() {
	        this.result = {};
	    };

	    // Multiply matrix M by vector v
	    function _vecInContext(v, m) {
	        return [
	            v[0] * m[0] + v[1] * m[4] + v[2] * m[8],
	            v[0] * m[1] + v[1] * m[5] + v[2] * m[9],
	            v[0] * m[2] + v[1] * m[6] + v[2] * m[10]
	        ];
	    }

	    var _originZeroZero = [0, 0];

	    // From the provided renderSpec tree, recursively compose opacities,
	    //    origins, transforms, and sizes corresponding to each surface id from
	    //    the provided renderSpec tree structure. On completion, those
	    //    properties of 'this' object should be ready to use to build an
	    //    updateSpec.
	    SpecParser.prototype._parseSpec = function _parseSpec(spec, parentContext, sizeContext) {
	        var id;
	        var target;
	        var transform;
	        var opacity;
	        var origin;
	        var align;
	        var size;

	        if (typeof spec === 'number') {
	            id = spec;
	            transform = parentContext.transform;
	            align = parentContext.align || parentContext.origin;
	            if (parentContext.size && align && (align[0] || align[1])) {
	                var alignAdjust = [align[0] * parentContext.size[0], align[1] * parentContext.size[1], 0];
	                transform = Transform.thenMove(transform, _vecInContext(alignAdjust, sizeContext));
	            }
	            this.result[id] = {
	                transform: transform,
	                opacity: parentContext.opacity,
	                origin: parentContext.origin || _originZeroZero,
	                align: parentContext.align || parentContext.origin || _originZeroZero,
	                size: parentContext.size
	            };
	        }
	        else if (!spec) { // placed here so 0 will be cached earlier
	            return;
	        }
	        else if (spec instanceof Array) {
	            for (var i = 0; i < spec.length; i++) {
	                this._parseSpec(spec[i], parentContext, sizeContext);
	            }
	        }
	        else {
	            target = spec.target;
	            transform = parentContext.transform;
	            opacity = parentContext.opacity;
	            origin = parentContext.origin;
	            align = parentContext.align;
	            size = parentContext.size;
	            var nextSizeContext = sizeContext;

	            if (spec.opacity !== undefined) opacity = parentContext.opacity * spec.opacity;
	            if (spec.transform) transform = Transform.multiply(parentContext.transform, spec.transform);
	            if (spec.origin) {
	                origin = spec.origin;
	                nextSizeContext = parentContext.transform;
	            }
	            if (spec.align) align = spec.align;
	            if (spec.size) {
	                var parentSize = parentContext.size;
	                size = [
	                    spec.size[0] !== undefined ? spec.size[0] : parentSize[0],
	                    spec.size[1] !== undefined ? spec.size[1] : parentSize[1]
	                ];
	                if (parentSize) {
	                    if (!align) align = origin;
	                    if (align && (align[0] || align[1])) transform = Transform.thenMove(transform, _vecInContext([align[0] * parentSize[0], align[1] * parentSize[1], 0], sizeContext));
	                    if (origin && (origin[0] || origin[1])) transform = Transform.moveThen([-origin[0] * size[0], -origin[1] * size[1], 0], transform);
	                }
	                nextSizeContext = parentContext.transform;
	                origin = null;
	                align = null;
	            }

	            this._parseSpec(target, {
	                transform: transform,
	                opacity: opacity,
	                origin: origin,
	                align: align,
	                size: size
	            }, nextSizeContext);
	        }
	    };

	    module.exports = SpecParser;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Entity = __webpack_require__(8);
	    var EventHandler = __webpack_require__(4);
	    var Transform = __webpack_require__(6);

	    var devicePixelRatio = window.devicePixelRatio || 1;
	    var usePrefix = document.createElement('div').style.webkitTransform !== undefined;

	    /**
	     * A base class for viewable content and event
	     *   targets inside a Famo.us application, containing a renderable document
	     *   fragment. Like an HTML div, it can accept internal markup,
	     *   properties, classes, and handle events.
	     *
	     * @class Surface
	     * @constructor
	     *
	     * @param {Object} [options] default option overrides
	     * @param {Array.Number} [options.size] [width, height] in pixels
	     * @param {Array.string} [options.classes] CSS classes to set on inner content
	     * @param {Array} [options.properties] string dictionary of HTML attributes to set on target div
	     * @param {string} [options.content] inner (HTML) content of surface
	     */
	    function Surface(options) {
	        this.options = {};

	        this.properties = {};
	        this.content = '';
	        this.classList = [];
	        this.size = null;

	        this._classesDirty = true;
	        this._stylesDirty = true;
	        this._sizeDirty = true;
	        this._contentDirty = true;

	        this._dirtyClasses = [];

	        this._matrix = null;
	        this._opacity = 1;
	        this._origin = null;
	        this._size = null;

	        /** @ignore */
	        this.eventForwarder = function eventForwarder(event) {
	            this.emit(event.type, event);
	        }.bind(this);
	        this.eventHandler = new EventHandler();
	        this.eventHandler.bindThis(this);

	        this.id = Entity.register(this);

	        if (options) this.setOptions(options);

	        this._currTarget = null;
	    }
	    Surface.prototype.elementType = 'div';
	    Surface.prototype.elementClass = 'famous-surface';

	    /**
	     * Bind a callback function to an event type handled by this object.
	     *
	     * @method "on"
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} fn handler callback
	     * @return {EventHandler} this
	     */
	    Surface.prototype.on = function on(type, fn) {
	        if (this._currTarget) this._currTarget.addEventListener(type, this.eventForwarder);
	        this.eventHandler.on(type, fn);
	    };

	    /**
	     * Unbind an event by type and handler.
	     *   This undoes the work of "on"
	     *
	     * @method removeListener
	     * @param {string} type event type key (for example, 'click')
	     * @param {function(string, Object)} fn handler
	     */
	    Surface.prototype.removeListener = function removeListener(type, fn) {
	        this.eventHandler.removeListener(type, fn);
	    };

	    /**
	     * Trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} [event] event data
	     * @return {EventHandler} this
	     */
	    Surface.prototype.emit = function emit(type, event) {
	        if (event && !event.origin) event.origin = this;
	        var handled = this.eventHandler.emit(type, event);
	        if (handled && event && event.stopPropagation) event.stopPropagation();
	        return handled;
	    };

	    /**
	     * Add event handler object to set of downstream handlers.
	     *
	     * @method pipe
	     *
	     * @param {EventHandler} target event handler target object
	     * @return {EventHandler} passed event handler
	     */
	    Surface.prototype.pipe = function pipe(target) {
	        return this.eventHandler.pipe(target);
	    };

	    /**
	     * Remove handler object from set of downstream handlers.
	     *   Undoes work of "pipe"
	     *
	     * @method unpipe
	     *
	     * @param {EventHandler} target target handler object
	     * @return {EventHandler} provided target
	     */
	    Surface.prototype.unpipe = function unpipe(target) {
	        return this.eventHandler.unpipe(target);
	    };

	    /**
	     * Return spec for this surface. Note that for a base surface, this is
	     *    simply an id.
	     *
	     * @method render
	     * @private
	     * @return {Object} render spec for this surface (spec id)
	     */
	    Surface.prototype.render = function render() {
	        return this.id;
	    };

	    /**
	     * Set CSS-style properties on this Surface. Note that this will cause
	     *    dirtying and thus re-rendering, even if values do not change.
	     *
	     * @method setProperties
	     * @param {Object} properties property dictionary of "key" => "value"
	     */
	    Surface.prototype.setProperties = function setProperties(properties) {
	        for (var n in properties) {
	            this.properties[n] = properties[n];
	        }
	        this._stylesDirty = true;
	    };

	    /**
	     * Get CSS-style properties on this Surface.
	     *
	     * @method getProperties
	     *
	     * @return {Object} Dictionary of this Surface's properties.
	     */
	    Surface.prototype.getProperties = function getProperties() {
	        return this.properties;
	    };

	    /**
	     * Add CSS-style class to the list of classes on this Surface. Note
	     *   this will map directly to the HTML property of the actual
	     *   corresponding rendered <div>.
	     *
	     * @method addClass
	     * @param {string} className name of class to add
	     */
	    Surface.prototype.addClass = function addClass(className) {
	        if (this.classList.indexOf(className) < 0) {
	            this.classList.push(className);
	            this._classesDirty = true;
	        }
	    };

	    /**
	     * Remove CSS-style class from the list of classes on this Surface.
	     *   Note this will map directly to the HTML property of the actual
	     *   corresponding rendered <div>.
	     *
	     * @method removeClass
	     * @param {string} className name of class to remove
	     */
	    Surface.prototype.removeClass = function removeClass(className) {
	        var i = this.classList.indexOf(className);
	        if (i >= 0) {
	            this._dirtyClasses.push(this.classList.splice(i, 1)[0]);
	            this._classesDirty = true;
	        }
	    };

	    /**
	     * Reset class list to provided dictionary.
	     * @method setClasses
	     * @param {Array.string} classList
	     */
	    Surface.prototype.setClasses = function setClasses(classList) {
	        var i = 0;
	        var removal = [];
	        for (i = 0; i < this.classList.length; i++) {
	            if (classList.indexOf(this.classList[i]) < 0) removal.push(this.classList[i]);
	        }
	        for (i = 0; i < removal.length; i++) this.removeClass(removal[i]);
	        // duplicates are already checked by addClass()
	        for (i = 0; i < classList.length; i++) this.addClass(classList[i]);
	    };

	    /**
	     * Get array of CSS-style classes attached to this div.
	     *
	     * @method getClasslist
	     * @return {Array.string} array of class names
	     */
	    Surface.prototype.getClassList = function getClassList() {
	        return this.classList;
	    };

	    /**
	     * Set or overwrite inner (HTML) content of this surface. Note that this
	     *    causes a re-rendering if the content has changed.
	     *
	     * @method setContent
	     * @param {string|Document Fragment} content HTML content
	     */
	    Surface.prototype.setContent = function setContent(content) {
	        if (this.content !== content) {
	            this.content = content;
	            this._contentDirty = true;
	        }
	    };

	    /**
	     * Return inner (HTML) content of this surface.
	     *
	     * @method getContent
	     *
	     * @return {string} inner (HTML) content
	     */
	    Surface.prototype.getContent = function getContent() {
	        return this.content;
	    };

	    /**
	     * Set options for this surface
	     *
	     * @method setOptions
	     * @param {Object} [options] overrides for default options.  See constructor.
	     */
	    Surface.prototype.setOptions = function setOptions(options) {
	        if (options.size) this.setSize(options.size);
	        if (options.classes) this.setClasses(options.classes);
	        if (options.properties) this.setProperties(options.properties);
	        if (options.content) this.setContent(options.content);
	    };

	    //  Attach Famous event handling to document events emanating from target
	    //    document element.  This occurs just after deployment to the document.
	    //    Calling this enables methods like #on and #pipe.
	    function _addEventListeners(target) {
	        for (var i in this.eventHandler.listeners) {
	            target.addEventListener(i, this.eventForwarder);
	        }
	    }

	    //  Detach Famous event handling from document events emanating from target
	    //  document element.  This occurs just before recall from the document.
	    function _removeEventListeners(target) {
	        for (var i in this.eventHandler.listeners) {
	            target.removeEventListener(i, this.eventForwarder);
	        }
	    }

	     //  Apply to document all changes from removeClass() since last setup().
	    function _cleanupClasses(target) {
	        for (var i = 0; i < this._dirtyClasses.length; i++) target.classList.remove(this._dirtyClasses[i]);
	        this._dirtyClasses = [];
	    }

	    // Apply values of all Famous-managed styles to the document element.
	    //  These will be deployed to the document on call to #setup().
	    function _applyStyles(target) {
	        for (var n in this.properties) {
	            target.style[n] = this.properties[n];
	        }
	    }

	    // Clear all Famous-managed styles from the document element.
	    // These will be deployed to the document on call to #setup().
	    function _cleanupStyles(target) {
	        for (var n in this.properties) {
	            target.style[n] = '';
	        }
	    }

	    /**
	     * Return a Matrix's webkit css representation to be used with the
	     *    CSS3 -webkit-transform style.
	     *    Example: -webkit-transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,716,243,0,1)
	     *
	     * @method _formatCSSTransform
	     * @private
	     * @param {FamousMatrix} m matrix
	     * @return {string} matrix3d CSS style representation of the transform
	     */
	    function _formatCSSTransform(m) {
	        m[12] = Math.round(m[12] * devicePixelRatio) / devicePixelRatio;
	        m[13] = Math.round(m[13] * devicePixelRatio) / devicePixelRatio;

	        var result = 'matrix3d(';
	        for (var i = 0; i < 15; i++) {
	            result += (m[i] < 0.000001 && m[i] > -0.000001) ? '0,' : m[i] + ',';
	        }
	        result += m[15] + ')';
	        return result;
	    }

	    /**
	     * Directly apply given FamousMatrix to the document element as the
	     *   appropriate webkit CSS style.
	     *
	     * @method setMatrix
	     *
	     * @static
	     * @private
	     * @param {Element} element document element
	     * @param {FamousMatrix} matrix
	     */

	    var _setMatrix;
	    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
	        _setMatrix = function(element, matrix) {
	            element.style.zIndex = (matrix[14] * 1000000) | 0;    // fix for Firefox z-buffer issues
	            element.style.transform = _formatCSSTransform(matrix);
	        };
	    }
	    else if (usePrefix) {
	        _setMatrix = function(element, matrix) {
	            element.style.webkitTransform = _formatCSSTransform(matrix);
	        };
	    }
	    else {
	        _setMatrix = function(element, matrix) {
	            element.style.transform = _formatCSSTransform(matrix);
	        };
	    }

	    // format origin as CSS percentage string
	    function _formatCSSOrigin(origin) {
	        return (100 * origin[0]) + '% ' + (100 * origin[1]) + '%';
	    }

	     // Directly apply given origin coordinates to the document element as the
	     // appropriate webkit CSS style.
	    var _setOrigin = usePrefix ? function(element, origin) {
	        element.style.webkitTransformOrigin = _formatCSSOrigin(origin);
	    } : function(element, origin) {
	        element.style.transformOrigin = _formatCSSOrigin(origin);
	    };

	     // Shrink given document element until it is effectively invisible.
	    var _setInvisible = usePrefix ? function(element) {
	        element.style.webkitTransform = 'scale3d(0.0001,0.0001,1)';
	        element.style.opacity = 0;
	    } : function(element) {
	        element.style.transform = 'scale3d(0.0001,0.0001,1)';
	        element.style.opacity = 0;
	    };

	    function _xyNotEquals(a, b) {
	        return (a && b) ? (a[0] !== b[0] || a[1] !== b[1]) : a !== b;
	    }

	    /**
	     * One-time setup for an element to be ready for commits to document.
	     *
	     * @private
	     * @method setup
	     *
	     * @param {ElementAllocator} allocator document element pool for this context
	     */
	    Surface.prototype.setup = function setup(allocator) {
	        var target = allocator.allocate(this.elementType);
	        if (this.elementClass) {
	            if (this.elementClass instanceof Array) {
	                for (var i = 0; i < this.elementClass.length; i++) {
	                    target.classList.add(this.elementClass[i]);
	                }
	            }
	            else {
	                target.classList.add(this.elementClass);
	            }
	        }
	        target.style.display = '';
	        _addEventListeners.call(this, target);
	        this._currTarget = target;
	        this._stylesDirty = true;
	        this._classesDirty = true;
	        this._sizeDirty = true;
	        this._contentDirty = true;
	        this._matrix = null;
	        this._opacity = undefined;
	        this._origin = null;
	        this._size = null;
	    };

	    /**
	     * Apply changes from this component to the corresponding document element.
	     * This includes changes to classes, styles, size, content, opacity, origin,
	     * and matrix transforms.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context commit context
	     */
	    Surface.prototype.commit = function commit(context) {
	        if (!this._currTarget) this.setup(context.allocator);
	        var target = this._currTarget;

	        var matrix = context.transform;
	        var opacity = context.opacity;
	        var origin = context.origin;
	        var size = context.size;

	        if (this._classesDirty) {
	            _cleanupClasses.call(this, target);
	            var classList = this.getClassList();
	            for (var i = 0; i < classList.length; i++) target.classList.add(classList[i]);
	            this._classesDirty = false;
	        }

	        if (this._stylesDirty) {
	            _applyStyles.call(this, target);
	            this._stylesDirty = false;
	        }

	        if (this._contentDirty) {
	            this.deploy(target);
	            this.eventHandler.emit('deploy');
	            this._contentDirty = false;
	        }

	        if (this.size) {
	            var origSize = size;
	            size = [this.size[0], this.size[1]];
	            if (size[0] === undefined && origSize[0]) size[0] = origSize[0];
	            if (size[1] === undefined && origSize[1]) size[1] = origSize[1];
	        }

	        if (size[0] === true) size[0] = target.clientWidth;
	        if (size[1] === true) size[1] = target.clientHeight;

	        if (_xyNotEquals(this._size, size)) {
	            if (!this._size) this._size = [0, 0];
	            this._size[0] = size[0];
	            this._size[1] = size[1];
	            this._sizeDirty = true;
	        }

	        if (!matrix && this._matrix) {
	            this._matrix = null;
	            this._opacity = 0;
	            _setInvisible(target);
	            return;
	        }

	        if (this._opacity !== opacity) {
	            this._opacity = opacity;
	            target.style.opacity = (opacity >= 1) ? '0.999999' : opacity;
	        }

	        if (_xyNotEquals(this._origin, origin) || Transform.notEquals(this._matrix, matrix) || this._sizeDirty) {
	            if (!matrix) matrix = Transform.identity;
	            this._matrix = matrix;
	            var aaMatrix = matrix;
	            if (origin) {
	                if (!this._origin) this._origin = [0, 0];
	                this._origin[0] = origin[0];
	                this._origin[1] = origin[1];
	                aaMatrix = Transform.thenMove(matrix, [-this._size[0] * origin[0], -this._size[1] * origin[1], 0]);
	                _setOrigin(target, origin);
	            }
	            _setMatrix(target, aaMatrix);
	        }

	        if (this._sizeDirty) {
	            if (this._size) {
	                target.style.width = (this.size && this.size[0] === true) ? '' : this._size[0] + 'px';
	                target.style.height = (this.size && this.size[1] === true) ?  '' : this._size[1] + 'px';
	            }
	            this._sizeDirty = false;
	        }
	    };

	    /**
	     *  Remove all Famous-relevant attributes from a document element.
	     *    This is called by SurfaceManager's detach().
	     *    This is in some sense the reverse of .deploy().
	     *
	     * @private
	     * @method cleanup
	     * @param {ElementAllocator} allocator
	     */
	    Surface.prototype.cleanup = function cleanup(allocator) {
	        var i = 0;
	        var target = this._currTarget;
	        this.eventHandler.emit('recall');
	        this.recall(target);
	        target.style.display = 'none';
	        target.style.width = '';
	        target.style.height = '';
	        this._size = null;
	        _cleanupStyles.call(this, target);
	        var classList = this.getClassList();
	        _cleanupClasses.call(this, target);
	        for (i = 0; i < classList.length; i++) target.classList.remove(classList[i]);
	        if (this.elementClass) {
	            if (this.elementClass instanceof Array) {
	                for (i = 0; i < this.elementClass.length; i++) {
	                    target.classList.remove(this.elementClass[i]);
	                }
	            }
	            else {
	                target.classList.remove(this.elementClass);
	            }
	        }
	        _removeEventListeners.call(this, target);
	        this._currTarget = null;
	        allocator.deallocate(target);
	        _setInvisible(target);
	    };

	    /**
	     * Place the document element that this component manages into the document.
	     *
	     * @private
	     * @method deploy
	     * @param {Node} target document parent of this container
	     */
	    Surface.prototype.deploy = function deploy(target) {
	        var content = this.getContent();
	        if (content instanceof Node) {
	            while (target.hasChildNodes()) target.removeChild(target.firstChild);
	            target.appendChild(content);
	        }
	        else target.innerHTML = content;
	    };

	    /**
	     * Remove any contained document content associated with this surface
	     *   from the actual document.
	     *
	     * @private
	     * @method recall
	     */
	    Surface.prototype.recall = function recall(target) {
	        var df = document.createDocumentFragment();
	        while (target.hasChildNodes()) df.appendChild(target.firstChild);
	        this.setContent(df);
	    };

	    /**
	     *  Get the x and y dimensions of the surface.
	     *
	     * @method getSize
	     * @param {boolean} actual return computed size rather than provided
	     * @return {Array.Number} [x,y] size of surface
	     */
	    Surface.prototype.getSize = function getSize(actual) {
	        return actual ? this._size : (this.size || this._size);
	    };

	    /**
	     * Set x and y dimensions of the surface.
	     *
	     * @method setSize
	     * @param {Array.Number} size as [width, height]
	     */
	    Surface.prototype.setSize = function setSize(size) {
	        this.size = size ? [size[0], size[1]] : null;
	        this._sizeDirty = true;
	    };

	    module.exports = Surface;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var EventHandler = __webpack_require__(4);

	    /**
	     * A switch which wraps several event destinations and
	     *  redirects received events to at most one of them.
	     *  Setting the 'mode' of the object dictates which one
	     *  of these destinations will receive events.
	     *
	     * @class EventArbiter
	     * @constructor
	     *
	     * @param {Number | string} startMode initial setting of switch,
	     */
	    function EventArbiter(startMode) {
	        this.dispatchers = {};
	        this.currMode = undefined;
	        this.setMode(startMode);
	    }

	    /**
	     * Set switch to this mode, passing events to the corresponding
	     *   EventHandler.  If mode has changed, emits 'change' event,
	     *   emits 'unpipe' event to the old mode's handler, and emits 'pipe'
	     *   event to the new mode's handler.
	     *
	     * @method setMode
	     *
	     * @param {string | number} mode indicating which event handler to send to.
	     */
	    EventArbiter.prototype.setMode = function setMode(mode) {
	        if (mode !== this.currMode) {
	            var startMode = this.currMode;

	            if (this.dispatchers[this.currMode]) this.dispatchers[this.currMode].trigger('unpipe');
	            this.currMode = mode;
	            if (this.dispatchers[mode]) this.dispatchers[mode].emit('pipe');
	            this.emit('change', {from: startMode, to: mode});
	        }
	    };

	    /**
	     * Return the existing EventHandler corresponding to this
	     *   mode, creating one if it doesn't exist.
	     *
	     * @method forMode
	     *
	     * @param {string | number} mode mode to which this eventHandler corresponds
	     *
	     * @return {EventHandler} eventHandler corresponding to this mode
	     */
	    EventArbiter.prototype.forMode = function forMode(mode) {
	        if (!this.dispatchers[mode]) this.dispatchers[mode] = new EventHandler();
	        return this.dispatchers[mode];
	    };

	    /**
	     * Trigger an event, sending to currently selected handler, if
	     *   it is listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} eventType event type key (for example, 'click')
	     * @param {Object} event event data
	     * @return {EventHandler} this
	     */
	    EventArbiter.prototype.emit = function emit(eventType, event) {
	        if (this.currMode === undefined) return false;
	        if (!event) event = {};
	        var dispatcher = this.dispatchers[this.currMode];
	        if (dispatcher) return dispatcher.trigger(eventType, event);
	    };

	    module.exports = EventArbiter;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var EventHandler = __webpack_require__(4);

	    /**
	     * EventFilter regulates the broadcasting of events based on
	     *  a specified condition function of standard event type: function(type, data).
	     *
	     * @class EventFilter
	     * @constructor
	     *
	     * @param {function} condition function to determine whether or not
	     *    events are emitted.
	     */
	    function EventFilter(condition) {
	        EventHandler.call(this);
	        this._condition = condition;
	    }
	    EventFilter.prototype = Object.create(EventHandler.prototype);
	    EventFilter.prototype.constructor = EventFilter;

	    /**
	     * If filter condition is met, trigger an event, sending to all downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} data event data
	     * @return {EventHandler} this
	     */
	    EventFilter.prototype.emit = function emit(type, data) {
	        if (this._condition(type, data))
	            return EventHandler.prototype.emit.apply(this, arguments);
	    };

	    /**
	     * An alias of emit. Trigger determines whether to send
	     *  events based on the return value of it's condition function
	     *  when passed the event type and associated data.
	     *
	     * @method trigger
	     * @param {string} type name of the event
	     * @param {object} data associated data
	     */
	    EventFilter.prototype.trigger = EventFilter.prototype.emit;

	    module.exports = EventFilter;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var EventHandler = __webpack_require__(4);

	    /**
	     * EventMapper routes events to various event destinations
	     *  based on custom logic.  The function signature is arbitrary.
	     *
	     * @class EventMapper
	     * @constructor
	     *
	     * @param {function} mappingFunction function to determine where
	     *  events are routed to.
	     */
	    function EventMapper(mappingFunction) {
	        EventHandler.call(this);
	        this._mappingFunction = mappingFunction;
	    }
	    EventMapper.prototype = Object.create(EventHandler.prototype);
	    EventMapper.prototype.constructor = EventMapper;

	    EventMapper.prototype.subscribe = null;
	    EventMapper.prototype.unsubscribe = null;

	    /**
	     * Trigger an event, sending to all mapped downstream handlers
	     *   listening for provided 'type' key.
	     *
	     * @method emit
	     *
	     * @param {string} type event type key (for example, 'click')
	     * @param {Object} data event data
	     * @return {EventHandler} this
	     */
	    EventMapper.prototype.emit = function emit(type, data) {
	        var target = this._mappingFunction.apply(this, arguments);
	        if (target && (target.emit instanceof Function)) target.emit(type, data);
	    };

	    /**
	     * Alias of emit.
	     * @method trigger
	     */
	    EventMapper.prototype.trigger = EventMapper.prototype.emit;

	    module.exports = EventMapper;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Matrix = __webpack_require__(11);

	    /**
	     * @class Quaternion
	     * @constructor
	     *
	     * @param {Number} w
	     * @param {Number} x
	     * @param {Number} y
	     * @param {Number} z
	     */
	    function Quaternion(w,x,y,z) {
	        if (arguments.length === 1) this.set(w);
	        else {
	            this.w = (w !== undefined) ? w : 1;  //Angle
	            this.x = (x !== undefined) ? x : 0;  //Axis.x
	            this.y = (y !== undefined) ? y : 0;  //Axis.y
	            this.z = (z !== undefined) ? z : 0;  //Axis.z
	        }
	        return this;
	    }

	    var register = new Quaternion(1,0,0,0);

	    /**
	     * Doc: TODO
	     * @method add
	     * @param {Quaternion} q
	     * @return {Quaternion}
	     */
	    Quaternion.prototype.add = function add(q) {
	        return register.setWXYZ(
	            this.w + q.w,
	            this.x + q.x,
	            this.y + q.y,
	            this.z + q.z
	        );
	    };

	    /*
	     * Docs: TODO
	     *
	     * @method sub
	     * @param {Quaternion} q
	     * @return {Quaternion}
	     */
	    Quaternion.prototype.sub = function sub(q) {
	        return register.setWXYZ(
	            this.w - q.w,
	            this.x - q.x,
	            this.y - q.y,
	            this.z - q.z
	        );
	    };

	    /**
	     * Doc: TODO
	     *
	     * @method scalarDivide
	     * @param {Number} s
	     * @return {Quaternion}
	     */
	    Quaternion.prototype.scalarDivide = function scalarDivide(s) {
	        return this.scalarMultiply(1/s);
	    };

	    /*
	     * Docs: TODO
	     *
	     * @method scalarMultiply
	     * @param {Number} s
	     * @return {Quaternion}
	     */
	    Quaternion.prototype.scalarMultiply = function scalarMultiply(s) {
	        return register.setWXYZ(
	            this.w * s,
	            this.x * s,
	            this.y * s,
	            this.z * s
	        );
	    };

	    /*
	     * Docs: TODO
	     *
	     * @method multiply
	     * @param {Quaternion} q
	     * @return {Quaternion}
	     */
	    Quaternion.prototype.multiply = function multiply(q) {
	        //left-handed coordinate system multiplication
	        var x1 = this.x;
	        var y1 = this.y;
	        var z1 = this.z;
	        var w1 = this.w;
	        var x2 = q.x;
	        var y2 = q.y;
	        var z2 = q.z;
	        var w2 = q.w || 0;

	        return register.setWXYZ(
	            w1*w2 - x1*x2 - y1*y2 - z1*z2,
	            x1*w2 + x2*w1 + y2*z1 - y1*z2,
	            y1*w2 + y2*w1 + x1*z2 - x2*z1,
	            z1*w2 + z2*w1 + x2*y1 - x1*y2
	        );
	    };

	    var conj = new Quaternion(1,0,0,0);

	    /*
	     * Docs: TODO
	     *
	     * @method rotateVector
	     * @param {Vector} v
	     * @return {Quaternion}
	     */
	    Quaternion.prototype.rotateVector = function rotateVector(v) {
	        conj.set(this.conj());
	        return register.set(this.multiply(v).multiply(conj));
	    };

	    /*
	     * Docs: TODO
	     *
	     * @method inverse
	     * @return {Quaternion}
	     */
	    Quaternion.prototype.inverse = function inverse() {
	        return register.set(this.conj().scalarDivide(this.normSquared()));
	    };

	    /*
	     * Docs: TODO
	     *
	     * @method negate
	     * @return {Quaternion}
	     */
	    Quaternion.prototype.negate = function negate() {
	        return this.scalarMultiply(-1);
	    };

	    /*
	     * Docs: TODO
	     *
	     * @method conj
	     * @return {Quaternion}
	     */
	    Quaternion.prototype.conj = function conj() {
	        return register.setWXYZ(
	             this.w,
	            -this.x,
	            -this.y,
	            -this.z
	        );
	    };

	    /*
	     * Docs: TODO
	     *
	     * @method normalize
	     * @param {Number} length
	     * @return {Quaternion}
	     */
	    Quaternion.prototype.normalize = function normalize(length) {
	        length = (length === undefined) ? 1 : length;
	        return this.scalarDivide(length * this.norm());
	    };

	    /*
	     * Docs: TODO
	     *
	     * @method makeFromAngleAndAxis
	     * @param {Number} angle
	     * @param {Vector} v
	     * @return {Quaternion}
	     */
	    Quaternion.prototype.makeFromAngleAndAxis = function makeFromAngleAndAxis(angle, v) {
	        //left handed quaternion creation: theta -> -theta
	        var n  = v.normalize();
	        var ha = angle*0.5;
	        var s  = -Math.sin(ha);
	        this.x = s*n.x;
	        this.y = s*n.y;
	        this.z = s*n.z;
	        this.w = Math.cos(ha);
	        return this;
	    };

	    /*
	     * Docs: TODO
	     *
	     * @method setWXYZ
	     * @param {Number} w
	     * @param {Number} x
	     * @param {Number} y
	     * @param {Number} z
	     * @return {Quaternion}
	     */
	    Quaternion.prototype.setWXYZ = function setWXYZ(w,x,y,z) {
	        register.clear();
	        this.w = w;
	        this.x = x;
	        this.y = y;
	        this.z = z;
	        return this;
	    };

	    /*
	     * Docs: TODO
	     *
	     * @method set
	     * @param {Array|Quaternion} v
	     * @return {Quaternion}
	     */
	    Quaternion.prototype.set = function set(v) {
	        if (v instanceof Array) {
	            this.w = v[0];
	            this.x = v[1];
	            this.y = v[2];
	            this.z = v[3];
	        }
	        else {
	            this.w = v.w;
	            this.x = v.x;
	            this.y = v.y;
	            this.z = v.z;
	        }
	        if (this !== register) register.clear();
	        return this;
	    };

	    /**
	     * Docs: TODO
	     *
	     * @method put
	     * @param {Quaternion} q
	     * @return {Quaternion}
	     */
	    Quaternion.prototype.put = function put(q) {
	        q.set(register);
	    };

	    /**
	     * Doc: TODO
	     *
	     * @method clone
	     * @return {Quaternion}
	     */
	    Quaternion.prototype.clone = function clone() {
	        return new Quaternion(this);
	    };

	    /**
	     * Doc: TODO
	     *
	     * @method clear
	     * @return {Quaternion}
	     */
	    Quaternion.prototype.clear = function clear() {
	        this.w = 1;
	        this.x = 0;
	        this.y = 0;
	        this.z = 0;
	        return this;
	    };

	    /**
	     * Doc: TODO
	     *
	     * @method isEqual
	     * @param {Quaternion} q
	     * @return {Boolean}
	     */
	    Quaternion.prototype.isEqual = function isEqual(q) {
	        return q.w === this.w && q.x === this.x && q.y === this.y && q.z === this.z;
	    };

	    /**
	     * Doc: TODO
	     *
	     * @method dot
	     * @param {Quaternion} q
	     * @return {Number}
	     */
	    Quaternion.prototype.dot = function dot(q) {
	        return this.w * q.w + this.x * q.x + this.y * q.y + this.z * q.z;
	    };

	    /**
	     * Doc: TODO
	     *
	     * @method normSquared
	     * @return {Number}
	     */
	    Quaternion.prototype.normSquared = function normSquared() {
	        return this.dot(this);
	    };

	    /**
	     * Doc: TODO
	     *
	     * @method norm
	     * @return {Number}
	     */
	    Quaternion.prototype.norm = function norm() {
	        return Math.sqrt(this.normSquared());
	    };

	    /**
	     * Doc: TODO
	     *
	     * @method isZero
	     * @return {Boolean}
	     */
	    Quaternion.prototype.isZero = function isZero() {
	        return !(this.x || this.y || this.z);
	    };

	    /**
	     * Doc: TODO
	     *
	     * @method getTransform
	     * @return {Transform}
	     */
	    Quaternion.prototype.getTransform = function getTransform() {
	        var temp = this.normalize(1);
	        var x = temp.x;
	        var y = temp.y;
	        var z = temp.z;
	        var w = temp.w;

	        //LHC system flattened to column major = RHC flattened to row major
	        return [
	            1 - 2*y*y - 2*z*z,
	                2*x*y - 2*z*w,
	                2*x*z + 2*y*w,
	            0,
	                2*x*y + 2*z*w,
	            1 - 2*x*x - 2*z*z,
	                2*y*z - 2*x*w,
	            0,
	                2*x*z - 2*y*w,
	                2*y*z + 2*x*w,
	            1 - 2*x*x - 2*y*y,
	            0,
	            0,
	            0,
	            0,
	            1
	        ];
	    };

	    var matrixRegister = new Matrix();

	    /**
	     * Doc: TODO
	     *
	     * @method getMatrix
	     * @return {Transform}
	     */
	    Quaternion.prototype.getMatrix = function getMatrix() {
	        var temp = this.normalize(1);
	        var x = temp.x;
	        var y = temp.y;
	        var z = temp.z;
	        var w = temp.w;

	        //LHC system flattened to row major
	        return matrixRegister.set([
	            [
	                1 - 2*y*y - 2*z*z,
	                    2*x*y + 2*z*w,
	                    2*x*z - 2*y*w
	            ],
	            [
	                    2*x*y - 2*z*w,
	                1 - 2*x*x - 2*z*z,
	                    2*y*z + 2*x*w
	            ],
	            [
	                    2*x*z + 2*y*w,
	                    2*y*z - 2*x*w,
	                1 - 2*x*x - 2*y*y
	            ]
	        ]);
	    };

	    var epsilon = 1e-5;

	    /**
	     * Doc: TODO
	     *
	     * @method slerp
	     * @param {Quaternion} q
	     * @param {Number} t
	     * @return {Transform}
	     */
	    Quaternion.prototype.slerp = function slerp(q, t) {
	        var omega;
	        var cosomega;
	        var sinomega;
	        var scaleFrom;
	        var scaleTo;

	        cosomega = this.dot(q);
	        if ((1.0 - cosomega) > epsilon) {
	            omega       = Math.acos(cosomega);
	            sinomega    = Math.sin(omega);
	            scaleFrom   = Math.sin((1.0 - t) * omega) / sinomega;
	            scaleTo     = Math.sin(t * omega) / sinomega;
	        }
	        else {
	            scaleFrom   = 1.0 - t;
	            scaleTo     = t;
	        }
	        return register.set(this.scalarMultiply(scaleFrom/scaleTo).add(q).multiply(scaleTo));
	    };

	    module.exports = Quaternion;

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Surface = __webpack_require__(22);
	    var Context = __webpack_require__(18);

	    /**
	     * ContainerSurface is an object designed to contain surfaces and
	     *   set properties to be applied to all of them at once.
	     *   This extends the Surface class.
	     *   A container surface will enforce these properties on the
	     *   surfaces it contains:
	     *
	     *   size (clips contained surfaces to its own width and height);
	     *
	     *   origin;
	     *
	     *   its own opacity and transform, which will be automatically
	     *   applied to  all Surfaces contained directly and indirectly.
	     *
	     * @class ContainerSurface
	     * @extends Surface
	     * @constructor
	     * @param {Array.Number} [options.size] [width, height] in pixels
	     * @param {Array.string} [options.classes] CSS classes to set on all inner content
	     * @param {Array} [options.properties] string dictionary of HTML attributes to set on target div
	     * @param {string} [options.content] inner (HTML) content of surface (should not be used)
	     */
	    function ContainerSurface(options) {
	        Surface.call(this, options);
	        this._container = document.createElement('div');
	        this._container.classList.add('famous-group');
	        this._container.classList.add('famous-container-group');
	        this._shouldRecalculateSize = false;
	        this.context = new Context(this._container);
	        this.setContent(this._container);
	    }

	    ContainerSurface.prototype = Object.create(Surface.prototype);
	    ContainerSurface.prototype.constructor = ContainerSurface;
	    ContainerSurface.prototype.elementType = 'div';
	    ContainerSurface.prototype.elementClass = 'famous-surface';

	    /**
	     * Add renderables to this object's render tree
	     *
	     * @method add
	     *
	     * @param {Object} obj renderable object
	     * @return {RenderNode} RenderNode wrapping this object, if not already a RenderNode
	     */
	    ContainerSurface.prototype.add = function add() {
	        return this.context.add.apply(this.context, arguments);
	    };

	    /**
	     * Return spec for this surface.  Note: Can result in a size recalculation.
	     *
	     * @private
	     * @method render
	     *
	     * @return {Object} render spec for this surface (spec id)
	     */
	    ContainerSurface.prototype.render = function render() {
	        if (this._sizeDirty) this._shouldRecalculateSize = true;
	        return Surface.prototype.render.apply(this, arguments);
	    };

	    /**
	     * Place the document element this component manages into the document.
	     *
	     * @private
	     * @method deploy
	     * @param {Node} target document parent of this container
	     */
	    ContainerSurface.prototype.deploy = function deploy() {
	        this._shouldRecalculateSize = true;
	        return Surface.prototype.deploy.apply(this, arguments);
	    };

	    /**
	     * Apply changes from this component to the corresponding document element.
	     * This includes changes to classes, styles, size, content, opacity, origin,
	     * and matrix transforms.
	     *
	     * @private
	     * @method commit
	     * @param {Context} context commit context
	     * @param {Transform} transform unused TODO
	     * @param {Number} opacity  unused TODO
	     * @param {Array.Number} origin unused TODO
	     * @param {Array.Number} size unused TODO
	     * @return {undefined} TODO returns an undefined value
	     */
	    ContainerSurface.prototype.commit = function commit(context, transform, opacity, origin, size) {
	        var previousSize = this._size ? [this._size[0], this._size[1]] : null;
	        var result = Surface.prototype.commit.apply(this, arguments);
	        if (this._shouldRecalculateSize || (previousSize && (this._size[0] !== previousSize[0] || this._size[1] !== previousSize[1]))) {
	            this.context.setSize();
	            this._shouldRecalculateSize = false;
	        }
	        this.context.update();
	        return result;
	    };

	    module.exports = ContainerSurface;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var Utility = __webpack_require__(31);

	    /**
	     * Transition meta-method to support transitioning multiple
	     *   values with scalar-only methods.
	     *
	     *
	     * @class MultipleTransition
	     * @constructor
	     *
	     * @param {Object} method Transionable class to multiplex
	     */
	    function MultipleTransition(method) {
	        this.method = method;
	        this._instances = [];
	        this.state = [];
	    }

	    MultipleTransition.SUPPORTS_MULTIPLE = true;

	    /**
	     * Get the state of each transition.
	     *
	     * @method get
	     *
	     * @return state {Number|Array} state array
	     */
	    MultipleTransition.prototype.get = function get() {
	        for (var i = 0; i < this._instances.length; i++) {
	            this.state[i] = this._instances[i].get();
	        }
	        return this.state;
	    };

	    /**
	     * Set the end states with a shared transition, with optional callback.
	     *
	     * @method set
	     *
	     * @param {Number|Array} endState Final State.  Use a multi-element argument for multiple transitions.
	     * @param {Object} transition Transition definition, shared among all instances
	     * @param {Function} callback called when all endStates have been reached.
	     */
	    MultipleTransition.prototype.set = function set(endState, transition, callback) {
	        var _allCallback = Utility.after(endState.length, callback);
	        for (var i = 0; i < endState.length; i++) {
	            if (!this._instances[i]) this._instances[i] = new (this.method)();
	            this._instances[i].set(endState[i], transition, _allCallback);
	        }
	    };

	    /**
	     * Reset all transitions to start state.
	     *
	     * @method reset
	     *
	     * @param  {Number|Array} startState Start state
	     */
	    MultipleTransition.prototype.reset = function reset(startState) {
	        for (var i = 0; i < startState.length; i++) {
	            if (!this._instances[i]) this._instances[i] = new (this.method)();
	            this._instances[i].reset(startState[i]);
	        }
	    };

	    module.exports = MultipleTransition;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    var MultipleTransition = __webpack_require__(28);
	    var TweenTransition = __webpack_require__(30);

	    /**
	     * A state maintainer for a smooth transition between
	     *    numerically-specified states. Example numeric states include floats or
	     *    Transform objects.
	     *
	     * An initial state is set with the constructor or set(startState). A
	     *    corresponding end state and transition are set with set(endState,
	     *    transition). Subsequent calls to set(endState, transition) begin at
	     *    the last state. Calls to get(timestamp) provide the interpolated state
	     *    along the way.
	     *
	     * Note that there is no event loop here - calls to get() are the only way
	     *    to find state projected to the current (or provided) time and are
	     *    the only way to trigger callbacks. Usually this kind of object would
	     *    be part of the render() path of a visible component.
	     *
	     * @class Transitionable
	     * @constructor
	     * @param {number|Array.Number|Object.<number|string, number>} start
	     *    beginning state
	     */
	    function Transitionable(start) {
	        this.currentAction = null;
	        this.actionQueue = [];
	        this.callbackQueue = [];

	        this.state = 0;
	        this.velocity = undefined;
	        this._callback = undefined;
	        this._engineInstance = null;
	        this._currentMethod = null;

	        this.set(start);
	    }

	    var transitionMethods = {};

	    Transitionable.registerMethod = function registerMethod(name, engineClass) {
	        if (!(name in transitionMethods)) {
	            transitionMethods[name] = engineClass;
	            return true;
	        }
	        else return false;
	    };

	    Transitionable.unregisterMethod = function unregisterMethod(name) {
	        if (name in transitionMethods) {
	            delete transitionMethods[name];
	            return true;
	        }
	        else return false;
	    };

	    function _loadNext() {
	        if (this._callback) {
	            var callback = this._callback;
	            this._callback = undefined;
	            callback();
	        }
	        if (this.actionQueue.length <= 0) {
	            this.set(this.get()); // no update required
	            return;
	        }
	        this.currentAction = this.actionQueue.shift();
	        this._callback = this.callbackQueue.shift();

	        var method = null;
	        var endValue = this.currentAction[0];
	        var transition = this.currentAction[1];
	        if (transition instanceof Object && transition.method) {
	            method = transition.method;
	            if (typeof method === 'string') method = transitionMethods[method];
	        }
	        else {
	            method = TweenTransition;
	        }

	        if (this._currentMethod !== method) {
	            if (!(endValue instanceof Object) || method.SUPPORTS_MULTIPLE === true || endValue.length <= method.SUPPORTS_MULTIPLE) {
	                this._engineInstance = new method();
	            }
	            else {
	                this._engineInstance = new MultipleTransition(method);
	            }
	            this._currentMethod = method;
	        }

	        this._engineInstance.reset(this.state, this.velocity);
	        if (this.velocity !== undefined) transition.velocity = this.velocity;
	        this._engineInstance.set(endValue, transition, _loadNext.bind(this));
	    }

	    /**
	     * Add transition to end state to the queue of pending transitions. Special
	     *    Use: calling without a transition resets the object to that state with
	     *    no pending actions
	     *
	     * @method set
	     *
	     * @param {number|FamousMatrix|Array.Number|Object.<number, number>} endState
	     *    end state to which we interpolate
	     * @param {transition=} transition object of type {duration: number, curve:
	     *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
	     *    instantaneous.
	     * @param {function()=} callback Zero-argument function to call on observed
	     *    completion (t=1)
	     */
	    Transitionable.prototype.set = function set(endState, transition, callback) {
	        if (!transition) {
	            this.reset(endState);
	            if (callback) callback();
	            return this;
	        }

	        var action = [endState, transition];
	        this.actionQueue.push(action);
	        this.callbackQueue.push(callback);
	        if (!this.currentAction) _loadNext.call(this);
	        return this;
	    };

	    /**
	     * Cancel all transitions and reset to a stable state
	     *
	     * @method reset
	     *
	     * @param {number|Array.Number|Object.<number, number>} startState
	     *    stable state to set to
	     */
	    Transitionable.prototype.reset = function reset(startState, startVelocity) {
	        this._currentMethod = null;
	        this._engineInstance = null;
	        this._callback = undefined;
	        this.state = startState;
	        this.velocity = startVelocity;
	        this.currentAction = null;
	        this.actionQueue = [];
	        this.callbackQueue = [];
	    };

	    /**
	     * Add delay action to the pending action queue queue.
	     *
	     * @method delay
	     *
	     * @param {number} duration delay time (ms)
	     * @param {function} callback Zero-argument function to call on observed
	     *    completion (t=1)
	     */
	    Transitionable.prototype.delay = function delay(duration, callback) {
	        this.set(this.get(), {duration: duration,
	            curve: function() {
	                return 0;
	            }},
	            callback
	        );
	    };

	    /**
	     * Get interpolated state of current action at provided time. If the last
	     *    action has completed, invoke its callback.
	     *
	     * @method get
	     *
	     * @param {number=} timestamp Evaluate the curve at a normalized version of this
	     *    time. If omitted, use current time. (Unix epoch time)
	     * @return {number|Object.<number|string, number>} beginning state
	     *    interpolated to this point in time.
	     */
	    Transitionable.prototype.get = function get(timestamp) {
	        if (this._engineInstance) {
	            if (this._engineInstance.getVelocity)
	                this.velocity = this._engineInstance.getVelocity();
	            this.state = this._engineInstance.get(timestamp);
	        }
	        return this.state;
	    };

	    /**
	     * Is there at least one action pending completion?
	     *
	     * @method isActive
	     *
	     * @return {boolean}
	     */
	    Transitionable.prototype.isActive = function isActive() {
	        return !!this.currentAction;
	    };

	    /**
	     * Halt transition at current state and erase all pending actions.
	     *
	     * @method halt
	     */
	    Transitionable.prototype.halt = function halt() {
	        this.set(this.get());
	    };

	    module.exports = Transitionable;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: david@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {

	    /**
	     *
	     * A state maintainer for a smooth transition between
	     *    numerically-specified states.  Example numeric states include floats or
	     *    Transfornm objects.
	     *
	     *    An initial state is set with the constructor or set(startValue). A
	     *    corresponding end state and transition are set with set(endValue,
	     *    transition). Subsequent calls to set(endValue, transition) begin at
	     *    the last state. Calls to get(timestamp) provide the _interpolated state
	     *    along the way.
	     *
	     *   Note that there is no event loop here - calls to get() are the only way
	     *    to find out state projected to the current (or provided) time and are
	     *    the only way to trigger callbacks. Usually this kind of object would
	     *    be part of the render() path of a visible component.
	     *
	     * @class TweenTransition
	     * @constructor
	     *
	     * @param {Object} options TODO
	     *    beginning state
	     */
	    function TweenTransition(options) {
	        this.options = Object.create(TweenTransition.DEFAULT_OPTIONS);
	        if (options) this.setOptions(options);

	        this._startTime = 0;
	        this._startValue = 0;
	        this._updateTime = 0;
	        this._endValue = 0;
	        this._curve = undefined;
	        this._duration = 0;
	        this._active = false;
	        this._callback = undefined;
	        this.state = 0;
	        this.velocity = undefined;
	    }

	    /**
	     * Transition curves mapping independent variable t from domain [0,1] to a
	     *    range within [0,1]. Includes functions 'linear', 'easeIn', 'easeOut',
	     *    'easeInOut', 'easeOutBounce', 'spring'.
	     *
	     * @property {object} Curve
	     * @final
	     */
	    TweenTransition.Curves = {
	        linear: function(t) {
	            return t;
	        },
	        easeIn: function(t) {
	            return t*t;
	        },
	        easeOut: function(t) {
	            return t*(2-t);
	        },
	        easeInOut: function(t) {
	            if (t <= 0.5) return 2*t*t;
	            else return -2*t*t + 4*t - 1;
	        },
	        easeOutBounce: function(t) {
	            return t*(3 - 2*t);
	        },
	        spring: function(t) {
	            return (1 - t) * Math.sin(6 * Math.PI * t) + t;
	        }
	    };

	    TweenTransition.SUPPORTS_MULTIPLE = true;
	    TweenTransition.DEFAULT_OPTIONS = {
	        curve: TweenTransition.Curves.linear,
	        duration: 500,
	        speed: 0 /* considered only if positive */
	    };

	    var registeredCurves = {};

	    /**
	     * Add "unit" curve to internal dictionary of registered curves.
	     *
	     * @method registerCurve
	     *
	     * @static
	     *
	     * @param {string} curveName dictionary key
	     * @param {unitCurve} curve function of one numeric variable mapping [0,1]
	     *    to range inside [0,1]
	     * @return {boolean} false if key is taken, else true
	     */
	    TweenTransition.registerCurve = function registerCurve(curveName, curve) {
	        if (!registeredCurves[curveName]) {
	            registeredCurves[curveName] = curve;
	            return true;
	        }
	        else {
	            return false;
	        }
	    };

	    /**
	     * Remove object with key "curveName" from internal dictionary of registered
	     *    curves.
	     *
	     * @method unregisterCurve
	     *
	     * @static
	     *
	     * @param {string} curveName dictionary key
	     * @return {boolean} false if key has no dictionary value
	     */
	    TweenTransition.unregisterCurve = function unregisterCurve(curveName) {
	        if (registeredCurves[curveName]) {
	            delete registeredCurves[curveName];
	            return true;
	        }
	        else {
	            return false;
	        }
	    };

	    /**
	     * Retrieve function with key "curveName" from internal dictionary of
	     *    registered curves. Default curves are defined in the
	     *    TweenTransition.Curves array, where the values represent
	     *    unitCurve functions.
	     *
	     * @method getCurve
	     *
	     * @static
	     *
	     * @param {string} curveName dictionary key
	     * @return {unitCurve} curve function of one numeric variable mapping [0,1]
	     *    to range inside [0,1]
	     */
	    TweenTransition.getCurve = function getCurve(curveName) {
	        var curve = registeredCurves[curveName];
	        if (curve !== undefined) return curve;
	        else throw new Error('curve not registered');
	    };

	    /**
	     * Retrieve all available curves.
	     *
	     * @method getCurves
	     *
	     * @static
	     *
	     * @return {object} curve functions of one numeric variable mapping [0,1]
	     *    to range inside [0,1]
	     */
	    TweenTransition.getCurves = function getCurves() {
	        return registeredCurves;
	    };

	     // Interpolate: If a linear function f(0) = a, f(1) = b, then return f(t)
	    function _interpolate(a, b, t) {
	        return ((1 - t) * a) + (t * b);
	    }

	    function _clone(obj) {
	        if (obj instanceof Object) {
	            if (obj instanceof Array) return obj.slice(0);
	            else return Object.create(obj);
	        }
	        else return obj;
	    }

	    // Fill in missing properties in "transition" with those in defaultTransition, and
	    //   convert internal named curve to function object, returning as new
	    //   object.
	    function _normalize(transition, defaultTransition) {
	        var result = {curve: defaultTransition.curve};
	        if (defaultTransition.duration) result.duration = defaultTransition.duration;
	        if (defaultTransition.speed) result.speed = defaultTransition.speed;
	        if (transition instanceof Object) {
	            if (transition.duration !== undefined) result.duration = transition.duration;
	            if (transition.curve) result.curve = transition.curve;
	            if (transition.speed) result.speed = transition.speed;
	        }
	        if (typeof result.curve === 'string') result.curve = TweenTransition.getCurve(result.curve);
	        return result;
	    }

	    /**
	     * Set internal options, overriding any default options.
	     *
	     * @method setOptions
	     *
	     *
	     * @param {Object} options options object
	     * @param {Object} [options.curve] function mapping [0,1] to [0,1] or identifier
	     * @param {Number} [options.duration] duration in ms
	     * @param {Number} [options.speed] speed in pixels per ms
	     */
	    TweenTransition.prototype.setOptions = function setOptions(options) {
	        if (options.curve !== undefined) this.options.curve = options.curve;
	        if (options.duration !== undefined) this.options.duration = options.duration;
	        if (options.speed !== undefined) this.options.speed = options.speed;
	    };

	    /**
	     * Add transition to end state to the queue of pending transitions. Special
	     *    Use: calling without a transition resets the object to that state with
	     *    no pending actions
	     *
	     * @method set
	     *
	     *
	     * @param {number|FamousMatrix|Array.Number|Object.<number, number>} endValue
	     *    end state to which we _interpolate
	     * @param {transition=} transition object of type {duration: number, curve:
	     *    f[0,1] -> [0,1] or name}. If transition is omitted, change will be
	     *    instantaneous.
	     * @param {function()=} callback Zero-argument function to call on observed
	     *    completion (t=1)
	     */
	    TweenTransition.prototype.set = function set(endValue, transition, callback) {
	        if (!transition) {
	            this.reset(endValue);
	            if (callback) callback();
	            return;
	        }

	        this._startValue = _clone(this.get());
	        transition = _normalize(transition, this.options);
	        if (transition.speed) {
	            var startValue = this._startValue;
	            if (startValue instanceof Object) {
	                var variance = 0;
	                for (var i in startValue) variance += (endValue[i] - startValue[i]) * (endValue[i] - startValue[i]);
	                transition.duration = Math.sqrt(variance) / transition.speed;
	            }
	            else {
	                transition.duration = Math.abs(endValue - startValue) / transition.speed;
	            }
	        }

	        this._startTime = Date.now();
	        this._endValue = _clone(endValue);
	        this._startVelocity = _clone(transition.velocity);
	        this._duration = transition.duration;
	        this._curve = transition.curve;
	        this._active = true;
	        this._callback = callback;
	    };

	    /**
	     * Cancel all transitions and reset to a stable state
	     *
	     * @method reset
	     *
	     * @param {number|Array.Number|Object.<number, number>} startValue
	     *    starting state
	     * @param {number} startVelocity
	     *    starting velocity
	     */
	    TweenTransition.prototype.reset = function reset(startValue, startVelocity) {
	        if (this._callback) {
	            var callback = this._callback;
	            this._callback = undefined;
	            callback();
	        }
	        this.state = _clone(startValue);
	        this.velocity = _clone(startVelocity);
	        this._startTime = 0;
	        this._duration = 0;
	        this._updateTime = 0;
	        this._startValue = this.state;
	        this._startVelocity = this.velocity;
	        this._endValue = this.state;
	        this._active = false;
	    };

	    /**
	     * Get current velocity
	     *
	     * @method getVelocity
	     *
	     * @returns {Number} velocity
	     */
	    TweenTransition.prototype.getVelocity = function getVelocity() {
	        return this.velocity;
	    };

	    /**
	     * Get interpolated state of current action at provided time. If the last
	     *    action has completed, invoke its callback.
	     *
	     * @method get
	     *
	     *
	     * @param {number=} timestamp Evaluate the curve at a normalized version of this
	     *    time. If omitted, use current time. (Unix epoch time)
	     * @return {number|Object.<number|string, number>} beginning state
	     *    _interpolated to this point in time.
	     */
	    TweenTransition.prototype.get = function get(timestamp) {
	        this.update(timestamp);
	        return this.state;
	    };

	    function _calculateVelocity(current, start, curve, duration, t) {
	        var velocity;
	        var eps = 1e-7;
	        var speed = (curve(t) - curve(t - eps)) / eps;
	        if (current instanceof Array) {
	            velocity = [];
	            for (var i = 0; i < current.length; i++){
	                if (typeof current[i] === 'number')
	                    velocity[i] = speed * (current[i] - start[i]) / duration;
	                else
	                    velocity[i] = 0;
	            }

	        }
	        else velocity = speed * (current - start) / duration;
	        return velocity;
	    }

	    function _calculateState(start, end, t) {
	        var state;
	        if (start instanceof Array) {
	            state = [];
	            for (var i = 0; i < start.length; i++) {
	                if (typeof start[i] === 'number')
	                    state[i] = _interpolate(start[i], end[i], t);
	                else
	                    state[i] = start[i];
	            }
	        }
	        else state = _interpolate(start, end, t);
	        return state;
	    }

	    /**
	     * Update internal state to the provided timestamp. This may invoke the last
	     *    callback and begin a new action.
	     *
	     * @method update
	     *
	     *
	     * @param {number=} timestamp Evaluate the curve at a normalized version of this
	     *    time. If omitted, use current time. (Unix epoch time)
	     */
	    TweenTransition.prototype.update = function update(timestamp) {
	        if (!this._active) {
	            if (this._callback) {
	                var callback = this._callback;
	                this._callback = undefined;
	                callback();
	            }
	            return;
	        }

	        if (!timestamp) timestamp = Date.now();
	        if (this._updateTime >= timestamp) return;
	        this._updateTime = timestamp;

	        var timeSinceStart = timestamp - this._startTime;
	        if (timeSinceStart >= this._duration) {
	            this.state = this._endValue;
	            this.velocity = _calculateVelocity(this.state, this._startValue, this._curve, this._duration, 1);
	            this._active = false;
	        }
	        else if (timeSinceStart < 0) {
	            this.state = this._startValue;
	            this.velocity = this._startVelocity;
	        }
	        else {
	            var t = timeSinceStart / this._duration;
	            this.state = _calculateState(this._startValue, this._endValue, this._curve(t));
	            this.velocity = _calculateVelocity(this.state, this._startValue, this._curve, this._duration, t);
	        }
	    };

	    /**
	     * Is there at least one action pending completion?
	     *
	     * @method isActive
	     *
	     *
	     * @return {boolean}
	     */
	    TweenTransition.prototype.isActive = function isActive() {
	        return this._active;
	    };

	    /**
	     * Halt transition at current state and erase all pending actions.
	     *
	     * @method halt
	     *
	     */
	    TweenTransition.prototype.halt = function halt() {
	        this.reset(this.get());
	    };

	    // Register all the default curves
	    TweenTransition.registerCurve('linear', TweenTransition.Curves.linear);
	    TweenTransition.registerCurve('easeIn', TweenTransition.Curves.easeIn);
	    TweenTransition.registerCurve('easeOut', TweenTransition.Curves.easeOut);
	    TweenTransition.registerCurve('easeInOut', TweenTransition.Curves.easeInOut);
	    TweenTransition.registerCurve('easeOutBounce', TweenTransition.Curves.easeOutBounce);
	    TweenTransition.registerCurve('spring', TweenTransition.Curves.spring);

	    TweenTransition.customCurve = function customCurve(v1, v2) {
	        v1 = v1 || 0; v2 = v2 || 0;
	        return function(t) {
	            return v1*t + (-2*v1 - v2 + 3)*t*t + (v1 + v2 - 2)*t*t*t;
	        };
	    };

	    module.exports = TweenTransition;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this
	 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
	 *
	 * Owner: mark@famo.us
	 * @license MPL 2.0
	 * @copyright Famous Industries, Inc. 2014
	 */

	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module) {
	    /**
	     * This namespace holds standalone functionality.
	     *  Currently includes name mapping for transition curves,
	     *  name mapping for origin pairs, and the after() function.
	     *
	     * @class Utility
	     * @static
	     */
	    var Utility = {};

	    /**
	     * Table of direction array positions
	     *
	     * @property {object} Direction
	     * @final
	     */
	    Utility.Direction = {
	        X: 0,
	        Y: 1,
	        Z: 2
	    };

	    /**
	     * Return wrapper around callback function. Once the wrapper is called N
	     *   times, invoke the callback function. Arguments and scope preserved.
	     *
	     * @method after
	     *
	     * @param {number} count number of calls before callback function invoked
	     * @param {Function} callback wrapped callback function
	     *
	     * @return {function} wrapped callback with coundown feature
	     */
	    Utility.after = function after(count, callback) {
	        var counter = count;
	        return function() {
	            counter--;
	            if (counter === 0) callback.apply(this, arguments);
	        };
	    };

	    /**
	     * Load a URL and return its contents in a callback
	     *
	     * @method loadURL
	     *
	     * @param {string} url URL of object
	     * @param {function} callback callback to dispatch with content
	     */
	    Utility.loadURL = function loadURL(url, callback) {
	        var xhr = new XMLHttpRequest();
	        xhr.onreadystatechange = function onreadystatechange() {
	            if (this.readyState === 4) {
	                if (callback) callback(this.responseText);
	            }
	        };
	        xhr.open('GET', url);
	        xhr.send();
	    };

	    /**
	     * Create a document fragment from a string of HTML
	     *
	     * @method createDocumentFragmentFromHTML
	     *
	     * @param {string} html HTML to convert to DocumentFragment
	     *
	     * @return {DocumentFragment} DocumentFragment representing input HTML
	     */
	    Utility.createDocumentFragmentFromHTML = function createDocumentFragmentFromHTML(html) {
	        var element = document.createElement('div');
	        element.innerHTML = html;
	        var result = document.createDocumentFragment();
	        while (element.hasChildNodes()) result.appendChild(element.firstChild);
	        return result;
	    };

	    module.exports = Utility;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* Detect Element Resize
	*
	* https://github.com/sdecima/javascript-detect-element-resize
	* Sebastian Decima
	*
	* version: 0.5
	**/

	(function () {
		var attachEvent = document.attachEvent,
			stylesCreated = false;
		
		if (!attachEvent) {
			var requestFrame = (function(){
				var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
									function(fn){ return window.setTimeout(fn, 20); };
				return function(fn){ return raf(fn); };
			})();
			
			var cancelFrame = (function(){
				var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame ||
									   window.clearTimeout;
			  return function(id){ return cancel(id); };
			})();

			function resetTriggers(element){
				var triggers = element.__resizeTriggers__;
				if( !triggers ) return;
				var expand = triggers.firstElementChild,
					contract = triggers.lastElementChild,
					expandChild = expand.firstElementChild;
				contract.scrollLeft = contract.scrollWidth;
				contract.scrollTop = contract.scrollHeight;
				expandChild.style.width = expand.offsetWidth + 1 + 'px';
				expandChild.style.height = expand.offsetHeight + 1 + 'px';
				expand.scrollLeft = expand.scrollWidth;
				expand.scrollTop = expand.scrollHeight;
				if( contract.scrollTop == 0 || contract.scrollLeft == 0 )
				{
					clearTimeout(triggers.resetTimeout);
					var reset = function(){ resetTriggers(element); }
					var getFrame = function(){ requestFrame(reset); } /*Performance*/
					triggers.resetTimeout = setTimeout( getFrame,1000);
				}
			};

			function checkTriggers(element){
				return element.offsetWidth != element.__resizeLast__.width ||
							 element.offsetHeight != element.__resizeLast__.height;
			}
			
			function scrollListener(e){
				var element = this;
				resetTriggers(this);
				if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
				this.__resizeRAF__ = requestFrame(function(){
					if (checkTriggers(element)) {
						element.__resizeLast__.width = element.offsetWidth;
						element.__resizeLast__.height = element.offsetHeight;
						element.__resizeListeners__.forEach(function(fn){
							fn.call(element, e);
						});
					}
				});
			};
		}
		
		function createStyles() {
			if (!stylesCreated) {
				//opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
				var css = '.resize-triggers { visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: \" \"; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
					head = document.head || document.getElementsByTagName('head')[0],
					style = document.createElement('style');
				
				style.type = 'text/css';
				if (style.styleSheet) {
					style.styleSheet.cssText = css;
				} else {
					style.appendChild(document.createTextNode(css));
				}

				head.appendChild(style);
				stylesCreated = true;
			}
		}
		
		window.addResizeListener = function(element, fn){
			if (attachEvent) element.attachEvent('onresize', fn);
			else {
				if (!element.__resizeTriggers__) {
					if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
					createStyles();
					element.__resizeLast__ = {};
					element.__resizeListeners__ = [];
					(element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
					element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' +
																							   '<div class="contract-trigger"></div>';
					element.appendChild(element.__resizeTriggers__);
					resetTriggers(element);
					element.addEventListener('scroll', scrollListener, true);
				}
				element.__resizeListeners__.push(fn);
			}
		};
		
		window.removeResizeListener = function(element, fn){
			if (attachEvent) element.detachEvent('onresize', fn);
			else {
				element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
				if (!element.__resizeListeners__.length) {
						element.removeEventListener('scroll', scrollListener);
						element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
				}
			}
		}
	})();


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// File:src/Three.js

	/**
	 * @author mrdoob / http://mrdoob.com/
	 */

	var THREE = { REVISION: '69' };

	// browserify support

	if ( true ) {

		module.exports = THREE;

	}

	// polyfills

	if ( Math.sign === undefined ) {

		Math.sign = function ( x ) {

			return ( x < 0 ) ? - 1 : ( x > 0 ) ? 1 : 0;

		};

	}

	// https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent.button

	THREE.MOUSE = { LEFT: 0, MIDDLE: 1, RIGHT: 2 };

	// GL STATE CONSTANTS

	THREE.CullFaceNone = 0;
	THREE.CullFaceBack = 1;
	THREE.CullFaceFront = 2;
	THREE.CullFaceFrontBack = 3;

	THREE.FrontFaceDirectionCW = 0;
	THREE.FrontFaceDirectionCCW = 1;

	// SHADOWING TYPES

	THREE.BasicShadowMap = 0;
	THREE.PCFShadowMap = 1;
	THREE.PCFSoftShadowMap = 2;

	// MATERIAL CONSTANTS

	// side

	THREE.FrontSide = 0;
	THREE.BackSide = 1;
	THREE.DoubleSide = 2;

	// shading

	THREE.NoShading = 0;
	THREE.FlatShading = 1;
	THREE.SmoothShading = 2;

	// colors

	THREE.NoColors = 0;
	THREE.FaceColors = 1;
	THREE.VertexColors = 2;

	// blending modes

	THREE.NoBlending = 0;
	THREE.NormalBlending = 1;
	THREE.AdditiveBlending = 2;
	THREE.SubtractiveBlending = 3;
	THREE.MultiplyBlending = 4;
	THREE.CustomBlending = 5;

	// custom blending equations
	// (numbers start from 100 not to clash with other
	//  mappings to OpenGL constants defined in Texture.js)

	THREE.AddEquation = 100;
	THREE.SubtractEquation = 101;
	THREE.ReverseSubtractEquation = 102;
	THREE.MinEquation = 103;
	THREE.MaxEquation = 104;

	// custom blending destination factors

	THREE.ZeroFactor = 200;
	THREE.OneFactor = 201;
	THREE.SrcColorFactor = 202;
	THREE.OneMinusSrcColorFactor = 203;
	THREE.SrcAlphaFactor = 204;
	THREE.OneMinusSrcAlphaFactor = 205;
	THREE.DstAlphaFactor = 206;
	THREE.OneMinusDstAlphaFactor = 207;

	// custom blending source factors

	//THREE.ZeroFactor = 200;
	//THREE.OneFactor = 201;
	//THREE.SrcAlphaFactor = 204;
	//THREE.OneMinusSrcAlphaFactor = 205;
	//THREE.DstAlphaFactor = 206;
	//THREE.OneMinusDstAlphaFactor = 207;
	THREE.DstColorFactor = 208;
	THREE.OneMinusDstColorFactor = 209;
	THREE.SrcAlphaSaturateFactor = 210;


	// TEXTURE CONSTANTS

	THREE.MultiplyOperation = 0;
	THREE.MixOperation = 1;
	THREE.AddOperation = 2;

	// Mapping modes

	THREE.UVMapping = function () {};

	THREE.CubeReflectionMapping = function () {};
	THREE.CubeRefractionMapping = function () {};

	THREE.SphericalReflectionMapping = function () {};
	THREE.SphericalRefractionMapping = function () {};

	// Wrapping modes

	THREE.RepeatWrapping = 1000;
	THREE.ClampToEdgeWrapping = 1001;
	THREE.MirroredRepeatWrapping = 1002;

	// Filters

	THREE.NearestFilter = 1003;
	THREE.NearestMipMapNearestFilter = 1004;
	THREE.NearestMipMapLinearFilter = 1005;
	THREE.LinearFilter = 1006;
	THREE.LinearMipMapNearestFilter = 1007;
	THREE.LinearMipMapLinearFilter = 1008;

	// Data types

	THREE.UnsignedByteType = 1009;
	THREE.ByteType = 1010;
	THREE.ShortType = 1011;
	THREE.UnsignedShortType = 1012;
	THREE.IntType = 1013;
	THREE.UnsignedIntType = 1014;
	THREE.FloatType = 1015;

	// Pixel types

	//THREE.UnsignedByteType = 1009;
	THREE.UnsignedShort4444Type = 1016;
	THREE.UnsignedShort5551Type = 1017;
	THREE.UnsignedShort565Type = 1018;

	// Pixel formats

	THREE.AlphaFormat = 1019;
	THREE.RGBFormat = 1020;
	THREE.RGBAFormat = 1021;
	THREE.LuminanceFormat = 1022;
	THREE.LuminanceAlphaFormat = 1023;

	// DDS / ST3C Compressed texture formats

	THREE.RGB_S3TC_DXT1_Format = 2001;
	THREE.RGBA_S3TC_DXT1_Format = 2002;
	THREE.RGBA_S3TC_DXT3_Format = 2003;
	THREE.RGBA_S3TC_DXT5_Format = 2004;


	// PVRTC compressed texture formats

	THREE.RGB_PVRTC_4BPPV1_Format = 2100;
	THREE.RGB_PVRTC_2BPPV1_Format = 2101;
	THREE.RGBA_PVRTC_4BPPV1_Format = 2102;
	THREE.RGBA_PVRTC_2BPPV1_Format = 2103;


	// File:src/math/Color.js

	/**
	 * @author mrdoob / http://mrdoob.com/
	 */

	THREE.Color = function ( color ) {

		if ( arguments.length === 3 ) {

			return this.setRGB( arguments[ 0 ], arguments[ 1 ], arguments[ 2 ] );

		}

		return this.set( color )

	};

	THREE.Color.prototype = {

		constructor: THREE.Color,

		r: 1, g: 1, b: 1,

		set: function ( value ) {

			if ( value instanceof THREE.Color ) {

				this.copy( value );

			} else if ( typeof value === 'number' ) {

				this.setHex( value );

			} else if ( typeof value === 'string' ) {

				this.setStyle( value );

			}

			return this;

		},

		setHex: function ( hex ) {

			hex = Math.floor( hex );

			this.r = ( hex >> 16 & 255 ) / 255;
			this.g = ( hex >> 8 & 255 ) / 255;
			this.b = ( hex & 255 ) / 255;

			return this;

		},

		setRGB: function ( r, g, b ) {

			this.r = r;
			this.g = g;
			this.b = b;

			return this;

		},

		setHSL: function ( h, s, l ) {

			// h,s,l ranges are in 0.0 - 1.0

			if ( s === 0 ) {

				this.r = this.g = this.b = l;

			} else {

				var hue2rgb = function ( p, q, t ) {

					if ( t < 0 ) t += 1;
					if ( t > 1 ) t -= 1;
					if ( t < 1 / 6 ) return p + ( q - p ) * 6 * t;
					if ( t < 1 / 2 ) return q;
					if ( t < 2 / 3 ) return p + ( q - p ) * 6 * ( 2 / 3 - t );
					return p;

				};

				var p = l <= 0.5 ? l * ( 1 + s ) : l + s - ( l * s );
				var q = ( 2 * l ) - p;

				this.r = hue2rgb( q, p, h + 1 / 3 );
				this.g = hue2rgb( q, p, h );
				this.b = hue2rgb( q, p, h - 1 / 3 );

			}

			return this;

		},

		setStyle: function ( style ) {

			// rgb(255,0,0)

			if ( /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test( style ) ) {

				var color = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec( style );

				this.r = Math.min( 255, parseInt( color[ 1 ], 10 ) ) / 255;
				this.g = Math.min( 255, parseInt( color[ 2 ], 10 ) ) / 255;
				this.b = Math.min( 255, parseInt( color[ 3 ], 10 ) ) / 255;

				return this;

			}

			// rgb(100%,0%,0%)

			if ( /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test( style ) ) {

				var color = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec( style );

				this.r = Math.min( 100, parseInt( color[ 1 ], 10 ) ) / 100;
				this.g = Math.min( 100, parseInt( color[ 2 ], 10 ) ) / 100;
				this.b = Math.min( 100, parseInt( color[ 3 ], 10 ) ) / 100;

				return this;

			}

			// #ff0000

			if ( /^\#([0-9a-f]{6})$/i.test( style ) ) {

				var color = /^\#([0-9a-f]{6})$/i.exec( style );

				this.setHex( parseInt( color[ 1 ], 16 ) );

				return this;

			}

			// #f00

			if ( /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test( style ) ) {

				var color = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec( style );

				this.setHex( parseInt( color[ 1 ] + color[ 1 ] + color[ 2 ] + color[ 2 ] + color[ 3 ] + color[ 3 ], 16 ) );

				return this;

			}

			// red

			if ( /^(\w+)$/i.test( style ) ) {

				this.setHex( THREE.ColorKeywords[ style ] );

				return this;

			}


		},

		copy: function ( color ) {

			this.r = color.r;
			this.g = color.g;
			this.b = color.b;

			return this;

		},

		copyGammaToLinear: function ( color ) {

			this.r = color.r * color.r;
			this.g = color.g * color.g;
			this.b = color.b * color.b;

			return this;

		},

		copyLinearToGamma: function ( color ) {

			this.r = Math.sqrt( color.r );
			this.g = Math.sqrt( color.g );
			this.b = Math.sqrt( color.b );

			return this;

		},

		convertGammaToLinear: function () {

			var r = this.r, g = this.g, b = this.b;

			this.r = r * r;
			this.g = g * g;
			this.b = b * b;

			return this;

		},

		convertLinearToGamma: function () {

			this.r = Math.sqrt( this.r );
			this.g = Math.sqrt( this.g );
			this.b = Math.sqrt( this.b );

			return this;

		},

		getHex: function () {

			return ( this.r * 255 ) << 16 ^ ( this.g * 255 ) << 8 ^ ( this.b * 255 ) << 0;

		},

		getHexString: function () {

			return ( '000000' + this.getHex().toString( 16 ) ).slice( - 6 );

		},

		getHSL: function ( optionalTarget ) {

			// h,s,l ranges are in 0.0 - 1.0

			var hsl = optionalTarget || { h: 0, s: 0, l: 0 };

			var r = this.r, g = this.g, b = this.b;

			var max = Math.max( r, g, b );
			var min = Math.min( r, g, b );

			var hue, saturation;
			var lightness = ( min + max ) / 2.0;

			if ( min === max ) {

				hue = 0;
				saturation = 0;

			} else {

				var delta = max - min;

				saturation = lightness <= 0.5 ? delta / ( max + min ) : delta / ( 2 - max - min );

				switch ( max ) {

					case r: hue = ( g - b ) / delta + ( g < b ? 6 : 0 ); break;
					case g: hue = ( b - r ) / delta + 2; break;
					case b: hue = ( r - g ) / delta + 4; break;

				}

				hue /= 6;

			}

			hsl.h = hue;
			hsl.s = saturation;
			hsl.l = lightness;

			return hsl;

		},

		getStyle: function () {

			return 'rgb(' + ( ( this.r * 255 ) | 0 ) + ',' + ( ( this.g * 255 ) | 0 ) + ',' + ( ( this.b * 255 ) | 0 ) + ')';

		},

		offsetHSL: function ( h, s, l ) {

			var hsl = this.getHSL();

			hsl.h += h; hsl.s += s; hsl.l += l;

			this.setHSL( hsl.h, hsl.s, hsl.l );

			return this;

		},

		add: function ( color ) {

			this.r += color.r;
			this.g += color.g;
			this.b += color.b;

			return this;

		},

		addColors: function ( color1, color2 ) {

			this.r = color1.r + color2.r;
			this.g = color1.g + color2.g;
			this.b = color1.b + color2.b;

			return this;

		},

		addScalar: function ( s ) {

			this.r += s;
			this.g += s;
			this.b += s;

			return this;

		},

		multiply: function ( color ) {

			this.r *= color.r;
			this.g *= color.g;
			this.b *= color.b;

			return this;

		},

		multiplyScalar: function ( s ) {

			this.r *= s;
			this.g *= s;
			this.b *= s;

			return this;

		},

		lerp: function ( color, alpha ) {

			this.r += ( color.r - this.r ) * alpha;
			this.g += ( color.g - this.g ) * alpha;
			this.b += ( color.b - this.b ) * alpha;

			return this;

		},

		equals: function ( c ) {

			return ( c.r === this.r ) && ( c.g === this.g ) && ( c.b === this.b );

		},

		fromArray: function ( array ) {

			this.r = array[ 0 ];
			this.g = array[ 1 ];
			this.b = array[ 2 ];

			return this;

		},

		toArray: function () {

			return [ this.r, this.g, this.b ];

		},

		clone: function () {

			return new THREE.Color().setRGB( this.r, this.g, this.b );

		}

	};

	THREE.ColorKeywords = { 'aliceblue': 0xF0F8FF, 'antiquewhite': 0xFAEBD7, 'aqua': 0x00FFFF, 'aquamarine': 0x7FFFD4, 'azure': 0xF0FFFF,
	'beige': 0xF5F5DC, 'bisque': 0xFFE4C4, 'black': 0x000000, 'blanchedalmond': 0xFFEBCD, 'blue': 0x0000FF, 'blueviolet': 0x8A2BE2,
	'brown': 0xA52A2A, 'burlywood': 0xDEB887, 'cadetblue': 0x5F9EA0, 'chartreuse': 0x7FFF00, 'chocolate': 0xD2691E, 'coral': 0xFF7F50,
	'cornflowerblue': 0x6495ED, 'cornsilk': 0xFFF8DC, 'crimson': 0xDC143C, 'cyan': 0x00FFFF, 'darkblue': 0x00008B, 'darkcyan': 0x008B8B,
	'darkgoldenrod': 0xB8860B, 'darkgray': 0xA9A9A9, 'darkgreen': 0x006400, 'darkgrey': 0xA9A9A9, 'darkkhaki': 0xBDB76B, 'darkmagenta': 0x8B008B,
	'darkolivegreen': 0x556B2F, 'darkorange': 0xFF8C00, 'darkorchid': 0x9932CC, 'darkred': 0x8B0000, 'darksalmon': 0xE9967A, 'darkseagreen': 0x8FBC8F,
	'darkslateblue': 0x483D8B, 'darkslategray': 0x2F4F4F, 'darkslategrey': 0x2F4F4F, 'darkturquoise': 0x00CED1, 'darkviolet': 0x9400D3,
	'deeppink': 0xFF1493, 'deepskyblue': 0x00BFFF, 'dimgray': 0x696969, 'dimgrey': 0x696969, 'dodgerblue': 0x1E90FF, 'firebrick': 0xB22222,
	'floralwhite': 0xFFFAF0, 'forestgreen': 0x228B22, 'fuchsia': 0xFF00FF, 'gainsboro': 0xDCDCDC, 'ghostwhite': 0xF8F8FF, 'gold': 0xFFD700,
	'goldenrod': 0xDAA520, 'gray': 0x808080, 'green': 0x008000, 'greenyellow': 0xADFF2F, 'grey': 0x808080, 'honeydew': 0xF0FFF0, 'hotpink': 0xFF69B4,
	'indianred': 0xCD5C5C, 'indigo': 0x4B0082, 'ivory': 0xFFFFF0, 'khaki': 0xF0E68C, 'lavender': 0xE6E6FA, 'lavenderblush': 0xFFF0F5, 'lawngreen': 0x7CFC00,
	'lemonchiffon': 0xFFFACD, 'lightblue': 0xADD8E6, 'lightcoral': 0xF08080, 'lightcyan': 0xE0FFFF, 'lightgoldenrodyellow': 0xFAFAD2, 'lightgray': 0xD3D3D3,
	'lightgreen': 0x90EE90, 'lightgrey': 0xD3D3D3, 'lightpink': 0xFFB6C1, 'lightsalmon': 0xFFA07A, 'lightseagreen': 0x20B2AA, 'lightskyblue': 0x87CEFA,
	'lightslategray': 0x778899, 'lightslategrey': 0x778899, 'lightsteelblue': 0xB0C4DE, 'lightyellow': 0xFFFFE0, 'lime': 0x00FF00, 'limegreen': 0x32CD32,
	'linen': 0xFAF0E6, 'magenta': 0xFF00FF, 'maroon': 0x800000, 'mediumaquamarine': 0x66CDAA, 'mediumblue': 0x0000CD, 'mediumorchid': 0xBA55D3,
	'mediumpurple': 0x9370DB, 'mediumseagreen': 0x3CB371, 'mediumslateblue': 0x7B68EE, 'mediumspringgreen': 0x00FA9A, 'mediumturquoise': 0x48D1CC,
	'mediumvioletred': 0xC71585, 'midnightblue': 0x191970, 'mintcream': 0xF5FFFA, 'mistyrose': 0xFFE4E1, 'moccasin': 0xFFE4B5, 'navajowhite': 0xFFDEAD,
	'navy': 0x000080, 'oldlace': 0xFDF5E6, 'olive': 0x808000, 'olivedrab': 0x6B8E23, 'orange': 0xFFA500, 'orangered': 0xFF4500, 'orchid': 0xDA70D6,
	'palegoldenrod': 0xEEE8AA, 'palegreen': 0x98FB98, 'paleturquoise': 0xAFEEEE, 'palevioletred': 0xDB7093, 'papayawhip': 0xFFEFD5, 'peachpuff': 0xFFDAB9,
	'peru': 0xCD853F, 'pink': 0xFFC0CB, 'plum': 0xDDA0DD, 'powderblue': 0xB0E0E6, 'purple': 0x800080, 'red': 0xFF0000, 'rosybrown': 0xBC8F8F,
	'royalblue': 0x4169E1, 'saddlebrown': 0x8B4513, 'salmon': 0xFA8072, 'sandybrown': 0xF4A460, 'seagreen': 0x2E8B57, 'seashell': 0xFFF5EE,
	'sienna': 0xA0522D, 'silver': 0xC0C0C0, 'skyblue': 0x87CEEB, 'slateblue': 0x6A5ACD, 'slategray': 0x708090, 'slategrey': 0x708090, 'snow': 0xFFFAFA,
	'springgreen': 0x00FF7F, 'steelblue': 0x4682B4, 'tan': 0xD2B48C, 'teal': 0x008080, 'thistle': 0xD8BFD8, 'tomato': 0xFF6347, 'turquoise': 0x40E0D0,
	'violet': 0xEE82EE, 'wheat': 0xF5DEB3, 'white': 0xFFFFFF, 'whitesmoke': 0xF5F5F5, 'yellow': 0xFFFF00, 'yellowgreen': 0x9ACD32 };

	// File:src/math/Quaternion.js

	/**
	 * @author mikael emtinger / http://gomo.se/
	 * @author alteredq / http://alteredqualia.com/
	 * @author WestLangley / http://github.com/WestLangley
	 * @author bhouston / http://exocortex.com
	 */

	THREE.Quaternion = function ( x, y, z, w ) {

		this._x = x || 0;
		this._y = y || 0;
		this._z = z || 0;
		this._w = ( w !== undefined ) ? w : 1;

	};

	THREE.Quaternion.prototype = {

		constructor: THREE.Quaternion,

		_x: 0,_y: 0, _z: 0, _w: 0,

		get x () {

			return this._x;

		},

		set x ( value ) {

			this._x = value;
			this.onChangeCallback();

		},

		get y () {

			return this._y;

		},

		set y ( value ) {

			this._y = value;
			this.onChangeCallback();

		},

		get z () {

			return this._z;

		},

		set z ( value ) {

			this._z = value;
			this.onChangeCallback();

		},

		get w () {

			return this._w;

		},

		set w ( value ) {

			this._w = value;
			this.onChangeCallback();

		},

		set: function ( x, y, z, w ) {

			this._x = x;
			this._y = y;
			this._z = z;
			this._w = w;

			this.onChangeCallback();

			return this;

		},

		copy: function ( quaternion ) {

			this._x = quaternion.x;
			this._y = quaternion.y;
			this._z = quaternion.z;
			this._w = quaternion.w;

			this.onChangeCallback();

			return this;

		},

		setFromEuler: function ( euler, update ) {

			if ( euler instanceof THREE.Euler === false ) {

				throw new Error( 'THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.' );
			}

			// http://www.mathworks.com/matlabcentral/fileexchange/
			// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
			//	content/SpinCalc.m

			var c1 = Math.cos( euler._x / 2 );
			var c2 = Math.cos( euler._y / 2 );
			var c3 = Math.cos( euler._z / 2 );
			var s1 = Math.sin( euler._x / 2 );
			var s2 = Math.sin( euler._y / 2 );
			var s3 = Math.sin( euler._z / 2 );

			if ( euler.order === 'XYZ' ) {

				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;

			} else if ( euler.order === 'YXZ' ) {

				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;

			} else if ( euler.order === 'ZXY' ) {

				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;

			} else if ( euler.order === 'ZYX' ) {

				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;

			} else if ( euler.order === 'YZX' ) {

				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;

			} else if ( euler.order === 'XZY' ) {

				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;

			}

			if ( update !== false ) this.onChangeCallback();

			return this;

		},

		setFromAxisAngle: function ( axis, angle ) {

			// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

			// assumes axis is normalized

			var halfAngle = angle / 2, s = Math.sin( halfAngle );

			this._x = axis.x * s;
			this._y = axis.y * s;
			this._z = axis.z * s;
			this._w = Math.cos( halfAngle );

			this.onChangeCallback();

			return this;

		},

		setFromRotationMatrix: function ( m ) {

			// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

			// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

			var te = m.elements,

				m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
				m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
				m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ],

				trace = m11 + m22 + m33,
				s;

			if ( trace > 0 ) {

				s = 0.5 / Math.sqrt( trace + 1.0 );

				this._w = 0.25 / s;
				this._x = ( m32 - m23 ) * s;
				this._y = ( m13 - m31 ) * s;
				this._z = ( m21 - m12 ) * s;

			} else if ( m11 > m22 && m11 > m33 ) {

				s = 2.0 * Math.sqrt( 1.0 + m11 - m22 - m33 );

				this._w = ( m32 - m23 ) / s;
				this._x = 0.25 * s;
				this._y = ( m12 + m21 ) / s;
				this._z = ( m13 + m31 ) / s;

			} else if ( m22 > m33 ) {

				s = 2.0 * Math.sqrt( 1.0 + m22 - m11 - m33 );

				this._w = ( m13 - m31 ) / s;
				this._x = ( m12 + m21 ) / s;
				this._y = 0.25 * s;
				this._z = ( m23 + m32 ) / s;

			} else {

				s = 2.0 * Math.sqrt( 1.0 + m33 - m11 - m22 );

				this._w = ( m21 - m12 ) / s;
				this._x = ( m13 + m31 ) / s;
				this._y = ( m23 + m32 ) / s;
				this._z = 0.25 * s;

			}

			this.onChangeCallback();

			return this;

		},

		setFromUnitVectors: function () {

			// http://lolengine.net/blog/2014/02/24/quaternion-from-two-vectors-final

			// assumes direction vectors vFrom and vTo are normalized

			var v1, r;

			var EPS = 0.000001;

			return function ( vFrom, vTo ) {

				if ( v1 === undefined ) v1 = new THREE.Vector3();

				r = vFrom.dot( vTo ) + 1;

				if ( r < EPS ) {

					r = 0;

					if ( Math.abs( vFrom.x ) > Math.abs( vFrom.z ) ) {

						v1.set( - vFrom.y, vFrom.x, 0 );

					} else {

						v1.set( 0, - vFrom.z, vFrom.y );

					}

				} else {

					v1.crossVectors( vFrom, vTo );

				}

				this._x = v1.x;
				this._y = v1.y;
				this._z = v1.z;
				this._w = r;

				this.normalize();

				return this;

			}

		}(),

		inverse: function () {

			this.conjugate().normalize();

			return this;

		},

		conjugate: function () {

			this._x *= - 1;
			this._y *= - 1;
			this._z *= - 1;

			this.onChangeCallback();

			return this;

		},

		dot: function ( v ) {

			return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;

		},

		lengthSq: function () {

			return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;

		},

		length: function () {

			return Math.sqrt( this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w );

		},

		normalize: function () {

			var l = this.length();

			if ( l === 0 ) {

				this._x = 0;
				this._y = 0;
				this._z = 0;
				this._w = 1;

			} else {

				l = 1 / l;

				this._x = this._x * l;
				this._y = this._y * l;
				this._z = this._z * l;
				this._w = this._w * l;

			}

			this.onChangeCallback();

			return this;

		},

		multiply: function ( q, p ) {

			if ( p !== undefined ) {

				console.warn( 'THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.' );
				return this.multiplyQuaternions( q, p );

			}

			return this.multiplyQuaternions( this, q );

		},

		multiplyQuaternions: function ( a, b ) {

			// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

			var qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
			var qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;

			this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
			this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
			this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
			this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

			this.onChangeCallback();

			return this;

		},

		multiplyVector3: function ( vector ) {

			console.warn( 'THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.' );
			return vector.applyQuaternion( this );

		},

		slerp: function ( qb, t ) {

			if ( t === 0 ) return this;
			if ( t === 1 ) return this.copy( qb );

			var x = this._x, y = this._y, z = this._z, w = this._w;

			// http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

			var cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

			if ( cosHalfTheta < 0 ) {

				this._w = - qb._w;
				this._x = - qb._x;
				this._y = - qb._y;
				this._z = - qb._z;

				cosHalfTheta = - cosHalfTheta;

			} else {

				this.copy( qb );

			}

			if ( cosHalfTheta >= 1.0 ) {

				this._w = w;
				this._x = x;
				this._y = y;
				this._z = z;

				return this;

			}

			var halfTheta = Math.acos( cosHalfTheta );
			var sinHalfTheta = Math.sqrt( 1.0 - cosHalfTheta * cosHalfTheta );

			if ( Math.abs( sinHalfTheta ) < 0.001 ) {

				this._w = 0.5 * ( w + this._w );
				this._x = 0.5 * ( x + this._x );
				this._y = 0.5 * ( y + this._y );
				this._z = 0.5 * ( z + this._z );

				return this;

			}

			var ratioA = Math.sin( ( 1 - t ) * halfTheta ) / sinHalfTheta,
			ratioB = Math.sin( t * halfTheta ) / sinHalfTheta;

			this._w = ( w * ratioA + this._w * ratioB );
			this._x = ( x * ratioA + this._x * ratioB );
			this._y = ( y * ratioA + this._y * ratioB );
			this._z = ( z * ratioA + this._z * ratioB );

			this.onChangeCallback();

			return this;

		},

		equals: function ( quaternion ) {

			return ( quaternion._x === this._x ) && ( quaternion._y === this._y ) && ( quaternion._z === this._z ) && ( quaternion._w === this._w );

		},

		fromArray: function ( array, offset ) {

			if ( offset === undefined ) offset = 0;

			this._x = array[ offset ];
			this._y = array[ offset + 1 ];
			this._z = array[ offset + 2 ];
			this._w = array[ offset + 3 ];

			this.onChangeCallback();

			return this;

		},

		toArray: function ( array, offset ) {

			if ( array === undefined ) array = [];
			if ( offset === undefined ) offset = 0;

			array[ offset ] = this._x;
			array[ offset + 1 ] = this._y;
			array[ offset + 2 ] = this._z;
			array[ offset + 3 ] = this._w;

			return array;

		},

		onChange: function ( callback ) {

			this.onChangeCallback = callback;

			return this;

		},

		onChangeCallback: function () {},

		clone: function () {

			return new THREE.Quaternion( this._x, this._y, this._z, this._w );

		}

	};

	THREE.Quaternion.slerp = function ( qa, qb, qm, t ) {

		return qm.copy( qa ).slerp( qb, t );

	}

	// File:src/math/Vector2.js

	/**
	 * @author mrdoob / http://mrdoob.com/
	 * @author philogb / http://blog.thejit.org/
	 * @author egraether / http://egraether.com/
	 * @author zz85 / http://www.lab4games.net/zz85/blog
	 */

	THREE.Vector2 = function ( x, y ) {

		this.x = x || 0;
		this.y = y || 0;

	};

	THREE.Vector2.prototype = {

		constructor: THREE.Vector2,

		set: function ( x, y ) {

			this.x = x;
			this.y = y;

			return this;

		},

		setX: function ( x ) {

			this.x = x;

			return this;

		},

		setY: function ( y ) {

			this.y = y;

			return this;

		},

		setComponent: function ( index, value ) {

			switch ( index ) {

				case 0: this.x = value; break;
				case 1: this.y = value; break;
				default: throw new Error( 'index is out of range: ' + index );

			}

		},

		getComponent: function ( index ) {

			switch ( index ) {

				case 0: return this.x;
				case 1: return this.y;
				default: throw new Error( 'index is out of range: ' + index );

			}

		},

		copy: function ( v ) {

			this.x = v.x;
			this.y = v.y;

			return this;

		},

		add: function ( v, w ) {

			if ( w !== undefined ) {

				console.warn( 'THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
				return this.addVectors( v, w );

			}

			this.x += v.x;
			this.y += v.y;

			return this;

		},

		addVectors: function ( a, b ) {

			this.x = a.x + b.x;
			this.y = a.y + b.y;

			return this;

		},

		addScalar: function ( s ) {

			this.x += s;
			this.y += s;

			return this;

		},

		sub: function ( v, w ) {

			if ( w !== undefined ) {

				console.warn( 'THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
				return this.subVectors( v, w );

			}

			this.x -= v.x;
			this.y -= v.y;

			return this;

		},

		subVectors: function ( a, b ) {

			this.x = a.x - b.x;
			this.y = a.y - b.y;

			return this;

		},

		multiply: function ( v ) {

			this.x *= v.x;
			this.y *= v.y;

			return this;

		},

		multiplyScalar: function ( s ) {

			this.x *= s;
			this.y *= s;

			return this;

		},

		divide: function ( v ) {

			this.x /= v.x;
			this.y /= v.y;

			return this;

		},

		divideScalar: function ( scalar ) {

			if ( scalar !== 0 ) {

				var invScalar = 1 / scalar;

				this.x *= invScalar;
				this.y *= invScalar;

			} else {

				this.x = 0;
				this.y = 0;

			}

			return this;

		},

		min: function ( v ) {

			if ( this.x > v.x ) {

				this.x = v.x;

			}

			if ( this.y > v.y ) {

				this.y = v.y;

			}

			return this;

		},

		max: function ( v ) {

			if ( this.x < v.x ) {

				this.x = v.x;

			}

			if ( this.y < v.y ) {

				this.y = v.y;

			}

			return this;

		},

		clamp: function ( min, max ) {

			// This function assumes min < max, if this assumption isn't true it will not operate correctly

			if ( this.x < min.x ) {

				this.x = min.x;

			} else if ( this.x > max.x ) {

				this.x = max.x;

			}

			if ( this.y < min.y ) {

				this.y = min.y;

			} else if ( this.y > max.y ) {

				this.y = max.y;

			}

			return this;
		},

		clampScalar: ( function () {

			var min, max;

			return function ( minVal, maxVal ) {

				if ( min === undefined ) {

					min = new THREE.Vector2();
					max = new THREE.Vector2();

				}

				min.set( minVal, minVal );
				max.set( maxVal, maxVal );

				return this.clamp( min, max );

			};

		} )(),

		floor: function () {

			this.x = Math.floor( this.x );
			this.y = Math.floor( this.y );

			return this;

		},

		ceil: function () {

			this.x = Math.ceil( this.x );
			this.y = Math.ceil( this.y );

			return this;

		},

		round: function () {

			this.x = Math.round( this.x );
			this.y = Math.round( this.y );

			return this;

		},

		roundToZero: function () {

			this.x = ( this.x < 0 ) ? Math.ceil( this.x ) : Math.floor( this.x );
			this.y = ( this.y < 0 ) ? Math.ceil( this.y ) : Math.floor( this.y );

			return this;

		},

		negate: function () {

			this.x = - this.x;
			this.y = - this.y;

			return this;

		},

		dot: function ( v ) {

			return this.x * v.x + this.y * v.y;

		},

		lengthSq: function () {

			return this.x * this.x + this.y * this.y;

		},

		length: function () {

			return Math.sqrt( this.x * this.x + this.y * this.y );

		},

		normalize: function () {

			return this.divideScalar( this.length() );

		},

		distanceTo: function ( v ) {

			return Math.sqrt( this.distanceToSquared( v ) );

		},

		distanceToSquared: function ( v ) {

			var dx = this.x - v.x, dy = this.y - v.y;
			return dx * dx + dy * dy;

		},

		setLength: function ( l ) {

			var oldLength = this.length();

			if ( oldLength !== 0 && l !== oldLength ) {

				this.multiplyScalar( l / oldLength );
			}

			return this;

		},

		lerp: function ( v, alpha ) {

			this.x += ( v.x - this.x ) * alpha;
			this.y += ( v.y - this.y ) * alpha;

			return this;

		},

		equals: function ( v ) {

			return ( ( v.x === this.x ) && ( v.y === this.y ) );

		},

		fromArray: function ( array, offset ) {

			if ( offset === undefined ) offset = 0;

			this.x = array[ offset ];
			this.y = array[ offset + 1 ];

			return this;

		},

		toArray: function ( array, offset ) {

			if ( array === undefined ) array = [];
			if ( offset === undefined ) offset = 0;

			array[ offset ] = this.x;
			array[ offset + 1 ] = this.y;

			return array;

		},

		clone: function () {

			return new THREE.Vector2( this.x, this.y );

		}

	};

	// File:src/math/Vector3.js

	/**
	 * @author mrdoob / http://mrdoob.com/
	 * @author *kile / http://kile.stravaganza.org/
	 * @author philogb / http://blog.thejit.org/
	 * @author mikael emtinger / http://gomo.se/
	 * @author egraether / http://egraether.com/
	 * @author WestLangley / http://github.com/WestLangley
	 */

	THREE.Vector3 = function ( x, y, z ) {

		this.x = x || 0;
		this.y = y || 0;
		this.z = z || 0;

	};

	THREE.Vector3.prototype = {

		constructor: THREE.Vector3,

		set: function ( x, y, z ) {

			this.x = x;
			this.y = y;
			this.z = z;

			return this;

		},

		setX: function ( x ) {

			this.x = x;

			return this;

		},

		setY: function ( y ) {

			this.y = y;

			return this;

		},

		setZ: function ( z ) {

			this.z = z;

			return this;

		},

		setComponent: function ( index, value ) {

			switch ( index ) {

				case 0: this.x = value; break;
				case 1: this.y = value; break;
				case 2: this.z = value; break;
				default: throw new Error( 'index is out of range: ' + index );

			}

		},

		getComponent: function ( index ) {

			switch ( index ) {

				case 0: return this.x;
				case 1: return this.y;
				case 2: return this.z;
				default: throw new Error( 'index is out of range: ' + index );

			}

		},

		copy: function ( v ) {

			this.x = v.x;
			this.y = v.y;
			this.z = v.z;

			return this;

		},

		add: function ( v, w ) {

			if ( w !== undefined ) {

				console.warn( 'THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
				return this.addVectors( v, w );

			}

			this.x += v.x;
			this.y += v.y;
			this.z += v.z;

			return this;

		},

		addScalar: function ( s ) {

			this.x += s;
			this.y += s;
			this.z += s;

			return this;

		},

		addVectors: function ( a, b ) {

			this.x = a.x + b.x;
			this.y = a.y + b.y;
			this.z = a.z + b.z;

			return this;

		},

		sub: function ( v, w ) {

			if ( w !== undefined ) {

				console.warn( 'THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
				return this.subVectors( v, w );

			}

			this.x -= v.x;
			this.y -= v.y;
			this.z -= v.z;

			return this;

		},

		subVectors: function ( a, b ) {

			this.x = a.x - b.x;
			this.y = a.y - b.y;
			this.z = a.z - b.z;

			return this;

		},

		multiply: function ( v, w ) {

			if ( w !== undefined ) {

				console.warn( 'THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.' );
				return this.multiplyVectors( v, w );

			}

			this.x *= v.x;
			this.y *= v.y;
			this.z *= v.z;

			return this;

		},

		multiplyScalar: function ( scalar ) {

			this.x *= scalar;
			this.y *= scalar;
			this.z *= scalar;

			return this;

		},

		multiplyVectors: function ( a, b ) {

			this.x = a.x * b.x;
			this.y = a.y * b.y;
			this.z = a.z * b.z;

			return this;

		},

		applyEuler: function () {

			var quaternion;

			return function ( euler ) {

				if ( euler instanceof THREE.Euler === false ) {

					console.error( 'THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order.' );

				}

				if ( quaternion === undefined ) quaternion = new THREE.Quaternion();

				this.applyQuaternion( quaternion.setFromEuler( euler ) );

				return this;

			};

		}(),

		applyAxisAngle: function () {

			var quaternion;

			return function ( axis, angle ) {

				if ( quaternion === undefined ) quaternion = new THREE.Quaternion();

				this.applyQuaternion( quaternion.setFromAxisAngle( axis, angle ) );

				return this;

			};

		}(),

		applyMatrix3: function ( m ) {

			var x = this.x;
			var y = this.y;
			var z = this.z;

			var e = m.elements;

			this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ] * z;
			this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ] * z;
			this.z = e[ 2 ] * x + e[ 5 ] * y + e[ 8 ] * z;

			return this;

		},

		applyMatrix4: function ( m ) {

			// input: THREE.Matrix4 affine matrix

			var x = this.x, y = this.y, z = this.z;

			var e = m.elements;

			this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ]  * z + e[ 12 ];
			this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ]  * z + e[ 13 ];
			this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ];

			return this;

		},

		applyProjection: function ( m ) {

			// input: THREE.Matrix4 projection matrix

			var x = this.x, y = this.y, z = this.z;

			var e = m.elements;
			var d = 1 / ( e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] ); // perspective divide

			this.x = ( e[ 0 ] * x + e[ 4 ] * y + e[ 8 ]  * z + e[ 12 ] ) * d;
			this.y = ( e[ 1 ] * x + e[ 5 ] * y + e[ 9 ]  * z + e[ 13 ] ) * d;
			this.z = ( e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] ) * d;

			return this;

		},

		applyQuaternion: function ( q ) {

			var x = this.x;
			var y = this.y;
			var z = this.z;

			var qx = q.x;
			var qy = q.y;
			var qz = q.z;
			var qw = q.w;

			// calculate quat * vector

			var ix =  qw * x + qy * z - qz * y;
			var iy =  qw * y + qz * x - qx * z;
			var iz =  qw * z + qx * y - qy * x;
			var iw = - qx * x - qy * y - qz * z;

			// calculate result * inverse quat

			this.x = ix * qw + iw * - qx + iy * - qz - iz * - qy;
			this.y = iy * qw + iw * - qy + iz * - qx - ix * - qz;
			this.z = iz * qw + iw * - qz + ix * - qy - iy * - qx;

			return this;

		},

		project: function () {

			var matrix;

			return function ( camera ) {

				if ( matrix === undefined ) matrix = new THREE.Matrix4();

				matrix.multiplyMatrices( camera.projectionMatrix, matrix.getInverse( camera.matrixWorld ) );
				return this.applyProjection( matrix );

			};

		}(),

		unproject: function () {

			var matrix;

			return function ( camera ) {

				if ( matrix === undefined ) matrix = new THREE.Matrix4();

				matrix.multiplyMatrices( camera.matrixWorld, matrix.getInverse( camera.projectionMatrix ) );
				return this.applyProjection( matrix );

			};

		}(),

		transformDirection: function ( m ) {

			// input: THREE.Matrix4 affine matrix
			// vector interpreted as a direction

			var x = this.x, y = this.y, z = this.z;

			var e = m.elements;

			this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ]  * z;
			this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ]  * z;
			this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z;

			this.normalize();

			return this;

		},

		divide: function ( v ) {

			this.x /= v.x;
			this.y /= v.y;
			this.z /= v.z;

			return this;

		},

		divideScalar: function ( scalar ) {

			if ( scalar !== 0 ) {

				var invScalar = 1 / scalar;

				this.x *= invScalar;
				this.y *= invScalar;
				this.z *= invScalar;

			} else {

				this.x = 0;
				this.y = 0;
				this.z = 0;

			}

			return this;

		},

		min: function ( v ) {

			if ( this.x > v.x ) {

				this.x = v.x;

			}

			if ( this.y > v.y ) {

				this.y = v.y;

			}

			if ( this.z > v.z ) {

				this.z = v.z;

			}

			return this;

		},

		max: function ( v ) {

			if ( this.x < v.x ) {

				this.x = v.x;

			}

			if ( this.y < v.y ) {

				this.y = v.y;

			}

			if ( this.z < v.z ) {

				this.z = v.z;

			}

			return this;

		},

		clamp: function ( min, max ) {

			// This function assumes min < max, if this assumption isn't true it will not operate correctly

			if ( this.x < min.x ) {

				this.x = min.x;

			} else if ( this.x > max.x ) {

				this.x = max.x;

			}

			if ( this.y < min.y ) {

				this.y = min.y;

			} else if ( this.y > max.y ) {

				this.y = max.y;

			}

			if ( this.z < min.z ) {

				this.z = min.z;

			} else if ( this.z > max.z ) {

				this.z = max.z;

			}

			return this;

		},

		clampScalar: ( function () {

			var min, max;

			return function ( minVal, maxVal ) {

				if ( min === undefined ) {

					min = new THREE.Vector3();
					max = new THREE.Vector3();

				}

				min.set( minVal, minVal, minVal );
				max.set( maxVal, maxVal, maxVal );

				return this.clamp( min, max );

			};

		} )(),

		floor: function () {

			this.x = Math.floor( this.x );
			this.y = Math.floor( this.y );
			this.z = Math.floor( this.z );

			return this;

		},

		ceil: function () {

			this.x = Math.ceil( this.x );
			this.y = Math.ceil( this.y );
			this.z = Math.ceil( this.z );

			return this;

		},

		round: function () {

			this.x = Math.round( this.x );
			this.y = Math.round( this.y );
			this.z = Math.round( this.z );

			return this;

		},

		roundToZero: function () {

			this.x = ( this.x < 0 ) ? Math.ceil( this.x ) : Math.floor( this.x );
			this.y = ( this.y < 0 ) ? Math.ceil( this.y ) : Math.floor( this.y );
			this.z = ( this.z < 0 ) ? Math.ceil( this.z ) : Math.floor( this.z );

			return this;

		},

		negate: function () {

			this.x = - this.x;
			this.y = - this.y;
			this.z = - this.z;

			return this;

		},

		dot: function ( v ) {

			return this.x * v.x + this.y * v.y + this.z * v.z;

		},

		lengthSq: function () {

			return this.x * this.x + this.y * this.y + this.z * this.z;

		},

		length: function () {

			return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

		},

		lengthManhattan: function () {

			return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z );

		},

		normalize: function () {

			return this.divideScalar( this.length() );

		},

		setLength: function ( l ) {

			var oldLength = this.length();

			if ( oldLength !== 0 && l !== oldLength  ) {

				this.multiplyScalar( l / oldLength );
			}

			return this;

		},

		lerp: function ( v, alpha ) {

			this.x += ( v.x - this.x ) * alpha;
			this.y += ( v.y - this.y ) * alpha;
			this.z += ( v.z - this.z ) * alpha;

			return this;

		},

		cross: function ( v, w ) {

			if ( w !== undefined ) {

				console.warn( 'THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.' );
				return this.crossVectors( v, w );

			}

			var x = this.x, y = this.y, z = this.z;

			this.x = y * v.z - z * v.y;
			this.y = z * v.x - x * v.z;
			this.z = x * v.y - y * v.x;

			return this;

		},

		crossVectors: function ( a, b ) {

			var ax = a.x, ay = a.y, az = a.z;
			var bx = b.x, by = b.y, bz = b.z;

			this.x = ay * bz - az * by;
			this.y = az * bx - ax * bz;
			this.z = ax * by - ay * bx;

			return this;

		},

		projectOnVector: function () {

			var v1, dot;

			return function ( vector ) {

				if ( v1 === undefined ) v1 = new THREE.Vector3();

				v1.copy( vector ).normalize();

				dot = this.dot( v1 );

				return this.copy( v1 ).multiplyScalar( dot );

			};

		}(),

		projectOnPlane: function () {

			var v1;

			return function ( planeNormal ) {

				if ( v1 === undefined ) v1 = new THREE.Vector3();

				v1.copy( this ).projectOnVector( planeNormal );

				return this.sub( v1 );

			}

		}(),

		reflect: function () {

			// reflect incident vector off plane orthogonal to normal
			// normal is assumed to have unit length

			var v1;

			return function ( normal ) {

				if ( v1 === undefined ) v1 = new THREE.Vector3();

				return this.sub( v1.copy( normal ).multiplyScalar( 2 * this.dot( normal ) ) );

			}

		}(),

		angleTo: function ( v ) {

			var theta = this.dot( v ) / ( this.length() * v.length() );

			// clamp, to handle numerical problems

			return Math.acos( THREE.Math.clamp( theta, - 1, 1 ) );

		},

		distanceTo: function ( v ) {

			return Math.sqrt( this.distanceToSquared( v ) );

		},

		distanceToSquared: function ( v ) {

			var dx = this.x - v.x;
			var dy = this.y - v.y;
			var dz = this.z - v.z;

			return dx * dx + dy * dy + dz * dz;

		},

		setEulerFromRotationMatrix: function ( m, order ) {

			console.error( 'THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.' );

		},

		setEulerFromQuaternion: function ( q, order ) {

			console.error( 'THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.' );

		},

		getPositionFromMatrix: function ( m ) {

			console.warn( 'THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().' );

			return this.setFromMatrixPosition( m );

		},

		getScaleFromMatrix: function ( m ) {

			console.warn( 'THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().' );

			return this.setFromMatrixScale( m );
		},

		getColumnFromMatrix: function ( index, matrix ) {

			console.warn( 'THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().' );

			return this.setFromMatrixColumn( index, matrix );

		},

		setFromMatrixPosition: function ( m ) {

			this.x = m.elements[ 12 ];
			this.y = m.elements[ 13 ];
			this.z = m.elements[ 14 ];

			return this;

		},

		setFromMatrixScale: function ( m ) {

			var sx = this.set( m.elements[ 0 ], m.elements[ 1 ], m.elements[  2 ] ).length();
			var sy = this.set( m.elements[ 4 ], m.elements[ 5 ], m.elements[  6 ] ).length();
			var sz = this.set( m.elements[ 8 ], m.elements[ 9 ], m.elements[ 10 ] ).length();

			this.x = sx;
			this.y = sy;
			this.z = sz;

			return this;
		},

		setFromMatrixColumn: function ( index, matrix ) {

			var offset = index * 4;

			var me = matrix.elements;

			this.x = me[ offset ];
			this.y = me[ offset + 1 ];
			this.z = me[ offset + 2 ];

			return this;

		},

		equals: function ( v ) {

			return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) );

		},

		fromArray: function ( array, offset ) {

			if ( offset === undefined ) offset = 0;

			this.x = array[ offset ];
			this.y = array[ offset + 1 ];
			this.z = array[ offset + 2 ];

			return this;

		},

		toArray: function ( array, offset ) {

			if ( array === undefined ) array = [];
			if ( offset === undefined ) offset = 0;

			array[ offset ] = this.x;
			array[ offset + 1 ] = this.y;
			array[ offset + 2 ] = this.z;

			return array;

		},

		clone: function () {

			return new THREE.Vector3( this.x, this.y, this.z );

		}

	};

	// File:src/math/Vector4.js

	/**
	 * @author supereggbert / http://www.paulbrunt.co.uk/
	 * @author philogb / http://blog.thejit.org/
	 * @author mikael emtinger / http://gomo.se/
	 * @author egraether / http://egraether.com/
	 * @author WestLangley / http://github.com/WestLangley
	 */

	THREE.Vector4 = function ( x, y, z, w ) {

		this.x = x || 0;
		this.y = y || 0;
		this.z = z || 0;
		this.w = ( w !== undefined ) ? w : 1;

	};

	THREE.Vector4.prototype = {

		constructor: THREE.Vector4,

		set: function ( x, y, z, w ) {

			this.x = x;
			this.y = y;
			this.z = z;
			this.w = w;

			return this;

		},

		setX: function ( x ) {

			this.x = x;

			return this;

		},

		setY: function ( y ) {

			this.y = y;

			return this;

		},

		setZ: function ( z ) {

			this.z = z;

			return this;

		},

		setW: function ( w ) {

			this.w = w;

			return this;

		},

		setComponent: function ( index, value ) {

			switch ( index ) {

				case 0: this.x = value; break;
				case 1: this.y = value; break;
				case 2: this.z = value; break;
				case 3: this.w = value; break;
				default: throw new Error( 'index is out of range: ' + index );

			}

		},

		getComponent: function ( index ) {

			switch ( index ) {

				case 0: return this.x;
				case 1: return this.y;
				case 2: return this.z;
				case 3: return this.w;
				default: throw new Error( 'index is out of range: ' + index );

			}

		},

		copy: function ( v ) {

			this.x = v.x;
			this.y = v.y;
			this.z = v.z;
			this.w = ( v.w !== undefined ) ? v.w : 1;

			return this;

		},

		add: function ( v, w ) {

			if ( w !== undefined ) {

				console.warn( 'THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
				return this.addVectors( v, w );

			}

			this.x += v.x;
			this.y += v.y;
			this.z += v.z;
			this.w += v.w;

			return this;

		},

		addScalar: function ( s ) {

			this.x += s;
			this.y += s;
			this.z += s;
			this.w += s;

			return this;

		},

		addVectors: function ( a, b ) {

			this.x = a.x + b.x;
			this.y = a.y + b.y;
			this.z = a.z + b.z;
			this.w = a.w + b.w;

			return this;

		},

		sub: function ( v, w ) {

			if ( w !== undefined ) {

				console.warn( 'THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
				return this.subVectors( v, w );

			}

			this.x -= v.x;
			this.y -= v.y;
			this.z -= v.z;
			this.w -= v.w;

			return this;

		},

		subVectors: function ( a, b ) {

			this.x = a.x - b.x;
			this.y = a.y - b.y;
			this.z = a.z - b.z;
			this.w = a.w - b.w;

			return this;

		},

		multiplyScalar: function ( scalar ) {

			this.x *= scalar;
			this.y *= scalar;
			this.z *= scalar;
			this.w *= scalar;

			return this;

		},

		applyMatrix4: function ( m ) {

			var x = this.x;
			var y = this.y;
			var z = this.z;
			var w = this.w;

			var e = m.elements;

			this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] * w;
			this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] * w;
			this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] * w;
			this.w = e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] * w;

			return this;

		},

		divideScalar: function ( scalar ) {

			if ( scalar !== 0 ) {

				var invScalar = 1 / scalar;

				this.x *= invScalar;
				this.y *= invScalar;
				this.z *= invScalar;
				this.w *= invScalar;

			} else {

				this.x = 0;
				this.y = 0;
				this.z = 0;
				this.w = 1;

			}

			return this;

		},

		setAxisAngleFromQuaternion: function ( q ) {

			// http://www.euclideanspace.com/maths/geometry/rotations/conversions/quaternionToAngle/index.htm

			// q is assumed to be normalized

			this.w = 2 * Math.acos( q.w );

			var s = Math.sqrt( 1 - q.w * q.w );

			if ( s < 0.0001 ) {

				 this.x = 1;
				 this.y = 0;
				 this.z = 0;

			} else {

				 this.x = q.x / s;
				 this.y = q.y / s;
				 this.z = q.z / s;

			}

			return this;

		},

		setAxisAngleFromRotationMatrix: function ( m ) {

			// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToAngle/index.htm

			// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

			var angle, x, y, z,		// variables for result
				epsilon = 0.01,		// margin to allow for rounding errors
				epsilon2 = 0.1,		// margin to distinguish between 0 and 180 degrees

				te = m.elements,

				m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
				m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
				m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

			if ( ( Math.abs( m12 - m21 ) < epsilon )
			   && ( Math.abs( m13 - m31 ) < epsilon )
			   && ( Math.abs( m23 - m32 ) < epsilon ) ) {

				// singularity found
				// first check for identity matrix which must have +1 for all terms
				// in leading diagonal and zero in other terms

				if ( ( Math.abs( m12 + m21 ) < epsilon2 )
				   && ( Math.abs( m13 + m31 ) < epsilon2 )
				   && ( Math.abs( m23 + m32 ) < epsilon2 )
				   && ( Math.abs( m11 + m22 + m33 - 3 ) < epsilon2 ) ) {

					// this singularity is identity matrix so angle = 0

					this.set( 1, 0, 0, 0 );

					return this; // zero angle, arbitrary axis

				}

				// otherwise this singularity is angle = 180

				angle = Math.PI;

				var xx = ( m11 + 1 ) / 2;
				var yy = ( m22 + 1 ) / 2;
				var zz = ( m33 + 1 ) / 2;
				var xy = ( m12 + m21 ) / 4;
				var xz = ( m13 + m31 ) / 4;
				var yz = ( m23 + m32 ) / 4;

				if ( ( xx > yy ) && ( xx > zz ) ) { // m11 is the largest diagonal term

					if ( xx < epsilon ) {

						x = 0;
						y = 0.707106781;
						z = 0.707106781;

					} else {

						x = Math.sqrt( xx );
						y = xy / x;
						z = xz / x;

					}

				} else if ( yy > zz ) { // m22 is the largest diagonal term

					if ( yy < epsilon ) {

						x = 0.707106781;
						y = 0;
						z = 0.707106781;

					} else {

						y = Math.sqrt( yy );
						x = xy / y;
						z = yz / y;

					}

				} else { // m33 is the largest diagonal term so base result on this

					if ( zz < epsilon ) {

						x = 0.707106781;
						y = 0.707106781;
						z = 0;

					} else {

						z = Math.sqrt( zz );
						x = xz / z;
						y = yz / z;

					}

				}

				this.set( x, y, z, angle );

				return this; // return 180 deg rotation

			}

			// as we have reached here there are no singularities so we can handle normally

			var s = Math.sqrt( ( m32 - m23 ) * ( m32 - m23 )
							  + ( m13 - m31 ) * ( m13 - m31 )
							  + ( m21 - m12 ) * ( m21 - m12 ) ); // used to normalize

			if ( Math.abs( s ) < 0.001 ) s = 1;

			// prevent divide by zero, should not happen if matrix is orthogonal and should be
			// caught by singularity test above, but I've left it in just in case

			this.x = ( m32 - m23 ) / s;
			this.y = ( m13 - m31 ) / s;
			this.z = ( m21 - m12 ) / s;
			this.w = Math.acos( ( m11 + m22 + m33 - 1 ) / 2 );

			return this;

		},

		min: function ( v ) {

			if ( this.x > v.x ) {

				this.x = v.x;

			}

			if ( this.y > v.y ) {

				this.y = v.y;

			}

			if ( this.z > v.z ) {

				this.z = v.z;

			}

			if ( this.w > v.w ) {

				this.w = v.w;

			}

			return this;

		},

		max: function ( v ) {

			if ( this.x < v.x ) {

				this.x = v.x;

			}

			if ( this.y < v.y ) {

				this.y = v.y;

			}

			if ( this.z < v.z ) {

				this.z = v.z;

			}

			if ( this.w < v.w ) {

				this.w = v.w;

			}

			return this;

		},

		clamp: function ( min, max ) {

			// This function assumes min < max, if this assumption isn't true it will not operate correctly

			if ( this.x < min.x ) {

				this.x = min.x;

			} else if ( this.x > max.x ) {

				this.x = max.x;

			}

			if ( this.y < min.y ) {

				this.y = min.y;

			} else if ( this.y > max.y ) {

				this.y = max.y;

			}

			if ( this.z < min.z ) {

				this.z = min.z;

			} else if ( this.z > max.z ) {

				this.z = max.z;

			}

			if ( this.w < min.w ) {

				this.w = min.w;

			} else if ( this.w > max.w ) {

				this.w = max.w;

			}

			return this;

		},

		clampScalar: ( function () {

			var min, max;

			return function ( minVal, maxVal ) {

				if ( min === undefined ) {

					min = new THREE.Vector4();
					max = new THREE.Vector4();

				}

				min.set( minVal, minVal, minVal, minVal );
				max.set( maxVal, maxVal, maxVal, maxVal );

				return this.clamp( min, max );

			};

		} )(),

	    floor: function () {

	        this.x = Math.floor( this.x );
	        this.y = Math.floor( this.y );
	        this.z = Math.floor( this.z );
	        this.w = Math.floor( this.w );

	        return this;

	    },

	    ceil: function () {

	        this.x = Math.ceil( this.x );
	        this.y = Math.ceil( this.y );
	        this.z = Math.ceil( this.z );
	        this.w = Math.ceil( this.w );

	        return this;

	    },

	    round: function () {

	        this.x = Math.round( this.x );
	        this.y = Math.round( this.y );
	        this.z = Math.round( this.z );
	        this.w = Math.round( this.w );

	        return this;

	    },

	    roundToZero: function () {

	        this.x = ( this.x < 0 ) ? Math.ceil( this.x ) : Math.floor( this.x );
	        this.y = ( this.y < 0 ) ? Math.ceil( this.y ) : Math.floor( this.y );
	        this.z = ( this.z < 0 ) ? Math.ceil( this.z ) : Math.floor( this.z );
	        this.w = ( this.w < 0 ) ? Math.ceil( this.w ) : Math.floor( this.w );

	        return this;

	    },

		negate: function () {

			this.x = - this.x;
			this.y = - this.y;
			this.z = - this.z;
			this.w = - this.w;

			return this;

		},

		dot: function ( v ) {

			return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;

		},

		lengthSq: function () {

			return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;

		},

		length: function () {

			return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w );

		},

		lengthManhattan: function () {

			return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z ) + Math.abs( this.w );

		},

		normalize: function () {

			return this.divideScalar( this.length() );

		},

		setLength: function ( l ) {

			var oldLength = this.length();

			if ( oldLength !== 0 && l !== oldLength ) {

				this.multiplyScalar( l / oldLength );

			}

			return this;

		},

		lerp: function ( v, alpha ) {

			this.x += ( v.x - this.x ) * alpha;
			this.y += ( v.y - this.y ) * alpha;
			this.z += ( v.z - this.z ) * alpha;
			this.w += ( v.w - this.w ) * alpha;

			return this;

		},

		equals: function ( v ) {

			return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) && ( v.w === this.w ) );

		},

		fromArray: function ( array, offset ) {

			if ( offset === undefined ) offset = 0;

			this.x = array[ offset ];
			this.y = array[ offset + 1 ];
			this.z = array[ offset + 2 ];
			this.w = array[ offset + 3 ];

			return this;

		},

		toArray: function ( array, offset ) {

			if ( array === undefined ) array = [];
			if ( offset === undefined ) offset = 0;

			array[ offset ] = this.x;
			array[ offset + 1 ] = this.y;
			array[ offset + 2 ] = this.z;
			array[ offset + 3 ] = this.w;

			return array;

		},

		clone: function () {

			return new THREE.Vector4( this.x, this.y, this.z, this.w );

		}

	};

	// File:src/math/Euler.js

	/**
	 * @author mrdoob / http://mrdoob.com/
	 * @author WestLangley / http://github.com/WestLangley
	 * @author bhouston / http://exocortex.com
	 */

	THREE.Euler = function ( x, y, z, order ) {

		this._x = x || 0;
		this._y = y || 0;
		this._z = z || 0;
		this._order = order || THREE.Euler.DefaultOrder;

	};

	THREE.Euler.RotationOrders = [ 'XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX' ];

	THREE.Euler.DefaultOrder = 'XYZ';

	THREE.Euler.prototype = {

		constructor: THREE.Euler,

		_x: 0, _y: 0, _z: 0, _order: THREE.Euler.DefaultOrder,

		get x () {

			return this._x;

		},

		set x ( value ) {

			this._x = value;
			this.onChangeCallback();

		},

		get y () {

			return this._y;

		},

		set y ( value ) {

			this._y = value;
			this.onChangeCallback();

		},

		get z () {

			return this._z;

		},

		set z ( value ) {

			this._z = value;
			this.onChangeCallback();

		},

		get order () {

			return this._order;

		},

		set order ( value ) {

			this._order = value;
			this.onChangeCallback();

		},

		set: function ( x, y, z, order ) {

			this._x = x;
			this._y = y;
			this._z = z;
			this._order = order || this._order;

			this.onChangeCallback();

			return this;

		},

		copy: function ( euler ) {

			this._x = euler._x;
			this._y = euler._y;
			this._z = euler._z;
			this._order = euler._order;

			this.onChangeCallback();

			return this;

		},

		setFromRotationMatrix: function ( m, order ) {

			var clamp = THREE.Math.clamp;

			// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

			var te = m.elements;
			var m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ];
			var m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ];
			var m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

			order = order || this._order;

			if ( order === 'XYZ' ) {

				this._y = Math.asin( clamp( m13, - 1, 1 ) );

				if ( Math.abs( m13 ) < 0.99999 ) {

					this._x = Math.atan2( - m23, m33 );
					this._z = Math.atan2( - m12, m11 );

				} else {

					this._x = Math.atan2( m32, m22 );
					this._z = 0;

				}

			} else if ( order === 'YXZ' ) {

				this._x = Math.asin( - clamp( m23, - 1, 1 ) );

				if ( Math.abs( m23 ) < 0.99999 ) {

					this._y = Math.atan2( m13, m33 );
					this._z = Math.atan2( m21, m22 );

				} else {

					this._y = Math.atan2( - m31, m11 );
					this._z = 0;

				}

			} else if ( order === 'ZXY' ) {

				this._x = Math.asin( clamp( m32, - 1, 1 ) );

				if ( Math.abs( m32 ) < 0.99999 ) {

					this._y = Math.atan2( - m31, m33 );
					this._z = Math.atan2( - m12, m22 );

				} else {

					this._y = 0;
					this._z = Math.atan2( m21, m11 );

				}

			} else if ( order === 'ZYX' ) {

				this._y = Math.asin( - clamp( m31, - 1, 1 ) );

				if ( Math.abs( m31 ) < 0.99999 ) {

					this._x = Math.atan2( m32, m33 );
					this._z = Math.atan2( m21, m11 );

				} else {

					this._x = 0;
					this._z = Math.atan2( - m12, m22 );

				}

			} else if ( order === 'YZX' ) {

				this._z = Math.asin( clamp( m21, - 1, 1 ) );

				if ( Math.abs( m21 ) < 0.99999 ) {

					this._x = Math.atan2( - m23, m22 );
					this._y = Math.atan2( - m31, m11 );

				} else {

					this._x = 0;
					this._y = Math.atan2( m13, m33 );

				}

			} else if ( order === 'XZY' ) {

				this._z = Math.asin( - clamp( m12, - 1, 1 ) );

				if ( Math.abs( m12 ) < 0.99999 ) {

					this._x = Math.atan2( m32, m22 );
					this._y = Math.atan2( m13, m11 );

				} else {

					this._x = Math.atan2( - m23, m33 );
					this._y = 0;

				}

			} else {

				console.warn( 'THREE.Euler: .setFromRotationMatrix() given unsupported order: ' + order )

			}

			this._order = order;

			this.onChangeCallback();

			return this;

		},

		setFromQuaternion: function ( q, order, update ) {

			var clamp = THREE.Math.clamp;

			// q is assumed to be normalized

			// http://www.mathworks.com/matlabcentral/fileexchange/20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/content/SpinCalc.m

			var sqx = q.x * q.x;
			var sqy = q.y * q.y;
			var sqz = q.z * q.z;
			var sqw = q.w * q.w;

			order = order || this._order;

			if ( order === 'XYZ' ) {

				this._x = Math.atan2( 2 * ( q.x * q.w - q.y * q.z ), ( sqw - sqx - sqy + sqz ) );
				this._y = Math.asin(  clamp( 2 * ( q.x * q.z + q.y * q.w ), - 1, 1 ) );
				this._z = Math.atan2( 2 * ( q.z * q.w - q.x * q.y ), ( sqw + sqx - sqy - sqz ) );

			} else if ( order ===  'YXZ' ) {

				this._x = Math.asin(  clamp( 2 * ( q.x * q.w - q.y * q.z ), - 1, 1 ) );
				this._y = Math.atan2( 2 * ( q.x * q.z + q.y * q.w ), ( sqw - sqx - sqy + sqz ) );
				this._z = Math.atan2( 2 * ( q.x * q.y + q.z * q.w ), ( sqw - sqx + sqy - sqz ) );

			} else if ( order === 'ZXY' ) {

				this._x = Math.asin(  clamp( 2 * ( q.x * q.w + q.y * q.z ), - 1, 1 ) );
				this._y = Math.atan2( 2 * ( q.y * q.w - q.z * q.x ), ( sqw - sqx - sqy + sqz ) );
				this._z = Math.atan2( 2 * ( q.z * q.w - q.x * q.y ), ( sqw - sqx + sqy - sqz ) );

			} else if ( order === 'ZYX' ) {

				this._x = Math.atan2( 2 * ( q.x * q.w + q.z * q.y ), ( sqw - sqx - sqy + sqz ) );
				this._y = Math.asin(  clamp( 2 * ( q.y * q.w - q.x * q.z ), - 1, 1 ) );
				this._z = Math.atan2( 2 * ( q.x * q.y + q.z * q.w ), ( sqw + sqx - sqy - sqz ) );

			} else if ( order === 'YZX' ) {

				this._x = Math.atan2( 2 * ( q.x * q.w - q.z * q.y ), ( sqw - sqx + sqy - sqz ) );
				this._y = Math.atan2( 2 * ( q.y * q.w - q.x * q.z ), ( sqw + sqx - sqy - sqz ) );
				this._z = Math.asin(  clamp( 2 * ( q.x * q.y + q.z * q.w ), - 1, 1 ) );

			} else if ( order === 'XZY' ) {

				this._x = Math.atan2( 2 * ( q.x * q.w + q.y * q.z ), ( sqw - sqx + sqy - sqz ) );
				this._y = Math.atan2( 2 * ( q.x * q.z + q.y * q.w ), ( sqw + sqx - sqy - sqz ) );
				this._z = Math.asin(  clamp( 2 * ( q.z * q.w - q.x * q.y ), - 1, 1 ) );

			} else {

				console.warn( 'THREE.Euler: .setFromQuaternion() given unsupported order: ' + order )

			}

			this._order = order;

			if ( update !== false ) this.onChangeCallback();

			return this;

		},

		reorder: function () {

			// WARNING: this discards revolution information -bhouston

			var q = new THREE.Quaternion();

			return function ( newOrder ) {

				q.setFromEuler( this );
				this.setFromQuaternion( q, newOrder );

			};


		}(),

		equals: function ( euler ) {

			return ( euler._x === this._x ) && ( euler._y === this._y ) && ( euler._z === this._z ) && ( euler._order === this._order );

		},

		fromArray: function ( array ) {

			this._x = array[ 0 ];
			this._y = array[ 1 ];
			this._z = array[ 2 ];
			if ( array[ 3 ] !== undefined ) this._order = array[ 3 ];

			this.onChangeCallback();

			return this;

		},

		toArray: function () {

			return [ this._x, this._y, this._z, this._order ];

		},

		onChange: function ( callback ) {

			this.onChangeCallback = callback;

			return this;

		},

		onChangeCallback: function () {},

		clone: function () {

			return new THREE.Euler( this._x, this._y, this._z, this._order );

		}

	};

	// File:src/math/Line3.js

	/**
	 * @author bhouston / http://exocortex.com
	 */

	THREE.Line3 = function ( start, end ) {

		this.start = ( start !== undefined ) ? start : new THREE.Vector3();
		this.end = ( end !== undefined ) ? end : new THREE.Vector3();

	};

	THREE.Line3.prototype = {

		constructor: THREE.Line3,

		set: function ( start, end ) {

			this.start.copy( start );
			this.end.copy( end );

			return this;

		},

		copy: function ( line ) {

			this.start.copy( line.start );
			this.end.copy( line.end );

			return this;

		},

		center: function ( optionalTarget ) {

			var result = optionalTarget || new THREE.Vector3();
			return result.addVectors( this.start, this.end ).multiplyScalar( 0.5 );

		},

		delta: function ( optionalTarget ) {

			var result = optionalTarget || new THREE.Vector3();
			return result.subVectors( this.end, this.start );

		},

		distanceSq: function () {

			return this.start.distanceToSquared( this.end );

		},

		distance: function () {

			return this.start.distanceTo( this.end );

		},

		at: function ( t, optionalTarget ) {

			var result = optionalTarget || new THREE.Vector3();

			return this.delta( result ).multiplyScalar( t ).add( this.start );

		},

		closestPointToPointParameter: function () {

			var startP = new THREE.Vector3();
			var startEnd = new THREE.Vector3();

			return function ( point, clampToLine ) {

				startP.subVectors( point, this.start );
				startEnd.subVectors( this.end, this.start );

				var startEnd2 = startEnd.dot( startEnd );
				var startEnd_startP = startEnd.dot( startP );

				var t = startEnd_startP / startEnd2;

				if ( clampToLine ) {

					t = THREE.Math.clamp( t, 0, 1 );

				}

				return t;

			};

		}(),

		closestPointToPoint: function ( point, clampToLine, optionalTarget ) {

			var t = this.closestPointToPointParameter( point, clampToLine );

			var result = optionalTarget || new THREE.Vector3();

			return this.delta( result ).multiplyScalar( t ).add( this.start );

		},

		applyMatrix4: function ( matrix ) {

			this.start.applyMatrix4( matrix );
			this.end.applyMatrix4( matrix );

			return this;

		},

		equals: function ( line ) {

			return line.start.equals( this.start ) && line.end.equals( this.end );

		},

		clone: function () {

			return new THREE.Line3().copy( this );

		}

	};

	// File:src/math/Matrix3.js

	/**
	 * @author alteredq / http://alteredqualia.com/
	 * @author WestLangley / http://github.com/WestLangley
	 * @author bhouston / http://exocortex.com
	 */

	THREE.Matrix3 = function () {

		this.elements = new Float32Array( [

			1, 0, 0,
			0, 1, 0,
			0, 0, 1

		] );

		if ( arguments.length > 0 ) {

			console.error( 'THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.' );

		}

	};

	THREE.Matrix3.prototype = {

		constructor: THREE.Matrix3,

		set: function ( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

			var te = this.elements;

			te[ 0 ] = n11; te[ 3 ] = n12; te[ 6 ] = n13;
			te[ 1 ] = n21; te[ 4 ] = n22; te[ 7 ] = n23;
			te[ 2 ] = n31; te[ 5 ] = n32; te[ 8 ] = n33;

			return this;

		},

		identity: function () {

			this.set(

				1, 0, 0,
				0, 1, 0,
				0, 0, 1

			);

			return this;

		},

		copy: function ( m ) {

			var me = m.elements;

			this.set(

				me[ 0 ], me[ 3 ], me[ 6 ],
				me[ 1 ], me[ 4 ], me[ 7 ],
				me[ 2 ], me[ 5 ], me[ 8 ]

			);

			return this;

		},

		multiplyVector3: function ( vector ) {

			console.warn( 'THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.' );
			return vector.applyMatrix3( this );

		},

		multiplyVector3Array: function ( a ) {

			console.warn( 'THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.' );
			return this.applyToVector3Array( a );

		},

		applyToVector3Array: function () {

			var v1 = new THREE.Vector3();

			return function ( array, offset, length ) {

				if ( offset === undefined ) offset = 0;
				if ( length === undefined ) length = array.length;

				for ( var i = 0, j = offset, il; i < length; i += 3, j += 3 ) {

					v1.x = array[ j ];
					v1.y = array[ j + 1 ];
					v1.z = array[ j + 2 ];

					v1.applyMatrix3( this );

					array[ j ]     = v1.x;
					array[ j + 1 ] = v1.y;
					array[ j + 2 ] = v1.z;

				}

				return array;

			};

		}(),

		multiplyScalar: function ( s ) {

			var te = this.elements;

			te[ 0 ] *= s; te[ 3 ] *= s; te[ 6 ] *= s;
			te[ 1 ] *= s; te[ 4 ] *= s; te[ 7 ] *= s;
			te[ 2 ] *= s; te[ 5 ] *= s; te[ 8 ] *= s;

			return this;

		},

		determinant: function () {

			var te = this.elements;

			var a = te[ 0 ], b = te[ 1 ], c = te[ 2 ],
				d = te[ 3 ], e = te[ 4 ], f = te[ 5 ],
				g = te[ 6 ], h = te[ 7 ], i = te[ 8 ];

			return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;

		},

		getInverse: function ( matrix, throwOnInvertible ) {

			// input: THREE.Matrix4
			// ( based on http://code.google.com/p/webgl-mjs/ )

			var me = matrix.elements;
			var te = this.elements;

			te[ 0 ] =   me[ 10 ] * me[ 5 ] - me[ 6 ] * me[ 9 ];
			te[ 1 ] = - me[ 10 ] * me[ 1 ] + me[ 2 ] * me[ 9 ];
			te[ 2 ] =   me[ 6 ] * me[ 1 ] - me[ 2 ] * me[ 5 ];
			te[ 3 ] = - me[ 10 ] * me[ 4 ] + me[ 6 ] * me[ 8 ];
			te[ 4 ] =   me[ 10 ] * me[ 0 ] - me[ 2 ] * me[ 8 ];
			te[ 5 ] = - me[ 6 ] * me[ 0 ] + me[ 2 ] * me[ 4 ];
			te[ 6 ] =   me[ 9 ] * me[ 4 ] - me[ 5 ] * me[ 8 ];
			te[ 7 ] = - me[ 9 ] * me[ 0 ] + me[ 1 ] * me[ 8 ];
			te[ 8 ] =   me[ 5 ] * me[ 0 ] - me[ 1 ] * me[ 4 ];

			var det = me[ 0 ] * te[ 0 ] + me[ 1 ] * te[ 3 ] + me[ 2 ] * te[ 6 ];

			// no inverse

			if ( det === 0 ) {

				var msg = "Matrix3.getInverse(): can't invert matrix, determinant is 0";

				if ( throwOnInvertible || false ) {

					throw new Error( msg );

				} else {

					console.warn( msg );

				}

				this.identity();

				return this;

			}

			this.multiplyScalar( 1.0 / det );

			return this;

		},

		transpose: function () {

			var tmp, m = this.elements;

			tmp = m[ 1 ]; m[ 1 ] = m[ 3 ]; m[ 3 ] = tmp;
			tmp = m[ 2 ]; m[ 2 ] = m[ 6 ]; m[ 6 ] = tmp;
			tmp = m[ 5 ]; m[ 5 ] = m[ 7 ]; m[ 7 ] = tmp;

			return this;

		},

		flattenToArrayOffset: function ( array, offset ) {

			var te = this.elements;

			array[ offset     ] = te[ 0 ];
			array[ offset + 1 ] = te[ 1 ];
			array[ offset + 2 ] = te[ 2 ];

			array[ offset + 3 ] = te[ 3 ];
			array[ offset + 4 ] = te[ 4 ];
			array[ offset + 5 ] = te[ 5 ];

			array[ offset + 6 ] = te[ 6 ];
			array[ offset + 7 ] = te[ 7 ];
			array[ offset + 8 ]  = te[ 8 ];

			return array;

		},

		getNormalMatrix: function ( m ) {

			// input: THREE.Matrix4

			this.getInverse( m ).transpose();

			return this;

		},

		transposeIntoArray: function ( r ) {

			var m = this.elements;

			r[ 0 ] = m[ 0 ];
			r[ 1 ] = m[ 3 ];
			r[ 2 ] = m[ 6 ];
			r[ 3 ] = m[ 1 ];
			r[ 4 ] = m[ 4 ];
			r[ 5 ] = m[ 7 ];
			r[ 6 ] = m[ 2 ];
			r[ 7 ] = m[ 5 ];
			r[ 8 ] = m[ 8 ];

			return this;

		},

		fromArray: function ( array ) {

			this.elements.set( array );

			return this;

		},

		toArray: function () {

			var te = this.elements;

			return [
				te[ 0 ], te[ 1 ], te[ 2 ],
				te[ 3 ], te[ 4 ], te[ 5 ],
				te[ 6 ], te[ 7 ], te[ 8 ]
			];

		},

		clone: function () {

			return new THREE.Matrix3().fromArray( this.elements );

		}

	};

	// File:src/math/Matrix4.js

	/**
	 * @author mrdoob / http://mrdoob.com/
	 * @author supereggbert / http://www.paulbrunt.co.uk/
	 * @author philogb / http://blog.thejit.org/
	 * @author jordi_ros / http://plattsoft.com
	 * @author D1plo1d / http://github.com/D1plo1d
	 * @author alteredq / http://alteredqualia.com/
	 * @author mikael emtinger / http://gomo.se/
	 * @author timknip / http://www.floorplanner.com/
	 * @author bhouston / http://exocortex.com
	 * @author WestLangley / http://github.com/WestLangley
	 */

	THREE.Matrix4 = function () {

		this.elements = new Float32Array( [

			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		] );

		if ( arguments.length > 0 ) {

			console.error( 'THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.' );

		}

	};

	THREE.Matrix4.prototype = {

		constructor: THREE.Matrix4,

		set: function ( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

			var te = this.elements;

			te[ 0 ] = n11; te[ 4 ] = n12; te[ 8 ] = n13; te[ 12 ] = n14;
			te[ 1 ] = n21; te[ 5 ] = n22; te[ 9 ] = n23; te[ 13 ] = n24;
			te[ 2 ] = n31; te[ 6 ] = n32; te[ 10 ] = n33; te[ 14 ] = n34;
			te[ 3 ] = n41; te[ 7 ] = n42; te[ 11 ] = n43; te[ 15 ] = n44;

			return this;

		},

		identity: function () {

			this.set(

				1, 0, 0, 0,
				0, 1, 0, 0,
				0, 0, 1, 0,
				0, 0, 0, 1

			);

			return this;

		},

		copy: function ( m ) {

			this.elements.set( m.elements );

			return this;

		},

		extractPosition: function ( m ) {

			console.warn( 'THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().' );
			return this.copyPosition( m );

		},

		copyPosition: function ( m ) {

			var te = this.elements;
			var me = m.elements;

			te[ 12 ] = me[ 12 ];
			te[ 13 ] = me[ 13 ];
			te[ 14 ] = me[ 14 ];

			return this;

		},

		extractRotation: function () {

			var v1 = new THREE.Vector3();

			return function ( m ) {

				var te = this.elements;
				var me = m.elements;

				var scaleX = 1 / v1.set( me[ 0 ], me[ 1 ], me[ 2 ] ).length();
				var scaleY = 1 / v1.set( me[ 4 ], me[ 5 ], me[ 6 ] ).length();
				var scaleZ = 1 / v1.set( me[ 8 ], me[ 9 ], me[ 10 ] ).length();

				te[ 0 ] = me[ 0 ] * scaleX;
				te[ 1 ] = me[ 1 ] * scaleX;
				te[ 2 ] = me[ 2 ] * scaleX;

				te[ 4 ] = me[ 4 ] * scaleY;
				te[ 5 ] = me[ 5 ] * scaleY;
				te[ 6 ] = me[ 6 ] * scaleY;

				te[ 8 ] = me[ 8 ] * scaleZ;
				te[ 9 ] = me[ 9 ] * scaleZ;
				te[ 10 ] = me[ 10 ] * scaleZ;

				return this;

			};

		}(),

		makeRotationFromEuler: function ( euler ) {

			if ( euler instanceof THREE.Euler === false ) {

				console.error( 'THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.' );

			}

			var te = this.elements;

			var x = euler.x, y = euler.y, z = euler.z;
			var a = Math.cos( x ), b = Math.sin( x );
			var c = Math.cos( y ), d = Math.sin( y );
			var e = Math.cos( z ), f = Math.sin( z );

			if ( euler.order === 'XYZ' ) {

				var ae = a * e, af = a * f, be = b * e, bf = b * f;

				te[ 0 ] = c * e;
				te[ 4 ] = - c * f;
				te[ 8 ] = d;

				te[ 1 ] = af + be * d;
				te[ 5 ] = ae - bf * d;
				te[ 9 ] = - b * c;

				te[ 2 ] = bf - ae * d;
				te[ 6 ] = be + af * d;
				te[ 10 ] = a * c;

			} else if ( euler.order === 'YXZ' ) {

				var ce = c * e, cf = c * f, de = d * e, df = d * f;

				te[ 0 ] = ce + df * b;
				te[ 4 ] = de * b - cf;
				te[ 8 ] = a * d;

				te[ 1 ] = a * f;
				te[ 5 ] = a * e;
				te[ 9 ] = - b;

				te[ 2 ] = cf * b - de;
				te[ 6 ] = df + ce * b;
				te[ 10 ] = a * c;

			} else if ( euler.order === 'ZXY' ) {

				var ce = c * e, cf = c * f, de = d * e, df = d * f;

				te[ 0 ] = ce - df * b;
				te[ 4 ] = - a * f;
				te[ 8 ] = de + cf * b;

				te[ 1 ] = cf + de * b;
				te[ 5 ] = a * e;
				te[ 9 ] = df - ce * b;

				te[ 2 ] = - a * d;
				te[ 6 ] = b;
				te[ 10 ] = a * c;

			} else if ( euler.order === 'ZYX' ) {

				var ae = a * e, af = a * f, be = b * e, bf = b * f;

				te[ 0 ] = c * e;
				te[ 4 ] = be * d - af;
				te[ 8 ] = ae * d + bf;

				te[ 1 ] = c * f;
				te[ 5 ] = bf * d + ae;
				te[ 9 ] = af * d - be;

				te[ 2 ] = - d;
				te[ 6 ] = b * c;
				te[ 10 ] = a * c;

			} else if ( euler.order === 'YZX' ) {

				var ac = a * c, ad = a * d, bc = b * c, bd = b * d;

				te[ 0 ] = c * e;
				te[ 4 ] = bd - ac * f;
				te[ 8 ] = bc * f + ad;

				te[ 1 ] = f;
				te[ 5 ] = a * e;
				te[ 9 ] = - b * e;

				te[ 2 ] = - d * e;
				te[ 6 ] = ad * f + bc;
				te[ 10 ] = ac - bd * f;

			} else if ( euler.order === 'XZY' ) {

				var ac = a * c, ad = a * d, bc = b * c, bd = b * d;

				te[ 0 ] = c * e;
				te[ 4 ] = - f;
				te[ 8 ] = d * e;

				te[ 1 ] = ac * f + bd;
				te[ 5 ] = a * e;
				te[ 9 ] = ad * f - bc;

				te[ 2 ] = bc * f - ad;
				te[ 6 ] = b * e;
				te[ 10 ] = bd * f + ac;

			}

			// last column
			te[ 3 ] = 0;
			te[ 7 ] = 0;
			te[ 11 ] = 0;

			// bottom row
			te[ 12 ] = 0;
			te[ 13 ] = 0;
			te[ 14 ] = 0;
			te[ 15 ] = 1;

			return this;

		},

		setRotationFromQuaternion: function ( q ) {

			console.warn( 'THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().' );

			return this.makeRotationFromQuaternion( q );

		},

		makeRotationFromQuaternion: function ( q ) {

			var te = this.elements;

			var x = q.x, y = q.y, z = q.z, w = q.w;
			var x2 = x + x, y2 = y + y, z2 = z + z;
			var xx = x * x2, xy = x * y2, xz = x * z2;
			var yy = y * y2, yz = y * z2, zz = z * z2;
			var wx = w * x2, wy = w * y2, wz = w * z2;

			te[ 0 ] = 1 - ( yy + zz );
			te[ 4 ] = xy - wz;
			te[ 8 ] = xz + wy;

			te[ 1 ] = xy + wz;
			te[ 5 ] = 1 - ( xx + zz );
			te[ 9 ] = yz - wx;

			te[ 2 ] = xz - wy;
			te[ 6 ] = yz + wx;
			te[ 10 ] = 1 - ( xx + yy );

			// last column
			te[ 3 ] = 0;
			te[ 7 ] = 0;
			te[ 11 ] = 0;

			// bottom row
			te[ 12 ] = 0;
			te[ 13 ] = 0;
			te[ 14 ] = 0;
			te[ 15 ] = 1;

			return this;

		},

		lookAt: function () {

			var x = new THREE.Vector3();
			var y = new THREE.Vector3();
			var z = new THREE.Vector3();

			return function ( eye, target, up ) {

				var te = this.elements;

				z.subVectors( eye, target ).normalize();

				if ( z.length() === 0 ) {

					z.z = 1;

				}

				x.crossVectors( up, z ).normalize();

				if ( x.length() === 0 ) {

					z.x += 0.0001;
					x.crossVectors( up, z ).normalize();

				}

				y.crossVectors( z, x );


				te[ 0 ] = x.x; te[ 4 ] = y.x; te[ 8 ] = z.x;
				te[ 1 ] = x.y; te[ 5 ] = y.y; te[ 9 ] = z.y;
				te[ 2 ] = x.z; te[ 6 ] = y.z; te[ 10 ] = z.z;

				return this;

			};

		}(),

		multiply: function ( m, n ) {

			if ( n !== undefined ) {

				console.warn( 'THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.' );
				return this.multiplyMatrices( m, n );

			}

			return this.multiplyMatrices( this, m );

		},

		multiplyMatrices: function ( a, b ) {

			var ae = a.elements;
			var be = b.elements;
			var te = this.elements;

			var a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
			var a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
			var a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
			var a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];

			var b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
			var b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
			var b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
			var b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];

			te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
			te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
			te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
			te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

			te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
			te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
			te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
			te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

			te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
			te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
			te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
			te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

			te[ 3 ] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
			te[ 7 ] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
			te[ 11 ] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
			te[ 15 ] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

			return this;

		},

		multiplyToArray: function ( a, b, r ) {

			var te = this.elements;

			this.multiplyMatrices( a, b );

			r[ 0 ] = te[ 0 ]; r[ 1 ] = te[ 1 ]; r[ 2 ] = te[ 2 ]; r[ 3 ] = te[ 3 ];
			r[ 4 ] = te[ 4 ]; r[ 5 ] = te[ 5 ]; r[ 6 ] = te[ 6 ]; r[ 7 ] = te[ 7 ];
			r[ 8 ]  = te[ 8 ]; r[ 9 ]  = te[ 9 ]; r[ 10 ] = te[ 10 ]; r[ 11 ] = te[ 11 ];
			r[ 12 ] = te[ 12 ]; r[ 13 ] = te[ 13 ]; r[ 14 ] = te[ 14 ]; r[ 15 ] = te[ 15 ];

			return this;

		},

		multiplyScalar: function ( s ) {

			var te = this.elements;

			te[ 0 ] *= s; te[ 4 ] *= s; te[ 8 ] *= s; te[ 12 ] *= s;
			te[ 1 ] *= s; te[ 5 ] *= s; te[ 9 ] *= s; te[ 13 ] *= s;
			te[ 2 ] *= s; te[ 6 ] *= s; te[ 10 ] *= s; te[ 14 ] *= s;
			te[ 3 ] *= s; te[ 7 ] *= s; te[ 11 ] *= s; te[ 15 ] *= s;

			return this;

		},

		multiplyVector3: function ( vector ) {

			console.warn( 'THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.' );
			return vector.applyProjection( this );

		},

		multiplyVector4: function ( vector ) {

			console.warn( 'THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.' );
			return vector.applyMatrix4( this );

		},

		multiplyVector3Array: function ( a ) {

			console.warn( 'THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.' );
			return this.applyToVector3Array( a );

		},

		applyToVector3Array: function () {

			var v1 = new THREE.Vector3();

			return function ( array, offset, length ) {

				if ( offset === undefined ) offset = 0;
				if ( length === undefined ) length = array.length;

				for ( var i = 0, j = offset, il; i < length; i += 3, j += 3 ) {

					v1.x = array[ j ];
					v1.y = array[ j + 1 ];
					v1.z = array[ j + 2 ];

					v1.applyMatrix4( this );

					array[ j ]     = v1.x;
					array[ j + 1 ] = v1.y;
					array[ j + 2 ] = v1.z;

				}

				return array;

			};

		}(),

		rotateAxis: function ( v ) {

			console.warn( 'THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.' );

			v.transformDirection( this );

		},

		crossVector: function ( vector ) {

			console.warn( 'THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.' );
			return vector.applyMatrix4( this );

		},

		determinant: function () {

			var te = this.elements;

			var n11 = te[ 0 ], n12 = te[ 4 ], n13 = te[ 8 ], n14 = te[ 12 ];
			var n21 = te[ 1 ], n22 = te[ 5 ], n23 = te[ 9 ], n24 = te[ 13 ];
			var n31 = te[ 2 ], n32 = te[ 6 ], n33 = te[ 10 ], n34 = te[ 14 ];
			var n41 = te[ 3 ], n42 = te[ 7 ], n43 = te[ 11 ], n44 = te[ 15 ];

			//TODO: make this more efficient
			//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

			return (
				n41 * (
					+ n14 * n23 * n32
					 - n13 * n24 * n32
					 - n14 * n22 * n33
					 + n12 * n24 * n33
					 + n13 * n22 * n34
					 - n12 * n23 * n34
				) +
				n42 * (
					+ n11 * n23 * n34
					 - n11 * n24 * n33
					 + n14 * n21 * n33
					 - n13 * n21 * n34
					 + n13 * n24 * n31
					 - n14 * n23 * n31
				) +
				n43 * (
					+ n11 * n24 * n32
					 - n11 * n22 * n34
					 - n14 * n21 * n32
					 + n12 * n21 * n34
					 + n14 * n22 * n31
					 - n12 * n24 * n31
				) +
				n44 * (
					- n13 * n22 * n31
					 - n11 * n23 * n32
					 + n11 * n22 * n33
					 + n13 * n21 * n32
					 - n12 * n21 * n33
					 + n12 * n23 * n31
				)

			);

		},

		transpose: function () {

			var te = this.elements;
			var tmp;

			tmp = te[ 1 ]; te[ 1 ] = te[ 4 ]; te[ 4 ] = tmp;
			tmp = te[ 2 ]; te[ 2 ] = te[ 8 ]; te[ 8 ] = tmp;
			tmp = te[ 6 ]; te[ 6 ] = te[ 9 ]; te[ 9 ] = tmp;

			tmp = te[ 3 ]; te[ 3 ] = te[ 12 ]; te[ 12 ] = tmp;
			tmp = te[ 7 ]; te[ 7 ] = te[ 13 ]; te[ 13 ] = tmp;
			tmp = te[ 11 ]; te[ 11 ] = te[ 14 ]; te[ 14 ] = tmp;

			return this;

		},

		flattenToArrayOffset: function ( array, offset ) {

			var te = this.elements;

			array[ offset     ] = te[ 0 ];
			array[ offset + 1 ] = te[ 1 ];
			array[ offset + 2 ] = te[ 2 ];
			array[ offset + 3 ] = te[ 3 ];

			array[ offset + 4 ] = te[ 4 ];
			array[ offset + 5 ] = te[ 5 ];
			array[ offset + 6 ] = te[ 6 ];
			array[ offset + 7 ] = te[ 7 ];

			array[ offset + 8 ]  = te[ 8 ];
			array[ offset + 9 ]  = te[ 9 ];
			array[ offset + 10 ] = te[ 10 ];
			array[ offset + 11 ] = te[ 11 ];

			array[ offset + 12 ] = te[ 12 ];
			array[ offset + 13 ] = te[ 13 ];
			array[ offset + 14 ] = te[ 14 ];
			array[ offset + 15 ] = te[ 15 ];

			return array;

		},

		getPosition: function () {

			var v1 = new THREE.Vector3();

			return function () {

				console.warn( 'THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.' );

				var te = this.elements;
				return v1.set( te[ 12 ], te[ 13 ], te[ 14 ] );

			};

		}(),

		setPosition: function ( v ) {

			var te = this.elements;

			te[ 12 ] = v.x;
			te[ 13 ] = v.y;
			te[ 14 ] = v.z;

			return this;

		},

		getInverse: function ( m, throwOnInvertible ) {

			// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
			var te = this.elements;
			var me = m.elements;

			var n11 = me[ 0 ], n12 = me[ 4 ], n13 = me[ 8 ], n14 = me[ 12 ];
			var n21 = me[ 1 ], n22 = me[ 5 ], n23 = me[ 9 ], n24 = me[ 13 ];
			var n31 = me[ 2 ], n32 = me[ 6 ], n33 = me[ 10 ], n34 = me[ 14 ];
			var n41 = me[ 3 ], n42 = me[ 7 ], n43 = me[ 11 ], n44 = me[ 15 ];

			te[ 0 ] = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44;
			te[ 4 ] = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44;
			te[ 8 ] = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44;
			te[ 12 ] = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;
			te[ 1 ] = n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44;
			te[ 5 ] = n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44;
			te[ 9 ] = n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44;
			te[ 13 ] = n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34;
			te[ 2 ] = n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44;
			te[ 6 ] = n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44;
			te[ 10 ] = n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44;
			te[ 14 ] = n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34;
			te[ 3 ] = n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43;
			te[ 7 ] = n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43;
			te[ 11 ] = n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43;
			te[ 15 ] = n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33;

			var det = n11 * te[ 0 ] + n21 * te[ 4 ] + n31 * te[ 8 ] + n41 * te[ 12 ];

			if ( det == 0 ) {

				var msg = "Matrix4.getInverse(): can't invert matrix, determinant is 0";

				if ( throwOnInvertible || false ) {

					throw new Error( msg );

				} else {

					console.warn( msg );

				}

				this.identity();

				return this;
			}

			this.multiplyScalar( 1 / det );

			return this;

		},

		translate: function ( v ) {

			console.warn( 'THREE.Matrix4: .translate() has been removed.' );

		},

		rotateX: function ( angle ) {

			console.warn( 'THREE.Matrix4: .rotateX() has been removed.' );

		},

		rotateY: function ( angle ) {

			console.warn( 'THREE.Matrix4: .rotateY() has been removed.' );

		},

		rotateZ: function ( angle ) {

			console.warn( 'THREE.Matrix4: .rotateZ() has been removed.' );

		},

		rotateByAxis: function ( axis, angle ) {

			console.warn( 'THREE.Matrix4: .rotateByAxis() has been removed.' );

		},

		scale: function ( v ) {

			var te = this.elements;
			var x = v.x, y = v.y, z = v.z;

			te[ 0 ] *= x; te[ 4 ] *= y; te[ 8 ] *= z;
			te[ 1 ] *= x; te[ 5 ] *= y; te[ 9 ] *= z;
			te[ 2 ] *= x; te[ 6 ] *= y; te[ 10 ] *= z;
			te[ 3 ] *= x; te[ 7 ] *= y; te[ 11 ] *= z;

			return this;

		},

		getMaxScaleOnAxis: function () {

			var te = this.elements;

			var scaleXSq = te[ 0 ] * te[ 0 ] + te[ 1 ] * te[ 1 ] + te[ 2 ] * te[ 2 ];
			var scaleYSq = te[ 4 ] * te[ 4 ] + te[ 5 ] * te[ 5 ] + te[ 6 ] * te[ 6 ];
			var scaleZSq = te[ 8 ] * te[ 8 ] + te[ 9 ] * te[ 9 ] + te[ 10 ] * te[ 10 ];

			return Math.sqrt( Math.max( scaleXSq, Math.max( scaleYSq, scaleZSq ) ) );

		},

		makeTranslation: function ( x, y, z ) {

			this.set(

				1, 0, 0, x,
				0, 1, 0, y,
				0, 0, 1, z,
				0, 0, 0, 1

			);

			return this;

		},

		makeRotationX: function ( theta ) {

			var c = Math.cos( theta ), s = Math.sin( theta );

			this.set(

				1, 0,  0, 0,
				0, c, - s, 0,
				0, s,  c, 0,
				0, 0,  0, 1

			);

			return this;

		},

		makeRotationY: function ( theta ) {

			var c = Math.cos( theta ), s = Math.sin( theta );

			this.set(

				 c, 0, s, 0,
				 0, 1, 0, 0,
				- s, 0, c, 0,
				 0, 0, 0, 1

			);

			return this;

		},

		makeRotationZ: function ( theta ) {

			var c = Math.cos( theta ), s = Math.sin( theta );

			this.set(

				c, - s, 0, 0,
				s,  c, 0, 0,
				0,  0, 1, 0,
				0,  0, 0, 1

			);

			return this;

		},

		makeRotationAxis: function ( axis, angle ) {

			// Based on http://www.gamedev.net/reference/articles/article1199.asp

			var c = Math.cos( angle );
			var s = Math.sin( angle );
			var t = 1 - c;
			var x = axis.x, y = axis.y, z = axis.z;
			var tx = t * x, ty = t * y;

			this.set(

				tx * x + c, tx * y - s * z, tx * z + s * y, 0,
				tx * y + s * z, ty * y + c, ty * z - s * x, 0,
				tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
				0, 0, 0, 1

			);

			 return this;

		},

		makeScale: function ( x, y, z ) {

			this.set(

				x, 0, 0, 0,
				0, y, 0, 0,
				0, 0, z, 0,
				0, 0, 0, 1

			);

			return this;

		},

		compose: function ( position, quaternion, scale ) {

			this.makeRotationFromQuaternion( quaternion );
			this.scale( scale );
			this.setPosition( position );

			return this;

		},

		decompose: function () {

			var vector = new THREE.Vector3();
			var matrix = new THREE.Matrix4();

			return function ( position, quaternion, scale ) {

				var te = this.elements;

				var sx = vector.set( te[ 0 ], te[ 1 ], te[ 2 ] ).length();
				var sy = vector.set( te[ 4 ], te[ 5 ], te[ 6 ] ).length();
				var sz = vector.set( te[ 8 ], te[ 9 ], te[ 10 ] ).length();

				// if determine is negative, we need to invert one scale
				var det = this.determinant();
				if ( det < 0 ) {
					sx = - sx;
				}

				position.x = te[ 12 ];
				position.y = te[ 13 ];
				position.z = te[ 14 ];

				// scale the rotation part

				matrix.elements.set( this.elements ); // at this point matrix is incomplete so we can't use .copy()

				var invSX = 1 / sx;
				var invSY = 1 / sy;
				var invSZ = 1 / sz;

				matrix.elements[ 0 ] *= invSX;
				matrix.elements[ 1 ] *= invSX;
				matrix.elements[ 2 ] *= invSX;

				matrix.elements[ 4 ] *= invSY;
				matrix.elements[ 5 ] *= invSY;
				matrix.elements[ 6 ] *= invSY;

				matrix.elements[ 8 ] *= invSZ;
				matrix.elements[ 9 ] *= invSZ;
				matrix.elements[ 10 ] *= invSZ;

				quaternion.setFromRotationMatrix( matrix );

				scale.x = sx;
				scale.y = sy;
				scale.z = sz;

				return this;

			};

		}(),

		makeFrustum: function ( left, right, bottom, top, near, far ) {

			var te = this.elements;
			var x = 2 * near / ( right - left );
			var y = 2 * near / ( top - bottom );

			var a = ( right + left ) / ( right - left );
			var b = ( top + bottom ) / ( top - bottom );
			var c = - ( far + near ) / ( far - near );
			var d = - 2 * far * near / ( far - near );

			te[ 0 ] = x;	te[ 4 ] = 0;	te[ 8 ] = a;	te[ 12 ] = 0;
			te[ 1 ] = 0;	te[ 5 ] = y;	te[ 9 ] = b;	te[ 13 ] = 0;
			te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = c;	te[ 14 ] = d;
			te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = - 1;	te[ 15 ] = 0;

			return this;

		},

		makePerspective: function ( fov, aspect, near, far ) {

			var ymax = near * Math.tan( THREE.Math.degToRad( fov * 0.5 ) );
			var ymin = - ymax;
			var xmin = ymin * aspect;
			var xmax = ymax * aspect;

			return this.makeFrustum( xmin, xmax, ymin, ymax, near, far );

		},

		makeOrthographic: function ( left, right, top, bottom, near, far ) {

			var te = this.elements;
			var w = right - left;
			var h = top - bottom;
			var p = far - near;

			var x = ( right + left ) / w;
			var y = ( top + bottom ) / h;
			var z = ( far + near ) / p;

			te[ 0 ] = 2 / w;	te[ 4 ] = 0;	te[ 8 ] = 0;	te[ 12 ] = - x;
			te[ 1 ] = 0;	te[ 5 ] = 2 / h;	te[ 9 ] = 0;	te[ 13 ] = - y;
			te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = - 2 / p;	te[ 14 ] = - z;
			te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = 0;	te[ 15 ] = 1;

			return this;

		},

		fromArray: function ( array ) {

			this.elements.set( array );

			return this;

		},

		toArray: function () {

			var te = this.elements;

			return [
				te[ 0 ], te[ 1 ], te[ 2 ], te[ 3 ],
				te[ 4 ], te[ 5 ], te[ 6 ], te[ 7 ],
				te[ 8 ], te[ 9 ], te[ 10 ], te[ 11 ],
				te[ 12 ], te[ 13 ], te[ 14 ], te[ 15 ]
			];

		},

		clone: function () {

			return new THREE.Matrix4().fromArray( this.elements );

		}

	};

	// File:src/math/Math.js

	/**
	 * @author alteredq / http://alteredqualia.com/
	 * @author mrdoob / http://mrdoob.com/
	 */

	THREE.Math = {

		generateUUID: function () {

			// http://www.broofa.com/Tools/Math.uuid.htm

			var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split( '' );
			var uuid = new Array( 36 );
			var rnd = 0, r;

			return function () {

				for ( var i = 0; i < 36; i ++ ) {

					if ( i == 8 || i == 13 || i == 18 || i == 23 ) {

						uuid[ i ] = '-';

					} else if ( i == 14 ) {

						uuid[ i ] = '4';

					} else {

						if ( rnd <= 0x02 ) rnd = 0x2000000 + ( Math.random() * 0x1000000 ) | 0;
						r = rnd & 0xf;
						rnd = rnd >> 4;
						uuid[ i ] = chars[ ( i == 19 ) ? ( r & 0x3 ) | 0x8 : r ];

					}
				}

				return uuid.join( '' );

			};

		}(),

		// Clamp value to range <a, b>

		clamp: function ( x, a, b ) {

			return ( x < a ) ? a : ( ( x > b ) ? b : x );

		},

		// Clamp value to range <a, inf)

		clampBottom: function ( x, a ) {

			return x < a ? a : x;

		},

		// Linear mapping from range <a1, a2> to range <b1, b2>

		mapLinear: function ( x, a1, a2, b1, b2 ) {

			return b1 + ( x - a1 ) * ( b2 - b1 ) / ( a2 - a1 );

		},

		// http://en.wikipedia.org/wiki/Smoothstep

		smoothstep: function ( x, min, max ) {

			if ( x <= min ) return 0;
			if ( x >= max ) return 1;

			x = ( x - min ) / ( max - min );

			return x * x * ( 3 - 2 * x );

		},

		smootherstep: function ( x, min, max ) {

			if ( x <= min ) return 0;
			if ( x >= max ) return 1;

			x = ( x - min ) / ( max - min );

			return x * x * x * ( x * ( x * 6 - 15 ) + 10 );

		},

		// Random float from <0, 1> with 16 bits of randomness
		// (standard Math.random() creates repetitive patterns when applied over larger space)

		random16: function () {

			return ( 65280 * Math.random() + 255 * Math.random() ) / 65535;

		},

		// Random integer from <low, high> interval

		randInt: function ( low, high ) {

			return low + Math.floor( Math.random() * ( high - low + 1 ) );

		},

		// Random float from <low, high> interval

		randFloat: function ( low, high ) {

			return low + Math.random() * ( high - low );

		},

		// Random float from <-range/2, range/2> interval

		randFloatSpread: function ( range ) {

			return range * ( 0.5 - Math.random() );

		},

		degToRad: function () {

			var degreeToRadiansFactor = Math.PI / 180;

			return function ( degrees ) {

				return degrees * degreeToRadiansFactor;

			};

		}(),

		radToDeg: function () {

			var radianToDegreesFactor = 180 / Math.PI;

			return function ( radians ) {

				return radians * radianToDegreesFactor;

			};

		}(),

		isPowerOfTwo: function ( value ) {

			return ( value & ( value - 1 ) ) === 0 && value !== 0;

		}

	};

	// File:src/core/EventDispatcher.js

	/**
	 * https://github.com/mrdoob/eventdispatcher.js/
	 */

	THREE.EventDispatcher = function () {}

	THREE.EventDispatcher.prototype = {

		constructor: THREE.EventDispatcher,

		apply: function ( object ) {

			object.addEventListener = THREE.EventDispatcher.prototype.addEventListener;
			object.hasEventListener = THREE.EventDispatcher.prototype.hasEventListener;
			object.removeEventListener = THREE.EventDispatcher.prototype.removeEventListener;
			object.dispatchEvent = THREE.EventDispatcher.prototype.dispatchEvent;

		},

		addEventListener: function ( type, listener ) {

			if ( this._listeners === undefined ) this._listeners = {};

			var listeners = this._listeners;

			if ( listeners[ type ] === undefined ) {

				listeners[ type ] = [];

			}

			if ( listeners[ type ].indexOf( listener ) === - 1 ) {

				listeners[ type ].push( listener );

			}

		},

		hasEventListener: function ( type, listener ) {

			if ( this._listeners === undefined ) return false;

			var listeners = this._listeners;

			if ( listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1 ) {

				return true;

			}

			return false;

		},

		removeEventListener: function ( type, listener ) {

			if ( this._listeners === undefined ) return;

			var listeners = this._listeners;
			var listenerArray = listeners[ type ];

			if ( listenerArray !== undefined ) {

				var index = listenerArray.indexOf( listener );

				if ( index !== - 1 ) {

					listenerArray.splice( index, 1 );

				}

			}

		},

		dispatchEvent: function ( event ) {

			if ( this._listeners === undefined ) return;

			var listeners = this._listeners;
			var listenerArray = listeners[ event.type ];

			if ( listenerArray !== undefined ) {

				event.target = this;

				var array = [];
				var length = listenerArray.length;

				for ( var i = 0; i < length; i ++ ) {

					array[ i ] = listenerArray[ i ];

				}

				for ( var i = 0; i < length; i ++ ) {

					array[ i ].call( this, event );

				}

			}

		}

	};

	// File:src/core/Object3D.js

	/**
	 * @author mrdoob / http://mrdoob.com/
	 * @author mikael emtinger / http://gomo.se/
	 * @author alteredq / http://alteredqualia.com/
	 * @author WestLangley / http://github.com/WestLangley
	 */

	THREE.Object3D = function () {

		Object.defineProperty( this, 'id', { value: THREE.Object3DIdCount ++ } );

		this.uuid = THREE.Math.generateUUID();

		this.name = '';
		this.type = 'Object3D';

		this.parent = undefined;
		this.children = [];

		this.up = THREE.Object3D.DefaultUp.clone();

		var scope = this;

		var position = new THREE.Vector3();
		var rotation = new THREE.Euler();
		var quaternion = new THREE.Quaternion();
		var scale = new THREE.Vector3( 1, 1, 1 );

		var onRotationChange = function () {
			quaternion.setFromEuler( rotation, false );
		};

		var onQuaternionChange = function () {
			rotation.setFromQuaternion( quaternion, undefined, false );
		};

		rotation.onChange( onRotationChange );
		quaternion.onChange( onQuaternionChange );

		Object.defineProperties( this, {
			position: {
				enumerable: true,
				value: position
			},
			rotation: {
				enumerable: true,
				value: rotation
			},
			quaternion: {
				enumerable: true,
				value: quaternion
			},
			scale: {
				enumerable: true,
				value: scale
			},
		} );

		this.renderDepth = null;

		this.rotationAutoUpdate = true;

		this.matrix = new THREE.Matrix4();
		this.matrixWorld = new THREE.Matrix4();

		this.matrixAutoUpdate = true;
		this.matrixWorldNeedsUpdate = false;

		this.visible = true;

		this.castShadow = false;
		this.receiveShadow = false;

		this.frustumCulled = true;

		this.userData = {};

	};

	THREE.Object3D.DefaultUp = new THREE.Vector3( 0, 1, 0 );

	THREE.Object3D.prototype = {

		constructor: THREE.Object3D,

		get eulerOrder () {

			console.warn( 'THREE.Object3D: .eulerOrder has been moved to .rotation.order.' );

			return this.rotation.order;

		},

		set eulerOrder ( value ) {

			console.warn( 'THREE.Object3D: .eulerOrder has been moved to .rotation.order.' );

			this.rotation.order = value;

		},

		get useQuaternion () {

			console.warn( 'THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.' );

		},

		set useQuaternion ( value ) {

			console.warn( 'THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.' );

		},

		applyMatrix: function ( matrix ) {

			this.matrix.multiplyMatrices( matrix, this.matrix );

			this.matrix.decompose( this.position, this.quaternion, this.scale );

		},

		setRotationFromAxisAngle: function ( axis, angle ) {

			// assumes axis is normalized

			this.quaternion.setFromAxisAngle( axis, angle );

		},

		setRotationFromEuler: function ( euler ) {

			this.quaternion.setFromEuler( euler, true );

		},

		setRotationFromMatrix: function ( m ) {

			// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

			this.quaternion.setFromRotationMatrix( m );

		},

		setRotationFromQuaternion: function ( q ) {

			// assumes q is normalized

			this.quaternion.copy( q );

		},

		rotateOnAxis: function () {

			// rotate object on axis in object space
			// axis is assumed to be normalized

			var q1 = new THREE.Quaternion();

			return function ( axis, angle ) {

				q1.setFromAxisAngle( axis, angle );

				this.quaternion.multiply( q1 );

				return this;

			}

		}(),

		rotateX: function () {

			var v1 = new THREE.Vector3( 1, 0, 0 );

			return function ( angle ) {

				return this.rotateOnAxis( v1, angle );

			};

		}(),

		rotateY: function () {

			var v1 = new THREE.Vector3( 0, 1, 0 );

			return function ( angle ) {

				return this.rotateOnAxis( v1, angle );

			};

		}(),

		rotateZ: function () {

			var v1 = new THREE.Vector3( 0, 0, 1 );

			return function ( angle ) {

				return this.rotateOnAxis( v1, angle );

			};

		}(),

		translateOnAxis: function () {

			// translate object by distance along axis in object space
			// axis is assumed to be normalized

			var v1 = new THREE.Vector3();

			return function ( axis, distance ) {

				v1.copy( axis ).applyQuaternion( this.quaternion );

				this.position.add( v1.multiplyScalar( distance ) );

				return this;

			}

		}(),

		translate: function ( distance, axis ) {

			console.warn( 'THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.' );
			return this.translateOnAxis( axis, distance );

		},

		translateX: function () {

			var v1 = new THREE.Vector3( 1, 0, 0 );

			return function ( distance ) {

				return this.translateOnAxis( v1, distance );

			};

		}(),

		translateY: function () {

			var v1 = new THREE.Vector3( 0, 1, 0 );

			return function ( distance ) {

				return this.translateOnAxis( v1, distance );

			};

		}(),

		translateZ: function () {

			var v1 = new THREE.Vector3( 0, 0, 1 );

			return function ( distance ) {

				return this.translateOnAxis( v1, distance );

			};

		}(),

		localToWorld: function ( vector ) {

			return vector.applyMatrix4( this.matrixWorld );

		},

		worldToLocal: function () {

			var m1 = new THREE.Matrix4();

			return function ( vector ) {

				return vector.applyMatrix4( m1.getInverse( this.matrixWorld ) );

			};

		}(),

		lookAt: function () {

			// This routine does not support objects with rotated and/or translated parent(s)

			var m1 = new THREE.Matrix4();

			return function ( vector ) {

				m1.lookAt( vector, this.position, this.up );

				this.quaternion.setFromRotationMatrix( m1 );

			};

		}(),

		add: function ( object ) {

			if ( arguments.length > 1 ) {

				for ( var i = 0; i < arguments.length; i++ ) {

					this.add( arguments[ i ] );

				}

				return this;

			};

			if ( object === this ) {

				console.error( "THREE.Object3D.add:", object, "can't be added as a child of itself." );
				return this;

			}

			if ( object instanceof THREE.Object3D ) {

				if ( object.parent !== undefined ) {

					object.parent.remove( object );

				}

				object.parent = this;
				object.dispatchEvent( { type: 'added' } );

				this.children.push( object );

			} else {

				console.error( "THREE.Object3D.add:", object, "is not an instance of THREE.Object3D." );

			}

			return this;

		},

		remove: function ( object ) {

			if ( arguments.length > 1 ) {

				for ( var i = 0; i < arguments.length; i++ ) {

					this.remove( arguments[ i ] );

				}

			};

			var index = this.children.indexOf( object );

			if ( index !== - 1 ) {

				object.parent = undefined;

				object.dispatchEvent( { type: 'removed' } );

				this.children.splice( index, 1 );

			}

		},

		getChildByName: function ( name, recursive ) {

			console.warn( 'THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().' );
			return this.getObjectByName( name, recursive );

		},

		getObjectById: function ( id, recursive ) {

			if ( this.id === id ) return this;

			for ( var i = 0, l = this.children.length; i < l; i ++ ) {

				var child = this.children[ i ];
				var object = child.getObjectById( id, recursive );

				if ( object !== undefined ) {

					return object;

				}

			}

			return undefined;

		},

		getObjectByName: function ( name, recursive ) {

			if ( this.name === name ) return this;

			for ( var i = 0, l = this.children.length; i < l; i ++ ) {

				var child = this.children[ i ];
				var object = child.getObjectByName( name, recursive );

				if ( object !== undefined ) {

					return object;

				}

			}

			return undefined;

		},

		getWorldPosition: function ( optionalTarget ) {

			var result = optionalTarget || new THREE.Vector3();

			this.updateMatrixWorld( true );

			return result.setFromMatrixPosition( this.matrixWorld );

		},

		getWorldQuaternion: function () {

			var position = new THREE.Vector3();
			var scale = new THREE.Vector3();

			return function ( optionalTarget ) {

				var result = optionalTarget || new THREE.Quaternion();

				this.updateMatrixWorld( true );

				this.matrixWorld.decompose( position, result, scale );

				return result;

			}

		}(),

		getWorldRotation: function () {

			var quaternion = new THREE.Quaternion();

			return function ( optionalTarget ) {

				var result = optionalTarget || new THREE.Euler();

				this.getWorldQuaternion( quaternion );

				return result.setFromQuaternion( quaternion, this.rotation.order, false );

			}

		}(),

		getWorldScale: function () {

			var position = new THREE.Vector3();
			var quaternion = new THREE.Quaternion();

			return function ( optionalTarget ) {

				var result = optionalTarget || new THREE.Vector3();

				this.updateMatrixWorld( true );

				this.matrixWorld.decompose( position, quaternion, result );

				return result;

			}

		}(),

		getWorldDirection: function () {

			var quaternion = new THREE.Quaternion();

			return function ( optionalTarget ) {

				var result = optionalTarget || new THREE.Vector3();

				this.getWorldQuaternion( quaternion );

				return result.set( 0, 0, 1 ).applyQuaternion( quaternion );

			}

		}(),

		raycast: function () {},

		traverse: function ( callback ) {

			callback( this );

			for ( var i = 0, l = this.children.length; i < l; i ++ ) {

				this.children[ i ].traverse( callback );

			}

		},

		traverseVisible: function ( callback ) {

			if ( this.visible === false ) return;

			callback( this );

			for ( var i = 0, l = this.children.length; i < l; i ++ ) {

				this.children[ i ].traverseVisible( callback );

			}

		},

		updateMatrix: function () {

			this.matrix.compose( this.position, this.quaternion, this.scale );

			this.matrixWorldNeedsUpdate = true;

		},

		updateMatrixWorld: function ( force ) {

			if ( this.matrixAutoUpdate === true ) this.updateMatrix();

			if ( this.matrixWorldNeedsUpdate === true || force === true ) {

				if ( this.parent === undefined ) {

					this.matrixWorld.copy( this.matrix );

				} else {

					this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

				}

				this.matrixWorldNeedsUpdate = false;

				force = true;

			}

			// update children

			for ( var i = 0, l = this.children.length; i < l; i ++ ) {

				this.children[ i ].updateMatrixWorld( force );

			}

		},

		toJSON: function () {

			var output = {
				metadata: {
					version: 4.3,
					type: 'Object',
					generator: 'ObjectExporter'
				}
			};

			//

			var geometries = {};

			var parseGeometry = function ( geometry ) {

				if ( output.geometries === undefined ) {

					output.geometries = [];

				}

				if ( geometries[ geometry.uuid ] === undefined ) {

					var json = geometry.toJSON();

					delete json.metadata;

					geometries[ geometry.uuid ] = json;

					output.geometries.push( json );

				}

				return geometry.uuid;

			};

			//

			var materials = {};

			var parseMaterial = function ( material ) {

				if ( output.materials === undefined ) {

					output.materials = [];

				}

				if ( materials[ material.uuid ] === undefined ) {

					var json = material.toJSON();

					delete json.metadata;

					materials[ material.uuid ] = json;

					output.materials.push( json );

				}

				return material.uuid;

			};

			//

			var parseObject = function ( object ) {

				var data = {};

				data.uuid = object.uuid;
				data.type = object.type;

				if ( object.name !== '' ) data.name = object.name;
				if ( JSON.stringify( object.userData ) !== '{}' ) data.userData = object.userData;
				if ( object.visible !== true ) data.visible = object.visible;

				if ( object instanceof THREE.PerspectiveCamera ) {

					data.fov = object.fov;
					data.aspect = object.aspect;
					data.near = object.near;
					data.far = object.far;

				} else if ( object instanceof THREE.OrthographicCamera ) {

					data.left = object.left;
					data.right = object.right;
					data.top = object.top;
					data.bottom = object.bottom;
					data.near = object.near;
					data.far = object.far;

				} else if ( object instanceof THREE.AmbientLight ) {

					data.color = object.color.getHex();

				} else if ( object instanceof THREE.DirectionalLight ) {

					data.color = object.color.getHex();
					data.intensity = object.intensity;

				} else if ( object instanceof THREE.PointLight ) {

					data.color = object.color.getHex();
					data.intensity = object.intensity;
					data.distance = object.distance;

				} else if ( object instanceof THREE.SpotLight ) {

					data.color = object.color.getHex();
					data.intensity = object.intensity;
					data.distance = object.distance;
					data.angle = object.angle;
					data.exponent = object.exponent;

				} else if ( object instanceof THREE.HemisphereLight ) {

					data.color = object.color.getHex();
					data.groundColor = object.groundColor.getHex();

				} else if ( object instanceof THREE.Mesh ) {

					data.geometry = parseGeometry( object.geometry );
					data.material = parseMaterial( object.material );

				} else if ( object instanceof THREE.Line ) {

					data.geometry = parseGeometry( object.geometry );
					data.material = parseMaterial( object.material );

				} else if ( object instanceof THREE.Sprite ) {

					data.material = parseMaterial( object.material );

				}

				data.matrix = object.matrix.toArray();

				if ( object.children.length > 0 ) {

					data.children = [];

					for ( var i = 0; i < object.children.length; i ++ ) {

						data.children.push( parseObject( object.children[ i ] ) );

					}

				}

				return data;

			}

			output.object = parseObject( this );

			return output;

		},

		clone: function ( object, recursive ) {

			if ( object === undefined ) object = new THREE.Object3D();
			if ( recursive === undefined ) recursive = true;

			object.name = this.name;

			object.up.copy( this.up );

			object.position.copy( this.position );
			object.quaternion.copy( this.quaternion );
			object.scale.copy( this.scale );

			object.renderDepth = this.renderDepth;

			object.rotationAutoUpdate = this.rotationAutoUpdate;

			object.matrix.copy( this.matrix );
			object.matrixWorld.copy( this.matrixWorld );

			object.matrixAutoUpdate = this.matrixAutoUpdate;
			object.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate;

			object.visible = this.visible;

			object.castShadow = this.castShadow;
			object.receiveShadow = this.receiveShadow;

			object.frustumCulled = this.frustumCulled;

			object.userData = JSON.parse( JSON.stringify( this.userData ) );

			if ( recursive === true ) {

				for ( var i = 0; i < this.children.length; i ++ ) {

					var child = this.children[ i ];
					object.add( child.clone() );

				}

			}

			return object;

		}

	};

	THREE.EventDispatcher.prototype.apply( THREE.Object3D.prototype );

	THREE.Object3DIdCount = 0;

	// File:src/objects/Bone.js

	/**
	 * @author mikael emtinger / http://gomo.se/
	 * @author alteredq / http://alteredqualia.com/
	 * @author ikerr / http://verold.com
	 */

	THREE.Bone = function ( belongsToSkin ) {

		THREE.Object3D.call( this );

		this.skin = belongsToSkin;

	};

	THREE.Bone.prototype = Object.create( THREE.Object3D.prototype );


	// File:src/scenes/Scene.js

	/**
	 * @author mrdoob / http://mrdoob.com/
	 */

	THREE.Scene = function () {

		THREE.Object3D.call( this );

		this.type = 'Scene';

		this.fog = null;
		this.overrideMaterial = null;

		this.autoUpdate = true; // checked by the renderer

	};

	THREE.Scene.prototype = Object.create( THREE.Object3D.prototype );

	THREE.Scene.prototype.clone = function ( object ) {

		if ( object === undefined ) object = new THREE.Scene();

		THREE.Object3D.prototype.clone.call( this, object );

		if ( this.fog !== null ) object.fog = this.fog.clone();
		if ( this.overrideMaterial !== null ) object.overrideMaterial = this.overrideMaterial.clone();

		object.autoUpdate = this.autoUpdate;
		object.matrixAutoUpdate = this.matrixAutoUpdate;

		return object;

	};



/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime) {"use strict";

	var ARGON = __webpack_require__(3);

	var DeviceVideoBackground = (function () {
	  var _ARGON$Background$Video = ARGON.Background.Video;
	  var DeviceVideoBackground = function DeviceVideoBackground() {
	    var args = to5Runtime.slice.call(arguments);

	    _ARGON$Background$Video.call.apply(_ARGON$Background$Video, [this].concat(to5Runtime.toArray(args)));
	  };

	  to5Runtime.inherits(DeviceVideoBackground, _ARGON$Background$Video);

	  DeviceVideoBackground.prototype.getPose = function () {
	    var state = ARGON.Device.frame.currentState;
	    return state ? state.pose : null;
	  };

	  DeviceVideoBackground.prototype.getFOV = function () {
	    var cameraCalibration = ARGON.Background.DeviceVideo.cameraCalibration;
	    if (!cameraCalibration) return undefined;

	    var screenSize = ARGON.Device.screen.size;
	    var screenVerticalDirection = ARGON.Device.screen.verticalDirection;

	    var videoScale = screenSize[1] / cameraCalibration.frameSize[1]; //this.getVideoScale()
	    var videoVerticalDirection = screenVerticalDirection;
	    // var videoHorizontalDirection = +!screenVerticalDirection
	    // var renderWidth  = cameraCalibration.frameSize[videoHorizontalDirection] * videoScale
	    var renderHeight = cameraCalibration.frameSize[videoVerticalDirection] * videoScale;
	    var ratio = screenSize[screenVerticalDirection] / renderHeight;

	    // var renderSize = [renderWidth, renderHeight]
	    var renderFOV = cameraCalibration.fov[screenVerticalDirection] * ratio;

	    return renderFOV;
	  };

	  return DeviceVideoBackground;
	})();

	DeviceVideoBackground.className = "Background.DeviceVideo";
	ARGON.Background.DeviceVideo = DeviceVideoBackground;

	DeviceVideoBackground.Controller = (function () {
	  var _ARGON$Background$Controller = ARGON.Background.Controller;
	  var DeviceVideoBackgroundController = function DeviceVideoBackgroundController() {
	    var args = to5Runtime.slice.call(arguments);

	    _ARGON$Background$Controller.call.apply(_ARGON$Background$Controller, [this].concat(to5Runtime.toArray(args)));
	    this.zoomSupported = false;
	    this.panSupported = false;
	  };

	  to5Runtime.inherits(DeviceVideoBackgroundController, _ARGON$Background$Controller);

	  return DeviceVideoBackgroundController;
	})();

	if (ARGON.isChannel) {
	  // if (ARGON.isArgonAppEnvironment) {
	  ARGON.Background.DeviceVideo.background = new ARGON.Background.DeviceVideo();
	  // }

	  ARGON.managerPort.on("Background.DeviceVideo#cameraCalibration", function (event) {
	    ARGON.Background.DeviceVideo.cameraCalibration = event.cameraCalibration;
	    ARGON.emit("DeviceVideo#cameraCalibration");
	  });
	}

	if (ARGON.isChannelManager) {
	  // {frameLength:[x,y], frameSize:[x,y], fov:[x,y]}
	  ARGON.Background.DeviceVideo.updateCameraCalibration = function (cameraCalibration) {
	    ARGON.Background.DeviceVideo.cameraCalibration = cameraCalibration;
	    ARGON.channelPort.trigger("Background.DeviceVideo#cameraCalibration", { cameraCalibration: cameraCalibration });
	  };
	  ARGON.on("channelConnected", function () {
	    var cc = ARGON.Background.DeviceVideo.cameraCalibration;
	    if (cc) ARGON.Background.DeviceVideo.updateCameraCalibration(cc);
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime) {"use strict";

	var ARGON = __webpack_require__(3);

	// temporarily expose (internal) THREE so (internal) threestrap can find it
	// TODO: it would be nice if we didn't have to rely on the entire three.js
	// library just to render panoramas...
	// var THREE = window.__ARGON_THREE = ARGON.SG._
	// require('imports?THREE=>window.__ARGON_THREE!threestrap')
	// delete window.__ARGON_THREE

	var PanoramaBackground = (function () {
	  var _ARGON$Background = ARGON.Background;
	  var PanoramaBackground = function PanoramaBackground() {
	    var args = to5Runtime.slice.call(arguments);

	    _ARGON$Background.call.apply(_ARGON$Background, [this].concat(to5Runtime.toArray(args)));
	  };

	  to5Runtime.inherits(PanoramaBackground, _ARGON$Background);

	  return PanoramaBackground;
	})();

	PanoramaBackground.className = "Background.Panorama";
	ARGON.Background.Panorama = PanoramaBackground;

	PanoramaBackground.Controller = (function () {
	  var _ARGON$Background$Controller = ARGON.Background.Controller;
	  var Controller = function Controller() {
	    var _this = this;
	    var args = to5Runtime.slice.call(arguments);

	    _ARGON$Background$Controller.call.apply(_ARGON$Background$Controller, [this].concat(to5Runtime.toArray(args)));

	    var three = THREE.Bootstrap({
	      element: this.element
	    });

	    var blankCanvas = document.createElement("canvas");
	    blankCanvas.width = 256;
	    blankCanvas.height = 256;

	    var texture = new THREE.Texture(blankCanvas);
	    texture.needsUpdate = true;

	    var sphereGeometry = new THREE.SphereGeometry(50, 60, 40);
	    sphereGeometry.applyMatrix(new THREE.Matrix4().makeScale(-1, 1, 1));
	    var sphereMaterial = new THREE.MeshBasicMaterial({ map: texture });

	    var sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
	    three.scene.add(sphereMesh);

	    this.on("resize", function () {
	      three.plugins.size.queue(null, three);
	    });

	    three.camera.matrixAutoUpdate = false;
	    this.cameraFrame.on("stateUpdate", function (event) {
	      three.camera.fov = event.state.fov;
	      three.camera.updateProjectionMatrix();
	      three.camera.matrix.fromArray(event.finalTransform);
	      three.camera.matrix.setPosition({ x: 0, y: 0, z: 0 });
	      three.camera.matrixWorldNeedsUpdate = true;
	    });

	    this.on("change:source", function (event) {
	      if (_this.state.source.equirectangular) {
	        _loadEquirectangular();
	      } else if (_this.state.source.skybox) {
	        _loadSkybox();
	      }
	    });

	    var _loadEquirectangular = function () {
	      var equirectangular = _this.state.source.equirectangular;
	      var equirectnagularFullURL = ARGON.Util.resolveURL(equirectangular);
	      sphereMaterial.map = THREE.ImageUtils.loadTexture(equirectnagularFullURL, undefined, function () {
	        sphereMaterial.needsUpdate = true;
	      });
	    };
	  };

	  to5Runtime.inherits(Controller, _ARGON$Background$Controller);

	  return Controller;
	})();

	PanoramaBackground.Controller.className = "Background.Panorama.Controller";
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime) {"use strict";

	var ARGON = __webpack_require__(3);

	var VideoBackground = (function () {
	  var _ARGON$Background = ARGON.Background;
	  var VideoBackground = function VideoBackground() {
	    var args = to5Runtime.slice.call(arguments);

	    _ARGON$Background.call.apply(_ARGON$Background, [this].concat(to5Runtime.toArray(args)));
	    if (ARGON.isChannel) {}
	  };

	  to5Runtime.inherits(VideoBackground, _ARGON$Background);

	  VideoBackground.prototype.setVideoSize = function (size) {
	    this.set("videoSize", size);
	  };

	  VideoBackground.prototype.getVideoSize = function () {
	    return this.state.videoSize;
	  };

	  return VideoBackground;
	})();

	VideoBackground.className = "Background.Video";
	ARGON.Background.Video = VideoBackground;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime) {"use strict";

	var ARGON = __webpack_require__(3);
	var SG = ARGON.SG;

	ARGON.Component.CameraTarget = (function () {
	  var _ARGON$Component = ARGON.Component;
	  var CameraTarget = function CameraTarget() {
	    var args = to5Runtime.slice.call(arguments);

	    _ARGON$Component.call.apply(_ARGON$Component, [this].concat(to5Runtime.toArray(args)));

	    this.on("proxy", function (event) {
	      var proxy = event.proxy;
	      var context = proxy.context;
	      proxy.bindReferenceFrame(context.backgroundController.cameraFrame);
	      context.on("backgroundControllerChange", function (event) {
	        proxy.bindReferenceFrame(context.backgroundController.cameraFrame);
	      });
	    });
	  };

	  to5Runtime.inherits(CameraTarget, _ARGON$Component);

	  return CameraTarget;
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime) {"use strict";

	var ARGON = __webpack_require__(3);
	var SG = ARGON.SG;

	ARGON.Component.GeoTarget = (function () {
	  var _ARGON$Component = ARGON.Component;
	  var GeoTarget = function GeoTarget() {
	    var _this = this;
	    var args = to5Runtime.slice.call(arguments);

	    _ARGON$Component.call.apply(_ARGON$Component, [this].concat(to5Runtime.toArray(args)));

	    // use identity orientation as default
	    this.setOrientation([0, 0, 0]);

	    this.on("proxy", function (event) {
	      var proxy = event.proxy;
	      var context = event.context;
	      var frame = SG.ReferenceFrame.get();
	      proxy.bindReferenceFrame(frame);

	      var pushNextState = function () {
	        if (_this.options.location && _this.options.orientation) frame.pushState({
	          pose: {
	            location: _this.options.location,
	            orientation: _this.options.orientation
	          }
	        });
	      };
	      pushNextState();

	      _this.on("change:location", pushNextState);
	      _this.on("change:orientation", pushNextState);
	    });
	  };

	  to5Runtime.inherits(GeoTarget, _ARGON$Component);

	  GeoTarget.prototype.setLocation = function (location) {
	    this.set("location", location);
	  };

	  GeoTarget.prototype.setOrientation = function (transform) {
	    this.set("orientation", transform);
	  };

	  return GeoTarget;
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime) {"use strict";

	var ARGON = __webpack_require__(3);

	var VuforiaImageTarget = (function () {
	  var _ARGON$Component = ARGON.Component;
	  var VuforiaImageTarget = function VuforiaImageTarget() {
	    var args = to5Runtime.slice.call(arguments);

	    _ARGON$Component.call.apply(_ARGON$Component, [this].concat(to5Runtime.toArray(args)));
	    this.on("proxy", _onProxy);
	  };

	  to5Runtime.inherits(VuforiaImageTarget, _ARGON$Component);

	  VuforiaImageTarget.prototype.setName = function (name) {
	    this.set("name", name);
	  };

	  return VuforiaImageTarget;
	})();

	ARGON.Component.VuforiaImageTarget = VuforiaImageTarget;

	var VuforiaFrameMarkerTarget = (function () {
	  var _ARGON$Component2 = ARGON.Component;
	  var VuforiaFrameMarkerTarget = function VuforiaFrameMarkerTarget() {
	    var args = to5Runtime.slice.call(arguments);

	    _ARGON$Component2.call.apply(_ARGON$Component2, [this].concat(to5Runtime.toArray(args)));
	    this.on("proxy", _onProxy);
	  };

	  to5Runtime.inherits(VuforiaFrameMarkerTarget, _ARGON$Component2);

	  VuforiaFrameMarkerTarget.prototype.setMarkerID = function (name) {
	    this.set("name", name);
	  };

	  VuforiaFrameMarkerTarget.prototype.setMarkerSize = function (size) {
	    this.set("size", size);
	  };

	  return VuforiaFrameMarkerTarget;
	})();

	ARGON.Component.VuforiaFrameMarkerTarget = VuforiaFrameMarkerTarget;

	var _onProxy = function (event) {
	  var proxy = event.proxy;
	  var context = event.context;
	  var controller = context.ensureBackgroundController(ARGON.Background.DeviceVideo);
	  proxy.frame = new ARGON.SG.ReferenceFrame();
	  proxy.bindReferenceFrame(proxy.frame);
	  controller.cameraFrame.add(proxy.frame);
	  Vuforia.componentProxies.push(proxy);
	};

	var Vuforia = {};
	Vuforia.events = new ARGON.EventHandler();
	Vuforia.componentProxies = [];

	Vuforia.events.on("data", function (event) {
	  var data = event.data;
	  Vuforia.componentProxies.forEach(function (component) {
	    var targetName = component.options.name;
	    var targetTrackable = data.trackables[targetName];
	    component.frame.pushState({
	      pose: targetTrackable && targetTrackable.transform,
	      timestamp: data.timestamp
	    });
	  });
	});

	Vuforia.emitData = function (data) {
	  Vuforia.events.trigger("data", { data: data });
	};

	if (ARGON.isChannel) {
	  ARGON.managerPort.on("System.Vuforia#data", function (event) {
	    Vuforia.emitData(event.data);
	  });

	  Vuforia.loadAndActivateDataSet = function (dataSetURL, success, fail) {
	    var url = ARGON.Util.resolveURL(dataSetURL);
	    var requestId = ARGON.Util.cuid();
	    ARGON.managerPort.trigger("Vuforia#loadDataSet", {
	      url: url,
	      userData: { requestId: requestId }
	    });

	    var loadResponse = function (event) {
	      if (event.userData.reqeustId === requestId) {
	        if (event.eventInfo.error && fail) return fail(event);
	        success(event);
	        // Vuforia.activateDataSet(dataSetURL, success, fail)
	        ARGON.managerPort.removeListener("Vuforia#loadDataSetResponse", loadResponse);
	      }
	    };
	    ARGON.managerPort.on("Vuforia#loadDataSetResponse", loadResponse);
	  };

	  Vuforia.loadDataSet = function (dataSetURL, success, fail) {
	    var url = ARGON.Util.resolveURL(dataSetURL);
	    var requestId = ARGON.Util.cuid();
	    ARGON.managerPort.trigger("Vuforia#loadDataSet", {
	      url: url,
	      userData: { requestId: requestId }
	    });
	    var loadResponse = function (event) {
	      if (event.userData.reqeustId === requestId) {
	        if (event.eventInfo.error && fail) return fail(event);
	        if (success) success(event);
	        ARGON.managerPort.removeListener("Vuforia#loadDataSetResponse", loadResponse);
	      }
	    };
	    ARGON.managerPort.on("Vuforia#loadDataSetResponse", loadResponse);
	  };

	  Vuforia.activateDataSet = function (dataSetURL, success, fail) {
	    var url = ARGON.Util.resolveURL(dataSetURL);
	    var requestId = ARGON.Util.cuid();
	    ARGON.managerPort.trigger("Vuforia#activateDataSet", {
	      url: url,
	      userData: { requestId: requestId }
	    });
	    var activateResponse = function (event) {
	      if (event.userData.reqeustId === requestId) {
	        if (event.error && fail) return fail(event);
	        if (success) success(event);
	        ARGON.managerPort.removeListener("Vuforia#activateDataSetResponse", activateResponse);
	      }
	    };
	    ARGON.managerPort.on("Vuforia#activateDataSetResponse", activateResponse);
	  };
	}

	if (ARGON.isChannelManager) {
	  Vuforia.events.on("data", function (event) {
	    ARGON.channelPort.trigger("System.Vuforia#data", event);
	  });

	  Vuforia.updateData = function (data) {
	    Vuforia.emitData(data);
	  };

	  ARGON.channelPort.on("Vuforia#loadDataSet", function (event) {
	    var requestId = event.userData.requestId;
	    var channel = ARGON.Channel.eventMap.get(event);
	    VuforiaPlugin.loadDataSet(event);
	    var loadResponse = function (event) {
	      if (event.userData.requestId === requestId) {
	        channel.trigger("Vuforia#loadDataSetResponse", event);
	        ARGON.nativePort.removeListener("Vuforia#loadDataSetResponse", loadResponse);
	      }
	    };
	    ARGON.nativePort.on("Vuforia#loadDataSetResponse", loadResponse);
	  });

	  ARGON.channelPort.on("Vuforia#activateDataSet", function (event) {
	    var requestId = event.userData.requestId;
	    var channel = ARGON.Channel.eventMap.get(event);
	    VuforiaPlugin.activateDataSet(event);
	    var activateResponse = function (event) {
	      if (event.userData.requestId === requestId) {
	        channel.trigger("Vuforia#activateDataSetResponse", event);
	        ARGON.nativePort.removeListener("Vuforia#activateDataSetResponse", activateResponse);
	      }
	    };
	    ARGON.nativePort.on("Vuforia#activateDataSetResponse", activateResponse);
	  });
	}

	// only register if current platform supports Vuforia
	// if (navigator.userAgent.indexOf('Vuforia') !== -1) {
	ARGON.System.Vuforia = Vuforia
	// }
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime) {"use strict";

	var ARGON = __webpack_require__(2);

	var Background = (function () {
	  var _ARGON$ManagedObject = ARGON.ManagedObject;
	  var Background = function Background() {
	    var args = to5Runtime.slice.call(arguments);

	    _ARGON$ManagedObject.call.apply(_ARGON$ManagedObject, [this].concat(to5Runtime.toArray(args)));
	  };

	  to5Runtime.inherits(Background, _ARGON$ManagedObject);

	  Background.prototype.getPose = function () {
	    return this.state.pose;
	  };

	  Background.prototype.getFOV = function () {
	    return this.state.fov;
	  };

	  return Background;
	})();

	Background.className = "Background";

	Background.query = function (backgroundSelector) {
	  var matchingBackgrounds = [];

	  if (backgroundSelector.id) {
	    matchingBackgrounds.push(ARGON.ManagedObject.objectsById[backgroundSelector.id]);
	  } else if (backgroundSelector.type) {
	    var BackgroundConstructor = ARGON.Util.resolvePropertyPath(backgroundSelector.type, ARGON);
	    var backgroundObjects = ARGON.ManagedObject.objectsByType.Background;
	    for (var id in backgroundObjects) {
	      var background = backgroundObjects[id];
	      if (background instanceof BackgroundConstructor) matchingBackgrounds.push(background);
	    }
	  }

	  return matchingBackgrounds;
	};

	Background.Controller = (function () {
	  var Controller = function Controller() {
	    var _this = this;


	    ARGON.Util.mixinInputOutputEventHandlers(this);
	    ARGON.Util.mixinStateManager(this);

	    this.element = document.createElement("div");
	    this.element.classList.add("argon-background-controller");
	    this.element.style.position = "fixed";
	    this.element.style.height = "100%";
	    this.element.style.width = "100%";
	    this.element.style.left = 0;
	    this.element.style.top = 0;
	    this.element.style.margin = 0;
	    this.element.style.zIndex = -2;
	    var onResize = function () {
	      _this.size = [_this.element.clientWidth, _this.element.clientHeight];
	      _this.aspect = _this.size[0] / _this.size[1];
	      _this._emit("resize");
	    };
	    window.addResizeListener(this.element, onResize);

	    this.size = [undefined, undefined];
	    this.aspect = undefined;

	    this.background = null;
	    this.backgroundEvents = new ARGON.EventHandler();
	    this.backgroundEvents.subscribe = false;
	    this.backgroundEvents.on("change", function (event) {
	      _this.set(event.key, event.value);
	    });

	    this.cameraFrame = new ARGON.SG.ReferenceFrame();

	    this.pan = null;
	    this.panSupported = true;
	    _bindPanEvents.call(this);

	    this.zoom = null;
	    this.zoomSupported = true;
	    _bindZoomEvents.call(this);
	  };

	  Controller.prototype.setBackground = function (background) {
	    if (this.background) this.background.unpipe(this.backgroundEvents);
	    this.background = background;
	    this.background.pipe(this.backgroundEvents);
	    this.setState(JSON.parse(JSON.stringify(this.background.state)));
	    this._emit("backgroundChange");
	  };

	  Controller.prototype.getPose = function () {
	    return this.background && this.background.getPose();
	  };

	  Controller.prototype.getFOV = function () {
	    return this.background && this.background.getFOV();
	  };

	  Controller.prototype.applyPan = function (state) {
	    var Transform = ARGON.SG.Transform;
	    var Vector = ARGON.SG.Vector;
	    if (this.pan) {
	      this.pan[0] -= this.panVelocity[0] * 10;
	      this.pan[1] -= this.panVelocity[1] * 10;
	      this.panVelocity[0] *= 0.9;
	      this.panVelocity[1] *= 0.9;
	      var phi = this.pan[1] / 180 * Math.PI * 0.5;
	      var theta = this.pan[0] / 180 * Math.PI * 0.5;

	      if (state.pose instanceof Array) {
	        var spec = Transform.interpret(state.pose);
	        var rotationTransform = Transform.rotate.apply(null, spec.rotate);
	      } else if (state.pose.orientation) {
	        var rotationTransform = Transform.rotate.apply(null, state.pose.orientation);
	      }

	      var rotationTransform = Transform.multiply(Transform.rotateY(theta), rotationTransform);

	      var rotationTransform = Transform.multiply(rotationTransform, Transform.rotateX(phi));

	      if (state.pose instanceof Array) {
	        spec.rotate = Transform.interpret(rotationTransform).rotate;
	        state.pose = Transform.build(spec);
	      } else if (state.pose.orientation) {
	        state.pose.orientation = Transform.interpret(rotationTransform).rotate;
	      }
	    }
	  };

	  Controller.prototype.applyZoom = function (state) {
	    if (state.fov && this.zoom) {
	      state.fov = Math.max(Math.min(150, state.fov / this.zoom), 30);
	    }
	  };

	  Controller.prototype.update = function () {
	    var DeviceVideo = ARGON.Background.DeviceVideo;
	    var state = {};
	    var deviceFrame = ARGON.SG.ReferenceFrame.get("device");
	    state.pose = this.getPose() || deviceFrame.currentState ? deviceFrame.currentState.pose : null;
	    state.fov = this.getFOV() || DeviceVideo.background && DeviceVideo.background.getFOV() || 80;
	    if (this.panSupported) this.applyPan(state);
	    if (this.zoomSupported) this.applyZoom(state);
	    this.cameraFrame.pushState(state);
	    this.currentState = state;
	    this.emitStateUpdate();
	  };

	  Controller.prototype.emitStateUpdate = function () {
	    this._emit("stateUpdate", { state: this.currentState });
	  };

	  return Controller;
	})();

	Background.Controller.className = "Background.Controller";

	module.exports = Background;


	var _bindZoomEvents = function () {
	  var _this2 = this;
	  var currentZoom = 1;
	  this._on("zoomMove", function (event) {
	    _this2.zoom = Math.max(Math.min(currentZoom * event.scale, 5), 0.25);
	  });
	  this._on("zoomEnd", function (event) {
	    currentZoom = _this2.zoom;
	  });
	  this._on("zoomReset", function (event) {
	    currentZoom = 1;
	    _this2.zoom = null;
	  });
	};

	var _bindPanEvents = function () {
	  var _this3 = this;
	  var currentPan = [0, 0];
	  this._on("panMove", function (event) {
	    _this3.pan = [currentPan[0] + event.deltaX * (_this3.currentState.fov / 170), currentPan[1] + event.deltaY * (_this3.currentState.fov / 170)];
	    _this3.panVelocity = [0, 0];
	  });
	  this._on("panEnd", function (event) {
	    currentPan = _this3.pan || [0, 0];
	    _this3.panVelocity = [event.velocityX, event.velocityY];
	  });
	  this._on("panReset", function (event) {
	    currentPan = [0, 0];
	    _this3.pan = null;
	    _this3.panStartTransform = null;
	  });
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime) {"use strict";

	var ARGON = __webpack_require__(2);
	var SG = ARGON.SG;
	var DeviceVideo = ARGON.Background.DeviceVideo;

	var ContainerSurface = __webpack_require__(27);

	var Background = function Background() {
	  var args = to5Runtime.slice.call(arguments);

	  Function.call.apply(Function, [this].concat(to5Runtime.toArray(args)));
	};

	Background.prototype.getState = function () {
	  return {
	    pose: this.options.pose,
	    fov: this.options.fov
	  };
	};

	module.exports = Background;


	var CSSClass = "argon-background-container";

	var iFrameFamousSetup = "(" + function () {
	  window.basket.require("famous").then(function () {
	    var Engine = famous.core.Engine;
	    window.mainContext = Engine.createContext();
	    window.parent.postMessage();
	  });
	} + ")()";

	Background.Container = (function () {
	  var Container = function Container(args) {
	    ARGON.Util.mixinInputOutputEventHandlers(this);
	    ARGON.Util.mixinOptionsManager(this);

	    this.id = ARGON.Util.cuid();

	    if (args && args.iframe) {
	      this.iframe = args.iframe;
	    } else {
	      this.iframe = document.createElement("iframe");
	      this.iframe.webkitallowfullscreen = false;
	      this.iframe.sandbox = "allow-forms allow-scripts allow-same-origin";
	    }

	    this.iframe.classList.add(CSSClass);
	    this.iframe.backgroundContainer = this;

	    this._dependencies = [];
	    this._scripts = [];

	    this.frame = new SG.ReferenceFrame();
	    // TODO: backgrounds needs a very limited set of commands that allow them
	    // to request updates on a certain reference frames.. maybe just the display
	    // frame)

	    this.init();
	  };

	  Container.prototype.setScripts = function (scripts) {
	    this._scripts = scripts;
	  };

	  Container.prototype.init = function () {
	    var _this = this;
	    this.iframeReady = new Promise(function (resolve, reject) {
	      var scripts = [];
	      scripts.push("<script>window.backgroundContainerId = \"" + _this.id + "\"</script>");
	      scripts.push("<script>" + ARGON._basketScript + "</script>");

	      _this._scripts.forEach(function (s) {
	        if (s instanceof Function) {
	          scripts.push("<script>(" + s + ")())</script>");
	        } else scripts.push("<script>" + s + "</script>");
	      });

	      scripts.push("<script>(" + function () {
	        window.parent.postMessage("ready", "*");
	      } + ")()</script>");

	      var initializationHandler = function (event) {
	        if (event.data !== "ready") return;
	        try {
	          if (event.source.backgroundContainerId === _this.id) {
	            window.removeEventListener("message", initializationHandler);
	            resolve();
	          }
	        } catch (e) {}
	      };
	      window.addEventListener("message", initializationHandler);

	      _this.iframe.srcdoc = scripts.join();
	    });
	    this.iframeReady.then(function () {
	      _this._emit("ready");
	      alert("ready!");
	    });
	  };

	  Container.prototype.update = function (timestamp) {
	    var state = this.getTransform() || ARGON.Sensor.getTransform("display") || {};
	    state.fov = this.getFOV() || DeviceVideo.background && DeviceVideo.background.getFOV() || 80;
	    if (this.panSupported) this.applyPan(state);
	    if (this.zoomSupported) this.applyZoom(state);
	    this.cameraFrame.pushState(state);
	    this.currentState = state;
	    this.emitStateUpdate();
	  };

	  Container.prototype.emitStateUpdate = function () {};

	  return Container;
	})();
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ARGON = __webpack_require__(2);

	var Component = function Component(options) {
	  ARGON.Util.mixinInputOutputEventHandlers(this);
	  ARGON.Util.mixinOptionsManager(this);
	  if (options) this.setOptions(options);
	  this._proxyMap = new WeakMap();
	};

	Component.prototype.getProxy = function (context) {
	  var proxy = this._proxyMap.get(context);

	  if (!proxy) {
	    proxy = Object.create(this);
	    proxy.context = context;
	    proxy.referenceFrame = null;
	    proxy.handler = {};
	    ARGON.Util.mixinInputOutputEventHandlers(proxy.handler);

	    proxy.bindReferenceFrame = _bindReferenceFrame.bind(proxy);
	    proxy.unbindReferenceFrame = _unbindReferenceFrame.bind(proxy);
	    proxy.getFinalTransform = _getFinalTransform.bind(proxy);

	    this._proxyMap.set(context, proxy);
	    this._emit("proxy", { proxy: proxy, context: context });
	  }

	  return proxy;
	};

	Component.prototype.setFilter = function (filter) {
	  this.filter = filter;
	};

	module.exports = Component;


	var _bindReferenceFrame = function (frame) {
	  if (!frame) this.unbindReferenceFrame();else if (this.referenceFrame !== frame) {
	    this.unbindReferenceFrame();
	    this.referenceFrame = frame;
	    this.referenceFrame.pipe(this.handler._eventOutput);
	    this.referenceFrame.emitStateUpdate();
	  }
	};

	var _unbindReferenceFrame = function () {
	  if (this.referenceFrame) {
	    this.referenceFrame.unpipe(this.handler._eventOutput);
	    this.referenceFrame = null;
	  }
	};

	var _getFinalTransform = function () {
	  var finalTransform = this.referenceFrame ? this.context.frameTransforms.get(this.referenceFrame) : null;
	  if (this.filter && finalTransform) finalTransform = this.filter(finalTransform);
	  return finalTransform;
	};

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime) {"use strict";

	var ARGON = __webpack_require__(2);
	__webpack_require__(32);

	/**
	 * @class ARGON.Context
	 * @description Contexts are 2D regions of 3D graphics registered
	 * against a background.
	 */
	var Context = (function () {
	  var _ARGON$ManagedObject = ARGON.ManagedObject;
	  var Context = function Context() {
	    var _this = this;
	    var args = to5Runtime.slice.call(arguments);

	    _ARGON$ManagedObject.call.apply(_ARGON$ManagedObject, [this].concat(to5Runtime.toArray(args)));

	    if (ARGON.isChannel) {
	      /**
	       * This context's DOM element
	       * @type Element
	       */
	      this.element = document.createElement("div");
	      this.element.classList.add("argon-context");
	      this.element.style.position = "fixed";
	      this.element.style.height = "100%";
	      this.element.style.width = "100%";
	      this.element.style.left = 0;
	      this.element.style.top = 0;
	      this.element.style.margin = 0;
	      this.element.style.zIndex = -1;
	      var _updateSize = function () {
	        _this.set("size", [_this.element.clientWidth, _this.element.clientHeight]);
	      };
	      window.addResizeListener(this.element, _updateSize);
	      _updateSize();

	      /**
	       * The utm origin for this context, if it exists
	       * @type {Location}
	       */
	      this.originLocation = new ARGON.SG.Location();

	      /**
	       * The final transforms for each reference frame relative to this context
	       * @type {WeakMap}
	       */
	      this.frameTransforms = new WeakMap();

	      /**
	       * The current Background Controller
	       */
	      this.backgroundController = undefined;

	      /**
	       * All background controllers associated with this context, by type
	       * @type {Object}
	       */
	      this.backgroundControllers = {};

	      // set the default background
	      _setBackground(this, Context.defaultBackground);
	      this.setPreferredBackground(null);

	      // for panning and zooming camera
	      _setupPanAndZoomGestures.call(this);

	      // ready
	      this._ready = true;
	      this._emit("__READY__");
	    }

	    if (ARGON.isChannelManager) {
	      this.on("change:preferredBackground", function (event) {
	        ARGON.policy.contextDidChangePreferredBackground(this);
	      });

	      ARGON.policy.channelDidCreateContext(this);
	    }
	  };

	  to5Runtime.inherits(Context, _ARGON$ManagedObject);

	  /**
	   * Register a callback to fire when all systems are installed.
	   * (Only helpful within systems, really).
	   */
	  Context.prototype.ready = function (cb) {
	    if (this._ready) cb.call(this);else {
	      this.on("__READY__", cb);
	    }
	  };

	  Context.prototype.update = function () {
	    this.backgroundController.update();
	    // TODO: timestamp should come from background
	    this.timestamp = ARGON.syncTimestamp;
	    var backgroundPose = this.backgroundController.currentState.pose;
	    this.setOriginLocation(backgroundPose ? backgroundPose.location : null);
	    ARGON.scene.update(this, this.sceneNeedsUpdate);
	    this.sceneNeedsUpdate = false;
	  };

	  Context.prototype.getLocation = function () {};

	  Context.prototype.getTransform = function () {
	    return this.backgroundController.getTransform();
	  };

	  Context.prototype.setOriginLocation = function (location) {
	    if (!location && this.originLocation.utm) {
	      this.originLocation.setUndefined();
	      this.sceneNeedsUpdate = true;
	      return;
	    }
	    var originUTM = this.originLocation.utm;
	    if (!originUTM || originUTM.zoneLetter !== location.utm.zoneLetter || originUTM.zoneNumber !== location.utm.zoneNumber || Math.abs(originUTM.easting - location.utm.easting) > 1000 || Math.abs(originUTM.northing - location.utm.northing) > 1000) {
	      this.originLocation.copy(location);
	      this.sceneNeedsUpdate = true;
	      console.log("reset origin");
	    }
	  };

	  Context.prototype.getPositionForLocation = function (location) {
	    var localUTM = this.originLocation.getLocalUTM(location);
	    var originUTM = this.originLocation.utm;
	    if (localUTM && originUTM) {
	      // (x100 for cm scale)
	      return [(localUTM.easting - originUTM.easting) * 100, // x
	      (localUTM.altitude - originUTM.altitude) * 100, // y
	      (localUTM.northing - originUTM.northing) * 100 // z
	      ];
	    }
	    return null;
	  };




	  /**
	   * Set the background preference (can be a Background class or instance)
	   */
	  Context.prototype.setPreferredBackground = function (background) {
	    if (!ARGON.isChannel) throw "Only allowed in channel";
	    var backgroundSelector = {};
	    if (background instanceof Function && background.prototype instanceof ARGON.Background) {
	      // if a background class was passed in
	      backgroundSelector.type = background.className;
	    } else if (background instanceof ARGON.Background) {
	      // if a background instance was passed in
	      backgroundSelector.id = background.state.id;
	      backgroundSelector.type = background.state.type;
	    }
	    this.set("preferredBackground", backgroundSelector);
	    if (!ARGON.isConnected) {
	      var matches = ARGON.Background.query(backgroundSelector);
	      if (matches[0]) _setBackground(this, matches[0]);
	    }
	  };

	  /**
	   * Alias for setBackgroundPreference
	   * @TODO: deprecate this
	   */
	  Context.prototype.setBackgroundPreference = function (background) {
	    return this.setPreferredBackground(background);
	  };

	  Context.prototype.getPreferredBackground = function () {
	    return this.state.preferredBackground;
	  };

	  /**
	   * Try to change the background immediately. Returns a promise.
	   */
	  Context.prototype.requestBackground = function (background) {};

	  Context.prototype.setPreferredFOV = function (fov) {
	    this.set("preferredFOV", fov);
	  };

	  /**
	  * Set the background. (Channel Manager Only)
	  */
	  Context.prototype.setBackground = function (background) {
	    if (!ARGON.isChannelManager) throw "Only allowed in channel manager";
	    this.channel.port.trigger("Context#_setBackground", {
	      backgroundId: background.state.id,
	      contextId: this.state.id
	    });
	  };

	  /**
	   * Get size
	   */
	  Context.prototype.getSize = function () {
	    return this.state.size;
	  };

	  /**
	   * Get screen position.
	   * (Does not report the correct position if the element or any ancessors
	   * has a transform applied). Performs DOM access, so should be used
	   * sparingly XXX: Algorithm for getting correct transform is in Ethereal,
	   * but its lengthly, and again, performs a lot of DOM access, so it's not
	   * ideal. Also, its probably unlikely that normal webpages would apply css
	   * transforms to top-level content. Famo.us webpages, on the other hand...
	   * these would allow us to access the true final transform of a surface/view
	   * (without accessing the DOM!)
	   *
	   */
	  Context.prototype.getScreenBounds = function () {
	    var left = 0;
	    var top = 0;

	    var element = this.element;
	    while (element) {
	      // eek DOM access.... need to use famous!
	      left += element.offsetLeft - element.scrollLeft + element.clientLeft;
	      top += element.offsetTop - element.scrollTop + element.clientTop;
	      element = element.offsetParent;
	    }

	    var width = this.state.size[0];
	    var height = this.state.size[1];

	    return { left: left, top: top, width: width, height: height, size: [width, height] };
	  };

	  /**
	   * Return a background controller for the given background type, creating one
	   * if it doesn't already exist for this context.
	   */
	  Context.prototype.ensureBackgroundController = function (BackgroundConstructor) {
	    var type = BackgroundConstructor.className;
	    var ControllerConstructor = BackgroundConstructor.Controller;
	    var backgroundController = this.backgroundControllers[type];
	    if (!backgroundController) {
	      var backgroundController = new ControllerConstructor();
	      this.element.appendChild(backgroundController.element);
	      ARGON.scene.add(backgroundController.cameraFrame);
	      this.backgroundControllers[type] = backgroundController;
	    }
	    return backgroundController;
	  };

	  /**
	   * Alias for ensureBackgroundController
	   */
	  Context.prototype.getBackgroundController = function (BackgroundConstructor) {
	    return this.ensureBackgroundController(BackgroundConstructor);
	  };

	  Context.prototype.setPinchZoomEnabled = function () {
	    var flag = arguments[0] === undefined ? true : arguments[0];
	    this.set("pinchZoomEnabled", flag);
	  };

	  Context.prototype.setTwoFingerPanEnabled = function () {
	    var flag = arguments[0] === undefined ? true : arguments[0];
	    this.set("twoFingerPanEnabled", flag);
	  };

	  return Context;
	})();

	Context.className = "Context";
	// Context.DEFAULT_SYSTEMS = ['Camera', 'Geo', 'Device', 'Vuforia']

	module.exports = Context;


	if (ARGON.isChannel) {
	  Context.defaultBackground = new ARGON.Background();
	  Context.defaultBackground.set("fov", 60);

	  var _setupPanAndZoomGestures = function (context) {
	    var _this2 = this;


	    var Hammer = __webpack_require__(53);
	    var hammer = new Hammer(this.element);
	    var pinch = hammer.get("pinch");
	    var pan = hammer.get("pan");
	    var doubletap = hammer.get("doubletap");
	    pinch.set({ enable: true, threshold: 0 });
	    pan.set({ enable: true, threshold: 0, pointers: 2 }); // two-finger pan
	    pan.recognizeWith(pinch);
	    pinch.recognizeWith(pan);
	    doubletap.recognizeWith(pinch);
	    doubletap.recognizeWith(pan);
	    doubletap.set({ pointers: 2, posThreshold: 100, threshold: 40, interval: 500, time: 350 });

	    hammer.on("pinchstart", function (event) {
	      _this2.backgroundController.trigger("zoomStart");
	    });
	    hammer.on("pinchmove", function (event) {
	      _this2.backgroundController.trigger("zoomMove", {
	        scale: event.scale
	      });
	    });
	    hammer.on("pinchend", function (event) {
	      _this2.backgroundController.trigger("zoomEnd");
	    });

	    hammer.on("panstart", function (event) {
	      _this2.backgroundController.trigger("panStart");
	    });
	    hammer.on("panmove", function (event) {
	      _this2.backgroundController.trigger("panMove", {
	        deltaX: event.deltaX,
	        deltaY: event.deltaY
	      });
	    });
	    hammer.on("panend", function (event) {
	      _this2.backgroundController.trigger("panEnd", {
	        velocityX: event.velocityX,
	        velocityY: event.velocityY
	      });
	    });

	    hammer.on("doubletap", function (event) {
	      _this2.backgroundController.trigger("zoomReset");
	      _this2.backgroundController.trigger("panReset");
	    });
	  };

	  var _setBackground = function (context, background) {
	    var backgroundController = context.ensureBackgroundController(background.constructor);

	    if (context.backgroundController != backgroundController) {
	      context.backgroundController = backgroundController;
	      context._emit("backgroundControllerChange");
	    }

	    context.backgroundController.setBackground(background);
	  };

	  ARGON.managerPort.on("Context#_setBackground", function (event) {
	    var context = ARGON.ManagedObject.objectsById[event.contextId];
	    var background = ARGON.ManagedObject.objectsById[event.backgroundId];

	    if (!background) {
	      // if we can't find it, then this background came from another channel
	      // (so we make an effectively read-only mirror)
	      throw new Error("unknown background");
	      background = new ARGON.Background({ id: event.backgroundId });
	    }

	    _setBackground(context, background);
	  });
	}
	// TODO: get location from the background!!!
	// return a promise
	// this.element.addEventListener('gesturestart', event => {
	//   currentFOV = this.backgroundController.cameraFrame.currentState.fov
	// }, false)
	//
	// this.element.addEventListener('gesturechange', event => {
	//   this.context.set('zoomFOV',
	//     Math.max(Math.min(currentFOV / event.scale, maxFOV), minFOV)
	//   )
	// }, false)
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ARGON = __webpack_require__(2);
	var Transform = ARGON.SG.Transform;
	var _location = new ARGON.SG.Location();
	var _orientation = [0, 0, 0];

	var DEG2RAD = Math.PI / 180;
	var SCREEN_SIZE = [window.screen.width, window.screen.height];

	var Device = ARGON.Device = {};
	module.exports = Device;


	ARGON.Util.mixinInputOutputEventHandlers(Device);

	Device.frame = ARGON.SG.ReferenceFrame.get("device");

	// {size: [], orientation: 0|90|-90|180, direction: 0|1 (horizontal|vertical)}
	Device.screen = {};

	var emitScreen = function (screenState) {
	  Device.screen = screenState;
	  Device._emit("updateScreen", Device.screen);
	  if (ARGON.isChannelManager) ARGON.channelPort.trigger("Device#screenState", Device.screen);
	};
	if (ARGON.isChannel) {
	  ARGON.managerPort.on("Device#screenState", emitScreen);
	}

	var updateScreenState = function () {
	  var o = window.orientation;
	  emitScreen({
	    size: SCREEN_SIZE,
	    orientation: o,
	    transform: Transform.rotateZ(DEG2RAD * -o),
	    verticalDirection: o === 90 || o === -90 ? 0 : 1
	  });
	};
	updateScreenState();

	window.addEventListener("orientationchange", updateScreenState);
	if (ARGON.isChannel) {
	  ARGON.on("connected", function () {
	    window.removeEventListener("orientationchange", updateScreenState);
	  });
	}

	if (!ARGON.isArgonAppEnvironment) {
	  // get geolocation from web api
	  if (navigator.geolocation) {
	    var watchId = navigator.geolocation.watchPosition(function onLocation(event) {
	      _location.setLLA(event.coords);
	      Device.frame.pushState({
	        pose: {
	          location: _location.toJSON(),
	          orientation: _orientation },
	        timestamp: event.timestamp
	      });
	    }, function onError(error) {
	      console.warn(error);
	    }, {
	      enableHighAccuracy: true,
	      maximumAge: 30000,
	      timeout: 27000
	    });

	    if (ARGON.isChannel) {
	      ARGON.on("connected", function () {
	        return navigator.geolocation.clearWatch(watchId);
	      });
	    }
	  }

	  // get deviceorientation from web api
	  if (window.DeviceOrientationEvent) {
	    var Transform = ARGON.SG.Transform;
	    var worldTransform = Transform.rotateX(DEG2RAD * -90);

	    var _deviceOrientationListener = function (event) {
	      var alpha = event.alpha;
	      var beta = event.beta;
	      var gamma = event.gamma;
	      if (event.webkitCompassHeading > 0) {}
	      if (alpha !== 0 && beta !== 0 && gamma !== 0) {
	        var rotationTransform = Transform.multiply(Transform.rotateZ(DEG2RAD * alpha), Transform.multiply(Transform.rotateX(DEG2RAD * beta), Transform.rotateY(DEG2RAD * gamma)));

	        var screenAdjustedTransform = Transform.multiply(rotationTransform, Device.screen.transform);
	        var finalRotationTranform = Transform.multiply(worldTransform, screenAdjustedTransform);

	        if (event.absolute) {
	          var orientation = Transform.interpret(finalRotationTransform).rotate;
	          Device.frame.pushState({
	            pose: {
	              location: _location.toJSON(),
	              orientation: orientation },
	            timestamp: event.timestamp
	          });
	        } else {
	          Device.frame.pushState({
	            pose: finalRotationTransform,
	            timestamp: event.timestamp
	          });
	        }
	      }
	    };

	    window.addEventListener("deviceorientation", _deviceOrientationListener, false);
	    if (ARGON.isChannel) {
	      ARGON.on("connected", function () {
	        window.removeEventListener("deviceorientation", _deviceOrientationListener);
	      });
	    }
	  }
	}


	if (ARGON.isChannelManager) {
	  Device.pushGeoPoseState = function (event) {
	    var a = event.deviceAttitude;
	    var rotationTransform = Transform.transpose([a[1], a[5], a[9], a[13], a[2], a[6], a[10], a[14], a[0], a[4], a[8], a[12], a[3], a[7], a[11], a[15]]);
	    var screenAdjustedTransform = Transform.multiply(rotationTransform, Device.screen.transform);

	    _location.setUTM(event.geolocation);
	    _orientation = Transform.interpret(screenAdjustedTransform).rotate;

	    Device.frame.pushState({
	      pose: {
	        location: _location.toJSON(),
	        orientation: _orientation
	      },
	      timestamp: event.timestamp
	    });
	  };
	}
	//XXX: on iOS, to get absolute heading need to use webkitCompassHeading
	// but it doesn't seem to be working right... :/
	// alpha = 360-event.webkitCompassHeading

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var EventMapper = __webpack_require__(5).EventMapper;
	var EventHandler = __webpack_require__(5).EventHandler;
	var EventFilter = __webpack_require__(5).EventFilter;

	/**
	 * An input & output event mapper/filter.
	 * @private
	 */
	function EventPort(inputFilter, outputFilter) {
	  this._eventInput = new EventFilter(inputFilter || function () {
	    return true;
	  });
	  this._eventOutput = new EventFilter(outputFilter || function () {
	    return true;
	  });
	  EventHandler.setInputHandler(this, this._eventInput);
	  EventHandler.setOutputHandler(this, this._eventOutput);
	  this._emit = this._eventOutput.emit.bind(this._eventOutput);
	}

	module.exports = EventPort;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime) {"use strict";

	var ARGON = __webpack_require__(2);
	var OptionsManager = __webpack_require__(10);

	var ManagedObject = function ManagedObject(state) {
	  var _this = this;
	  if (this instanceof ManagedObject === false) throw "Expected \"this\" to be an instance of ManagedObject. " + "(Did you forget the \"new\" keyword?)";
	  if (this.constructor === ManagedObject) throw "ManagedObject is an abstract class";
	  if (!this.constructor.className) throw "Expected this.constructor.className";

	  ARGON.Util.mixinInputOutputEventHandlers(this);
	  ARGON.Util.mixinStateManager(this);

	  this._isRemote = false;

	  if (ARGON.isChannel) {
	    if (state && state.id) this._isRemote = true;
	    this.set("type", this.constructor.className);
	    this.set("id", state && state.id || ARGON.Util.cuid());
	    if (state) this.setState(state);
	    ARGON.managerPort.trigger("new ManagedObject", this.state);

	    if (!this._isRemote) {
	      this.on("change", function (event) {
	        event._objectId = _this.state.id;
	        event._objectType = _this.state.type;
	        ARGON.managerPort.trigger("ManagedObject#change", event);
	      });
	    }
	  } else if (ARGON.isChannelManager) {
	    if (!state || !state.id) throw "Expected state.id (ManagedObjects must be instanitated in a channel)";
	    this.channel = ARGON.Channel.eventMap.get(state);
	    var cleanUp = function () {
	      delete ManagedObject.objectsById[state.id];
	      delete ManagedObject.objectsByType[_this.baseType][state.id];
	      _this.channel.removeListener("cleanUp", cleanUp);
	    };
	    this.channel.on("cleanUp", cleanUp);
	    if (state) this.setState(state);
	  }

	  ManagedObject.objectsById[this.state.id] = this;
	  this.baseType = this.state.type.split(".")[0];
	  if (!ManagedObject.objectsByType[this.baseType]) ManagedObject.objectsByType[this.baseType] = Object.create(null);
	  ManagedObject.objectsByType[this.baseType][this.state.id] = this;
	};

	to5Runtime.prototypeProperties(ManagedObject, null, {
	  isRemote: {
	    get: function () {
	      return this._isRemote;
	    },
	    enumerable: true
	  }
	});

	ManagedObject.objectsById = Object.create(null);
	ManagedObject.objectsByType = Object.create(null);

	ManagedObject["delete"] = function (object) {
	  delete ManagedObject.objectsById[object.id];
	  delete ManagedObject.objectsByType[object.baseType][object.id];
	};

	module.exports = ManagedObject;


	if (ARGON.isChannel) {
	  ARGON.managerPort.on("ManagedObject#change", function (event) {
	    var object = ManagedObject.objectsById[event._objectId];
	    if (object) {
	      object.set(event.id, event.value);
	    }
	  });
	}

	if (ARGON.isChannelManager) {
	  ARGON.channelPort.on("new ManagedObject", function (event) {
	    var state = event;
	    var Constructor = ARGON.Util.resolvePropertyPath(state.type, ARGON);

	    if (!Constructor) throw "Unknown type ARGON." + state.type;
	    if (!state.id) throw "Expected event.state.id";

	    var object = ManagedObject.objectsById[state.id];

	    if (object) {
	      var subscribingChannel = ARGON.Channel.eventMap.get(event);
	      object.on("change", function onChange(event) {
	        if (subscribingChannel) {
	          subscribingChannel.port.trigger("ManagedObject#change", event);
	        } else {
	          object.removeListener(onChange);
	        }
	      });
	    } else if (Constructor.prototype instanceof ManagedObject) {
	      new Constructor(state);
	    }
	  });

	  ARGON.channelPort.on("ManagedObject#change", function (event) {
	    var o = ManagedObject.objectsById[event._objectId];
	    // only the channel that created the managed object can change it's state
	    var channel = ARGON.Channel.eventMap.get(event);
	    if (o && channel === o.channel) {
	      o.set(event.id, event.value);
	    }
	  });
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ARGON = __webpack_require__(2);

	var Sensor = {};

	module.exports = Sensor;


	Sensor.getFrame = function (idOrName) {
	  return ARGON.SG.sharedFrames[idOrName];
	};

	Sensor.getState = function (idOrName) {
	  var frame = Sensor.getFrame(idOrName);
	  return frame ? frame.currentState : null;
	};

	Sensor.getTransform = function (idOrName, options) {
	  var frame = Sensor.getFrame(idOrName);
	  return frame ? frame.getTransform(options) : null;
	}

	// if (ARGON.isChannelManager) {
	//   ARGON.on('channelConnected', function(channel) {
	//     channel.port.trigger('Sensor#frameMap', frameMap)
	//   })
	// }
	//
	// if (ARGON.isChannel) {
	//   ARGON.managerPort.on('Sensor#frameMap', map => {
	//     frameMap = map
	//   })
	// }
	;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var EventHandler = __webpack_require__(5).EventHandler;
	var OptionsManager = __webpack_require__(10);


	var urlParser = document.createElement("a");

	var Util = {
	  cuid: __webpack_require__(52),
	  resolveURL: function (inURL) {
	    urlParser.href = null;
	    urlParser.href = inURL;
	    return urlParser.href;
	  },
	  parseURL: function (inURL) {
	    urlParser.href = null;
	    urlParser.href = inURL;
	    return {
	      href: urlParser.href,
	      protocol: urlParser.protocol,
	      hostname: urlParser.hostname,
	      port: urlParser.port,
	      pathname: urlParser.pathname,
	      search: urlParser.search,
	      hash: urlParser.hash,
	      host: urlParser.host
	    };
	  },
	  resolvePropertyPath: function (path, obj) {
	    return [obj || self].concat(path.split(".")).reduce(function (prev, curr) {
	      return prev ? prev[curr] : undefined;
	    });
	  },
	  dispatch: (function () {
	    var immediateChannel = new MessageChannel();
	    var taskQueue = [];
	    immediateChannel.port1.onmessage = function () {
	      if (taskQueue.length === 0) return;
	      var q = taskQueue;
	      taskQueue = [];
	      while (q.length > 0) {
	        q.shift()();
	      }
	    };
	    return function (task) {
	      taskQueue.push(task);
	      immediateChannel.port2.postMessage(0);
	    };
	  })(),
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
	  mixinEventHandler: function (obj) {
	    obj._eventHandler = new EventHandler();
	    EventHandler.setInputHandler(obj, obj._eventHandler);
	    EventHandler.setOutputHandler(obj, obj._eventHandler);
	    obj.emit = obj._eventHandler.emit.bind(obj._eventHandler);
	  },
	  mixinInputOutputEventHandlers: function (obj) {
	    obj._eventInput = new EventHandler();
	    obj._eventOutput = new EventHandler();
	    EventHandler.setInputHandler(obj, obj._eventInput);
	    EventHandler.setOutputHandler(obj, obj._eventOutput);
	    obj._emit = obj._eventOutput.emit.bind(obj._eventOutput);
	    obj._on = obj._eventInput.on.bind(obj._eventInput);
	  },
	  mixinStateManager: function (obj) {
	    // make this obsolete
	    obj.state = {};
	    obj._stateManager = new OptionsManager(obj.state);
	    obj._stateManager.pipe(obj._eventOutput);
	    obj.set = obj._stateManager.set.bind(obj._stateManager);
	    obj.get = obj._stateManager.get.bind(obj._stateManager);
	    obj.getState = obj._stateManager.getOptions.bind(obj._stateManager);
	    obj.setState = obj._stateManager.setOptions.bind(obj._stateManager);

	    obj._stateManager.on("change", function (event) {
	      obj._emit("change:" + event.id, event);
	    });
	  },
	  mixinOptionsManager: function (obj) {
	    obj.options = {};
	    obj._optionsManager = new OptionsManager(obj.options);
	    obj._optionsManager.pipe(obj._eventOutput);
	    obj.set = obj._optionsManager.set.bind(obj._optionsManager);
	    obj.get = obj._optionsManager.get.bind(obj._optionsManager);
	    obj.getOptions = obj._optionsManager.getOptions.bind(obj._optionsManager);
	    obj.setOptions = obj._optionsManager.setOptions.bind(obj._optionsManager);

	    obj._optionsManager.on("change", function (event) {
	      obj._emit("change:" + event.id, event);
	    });
	  }
	};

	module.exports = Util;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var filters = {};

	filters.onlyPosition = function (transform) {
	  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, transform[12], transform[13], transform[14], 1];
	};

	filters.removePosition = function (transform) {
	  var outTransform = JSON.parse(JSON.stringify(transform));
	  outTransform[12] = 0;
	  outTransform[13] = 0;
	  outTransform[14] = 0;
	  return outTransform;
	};

	module.exports = filters;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	module.exports = Location;

	var ARGON = __webpack_require__(3);
	var MGRS = __webpack_require__(13);

	/**
	 * @class ARGON.System.Geo.Location
	 * @author hafez, Gheric Speiginer (speigg)
	 * @description Encodes a geo location & provides LLA & UTM coordinate representations
	 *
	 */
	function Location(options) {
	  /**
	   * @property utm
	   * @type Object
	   * @description UTM representation of this Location.
	   * Access the 'easting', 'northing', 'zoneLetter',  and 'zoneNumber'
	   * properties of the returned object. Easting / Northing are in meters.
	   * See [Universal Transverse Mercator]
	   * (http://en.wikipedia.org/wiki/Universal_Transverse_Mercator_coordinate_system/)
	   */
	  this.utm = undefined;

	  /**
	   * @property lla
	   * @type Object
	   * @description WGS84 (Lat, Long, Alt) representation of this Location.
	   * Access the 'latitude', 'longitude' and 'altitude' properties of the
	   * returned object to obtain the values.
	   * Latitude/Longitude are in degrees, Altitude is in meters.
	   */
	  this.lla = undefined;

	  this._utmOrigin = undefined;
	  this._localUTM = null;

	  this._eventOutput = new ARGON.EventHandler();
	  ARGON.EventHandler.setOutputHandler(this, this._eventOutput);

	  if (options) {
	    this.copy(options);
	  }
	}

	/**
	 * Copy from another Location object (or Location-like object)
	 * @param  {[type]} location [description]
	 * @return {[type]}          [description]
	 */
	Location.prototype.copy = function (location) {
	  if (!location) {
	    this.setUndefined();
	  } else if (location.utm) {
	    this.setUTM(location.utm);
	  } else if (location.lla) {
	    this.setUTM(location.lla);
	  } else if (location.latitude && location.longitude) {
	    this.setLLA(location);
	  } else if (location.northing && location.easting) {
	    this.setUTM(location);
	  }
	};

	/**
	 * @method getLLA
	 * @description WGS84 (latitude, longitude, altitude) representation of this Location.
	 * Also contains timestamp in milliseconds.
	 */
	Location.prototype.getLLA = function () {
	  return this.lla;
	};

	/**
	 * @method getUTM
	 * @description UTM representation of this Location.
	 * Also contains timestamp in milliseconds.
	 */
	Location.prototype.getUTM = function (zoneHint) {
	  if (zoneHint) {
	    var utm = Location.LLAtoUTM(this.lla, zoneHint);
	    if (utm.zoneLetter !== zoneHint.zoneLetter || utm.zoneNumber !== zoneHint.zoneNumber) {
	      return undefined;
	    }
	    return utm;
	  }
	  return this.utm;
	};

	/**
	 * @method getTimestamp
	 * @description The time location was retrieved in milliseconds
	 */
	Location.prototype.getTimestamp = function () {
	  return this.utm.timestamp;
	};

	Location.prototype.setUndefined = function () {
	  this.utm = undefined;
	  this.lla = undefined;
	  this._localUTM = undefined;
	};

	/**
	 * @description Set location with LLA representation.
	 * @method  setLLA
	 * @param   {Object} lla
	 * @param   {Number} lla.latitude in degrees
	 * @param   {Number} lla.longitude in degrees
	 * @param   {Number} lla.altitude in meters
	 * @param   {Number} lla.timestamp The time location was retrieved in milliseconds
	 */

	Location.prototype.setLLA = function (lla) {
	  // TODO: do some validation and throw exceptions if invalid
	  if (lla) {
	    this.lla = {};
	    this.lla.latitude = lla.latitude || 0;
	    this.lla.longitude = lla.longitude || 0;
	    this.lla.altitude = lla.altitude || 0;
	    this.lla.lat = this.lla.latitude;
	    this.lla.lon = this.lla.longitude;
	    this.lla.timestamp = lla.timestamp || Date.now();

	    this.utm = Location.LLAtoUTM(this.lla);
	    if (this._utmOrigin) {
	      this._localUTM = Location.LLAtoUTM(this.lla, this._utmOrigin);
	    } else {
	      this._localUTM = null;
	    }
	  } else {
	    this.setUndefined();
	  }

	  this._eventOutput.emit("change");
	};

	/**
	 * @description set location with UTM representation.
	 * @method  setUTM
	 * @param   {Object}    utm
	 * @param   {Number}    utm.easting     UTM Easting value in meters
	 * @param   {Number}    utm.northing    UTM Northing value in meters
	 * @param   {Number}    utm.altitude    Altitude in meters
	 * @param   {String}    utm.zoneLetter  UTM Zone Letter
	 * @param   {Number}    utm.zoneNumber  UTM Zone Number
	 * @param   {Number}    timestamp The time location was retrieved in milliseconds
	 * @memberof ARGON.System.Geo.Location
	 */
	Location.prototype.setUTM = function (utm) {
	  // TODO: do some validation and throw exceptions if invalid
	  if (utm) {
	    this.utm = {};
	    this.utm.northing = utm.northing || 0;
	    this.utm.easting = utm.easting || 0;
	    this.utm.zoneNumber = utm.zoneNumber || 0;
	    this.utm.zoneLetter = utm.zoneLetter || "";
	    this.utm.altitude = utm.altitude || 0;
	    this.utm.timestamp = utm.timestamp || Date.now();

	    this.lla = Location.UTMtoLLA(this.utm);
	    if (this._utmOrigin) {
	      _setLocalUTM.call(this);
	    } else {
	      this._localUTM = undefined;
	    }
	  } else {
	    this.setUndefined();
	  }

	  this._eventOutput.emit("change");
	};

	function _setLocalUTM() {
	  if (!this.lla || !this._utmOrigin) {
	    this._localUTM = undefined;
	    return;
	  }

	  var localUTM = Location.LLAtoUTM(this.lla, this._utmOrigin);

	  if (localUTM.zoneLetter !== this._utmOrigin.zoneLetter || localUTM.zoneNumber !== this._utmOrigin.zoneNumber) {
	    // if current location cannot be set in local coordinate system
	    // then set the local UTM to undefined
	    localUTM = undefined;
	  } else {
	    localUTM.easting = localUTM.easting - this._utmOrigin.easting;
	    localUTM.northing = localUTM.northing - this._utmOrigin.northing;
	  }

	  this._localUTM = localUTM;
	}

	/**
	 * @description get location relative to local utm origin
	 * @method  getLocalUTM
	 * @return  {Object} easting, northing, zoneNumber, and zoneLetter properties
	 */
	Location.prototype.getLocalUTM = function (location) {
	  if (!this.utm) return undefined;

	  var lla = location.lla;
	  if (!lla) {
	    if (location.utm) {
	      lla = Location.UTMtoLLA(location.utm);
	    } else throw new Error("Expected location object with utm or lla");
	  }

	  var localUTM = Location.LLAtoUTM(lla, this.utm /*utm origin*/);

	  if (localUTM.zoneLetter !== this.utm.zoneLetter || localUTM.zoneNumber !== this.utm.zoneNumber) {
	    // if current location cannot be set in local coordinate system
	    // then set the local UTM to undefined
	    localUTM = undefined;
	  }
	  return localUTM;
	};


	/**
	 * Get a JSON compatible representation of this location
	 */
	Location.prototype.toJSON = function () {
	  return this.utm && this.lla ? {
	    utm: this.utm,
	    lla: this.lla,
	    timestamp: this.timestamp
	  } : null;
	};

	/**
	 * @method      LLAtoUTM
	 * @description Converts LLA to UTM
	 * @param   {Object}    lla
	 * @param   {Object}    utmZoneHint
	 * @return  {Object} easting, northing, zoneNumber, and zoneLetter properties
	 * @static
	 */
	Location.LLAtoUTM = function (lla, zoneHint) {
	  var utm = MGRS.LLtoUTM(lla, zoneHint);
	  if (utm) {
	    utm.altitude = lla.altitude;
	    utm.timestamp = lla.timestamp;
	  }
	  return utm;
	};

	/**
	 * @method      UTMtoLLA
	 * @description Converts UTM to LLA
	 * @param   {Object} utm
	 * @param   {Number}    utm.easting     UTM Easting value in meters
	 * @param   {Number}    utm.northing    UTM Northing value in meters
	 * @param   {Number}    utm.altitude    Altitude in meters
	 * @param   {String}    utm.zoneLetter  UTM Zone Letter
	 * @param   {Number}    utm.zoneNumber  UTM Zone Number
	 * @return  {Object} Object with longitude, latitude, and altitude
	 * @static
	 */
	Location.UTMtoLLA = function (utm) {
	  var lla = MGRS.UTMtoLL(utm);
	  if (lla) {
	    lla.latitude = lla.lat;
	    lla.longitude = lla.lon;
	    lla.altitude = utm.altitude;
	    lla.timestamp = utm.timestamp;
	  }
	  return lla;
	}

	// /**
	//  * @description returns the Euclidean distance from another location in meters
	//  * XXX: (Gheric) I don't believe this will work for different utm zones
	//  * @method  distanceFrom
	//  * @
	//  */
	// Location.prototype.distanceFrom = function (otherLocation)
	// {
	//     var Xa, Ya, Za
	//     var Xb, Yb, Zb
	//
	//     Xa = this.utm.easting
	//     Za = this.utm.northing
	//     Ya = this.utm.altitude
	//
	//     Xb = otherLocation.utm.easting
	//     Zb = otherLocation.utm.northing
	//     Yb = otherLocation.utm.altitude
	//
	//     var dist = Math.sqrt((Math.pow(Xa-Xb, 2) + Math.pow(Ya-Yb, 2) + Math.pow(Za-Zb, 2)))
	//     return dist
	// }
	;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(to5Runtime) {"use strict";

	var ARGON = __webpack_require__(2);
	var SG = __webpack_require__(7);
	var THREE = SG._;

	var ReferenceFrame = to5Runtime.interopRequire(__webpack_require__(14));

	var Scene = (function () {
	  var _THREE$Scene = THREE.Scene;
	  var Scene = function Scene() {
	    var args = to5Runtime.slice.call(arguments);

	    _THREE$Scene.call(this);
	    ARGON.Util.mixinInputOutputEventHandlers(this);
	  };

	  to5Runtime.inherits(Scene, _THREE$Scene);

	  Scene.prototype.update = function (context, force) {
	    // update children
	    for (var i = 0, l = this.children.length; i < l; i++) {
	      this.children[i].update(context, force);
	    }
	  };

	  return Scene;
	})();

	module.exports = Scene;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * cuid.js
	 * Collision-resistant UID generator for browsers and node.
	 * Sequential for fast db lookups and recency sorting.
	 * Safe for element IDs and server-side lookups.
	 *
	 * Extracted from CLCTR
	 * 
	 * Copyright (c) Eric Elliott 2012
	 * MIT License
	 */

	/*global window, navigator, document, require, process, module */
	(function (app) {
	  'use strict';
	  var namespace = 'cuid',
	    c = 0,
	    blockSize = 4,
	    base = 36,
	    discreteValues = Math.pow(base, blockSize),

	    pad = function pad(num, size) {
	      var s = "000000000" + num;
	      return s.substr(s.length-size);
	    },

	    randomBlock = function randomBlock() {
	      return pad((Math.random() *
	            discreteValues << 0)
	            .toString(base), blockSize);
	    },

	    safeCounter = function () {
	      c = (c < discreteValues) ? c : 0;
	      c++; // this is not subliminal
	      return c - 1;
	    },

	    api = function cuid() {
	      // Starting with a lowercase letter makes
	      // it HTML element ID friendly.
	      var letter = 'c', // hard-coded allows for sequential access

	        // timestamp
	        // warning: this exposes the exact date and time
	        // that the uid was created.
	        timestamp = (new Date().getTime()).toString(base),

	        // Prevent same-machine collisions.
	        counter,

	        // A few chars to generate distinct ids for different
	        // clients (so different computers are far less
	        // likely to generate the same id)
	        fingerprint = api.fingerprint(),

	        // Grab some more chars from Math.random()
	        random = randomBlock() + randomBlock();

	        counter = pad(safeCounter().toString(base), blockSize);

	      return  (letter + timestamp + counter + fingerprint + random);
	    };

	  api.slug = function slug() {
	    var date = new Date().getTime().toString(36),
	      counter,
	      print = api.fingerprint().slice(0,1) +
	        api.fingerprint().slice(-1),
	      random = randomBlock().slice(-2);

	      counter = safeCounter().toString(36).slice(-4);

	    return date.slice(-2) + 
	      counter + print + random;
	  };

	  api.globalCount = function globalCount() {
	    // We want to cache the results of this
	    var cache = (function calc() {
	        var i,
	          count = 0;

	        for (i in window) {
	          count++;
	        }

	        return count;
	      }());

	    api.globalCount = function () { return cache; };
	    return cache;
	  };

	  api.fingerprint = function browserPrint() {
	    return pad((navigator.mimeTypes.length +
	      navigator.userAgent.length).toString(36) +
	      api.globalCount().toString(36), 4);
	  };

	  // don't change anything from here down.
	  if (app.register) {
	    app.register(namespace, api);
	  } else if (true) {
	    module.exports = api;
	  } else {
	    app[namespace] = api;
	  }

	}(this.applitude || this));


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! Hammer.JS - v2.0.4 - 2014-09-28
	 * http://hammerjs.github.io/
	 *
	 * Copyright (c) 2014 Jorik Tangelder;
	 * Licensed under the MIT license */
	(function(window, document, exportName, undefined) {
	  'use strict';

	var VENDOR_PREFIXES = ['', 'webkit', 'moz', 'MS', 'ms', 'o'];
	var TEST_ELEMENT = document.createElement('div');

	var TYPE_FUNCTION = 'function';

	var round = Math.round;
	var abs = Math.abs;
	var now = Date.now;

	/**
	 * set a timeout with a given scope
	 * @param {Function} fn
	 * @param {Number} timeout
	 * @param {Object} context
	 * @returns {number}
	 */
	function setTimeoutContext(fn, timeout, context) {
	    return setTimeout(bindFn(fn, context), timeout);
	}

	/**
	 * if the argument is an array, we want to execute the fn on each entry
	 * if it aint an array we don't want to do a thing.
	 * this is used by all the methods that accept a single and array argument.
	 * @param {*|Array} arg
	 * @param {String} fn
	 * @param {Object} [context]
	 * @returns {Boolean}
	 */
	function invokeArrayArg(arg, fn, context) {
	    if (Array.isArray(arg)) {
	        each(arg, context[fn], context);
	        return true;
	    }
	    return false;
	}

	/**
	 * walk objects and arrays
	 * @param {Object} obj
	 * @param {Function} iterator
	 * @param {Object} context
	 */
	function each(obj, iterator, context) {
	    var i;

	    if (!obj) {
	        return;
	    }

	    if (obj.forEach) {
	        obj.forEach(iterator, context);
	    } else if (obj.length !== undefined) {
	        i = 0;
	        while (i < obj.length) {
	            iterator.call(context, obj[i], i, obj);
	            i++;
	        }
	    } else {
	        for (i in obj) {
	            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
	        }
	    }
	}

	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} dest
	 * @param {Object} src
	 * @param {Boolean} [merge]
	 * @returns {Object} dest
	 */
	function extend(dest, src, merge) {
	    var keys = Object.keys(src);
	    var i = 0;
	    while (i < keys.length) {
	        if (!merge || (merge && dest[keys[i]] === undefined)) {
	            dest[keys[i]] = src[keys[i]];
	        }
	        i++;
	    }
	    return dest;
	}

	/**
	 * merge the values from src in the dest.
	 * means that properties that exist in dest will not be overwritten by src
	 * @param {Object} dest
	 * @param {Object} src
	 * @returns {Object} dest
	 */
	function merge(dest, src) {
	    return extend(dest, src, true);
	}

	/**
	 * simple class inheritance
	 * @param {Function} child
	 * @param {Function} base
	 * @param {Object} [properties]
	 */
	function inherit(child, base, properties) {
	    var baseP = base.prototype,
	        childP;

	    childP = child.prototype = Object.create(baseP);
	    childP.constructor = child;
	    childP._super = baseP;

	    if (properties) {
	        extend(childP, properties);
	    }
	}

	/**
	 * simple function bind
	 * @param {Function} fn
	 * @param {Object} context
	 * @returns {Function}
	 */
	function bindFn(fn, context) {
	    return function boundFn() {
	        return fn.apply(context, arguments);
	    };
	}

	/**
	 * let a boolean value also be a function that must return a boolean
	 * this first item in args will be used as the context
	 * @param {Boolean|Function} val
	 * @param {Array} [args]
	 * @returns {Boolean}
	 */
	function boolOrFn(val, args) {
	    if (typeof val == TYPE_FUNCTION) {
	        return val.apply(args ? args[0] || undefined : undefined, args);
	    }
	    return val;
	}

	/**
	 * use the val2 when val1 is undefined
	 * @param {*} val1
	 * @param {*} val2
	 * @returns {*}
	 */
	function ifUndefined(val1, val2) {
	    return (val1 === undefined) ? val2 : val1;
	}

	/**
	 * addEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function addEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.addEventListener(type, handler, false);
	    });
	}

	/**
	 * removeEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function removeEventListeners(target, types, handler) {
	    each(splitStr(types), function(type) {
	        target.removeEventListener(type, handler, false);
	    });
	}

	/**
	 * find if a node is in the given parent
	 * @method hasParent
	 * @param {HTMLElement} node
	 * @param {HTMLElement} parent
	 * @return {Boolean} found
	 */
	function hasParent(node, parent) {
	    while (node) {
	        if (node == parent) {
	            return true;
	        }
	        node = node.parentNode;
	    }
	    return false;
	}

	/**
	 * small indexOf wrapper
	 * @param {String} str
	 * @param {String} find
	 * @returns {Boolean} found
	 */
	function inStr(str, find) {
	    return str.indexOf(find) > -1;
	}

	/**
	 * split string on whitespace
	 * @param {String} str
	 * @returns {Array} words
	 */
	function splitStr(str) {
	    return str.trim().split(/\s+/g);
	}

	/**
	 * find if a array contains the object using indexOf or a simple polyFill
	 * @param {Array} src
	 * @param {String} find
	 * @param {String} [findByKey]
	 * @return {Boolean|Number} false when not found, or the index
	 */
	function inArray(src, find, findByKey) {
	    if (src.indexOf && !findByKey) {
	        return src.indexOf(find);
	    } else {
	        var i = 0;
	        while (i < src.length) {
	            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
	                return i;
	            }
	            i++;
	        }
	        return -1;
	    }
	}

	/**
	 * convert array-like objects to real arrays
	 * @param {Object} obj
	 * @returns {Array}
	 */
	function toArray(obj) {
	    return Array.prototype.slice.call(obj, 0);
	}

	/**
	 * unique array with objects based on a key (like 'id') or just by the array's value
	 * @param {Array} src [{id:1},{id:2},{id:1}]
	 * @param {String} [key]
	 * @param {Boolean} [sort=False]
	 * @returns {Array} [{id:1},{id:2}]
	 */
	function uniqueArray(src, key, sort) {
	    var results = [];
	    var values = [];
	    var i = 0;

	    while (i < src.length) {
	        var val = key ? src[i][key] : src[i];
	        if (inArray(values, val) < 0) {
	            results.push(src[i]);
	        }
	        values[i] = val;
	        i++;
	    }

	    if (sort) {
	        if (!key) {
	            results = results.sort();
	        } else {
	            results = results.sort(function sortUniqueArray(a, b) {
	                return a[key] > b[key];
	            });
	        }
	    }

	    return results;
	}

	/**
	 * get the prefixed property
	 * @param {Object} obj
	 * @param {String} property
	 * @returns {String|Undefined} prefixed
	 */
	function prefixed(obj, property) {
	    var prefix, prop;
	    var camelProp = property[0].toUpperCase() + property.slice(1);

	    var i = 0;
	    while (i < VENDOR_PREFIXES.length) {
	        prefix = VENDOR_PREFIXES[i];
	        prop = (prefix) ? prefix + camelProp : property;

	        if (prop in obj) {
	            return prop;
	        }
	        i++;
	    }
	    return undefined;
	}

	/**
	 * get a unique id
	 * @returns {number} uniqueId
	 */
	var _uniqueId = 1;
	function uniqueId() {
	    return _uniqueId++;
	}

	/**
	 * get the window object of an element
	 * @param {HTMLElement} element
	 * @returns {DocumentView|Window}
	 */
	function getWindowForElement(element) {
	    var doc = element.ownerDocument;
	    return (doc.defaultView || doc.parentWindow);
	}

	var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

	var SUPPORT_TOUCH = ('ontouchstart' in window);
	var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
	var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

	var INPUT_TYPE_TOUCH = 'touch';
	var INPUT_TYPE_PEN = 'pen';
	var INPUT_TYPE_MOUSE = 'mouse';
	var INPUT_TYPE_KINECT = 'kinect';

	var COMPUTE_INTERVAL = 25;

	var INPUT_START = 1;
	var INPUT_MOVE = 2;
	var INPUT_END = 4;
	var INPUT_CANCEL = 8;

	var DIRECTION_NONE = 1;
	var DIRECTION_LEFT = 2;
	var DIRECTION_RIGHT = 4;
	var DIRECTION_UP = 8;
	var DIRECTION_DOWN = 16;

	var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
	var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
	var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

	var PROPS_XY = ['x', 'y'];
	var PROPS_CLIENT_XY = ['clientX', 'clientY'];

	/**
	 * create new input type manager
	 * @param {Manager} manager
	 * @param {Function} callback
	 * @returns {Input}
	 * @constructor
	 */
	function Input(manager, callback) {
	    var self = this;
	    this.manager = manager;
	    this.callback = callback;
	    this.element = manager.element;
	    this.target = manager.options.inputTarget;

	    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
	    // so when disabled the input events are completely bypassed.
	    this.domHandler = function(ev) {
	        if (boolOrFn(manager.options.enable, [manager])) {
	            self.handler(ev);
	        }
	    };

	    this.init();

	}

	Input.prototype = {
	    /**
	     * should handle the inputEvent data and trigger the callback
	     * @virtual
	     */
	    handler: function() { },

	    /**
	     * bind the events
	     */
	    init: function() {
	        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    },

	    /**
	     * unbind the events
	     */
	    destroy: function() {
	        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
	        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
	        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
	    }
	};

	/**
	 * create new input type manager
	 * called by the Manager constructor
	 * @param {Hammer} manager
	 * @returns {Input}
	 */
	function createInputInstance(manager) {
	    var Type;
	    var inputClass = manager.options.inputClass;

	    if (inputClass) {
	        Type = inputClass;
	    } else if (SUPPORT_POINTER_EVENTS) {
	        Type = PointerEventInput;
	    } else if (SUPPORT_ONLY_TOUCH) {
	        Type = TouchInput;
	    } else if (!SUPPORT_TOUCH) {
	        Type = MouseInput;
	    } else {
	        Type = TouchMouseInput;
	    }
	    return new (Type)(manager, inputHandler);
	}

	/**
	 * handle input events
	 * @param {Manager} manager
	 * @param {String} eventType
	 * @param {Object} input
	 */
	function inputHandler(manager, eventType, input) {
	    var pointersLen = input.pointers.length;
	    var changedPointersLen = input.changedPointers.length;
	    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
	    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

	    input.isFirst = !!isFirst;
	    input.isFinal = !!isFinal;

	    if (isFirst) {
	        manager.session = {};
	    }

	    // source event is the normalized value of the domEvents
	    // like 'touchstart, mouseup, pointerdown'
	    input.eventType = eventType;

	    // compute scale, rotation etc
	    computeInputData(manager, input);

	    // emit secret event
	    manager.emit('hammer.input', input);

	    manager.recognize(input);
	    manager.session.prevInput = input;
	}

	/**
	 * extend the data with some usable properties like scale, rotate, velocity etc
	 * @param {Object} manager
	 * @param {Object} input
	 */
	function computeInputData(manager, input) {
	    var session = manager.session;
	    var pointers = input.pointers;
	    var pointersLength = pointers.length;

	    // store the first input to calculate the distance and direction
	    if (!session.firstInput) {
	        session.firstInput = simpleCloneInputData(input);
	    }

	    // to compute scale and rotation we need to store the multiple touches
	    if (pointersLength > 1 && !session.firstMultiple) {
	        session.firstMultiple = simpleCloneInputData(input);
	    } else if (pointersLength === 1) {
	        session.firstMultiple = false;
	    }

	    var firstInput = session.firstInput;
	    var firstMultiple = session.firstMultiple;
	    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

	    var center = input.center = getCenter(pointers);
	    input.timeStamp = now();
	    input.deltaTime = input.timeStamp - firstInput.timeStamp;

	    input.angle = getAngle(offsetCenter, center);
	    input.distance = getDistance(offsetCenter, center);

	    computeDeltaXY(session, input);
	    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

	    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
	    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

	    computeIntervalInputData(session, input);

	    // find the correct target
	    var target = manager.element;
	    if (hasParent(input.srcEvent.target, target)) {
	        target = input.srcEvent.target;
	    }
	    input.target = target;
	}

	function computeDeltaXY(session, input) {
	    var center = input.center;
	    var offset = session.offsetDelta || {};
	    var prevDelta = session.prevDelta || {};
	    var prevInput = session.prevInput || {};

	    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
	        prevDelta = session.prevDelta = {
	            x: prevInput.deltaX || 0,
	            y: prevInput.deltaY || 0
	        };

	        offset = session.offsetDelta = {
	            x: center.x,
	            y: center.y
	        };
	    }

	    input.deltaX = prevDelta.x + (center.x - offset.x);
	    input.deltaY = prevDelta.y + (center.y - offset.y);
	}

	/**
	 * velocity is calculated every x ms
	 * @param {Object} session
	 * @param {Object} input
	 */
	function computeIntervalInputData(session, input) {
	    var last = session.lastInterval || input,
	        deltaTime = input.timeStamp - last.timeStamp,
	        velocity, velocityX, velocityY, direction;

	    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
	        var deltaX = last.deltaX - input.deltaX;
	        var deltaY = last.deltaY - input.deltaY;

	        var v = getVelocity(deltaTime, deltaX, deltaY);
	        velocityX = v.x;
	        velocityY = v.y;
	        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
	        direction = getDirection(deltaX, deltaY);

	        session.lastInterval = input;
	    } else {
	        // use latest velocity info if it doesn't overtake a minimum period
	        velocity = last.velocity;
	        velocityX = last.velocityX;
	        velocityY = last.velocityY;
	        direction = last.direction;
	    }

	    input.velocity = velocity;
	    input.velocityX = velocityX;
	    input.velocityY = velocityY;
	    input.direction = direction;
	}

	/**
	 * create a simple clone from the input used for storage of firstInput and firstMultiple
	 * @param {Object} input
	 * @returns {Object} clonedInputData
	 */
	function simpleCloneInputData(input) {
	    // make a simple copy of the pointers because we will get a reference if we don't
	    // we only need clientXY for the calculations
	    var pointers = [];
	    var i = 0;
	    while (i < input.pointers.length) {
	        pointers[i] = {
	            clientX: round(input.pointers[i].clientX),
	            clientY: round(input.pointers[i].clientY)
	        };
	        i++;
	    }

	    return {
	        timeStamp: now(),
	        pointers: pointers,
	        center: getCenter(pointers),
	        deltaX: input.deltaX,
	        deltaY: input.deltaY
	    };
	}

	/**
	 * get the center of all the pointers
	 * @param {Array} pointers
	 * @return {Object} center contains `x` and `y` properties
	 */
	function getCenter(pointers) {
	    var pointersLength = pointers.length;

	    // no need to loop when only one touch
	    if (pointersLength === 1) {
	        return {
	            x: round(pointers[0].clientX),
	            y: round(pointers[0].clientY)
	        };
	    }

	    var x = 0, y = 0, i = 0;
	    while (i < pointersLength) {
	        x += pointers[i].clientX;
	        y += pointers[i].clientY;
	        i++;
	    }

	    return {
	        x: round(x / pointersLength),
	        y: round(y / pointersLength)
	    };
	}

	/**
	 * calculate the velocity between two points. unit is in px per ms.
	 * @param {Number} deltaTime
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Object} velocity `x` and `y`
	 */
	function getVelocity(deltaTime, x, y) {
	    return {
	        x: x / deltaTime || 0,
	        y: y / deltaTime || 0
	    };
	}

	/**
	 * get the direction between two points
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Number} direction
	 */
	function getDirection(x, y) {
	    if (x === y) {
	        return DIRECTION_NONE;
	    }

	    if (abs(x) >= abs(y)) {
	        return x > 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
	    }
	    return y > 0 ? DIRECTION_UP : DIRECTION_DOWN;
	}

	/**
	 * calculate the absolute distance between two points
	 * @param {Object} p1 {x, y}
	 * @param {Object} p2 {x, y}
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} distance
	 */
	function getDistance(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];

	    return Math.sqrt((x * x) + (y * y));
	}

	/**
	 * calculate the angle between two coordinates
	 * @param {Object} p1
	 * @param {Object} p2
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} angle
	 */
	function getAngle(p1, p2, props) {
	    if (!props) {
	        props = PROPS_XY;
	    }
	    var x = p2[props[0]] - p1[props[0]],
	        y = p2[props[1]] - p1[props[1]];
	    return Math.atan2(y, x) * 180 / Math.PI;
	}

	/**
	 * calculate the rotation degrees between two pointersets
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} rotation
	 */
	function getRotation(start, end) {
	    return getAngle(end[1], end[0], PROPS_CLIENT_XY) - getAngle(start[1], start[0], PROPS_CLIENT_XY);
	}

	/**
	 * calculate the scale factor between two pointersets
	 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} scale
	 */
	function getScale(start, end) {
	    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
	}

	var MOUSE_INPUT_MAP = {
	    mousedown: INPUT_START,
	    mousemove: INPUT_MOVE,
	    mouseup: INPUT_END
	};

	var MOUSE_ELEMENT_EVENTS = 'mousedown';
	var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

	/**
	 * Mouse events input
	 * @constructor
	 * @extends Input
	 */
	function MouseInput() {
	    this.evEl = MOUSE_ELEMENT_EVENTS;
	    this.evWin = MOUSE_WINDOW_EVENTS;

	    this.allow = true; // used by Input.TouchMouse to disable mouse events
	    this.pressed = false; // mousedown state

	    Input.apply(this, arguments);
	}

	inherit(MouseInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function MEhandler(ev) {
	        var eventType = MOUSE_INPUT_MAP[ev.type];

	        // on start we want to have the left mouse button down
	        if (eventType & INPUT_START && ev.button === 0) {
	            this.pressed = true;
	        }

	        if (eventType & INPUT_MOVE && ev.which !== 1) {
	            eventType = INPUT_END;
	        }

	        // mouse must be down, and mouse events are allowed (see the TouchMouse input)
	        if (!this.pressed || !this.allow) {
	            return;
	        }

	        if (eventType & INPUT_END) {
	            this.pressed = false;
	        }

	        this.callback(this.manager, eventType, {
	            pointers: [ev],
	            changedPointers: [ev],
	            pointerType: INPUT_TYPE_MOUSE,
	            srcEvent: ev
	        });
	    }
	});

	var POINTER_INPUT_MAP = {
	    pointerdown: INPUT_START,
	    pointermove: INPUT_MOVE,
	    pointerup: INPUT_END,
	    pointercancel: INPUT_CANCEL,
	    pointerout: INPUT_CANCEL
	};

	// in IE10 the pointer types is defined as an enum
	var IE10_POINTER_TYPE_ENUM = {
	    2: INPUT_TYPE_TOUCH,
	    3: INPUT_TYPE_PEN,
	    4: INPUT_TYPE_MOUSE,
	    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
	};

	var POINTER_ELEMENT_EVENTS = 'pointerdown';
	var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

	// IE10 has prefixed support, and case-sensitive
	if (window.MSPointerEvent) {
	    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
	    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
	}

	/**
	 * Pointer events input
	 * @constructor
	 * @extends Input
	 */
	function PointerEventInput() {
	    this.evEl = POINTER_ELEMENT_EVENTS;
	    this.evWin = POINTER_WINDOW_EVENTS;

	    Input.apply(this, arguments);

	    this.store = (this.manager.session.pointerEvents = []);
	}

	inherit(PointerEventInput, Input, {
	    /**
	     * handle mouse events
	     * @param {Object} ev
	     */
	    handler: function PEhandler(ev) {
	        var store = this.store;
	        var removePointer = false;

	        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
	        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
	        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

	        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

	        // get index of the event in the store
	        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

	        // start and mouse must be down
	        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
	            if (storeIndex < 0) {
	                store.push(ev);
	                storeIndex = store.length - 1;
	            }
	        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
	            removePointer = true;
	        }

	        // it not found, so the pointer hasn't been down (so it's probably a hover)
	        if (storeIndex < 0) {
	            return;
	        }

	        // update the event in the store
	        store[storeIndex] = ev;

	        this.callback(this.manager, eventType, {
	            pointers: store,
	            changedPointers: [ev],
	            pointerType: pointerType,
	            srcEvent: ev
	        });

	        if (removePointer) {
	            // remove from the store
	            store.splice(storeIndex, 1);
	        }
	    }
	});

	var SINGLE_TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};

	var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
	var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

	/**
	 * Touch events input
	 * @constructor
	 * @extends Input
	 */
	function SingleTouchInput() {
	    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
	    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
	    this.started = false;

	    Input.apply(this, arguments);
	}

	inherit(SingleTouchInput, Input, {
	    handler: function TEhandler(ev) {
	        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

	        // should we handle the touch events?
	        if (type === INPUT_START) {
	            this.started = true;
	        }

	        if (!this.started) {
	            return;
	        }

	        var touches = normalizeSingleTouches.call(this, ev, type);

	        // when done, reset the started state
	        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
	            this.started = false;
	        }

	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});

	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function normalizeSingleTouches(ev, type) {
	    var all = toArray(ev.touches);
	    var changed = toArray(ev.changedTouches);

	    if (type & (INPUT_END | INPUT_CANCEL)) {
	        all = uniqueArray(all.concat(changed), 'identifier', true);
	    }

	    return [all, changed];
	}

	var TOUCH_INPUT_MAP = {
	    touchstart: INPUT_START,
	    touchmove: INPUT_MOVE,
	    touchend: INPUT_END,
	    touchcancel: INPUT_CANCEL
	};

	var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

	/**
	 * Multi-user touch events input
	 * @constructor
	 * @extends Input
	 */
	function TouchInput() {
	    this.evTarget = TOUCH_TARGET_EVENTS;
	    this.targetIds = {};

	    Input.apply(this, arguments);
	}

	inherit(TouchInput, Input, {
	    handler: function MTEhandler(ev) {
	        var type = TOUCH_INPUT_MAP[ev.type];
	        var touches = getTouches.call(this, ev, type);
	        if (!touches) {
	            return;
	        }

	        this.callback(this.manager, type, {
	            pointers: touches[0],
	            changedPointers: touches[1],
	            pointerType: INPUT_TYPE_TOUCH,
	            srcEvent: ev
	        });
	    }
	});

	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function getTouches(ev, type) {
	    var allTouches = toArray(ev.touches);
	    var targetIds = this.targetIds;

	    // when there is only one touch, the process can be simplified
	    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
	        targetIds[allTouches[0].identifier] = true;
	        return [allTouches, allTouches];
	    }

	    var i,
	        targetTouches,
	        changedTouches = toArray(ev.changedTouches),
	        changedTargetTouches = [],
	        target = this.target;

	    // get target touches from touches
	    targetTouches = allTouches.filter(function(touch) {
	        return hasParent(touch.target, target);
	    });

	    // collect touches
	    if (type === INPUT_START) {
	        i = 0;
	        while (i < targetTouches.length) {
	            targetIds[targetTouches[i].identifier] = true;
	            i++;
	        }
	    }

	    // filter changed touches to only contain touches that exist in the collected target ids
	    i = 0;
	    while (i < changedTouches.length) {
	        if (targetIds[changedTouches[i].identifier]) {
	            changedTargetTouches.push(changedTouches[i]);
	        }

	        // cleanup removed touches
	        if (type & (INPUT_END | INPUT_CANCEL)) {
	            delete targetIds[changedTouches[i].identifier];
	        }
	        i++;
	    }

	    if (!changedTargetTouches.length) {
	        return;
	    }

	    return [
	        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
	        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
	        changedTargetTouches
	    ];
	}

	/**
	 * Combined touch and mouse input
	 *
	 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
	 * This because touch devices also emit mouse events while doing a touch.
	 *
	 * @constructor
	 * @extends Input
	 */
	function TouchMouseInput() {
	    Input.apply(this, arguments);

	    var handler = bindFn(this.handler, this);
	    this.touch = new TouchInput(this.manager, handler);
	    this.mouse = new MouseInput(this.manager, handler);
	}

	inherit(TouchMouseInput, Input, {
	    /**
	     * handle mouse and touch events
	     * @param {Hammer} manager
	     * @param {String} inputEvent
	     * @param {Object} inputData
	     */
	    handler: function TMEhandler(manager, inputEvent, inputData) {
	        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
	            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

	        // when we're in a touch event, so  block all upcoming mouse events
	        // most mobile browser also emit mouseevents, right after touchstart
	        if (isTouch) {
	            this.mouse.allow = false;
	        } else if (isMouse && !this.mouse.allow) {
	            return;
	        }

	        // reset the allowMouse when we're done
	        if (inputEvent & (INPUT_END | INPUT_CANCEL)) {
	            this.mouse.allow = true;
	        }

	        this.callback(manager, inputEvent, inputData);
	    },

	    /**
	     * remove the event listeners
	     */
	    destroy: function destroy() {
	        this.touch.destroy();
	        this.mouse.destroy();
	    }
	});

	var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

	// magical touchAction value
	var TOUCH_ACTION_COMPUTE = 'compute';
	var TOUCH_ACTION_AUTO = 'auto';
	var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
	var TOUCH_ACTION_NONE = 'none';
	var TOUCH_ACTION_PAN_X = 'pan-x';
	var TOUCH_ACTION_PAN_Y = 'pan-y';

	/**
	 * Touch Action
	 * sets the touchAction property or uses the js alternative
	 * @param {Manager} manager
	 * @param {String} value
	 * @constructor
	 */
	function TouchAction(manager, value) {
	    this.manager = manager;
	    this.set(value);
	}

	TouchAction.prototype = {
	    /**
	     * set the touchAction value on the element or enable the polyfill
	     * @param {String} value
	     */
	    set: function(value) {
	        // find out the touch-action by the event handlers
	        if (value == TOUCH_ACTION_COMPUTE) {
	            value = this.compute();
	        }

	        if (NATIVE_TOUCH_ACTION) {
	            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
	        }
	        this.actions = value.toLowerCase().trim();
	    },

	    /**
	     * just re-set the touchAction value
	     */
	    update: function() {
	        this.set(this.manager.options.touchAction);
	    },

	    /**
	     * compute the value for the touchAction property based on the recognizer's settings
	     * @returns {String} value
	     */
	    compute: function() {
	        var actions = [];
	        each(this.manager.recognizers, function(recognizer) {
	            if (boolOrFn(recognizer.options.enable, [recognizer])) {
	                actions = actions.concat(recognizer.getTouchAction());
	            }
	        });
	        return cleanTouchActions(actions.join(' '));
	    },

	    /**
	     * this method is called on each input cycle and provides the preventing of the browser behavior
	     * @param {Object} input
	     */
	    preventDefaults: function(input) {
	        // not needed with native support for the touchAction property
	        if (NATIVE_TOUCH_ACTION) {
	            return;
	        }

	        var srcEvent = input.srcEvent;
	        var direction = input.offsetDirection;

	        // if the touch action did prevented once this session
	        if (this.manager.session.prevented) {
	            srcEvent.preventDefault();
	            return;
	        }

	        var actions = this.actions;
	        var hasNone = inStr(actions, TOUCH_ACTION_NONE);
	        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);
	        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);

	        if (hasNone ||
	            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
	            (hasPanX && direction & DIRECTION_VERTICAL)) {
	            return this.preventSrc(srcEvent);
	        }
	    },

	    /**
	     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
	     * @param {Object} srcEvent
	     */
	    preventSrc: function(srcEvent) {
	        this.manager.session.prevented = true;
	        srcEvent.preventDefault();
	    }
	};

	/**
	 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
	 * @param {String} actions
	 * @returns {*}
	 */
	function cleanTouchActions(actions) {
	    // none
	    if (inStr(actions, TOUCH_ACTION_NONE)) {
	        return TOUCH_ACTION_NONE;
	    }

	    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
	    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

	    // pan-x and pan-y can be combined
	    if (hasPanX && hasPanY) {
	        return TOUCH_ACTION_PAN_X + ' ' + TOUCH_ACTION_PAN_Y;
	    }

	    // pan-x OR pan-y
	    if (hasPanX || hasPanY) {
	        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
	    }

	    // manipulation
	    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
	        return TOUCH_ACTION_MANIPULATION;
	    }

	    return TOUCH_ACTION_AUTO;
	}

	/**
	 * Recognizer flow explained; *
	 * All recognizers have the initial state of POSSIBLE when a input session starts.
	 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
	 * Example session for mouse-input: mousedown -> mousemove -> mouseup
	 *
	 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
	 * which determines with state it should be.
	 *
	 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
	 * POSSIBLE to give it another change on the next cycle.
	 *
	 *               Possible
	 *                  |
	 *            +-----+---------------+
	 *            |                     |
	 *      +-----+-----+               |
	 *      |           |               |
	 *   Failed      Cancelled          |
	 *                          +-------+------+
	 *                          |              |
	 *                      Recognized       Began
	 *                                         |
	 *                                      Changed
	 *                                         |
	 *                                  Ended/Recognized
	 */
	var STATE_POSSIBLE = 1;
	var STATE_BEGAN = 2;
	var STATE_CHANGED = 4;
	var STATE_ENDED = 8;
	var STATE_RECOGNIZED = STATE_ENDED;
	var STATE_CANCELLED = 16;
	var STATE_FAILED = 32;

	/**
	 * Recognizer
	 * Every recognizer needs to extend from this class.
	 * @constructor
	 * @param {Object} options
	 */
	function Recognizer(options) {
	    this.id = uniqueId();

	    this.manager = null;
	    this.options = merge(options || {}, this.defaults);

	    // default is enable true
	    this.options.enable = ifUndefined(this.options.enable, true);

	    this.state = STATE_POSSIBLE;

	    this.simultaneous = {};
	    this.requireFail = [];
	}

	Recognizer.prototype = {
	    /**
	     * @virtual
	     * @type {Object}
	     */
	    defaults: {},

	    /**
	     * set options
	     * @param {Object} options
	     * @return {Recognizer}
	     */
	    set: function(options) {
	        extend(this.options, options);

	        // also update the touchAction, in case something changed about the directions/enabled state
	        this.manager && this.manager.touchAction.update();
	        return this;
	    },

	    /**
	     * recognize simultaneous with an other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    recognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
	            return this;
	        }

	        var simultaneous = this.simultaneous;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (!simultaneous[otherRecognizer.id]) {
	            simultaneous[otherRecognizer.id] = otherRecognizer;
	            otherRecognizer.recognizeWith(this);
	        }
	        return this;
	    },

	    /**
	     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRecognizeWith: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
	            return this;
	        }

	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        delete this.simultaneous[otherRecognizer.id];
	        return this;
	    },

	    /**
	     * recognizer can only run when an other is failing
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    requireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
	            return this;
	        }

	        var requireFail = this.requireFail;
	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        if (inArray(requireFail, otherRecognizer) === -1) {
	            requireFail.push(otherRecognizer);
	            otherRecognizer.requireFailure(this);
	        }
	        return this;
	    },

	    /**
	     * drop the requireFailure link. it does not remove the link on the other recognizer.
	     * @param {Recognizer} otherRecognizer
	     * @returns {Recognizer} this
	     */
	    dropRequireFailure: function(otherRecognizer) {
	        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
	            return this;
	        }

	        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
	        var index = inArray(this.requireFail, otherRecognizer);
	        if (index > -1) {
	            this.requireFail.splice(index, 1);
	        }
	        return this;
	    },

	    /**
	     * has require failures boolean
	     * @returns {boolean}
	     */
	    hasRequireFailures: function() {
	        return this.requireFail.length > 0;
	    },

	    /**
	     * if the recognizer can recognize simultaneous with an other recognizer
	     * @param {Recognizer} otherRecognizer
	     * @returns {Boolean}
	     */
	    canRecognizeWith: function(otherRecognizer) {
	        return !!this.simultaneous[otherRecognizer.id];
	    },

	    /**
	     * You should use `tryEmit` instead of `emit` directly to check
	     * that all the needed recognizers has failed before emitting.
	     * @param {Object} input
	     */
	    emit: function(input) {
	        var self = this;
	        var state = this.state;

	        function emit(withState) {
	            self.manager.emit(self.options.event + (withState ? stateStr(state) : ''), input);
	        }

	        // 'panstart' and 'panmove'
	        if (state < STATE_ENDED) {
	            emit(true);
	        }

	        emit(); // simple 'eventName' events

	        // panend and pancancel
	        if (state >= STATE_ENDED) {
	            emit(true);
	        }
	    },

	    /**
	     * Check that all the require failure recognizers has failed,
	     * if true, it emits a gesture event,
	     * otherwise, setup the state to FAILED.
	     * @param {Object} input
	     */
	    tryEmit: function(input) {
	        if (this.canEmit()) {
	            return this.emit(input);
	        }
	        // it's failing anyway
	        this.state = STATE_FAILED;
	    },

	    /**
	     * can we emit?
	     * @returns {boolean}
	     */
	    canEmit: function() {
	        var i = 0;
	        while (i < this.requireFail.length) {
	            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
	                return false;
	            }
	            i++;
	        }
	        return true;
	    },

	    /**
	     * update the recognizer
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        // make a new copy of the inputData
	        // so we can change the inputData without messing up the other recognizers
	        var inputDataClone = extend({}, inputData);

	        // is is enabled and allow recognizing?
	        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
	            this.reset();
	            this.state = STATE_FAILED;
	            return;
	        }

	        // reset when we've reached the end
	        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
	            this.state = STATE_POSSIBLE;
	        }

	        this.state = this.process(inputDataClone);

	        // the recognizer has recognized a gesture
	        // so trigger an event
	        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
	            this.tryEmit(inputDataClone);
	        }
	    },

	    /**
	     * return the state of the recognizer
	     * the actual recognizing happens in this method
	     * @virtual
	     * @param {Object} inputData
	     * @returns {Const} STATE
	     */
	    process: function(inputData) { }, // jshint ignore:line

	    /**
	     * return the preferred touch-action
	     * @virtual
	     * @returns {Array}
	     */
	    getTouchAction: function() { },

	    /**
	     * called when the gesture isn't allowed to recognize
	     * like when another is being recognized or it is disabled
	     * @virtual
	     */
	    reset: function() { }
	};

	/**
	 * get a usable string, used as event postfix
	 * @param {Const} state
	 * @returns {String} state
	 */
	function stateStr(state) {
	    if (state & STATE_CANCELLED) {
	        return 'cancel';
	    } else if (state & STATE_ENDED) {
	        return 'end';
	    } else if (state & STATE_CHANGED) {
	        return 'move';
	    } else if (state & STATE_BEGAN) {
	        return 'start';
	    }
	    return '';
	}

	/**
	 * direction cons to string
	 * @param {Const} direction
	 * @returns {String}
	 */
	function directionStr(direction) {
	    if (direction == DIRECTION_DOWN) {
	        return 'down';
	    } else if (direction == DIRECTION_UP) {
	        return 'up';
	    } else if (direction == DIRECTION_LEFT) {
	        return 'left';
	    } else if (direction == DIRECTION_RIGHT) {
	        return 'right';
	    }
	    return '';
	}

	/**
	 * get a recognizer by name if it is bound to a manager
	 * @param {Recognizer|String} otherRecognizer
	 * @param {Recognizer} recognizer
	 * @returns {Recognizer}
	 */
	function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
	    var manager = recognizer.manager;
	    if (manager) {
	        return manager.get(otherRecognizer);
	    }
	    return otherRecognizer;
	}

	/**
	 * This recognizer is just used as a base for the simple attribute recognizers.
	 * @constructor
	 * @extends Recognizer
	 */
	function AttrRecognizer() {
	    Recognizer.apply(this, arguments);
	}

	inherit(AttrRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof AttrRecognizer
	     */
	    defaults: {
	        /**
	         * @type {Number}
	         * @default 1
	         */
	        pointers: 1
	    },

	    /**
	     * Used to check if it the recognizer receives valid input, like input.distance > 10.
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {Boolean} recognized
	     */
	    attrTest: function(input) {
	        var optionPointers = this.options.pointers;
	        return optionPointers === 0 || input.pointers.length === optionPointers;
	    },

	    /**
	     * Process the input and return the state for the recognizer
	     * @memberof AttrRecognizer
	     * @param {Object} input
	     * @returns {*} State
	     */
	    process: function(input) {
	        var state = this.state;
	        var eventType = input.eventType;

	        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
	        var isValid = this.attrTest(input);

	        // on cancel input and we've recognized before, return STATE_CANCELLED
	        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
	            return state | STATE_CANCELLED;
	        } else if (isRecognized || isValid) {
	            if (eventType & INPUT_END) {
	                return state | STATE_ENDED;
	            } else if (!(state & STATE_BEGAN)) {
	                return STATE_BEGAN;
	            }
	            return state | STATE_CHANGED;
	        }
	        return STATE_FAILED;
	    }
	});

	/**
	 * Pan
	 * Recognized when the pointer is down and moved in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PanRecognizer() {
	    AttrRecognizer.apply(this, arguments);

	    this.pX = null;
	    this.pY = null;
	}

	inherit(PanRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PanRecognizer
	     */
	    defaults: {
	        event: 'pan',
	        threshold: 10,
	        pointers: 1,
	        direction: DIRECTION_ALL
	    },

	    getTouchAction: function() {
	        var direction = this.options.direction;
	        var actions = [];
	        if (direction & DIRECTION_HORIZONTAL) {
	            actions.push(TOUCH_ACTION_PAN_Y);
	        }
	        if (direction & DIRECTION_VERTICAL) {
	            actions.push(TOUCH_ACTION_PAN_X);
	        }
	        return actions;
	    },

	    directionTest: function(input) {
	        var options = this.options;
	        var hasMoved = true;
	        var distance = input.distance;
	        var direction = input.direction;
	        var x = input.deltaX;
	        var y = input.deltaY;

	        // lock to axis?
	        if (!(direction & options.direction)) {
	            if (options.direction & DIRECTION_HORIZONTAL) {
	                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
	                hasMoved = x != this.pX;
	                distance = Math.abs(input.deltaX);
	            } else {
	                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
	                hasMoved = y != this.pY;
	                distance = Math.abs(input.deltaY);
	            }
	        }
	        input.direction = direction;
	        return hasMoved && distance > options.threshold && direction & options.direction;
	    },

	    attrTest: function(input) {
	        return AttrRecognizer.prototype.attrTest.call(this, input) &&
	            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
	    },

	    emit: function(input) {
	        this.pX = input.deltaX;
	        this.pY = input.deltaY;

	        var direction = directionStr(input.direction);
	        if (direction) {
	            this.manager.emit(this.options.event + direction, input);
	        }

	        this._super.emit.call(this, input);
	    }
	});

	/**
	 * Pinch
	 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PinchRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(PinchRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'pinch',
	        threshold: 0,
	        pointers: 2
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },

	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
	    },

	    emit: function(input) {
	        this._super.emit.call(this, input);
	        if (input.scale !== 1) {
	            var inOut = input.scale < 1 ? 'in' : 'out';
	            this.manager.emit(this.options.event + inOut, input);
	        }
	    }
	});

	/**
	 * Press
	 * Recognized when the pointer is down for x ms without any movement.
	 * @constructor
	 * @extends Recognizer
	 */
	function PressRecognizer() {
	    Recognizer.apply(this, arguments);

	    this._timer = null;
	    this._input = null;
	}

	inherit(PressRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PressRecognizer
	     */
	    defaults: {
	        event: 'press',
	        pointers: 1,
	        time: 500, // minimal time of the pointer to be pressed
	        threshold: 5 // a minimal movement is ok, but keep it low
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_AUTO];
	    },

	    process: function(input) {
	        var options = this.options;
	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTime = input.deltaTime > options.time;

	        this._input = input;

	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
	            this.reset();
	        } else if (input.eventType & INPUT_START) {
	            this.reset();
	            this._timer = setTimeoutContext(function() {
	                this.state = STATE_RECOGNIZED;
	                this.tryEmit();
	            }, options.time, this);
	        } else if (input.eventType & INPUT_END) {
	            return STATE_RECOGNIZED;
	        }
	        return STATE_FAILED;
	    },

	    reset: function() {
	        clearTimeout(this._timer);
	    },

	    emit: function(input) {
	        if (this.state !== STATE_RECOGNIZED) {
	            return;
	        }

	        if (input && (input.eventType & INPUT_END)) {
	            this.manager.emit(this.options.event + 'up', input);
	        } else {
	            this._input.timeStamp = now();
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});

	/**
	 * Rotate
	 * Recognized when two or more pointer are moving in a circular motion.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function RotateRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(RotateRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof RotateRecognizer
	     */
	    defaults: {
	        event: 'rotate',
	        threshold: 0,
	        pointers: 2
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_NONE];
	    },

	    attrTest: function(input) {
	        return this._super.attrTest.call(this, input) &&
	            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
	    }
	});

	/**
	 * Swipe
	 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function SwipeRecognizer() {
	    AttrRecognizer.apply(this, arguments);
	}

	inherit(SwipeRecognizer, AttrRecognizer, {
	    /**
	     * @namespace
	     * @memberof SwipeRecognizer
	     */
	    defaults: {
	        event: 'swipe',
	        threshold: 10,
	        velocity: 0.65,
	        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
	        pointers: 1
	    },

	    getTouchAction: function() {
	        return PanRecognizer.prototype.getTouchAction.call(this);
	    },

	    attrTest: function(input) {
	        var direction = this.options.direction;
	        var velocity;

	        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
	            velocity = input.velocity;
	        } else if (direction & DIRECTION_HORIZONTAL) {
	            velocity = input.velocityX;
	        } else if (direction & DIRECTION_VERTICAL) {
	            velocity = input.velocityY;
	        }

	        return this._super.attrTest.call(this, input) &&
	            direction & input.direction &&
	            input.distance > this.options.threshold &&
	            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
	    },

	    emit: function(input) {
	        var direction = directionStr(input.direction);
	        if (direction) {
	            this.manager.emit(this.options.event + direction, input);
	        }

	        this.manager.emit(this.options.event, input);
	    }
	});

	/**
	 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
	 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
	 * a single tap.
	 *
	 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
	 * multi-taps being recognized.
	 * @constructor
	 * @extends Recognizer
	 */
	function TapRecognizer() {
	    Recognizer.apply(this, arguments);

	    // previous time and center,
	    // used for tap counting
	    this.pTime = false;
	    this.pCenter = false;

	    this._timer = null;
	    this._input = null;
	    this.count = 0;
	}

	inherit(TapRecognizer, Recognizer, {
	    /**
	     * @namespace
	     * @memberof PinchRecognizer
	     */
	    defaults: {
	        event: 'tap',
	        pointers: 1,
	        taps: 1,
	        interval: 300, // max time between the multi-tap taps
	        time: 250, // max time of the pointer to be down (like finger on the screen)
	        threshold: 2, // a minimal movement is ok, but keep it low
	        posThreshold: 10 // a multi-tap can be a bit off the initial position
	    },

	    getTouchAction: function() {
	        return [TOUCH_ACTION_MANIPULATION];
	    },

	    process: function(input) {
	        var options = this.options;

	        var validPointers = input.pointers.length === options.pointers;
	        var validMovement = input.distance < options.threshold;
	        var validTouchTime = input.deltaTime < options.time;

	        this.reset();

	        if ((input.eventType & INPUT_START) && (this.count === 0)) {
	            return this.failTimeout();
	        }

	        // we only allow little movement
	        // and we've reached an end event, so a tap is possible
	        if (validMovement && validTouchTime && validPointers) {
	            if (input.eventType != INPUT_END) {
	                return this.failTimeout();
	            }

	            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
	            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

	            this.pTime = input.timeStamp;
	            this.pCenter = input.center;

	            if (!validMultiTap || !validInterval) {
	                this.count = 1;
	            } else {
	                this.count += 1;
	            }

	            this._input = input;

	            // if tap count matches we have recognized it,
	            // else it has began recognizing...
	            var tapCount = this.count % options.taps;
	            if (tapCount === 0) {
	                // no failing requirements, immediately trigger the tap event
	                // or wait as long as the multitap interval to trigger
	                if (!this.hasRequireFailures()) {
	                    return STATE_RECOGNIZED;
	                } else {
	                    this._timer = setTimeoutContext(function() {
	                        this.state = STATE_RECOGNIZED;
	                        this.tryEmit();
	                    }, options.interval, this);
	                    return STATE_BEGAN;
	                }
	            }
	        }
	        return STATE_FAILED;
	    },

	    failTimeout: function() {
	        this._timer = setTimeoutContext(function() {
	            this.state = STATE_FAILED;
	        }, this.options.interval, this);
	        return STATE_FAILED;
	    },

	    reset: function() {
	        clearTimeout(this._timer);
	    },

	    emit: function() {
	        if (this.state == STATE_RECOGNIZED ) {
	            this._input.tapCount = this.count;
	            this.manager.emit(this.options.event, this._input);
	        }
	    }
	});

	/**
	 * Simple way to create an manager with a default set of recognizers.
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Hammer(element, options) {
	    options = options || {};
	    options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
	    return new Manager(element, options);
	}

	/**
	 * @const {string}
	 */
	Hammer.VERSION = '2.0.4';

	/**
	 * default settings
	 * @namespace
	 */
	Hammer.defaults = {
	    /**
	     * set if DOM events are being triggered.
	     * But this is slower and unused by simple implementations, so disabled by default.
	     * @type {Boolean}
	     * @default false
	     */
	    domEvents: false,

	    /**
	     * The value for the touchAction property/fallback.
	     * When set to `compute` it will magically set the correct value based on the added recognizers.
	     * @type {String}
	     * @default compute
	     */
	    touchAction: TOUCH_ACTION_COMPUTE,

	    /**
	     * @type {Boolean}
	     * @default true
	     */
	    enable: true,

	    /**
	     * EXPERIMENTAL FEATURE -- can be removed/changed
	     * Change the parent input target element.
	     * If Null, then it is being set the to main element.
	     * @type {Null|EventTarget}
	     * @default null
	     */
	    inputTarget: null,

	    /**
	     * force an input class
	     * @type {Null|Function}
	     * @default null
	     */
	    inputClass: null,

	    /**
	     * Default recognizer setup when calling `Hammer()`
	     * When creating a new Manager these will be skipped.
	     * @type {Array}
	     */
	    preset: [
	        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
	        [RotateRecognizer, { enable: false }],
	        [PinchRecognizer, { enable: false }, ['rotate']],
	        [SwipeRecognizer,{ direction: DIRECTION_HORIZONTAL }],
	        [PanRecognizer, { direction: DIRECTION_HORIZONTAL }, ['swipe']],
	        [TapRecognizer],
	        [TapRecognizer, { event: 'doubletap', taps: 2 }, ['tap']],
	        [PressRecognizer]
	    ],

	    /**
	     * Some CSS properties can be used to improve the working of Hammer.
	     * Add them to this method and they will be set when creating a new Manager.
	     * @namespace
	     */
	    cssProps: {
	        /**
	         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userSelect: 'none',

	        /**
	         * Disable the Windows Phone grippers when pressing an element.
	         * @type {String}
	         * @default 'none'
	         */
	        touchSelect: 'none',

	        /**
	         * Disables the default callout shown when you touch and hold a touch target.
	         * On iOS, when you touch and hold a touch target such as a link, Safari displays
	         * a callout containing information about the link. This property allows you to disable that callout.
	         * @type {String}
	         * @default 'none'
	         */
	        touchCallout: 'none',

	        /**
	         * Specifies whether zooming is enabled. Used by IE10>
	         * @type {String}
	         * @default 'none'
	         */
	        contentZooming: 'none',

	        /**
	         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
	         * @type {String}
	         * @default 'none'
	         */
	        userDrag: 'none',

	        /**
	         * Overrides the highlight color shown when the user taps a link or a JavaScript
	         * clickable element in iOS. This property obeys the alpha value, if specified.
	         * @type {String}
	         * @default 'rgba(0,0,0,0)'
	         */
	        tapHighlightColor: 'rgba(0,0,0,0)'
	    }
	};

	var STOP = 1;
	var FORCED_STOP = 2;

	/**
	 * Manager
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Manager(element, options) {
	    options = options || {};

	    this.options = merge(options, Hammer.defaults);
	    this.options.inputTarget = this.options.inputTarget || element;

	    this.handlers = {};
	    this.session = {};
	    this.recognizers = [];

	    this.element = element;
	    this.input = createInputInstance(this);
	    this.touchAction = new TouchAction(this, this.options.touchAction);

	    toggleCssProps(this, true);

	    each(options.recognizers, function(item) {
	        var recognizer = this.add(new (item[0])(item[1]));
	        item[2] && recognizer.recognizeWith(item[2]);
	        item[3] && recognizer.requireFailure(item[3]);
	    }, this);
	}

	Manager.prototype = {
	    /**
	     * set options
	     * @param {Object} options
	     * @returns {Manager}
	     */
	    set: function(options) {
	        extend(this.options, options);

	        // Options that need a little more setup
	        if (options.touchAction) {
	            this.touchAction.update();
	        }
	        if (options.inputTarget) {
	            // Clean up existing event listeners and reinitialize
	            this.input.destroy();
	            this.input.target = options.inputTarget;
	            this.input.init();
	        }
	        return this;
	    },

	    /**
	     * stop recognizing for this session.
	     * This session will be discarded, when a new [input]start event is fired.
	     * When forced, the recognizer cycle is stopped immediately.
	     * @param {Boolean} [force]
	     */
	    stop: function(force) {
	        this.session.stopped = force ? FORCED_STOP : STOP;
	    },

	    /**
	     * run the recognizers!
	     * called by the inputHandler function on every movement of the pointers (touches)
	     * it walks through all the recognizers and tries to detect the gesture that is being made
	     * @param {Object} inputData
	     */
	    recognize: function(inputData) {
	        var session = this.session;
	        if (session.stopped) {
	            return;
	        }

	        // run the touch-action polyfill
	        this.touchAction.preventDefaults(inputData);

	        var recognizer;
	        var recognizers = this.recognizers;

	        // this holds the recognizer that is being recognized.
	        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
	        // if no recognizer is detecting a thing, it is set to `null`
	        var curRecognizer = session.curRecognizer;

	        // reset when the last recognizer is recognized
	        // or when we're in a new session
	        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
	            curRecognizer = session.curRecognizer = null;
	        }

	        var i = 0;
	        while (i < recognizers.length) {
	            recognizer = recognizers[i];

	            // find out if we are allowed try to recognize the input for this one.
	            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
	            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
	            //      that is being recognized.
	            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
	            //      this can be setup with the `recognizeWith()` method on the recognizer.
	            if (session.stopped !== FORCED_STOP && ( // 1
	                    !curRecognizer || recognizer == curRecognizer || // 2
	                    recognizer.canRecognizeWith(curRecognizer))) { // 3
	                recognizer.recognize(inputData);
	            } else {
	                recognizer.reset();
	            }

	            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
	            // current active recognizer. but only if we don't already have an active recognizer
	            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
	                curRecognizer = session.curRecognizer = recognizer;
	            }
	            i++;
	        }
	    },

	    /**
	     * get a recognizer by its event name.
	     * @param {Recognizer|String} recognizer
	     * @returns {Recognizer|Null}
	     */
	    get: function(recognizer) {
	        if (recognizer instanceof Recognizer) {
	            return recognizer;
	        }

	        var recognizers = this.recognizers;
	        for (var i = 0; i < recognizers.length; i++) {
	            if (recognizers[i].options.event == recognizer) {
	                return recognizers[i];
	            }
	        }
	        return null;
	    },

	    /**
	     * add a recognizer to the manager
	     * existing recognizers with the same event name will be removed
	     * @param {Recognizer} recognizer
	     * @returns {Recognizer|Manager}
	     */
	    add: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'add', this)) {
	            return this;
	        }

	        // remove existing
	        var existing = this.get(recognizer.options.event);
	        if (existing) {
	            this.remove(existing);
	        }

	        this.recognizers.push(recognizer);
	        recognizer.manager = this;

	        this.touchAction.update();
	        return recognizer;
	    },

	    /**
	     * remove a recognizer by name or instance
	     * @param {Recognizer|String} recognizer
	     * @returns {Manager}
	     */
	    remove: function(recognizer) {
	        if (invokeArrayArg(recognizer, 'remove', this)) {
	            return this;
	        }

	        var recognizers = this.recognizers;
	        recognizer = this.get(recognizer);
	        recognizers.splice(inArray(recognizers, recognizer), 1);

	        this.touchAction.update();
	        return this;
	    },

	    /**
	     * bind event
	     * @param {String} events
	     * @param {Function} handler
	     * @returns {EventEmitter} this
	     */
	    on: function(events, handler) {
	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            handlers[event] = handlers[event] || [];
	            handlers[event].push(handler);
	        });
	        return this;
	    },

	    /**
	     * unbind event, leave emit blank to remove all handlers
	     * @param {String} events
	     * @param {Function} [handler]
	     * @returns {EventEmitter} this
	     */
	    off: function(events, handler) {
	        var handlers = this.handlers;
	        each(splitStr(events), function(event) {
	            if (!handler) {
	                delete handlers[event];
	            } else {
	                handlers[event].splice(inArray(handlers[event], handler), 1);
	            }
	        });
	        return this;
	    },

	    /**
	     * emit event to the listeners
	     * @param {String} event
	     * @param {Object} data
	     */
	    emit: function(event, data) {
	        // we also want to trigger dom events
	        if (this.options.domEvents) {
	            triggerDomEvent(event, data);
	        }

	        // no handlers, so skip it all
	        var handlers = this.handlers[event] && this.handlers[event].slice();
	        if (!handlers || !handlers.length) {
	            return;
	        }

	        data.type = event;
	        data.preventDefault = function() {
	            data.srcEvent.preventDefault();
	        };

	        var i = 0;
	        while (i < handlers.length) {
	            handlers[i](data);
	            i++;
	        }
	    },

	    /**
	     * destroy the manager and unbinds all events
	     * it doesn't unbind dom events, that is the user own responsibility
	     */
	    destroy: function() {
	        this.element && toggleCssProps(this, false);

	        this.handlers = {};
	        this.session = {};
	        this.input.destroy();
	        this.element = null;
	    }
	};

	/**
	 * add/remove the css properties as defined in manager.options.cssProps
	 * @param {Manager} manager
	 * @param {Boolean} add
	 */
	function toggleCssProps(manager, add) {
	    var element = manager.element;
	    each(manager.options.cssProps, function(value, name) {
	        element.style[prefixed(element.style, name)] = add ? value : '';
	    });
	}

	/**
	 * trigger dom event
	 * @param {String} event
	 * @param {Object} data
	 */
	function triggerDomEvent(event, data) {
	    var gestureEvent = document.createEvent('Event');
	    gestureEvent.initEvent(event, true, true);
	    gestureEvent.gesture = data;
	    data.target.dispatchEvent(gestureEvent);
	}

	extend(Hammer, {
	    INPUT_START: INPUT_START,
	    INPUT_MOVE: INPUT_MOVE,
	    INPUT_END: INPUT_END,
	    INPUT_CANCEL: INPUT_CANCEL,

	    STATE_POSSIBLE: STATE_POSSIBLE,
	    STATE_BEGAN: STATE_BEGAN,
	    STATE_CHANGED: STATE_CHANGED,
	    STATE_ENDED: STATE_ENDED,
	    STATE_RECOGNIZED: STATE_RECOGNIZED,
	    STATE_CANCELLED: STATE_CANCELLED,
	    STATE_FAILED: STATE_FAILED,

	    DIRECTION_NONE: DIRECTION_NONE,
	    DIRECTION_LEFT: DIRECTION_LEFT,
	    DIRECTION_RIGHT: DIRECTION_RIGHT,
	    DIRECTION_UP: DIRECTION_UP,
	    DIRECTION_DOWN: DIRECTION_DOWN,
	    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
	    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
	    DIRECTION_ALL: DIRECTION_ALL,

	    Manager: Manager,
	    Input: Input,
	    TouchAction: TouchAction,

	    TouchInput: TouchInput,
	    MouseInput: MouseInput,
	    PointerEventInput: PointerEventInput,
	    TouchMouseInput: TouchMouseInput,
	    SingleTouchInput: SingleTouchInput,

	    Recognizer: Recognizer,
	    AttrRecognizer: AttrRecognizer,
	    Tap: TapRecognizer,
	    Pan: PanRecognizer,
	    Swipe: SwipeRecognizer,
	    Pinch: PinchRecognizer,
	    Rotate: RotateRecognizer,
	    Press: PressRecognizer,

	    on: addEventListeners,
	    off: removeEventListeners,
	    each: each,
	    merge: merge,
	    extend: extend,
	    inherit: inherit,
	    bindFn: bindFn,
	    prefixed: prefixed
	});

	if ("function" == TYPE_FUNCTION && __webpack_require__(56)) {
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return Hammer;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module != 'undefined' && module.exports) {
	    module.exports = Hammer;
	} else {
	    window[exportName] = Hammer;
	}

	})(window, document, 'Hammer');


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"name": "argon",
		"description": "An open-standards augmented reality platform",
		"private": true,
		"version": "0.0.10",
		"homepage": "https://github.com/aelatgt/argon.js",
		"repository": {
			"type": "git",
			"url": "git://github.com/aelatgt/argon.js.git"
		},
		"bugs": {
			"url": "https://github.com/aelatgt/argon.js/issues"
		},
		"devDependencies": {
			"6to5": "^2.5.0",
			"6to5-loader": "git://github.com/6to5/6to5-loader#63ebd97b42",
			"asap": "^2.0.0",
			"basket.js": "^0.5.1",
			"bower": "^1.3.3",
			"es6-loader": "^0.2.0",
			"exports-loader": "^0.6.2",
			"file-loader": "^0.7.2",
			"gulp": "^3.8.10",
			"gulp-buffer": "^0.0.2",
			"gulp-bump": "^0.1.10",
			"gulp-clean": "^0.3.0",
			"gulp-gh-pages": "^0.3.3",
			"gulp-if": "^1.2.0",
			"gulp-load-plugins": "^0.6.0",
			"gulp-notify": "^1.2.5",
			"gulp-rename": "^1.2.0",
			"gulp-tap": "^0.1.1",
			"gulp-uglify": "^0.3.1",
			"gulp-util": "^3.0.0",
			"gulp-webpack": "^1.1.2",
			"hammerjs": "^2.0.4",
			"html-loader": "^0.2.2",
			"imports-loader": "^0.6.3",
			"ink-docstrap": "^0.4.12",
			"jsdoc": "^3.3.0-alpha9",
			"json-loader": "^0.5.1",
			"merge-stream": "^0.1.6",
			"mocha": "^1.21.0",
			"preprocessor": "^1.3.0",
			"raw-loader": "^0.5.1",
			"script-loader": "^0.6.0",
			"should": "^4.0.1",
			"style-loader": "^0.8.0",
			"traceur-loader": "^0.6.3",
			"webpack": "^1.4.13",
			"yargs": "^1.2.2",
			"yuidoc-bootstrap-theme": "^1.0.2",
			"yuidocjs": "^0.3.50"
		},
		"gites": {
			"node": ">=0.10.0"
		},
		"dependencies": {
			"cuid": "^1.2.4",
			"es6-collections": "^0.3.4",
			"lodash": "^2.4.1",
			"mgrs": "0.0.0",
			"three": "^0.68.0",
			"threestrap": "unconed/threestrap#0.0.9"
		}
	}

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "/*!\n* basket.js\n* v0.5.1 - 2014-08-16\n* http://addyosmani.github.com/basket.js\n* (c) Addy Osmani;  License\n* Created by: Addy Osmani, Sindre Sorhus, Andrée Hansson, Mat Scales\n* Contributors: Ironsjp, Mathias Bynens, Rick Waldron, Felipe Morais\n* Uses rsvp.js, https://github.com/tildeio/rsvp.js\n*/\n(function(){function a(a,b){if(a&&\"object\"==typeof a&&a.constructor===this)return a;var c=new this(h,b);return l(c,a),c}function b(a,b,c){1===Q.push({name:a,H:{M:b.q+b.r,L:a,detail:b.b,K:c&&b.q+c.r,label:b.u,timeStamp:O(),stack:Error(b.u).stack}})&&setTimeout(function(){for(var a,b=0;b<Q.length;b++)a=Q[b],M.l(a.name,a.H);Q.length=0},50)}function c(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1}function d(a){var b=a.v;return b||(b=a.v={}),b}function e(a,b){if(\"onerror\"===a)M.k(\"error\",b);else{if(2!==arguments.length)return M[a];M[a]=b}}function f(a){return\"function\"==typeof a}function g(){}function h(){}function i(a,b,c,d){try{a.call(b,c,d)}catch(e){return e}}function j(a,b,c){M.async(function(a){var d=!1,e=i(c,b,function(c){d||(d=!0,b!==c?l(a,c):n(a,c))},function(b){d||(d=!0,o(a,b))});!d&&e&&(d=!0,o(a,e))},a)}function k(a,b){1===b.a?n(a,b.b):2===a.a?o(a,b.b):p(b,void 0,function(c){b!==c?l(a,c):n(a,c)},function(b){o(a,b)})}function l(a,b){if(a===b)n(a,b);else if(\"function\"==typeof b||\"object\"==typeof b&&null!==b)if(b.constructor===a.constructor)k(a,b);else{var c;try{c=b.then}catch(d){R.error=d,c=R}c===R?o(a,R.error):void 0===c?n(a,b):f(c)?j(a,b,c):n(a,b)}else n(a,b)}function m(a){a.d&&a.d(a.b),q(a)}function n(a,c){void 0===a.a&&(a.b=c,a.a=1,0===a.i.length?M.g&&b(\"fulfilled\",a):M.async(q,a))}function o(a,b){void 0===a.a&&(a.a=2,a.b=b,M.async(m,a))}function p(a,b,c,d){var e=a.i,f=e.length;a.d=null,e[f]=b,e[f+1]=c,e[f+2]=d,0===f&&a.a&&M.async(q,a)}function q(a){var c=a.i,d=a.a;if(M.g&&b(1===d?\"fulfilled\":\"rejected\",a),0!==c.length){for(var e,f,g=a.b,h=0;h<c.length;h+=3)e=c[h],f=c[h+d],e?s(d,e,f,g):f(g);a.i.length=0}}function r(){this.error=null}function s(a,b,c,d){var e,g,h,i,j=f(c);if(j){try{e=c(d)}catch(k){S.error=k,e=S}if(e===S?(i=!0,g=e.error,e=null):h=!0,b===e)return void o(b,new TypeError(\"A promises callback cannot return that same promise.\"))}else e=d,h=!0;void 0===b.a&&(j&&h?l(b,e):i?o(b,g):1===a?n(b,e):2===a&&o(b,e))}function t(a,b){try{b(function(b){l(a,b)},function(b){o(a,b)})}catch(c){o(a,c)}}function u(a,b,c){return 1===a?{state:\"fulfilled\",value:c}:{state:\"rejected\",reason:c}}function v(a,b,c,d){this.B=a,this.c=new a(h,d),this.A=c,this.w(b)?(this.t=b,this.e=this.length=b.length,this.s(),0===this.length?n(this.c,this.b):(this.length=this.length||0,this.p(),0===this.e&&n(this.c,this.b))):o(this.c,this.j())}function w(a,c){if(this.r=U++,this.u=c,this.b=this.a=void 0,this.i=[],M.g&&b(\"created\",this),h!==a){if(!f(a))throw new TypeError(\"You must pass a resolver function as the first argument to the promise constructor\");if(!(this instanceof w))throw new TypeError(\"Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.\");t(this,a)}}function x(){this.value=void 0}function y(a,b,c){try{a.apply(b,c)}catch(d){return W.value=d,W}}function z(a,b){return{then:function(c,d){return a.call(b,c,d)}}}function A(a,b,c,d){return b=y(c,d,b),b===W&&o(a,b.value),a}function B(a,b,c,d){return V.all(b).then(function(b){return b=y(c,d,b),b===W&&o(a,b.value),a})}function C(a,b,c){this.f(a,b,!1,c)}function D(a,b,c){this.f(a,b,!0,c)}function E(a,b,c){this.f(a,b,!1,c)}function F(){return function(){process.N(J)}}function G(){var a=0,b=new $(J),c=document.createTextNode(\"\");return b.observe(c,{characterData:!0}),function(){c.data=a=++a%2}}function H(){var a=new MessageChannel;return a.port1.onmessage=J,function(){a.port2.postMessage(0)}}function I(){return function(){setTimeout(J,1)}}function J(){for(var a=0;Z>a;a+=2)_[a](_[a+1]),_[a]=void 0,_[a+1]=void 0;Z=0}function K(){M.k.apply(M,arguments)}var L={G:function(a){return a.k=this.k,a.n=this.n,a.l=this.l,a.v=void 0,a},k:function(a,b){var e,f=d(this);(e=f[a])||(e=f[a]=[]),-1===c(e,b)&&e.push(b)},n:function(a,b){var e,f=d(this);b?(f=f[a],e=c(f,b),-1!==e&&f.splice(e,1)):f[a]=[]},l:function(a,b){var c,e;if(c=d(this)[a])for(var f=0;f<c.length;f++)(e=c[f])(b)}},M={g:!1};L.G(M);var N=Array.isArray?Array.isArray:function(a){return\"[object Array]\"===Object.prototype.toString.call(a)},O=Date.now||function(){return(new Date).getTime()},P=Object.create||function(a){if(1<arguments.length)throw Error(\"Second argument not supported\");if(\"object\"!=typeof a)throw new TypeError(\"Argument must be an object\");return g.prototype=a,new g},Q=[],R=new r,S=new r;v.prototype.w=function(a){return N(a)},v.prototype.j=function(){return Error(\"Array Methods must be provided an Array\")},v.prototype.s=function(){this.b=Array(this.length)},v.prototype.p=function(){for(var a=this.length,b=this.c,c=this.t,d=0;void 0===b.a&&a>d;d++)this.o(c[d],d)},v.prototype.o=function(a,b){var c=this.B;\"object\"==typeof a&&null!==a?a.constructor===c&&void 0!==a.a?(a.d=null,this.m(a.a,b,a.b)):this.C(c.resolve(a),b):(this.e--,this.b[b]=this.h(1,b,a))},v.prototype.m=function(a,b,c){var d=this.c;void 0===d.a&&(this.e--,this.A&&2===a?o(d,c):this.b[b]=this.h(a,b,c)),0===this.e&&n(d,this.b)},v.prototype.h=function(a,b,c){return c},v.prototype.C=function(a,b){var c=this;p(a,void 0,function(a){c.m(1,b,a)},function(a){c.m(2,b,a)})};var T=\"rsvp_\"+O()+\"-\",U=0,V=w;w.J=a,w.all=function(a,b){return new v(this,a,!0,b).c},w.race=function(a,b){function c(a){l(e,a)}function d(a){o(e,a)}var e=new this(h,b);if(!N(a))return o(e,new TypeError(\"You must pass an array to race.\")),e;for(var f=a.length,g=0;void 0===e.a&&f>g;g++)p(this.resolve(a[g]),void 0,c,d);return e},w.resolve=a,w.reject=function(a,b){var c=new this(h,b);return o(c,a),c},w.prototype={constructor:w,q:T,d:function(a){M.l(\"error\",a)},then:function(a,c,d){var e=this.a;if(1===e&&!a||2===e&&!c)return M.g&&b(\"chained\",this,this),this;this.d=null;var f=new this.constructor(h,d),g=this.b;if(M.g&&b(\"chained\",this,f),e){var i=arguments[e-1];M.async(function(){s(e,f,i,g)})}else p(this,f,a,c);return f},\"catch\":function(a,b){return this.then(null,a,b)}};var W=new x,X=new x;C.prototype=P(v.prototype),C.prototype.f=v,C.prototype.h=u,C.prototype.j=function(){return Error(\"allSettled must be called with an array\")},D.prototype=P(v.prototype),D.prototype.f=v,D.prototype.s=function(){this.b={}},D.prototype.w=function(a){return a&&\"object\"==typeof a},D.prototype.j=function(){return Error(\"Promise.hash must be called with an object\")},D.prototype.p=function(){var a,b=this.c,c=this.t,d=[];for(a in c)void 0===b.a&&c.hasOwnProperty(a)&&d.push({position:a,D:c[a]});this.e=c=d.length;for(var e=0;void 0===b.a&&c>e;e++)a=d[e],this.o(a.D,a.position)},E.prototype=P(D.prototype),E.prototype.f=v,E.prototype.h=u,E.prototype.j=function(){return Error(\"hashSettled must be called with an object\")};var Y,Z=0,P=\"undefined\"!=typeof window?window:{},$=P.MutationObserver||P.WebKitMutationObserver,P=\"undefined\"!=typeof Uint8ClampedArray&&\"undefined\"!=typeof importScripts&&\"undefined\"!=typeof MessageChannel,_=Array(1e3);if(Y=\"undefined\"!=typeof process&&\"[object process]\"==={}.toString.call(process)?F():$?G():P?H():I(),M.async=function(a,b){_[Z]=a,_[Z+1]=b,Z+=2,2===Z&&Y()},\"undefined\"!=typeof window&&\"object\"==typeof window.__PROMISE_INSTRUMENTATION__){P=window.__PROMISE_INSTRUMENTATION__,e(\"instrument\",!0);for(var ab in P)P.hasOwnProperty(ab)&&K(ab,P[ab])}var bb={race:function(a,b){return V.race(a,b)},Promise:V,allSettled:function(a,b){return new C(V,a,b).c},hash:function(a,b){return new D(V,a,b).c},hashSettled:function(a,b){return new E(V,a,b).c},denodeify:function(a,b){function c(){for(var c,d=arguments.length,e=Array(d+1),f=!1,g=0;d>g;++g){if(c=arguments[g],!f){if(c&&\"object\"==typeof c){var i;if(c.constructor===V)i=!0;else try{i=c.then}catch(j){W.value=j,i=W}f=i}else f=!1;if(f===X)return d=new V(h),o(d,X.value),d;f&&!0!==f&&(c=z(f,c))}e[g]=c}var k=new V(h);return e[d]=function(a,c){if(a)o(k,a);else if(void 0===b)l(k,c);else if(!0===b){for(var d=arguments,e=d.length,f=Array(e-1),g=1;e>g;g++)f[g-1]=d[g];l(k,f)}else if(N(b)){for(var f=arguments,d={},g=f.length,e=Array(g),h=0;g>h;h++)e[h]=f[h];for(g=0;g<b.length;g++)f=b[g],d[f]=e[g+1];l(k,d)}else l(k,c)},f?B(k,e,a,this):A(k,e,a,this)}return c.__proto__=a,c},on:K,off:function(){M.n.apply(M,arguments)},map:function(a,b,c){return V.all(a,c).then(function(a){if(!f(b))throw new TypeError(\"You must pass a function as map's second argument.\");for(var d=a.length,e=Array(d),g=0;d>g;g++)e[g]=b(a[g]);return V.all(e,c)})},filter:function(a,b,c){return V.all(a,c).then(function(a){if(!f(b))throw new TypeError(\"You must pass a function as filter's second argument.\");for(var d=a.length,e=Array(d),g=0;d>g;g++)e[g]=b(a[g]);return V.all(e,c).then(function(b){for(var c=Array(d),e=0,f=0;d>f;f++)b[f]&&(c[e]=a[f],e++);return c.length=e,c})})},resolve:function(a,b){return V.resolve(a,b)},reject:function(a,b){return V.reject(a,b)},all:function(a,b){return V.all(a,b)},rethrow:function(a){throw setTimeout(function(){throw a}),a},defer:function(a){var b={};return b.c=new V(function(a,c){b.resolve=a,b.reject=c},a),b},EventTarget:L,configure:e,async:function(a,b){M.async(a,b)}};\"function\"==typeof define&&define.I?define(function(){return bb}):\"undefined\"!=typeof module&&module.F?module.F=bb:\"undefined\"!=typeof this&&(this.RSVP=bb)}).call(this),function(a,b){\"use strict\";var c=b.head||b.getElementsByTagName(\"head\")[0],d=\"basket-\",e=5e3,f=function(a,b){try{return localStorage.setItem(d+a,JSON.stringify(b)),!0}catch(c){if(c.name.toUpperCase().indexOf(\"QUOTA\")>=0){var e,g=[];for(e in localStorage)0===e.indexOf(d)&&g.push(JSON.parse(localStorage[e]));return g.length?(g.sort(function(a,b){return a.stamp-b.stamp}),basket.remove(g[0].key),f(a,b)):void 0}return}},g=function(a){var b=new RSVP.Promise(function(b,c){var d=new XMLHttpRequest;d.open(\"GET\",a),d.onreadystatechange=function(){4===d.readyState&&(200===d.status?b({content:d.responseText,type:d.getResponseHeader(\"content-type\")}):c(new Error(d.statusText)))},setTimeout(function(){d.readyState<4&&d.abort()},basket.timeout),d.send()});return b},h=function(a){return g(a.url).then(function(b){var c=i(a,b);return a.skipCache||f(a.key,c),c})},i=function(a,b){var c=+new Date;return a.data=b.content,a.originalType=b.type,a.type=a.type||b.type,a.skipCache=a.skipCache||!1,a.stamp=c,a.expire=c+60*(a.expire||e)*60*1e3,a},j=function(a,b){return!a||a.expire-+new Date<0||b.unique!==a.unique||basket.isValidItem&&!basket.isValidItem(a,b)},k=function(a){var b,c,d;if(a.url)return a.key=a.key||a.url,b=basket.get(a.key),a.execute=a.execute!==!1,d=j(b,a),a.live||d?(a.unique&&(a.url+=(a.url.indexOf(\"?\")>0?\"&\":\"?\")+\"basket-unique=\"+a.unique),c=h(a),a.live&&!d&&(c=c.then(function(a){return a},function(){return b}))):(b.type=a.type||b.originalType,c=new RSVP.Promise(function(a){a(b)})),c},l=function(a){var d=b.createElement(\"script\");d.defer=!0,d.text=a.data,c.appendChild(d)},m={\"default\":l},n=function(a){return a.type&&m[a.type]?m[a.type](a):m[\"default\"](a)},o=function(a){a.map(function(a){return a.execute&&n(a),a})},p=function(){var a,b,c=[];for(a=0,b=arguments.length;b>a;a++)c.push(k(arguments[a]));return RSVP.all(c)},q=function(){var a=p.apply(null,arguments),b=this.then(function(){return a}).then(o);return b.thenRequire=q,b};a.basket={require:function(){var a=p.apply(null,arguments).then(o);return a.thenRequire=q,a},remove:function(a){return localStorage.removeItem(d+a),this},get:function(a){var b=localStorage.getItem(d+a);try{return JSON.parse(b||\"false\")}catch(c){return!1}},clear:function(a){var b,c,e=+new Date;for(b in localStorage)c=b.split(d)[1],c&&(!a||this.get(c).expire<=e)&&this.remove(c);return this},isValidItem:null,timeout:5e3,addHandler:function(a,b){Array.isArray(a)||(a=[a]),a.forEach(function(a){m[a]=b})},removeHandler:function(a){basket.addHandler(a,void 0)}},basket.clear(!0)}(this,document);\n//# sourceMappingURL=basket.full.min.js.map"

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ARGON = module.exports = __webpack_require__(16);

	// native <-> channel manager communication
	ARGON.nativePort = new ARGON.EventPort(function _sendToNative(type, event) {});

	// channel manager <-> channel communication
	ARGON.channelPort = new ARGON.EventPort(function _sendToChannels(type, event) {
	  for (var id in ARGON.channels) {
	    ARGON.channels[id].port.trigger(type, event);
	  }
	  return true;
	}, function _outputFromChannels(type, event) {
	  return true;
	});

	__webpack_require__(66);

	ARGON.on("setup", function () {
	  ARGON.Channel = __webpack_require__(64);
	  ARGON.channels = {};
	});

	ARGON.createChannel = function (config) {
	  ARGON.registerChannel(new ARGON.Channel(config));
	};

	ARGON.registerChannel = function (channel) {
	  ARGON.channels[channel.id] = channel;
	};

	ARGON.deregisterChannel = function (channel) {
	  delete ARGON.channels[channel.id];
	};

	// If running in the (native) Argon App
	if (navigator.userAgent.indexOf("Argon") !== -1) {
	  // notify Argon when DOM is loaded, so that plugin scripts can be injected
	  document.addEventListener("DOMContentLoaded", function (event) {
	    document.location = "arc://ready";
	  });

	  var _ARData = null;

	  var _handleARData = function () {
	    // if we have any new data to report
	    if (_ARData) {
	      // console.timeEnd('frame')
	      //
	      _ARData.timestamp = Date.now();
	      // XXX: ^ rewriting timestamp value because the native timestamp is
	      // based on NSTimeInterval (submillisecond precision) which is the
	      // time since the system uptime, which we are currently not passing
	      // in from native. If we want to rely on the native timestamp, then
	      // we need to expose the system uptime to channels so that they can
	      // generate correct timestamps in relation to everything else in
	      // the scenegraph.

	      // console.time('update')

	      // update systems
	      // console.time('stateUpdates')

	      ARGON.Device.pushGeoPoseState({
	        deviceAttitude: _ARData.deviceAttitude,
	        geolocation: _ARData.geolocation,
	        timestamp: _ARData.timestamp
	      });

	      var vuforiaTrackables = {};
	      var transpose = ARGON.SG.Transform.transpose;
	      if (_ARData.trackables !== "null") {
	        for (var i = 0; i < _ARData.trackables.length; i++) {
	          var trackable = _ARData.trackables[i];
	          vuforiaTrackables[trackable.targetName] = {
	            name: trackable.targetName,
	            transform: transpose(trackable.modelViewMatrix)
	          };
	        }
	      }
	      ARGON.System.Vuforia.updateData({
	        trackables: vuforiaTrackables,
	        timestamp: _ARData.timestamp,
	        volatile: true
	      });

	      // console.timeEnd('stateUpdates')

	      // console.time('sync')
	      var sync = { timestamp: _ARData.timestamp, volatile: true };
	      ARGON.emit("SYNC_INTERNAL", sync);
	      ARGON.channelPort.trigger("SYNC_INTERNAL", sync);
	      // console.timeEnd('sync')

	      // clear data
	      _ARData = null

	      // console.log('VuforiaUpdates:' + _VuforiaUpdates.length + ' GeoUpdates: ' + _GeoUpdates.length)

	      // console.timeEnd('update')

	      // console.time('frame')

	      ;
	    }

	    ARGON.channelPort.trigger("FLUSH");
	  };


	  // fast dispatcher
	  ARGON.dispatch = (function () {
	    var immediateChannel = new MessageChannel();
	    var taskQueue = [];
	    immediateChannel.port1.onmessage = function () {
	      if (taskQueue.length === 0) return;
	      // console.time('dispatch')
	      var q = taskQueue;
	      taskQueue = [];
	      // console.time('dispatchTasks')
	      while (q.length > 0) {
	        q.shift()();
	      }
	      // console.timeEnd('dispatchTasks')
	      _handleARData();
	    };
	    return function (task) {
	      // console.time('dispatch')
	      taskQueue.push(task);
	      immediateChannel.port2.postMessage(0);
	    };
	  })();

	  // These are the entry points from native code
	  var asap = __webpack_require__(67);
	  var tasks = [];
	  window.dispatch = function (task) {
	    tasks.push(task);
	    asap(function () {
	      if (tasks.length === 0) return;
	      var q = tasks;tasks = [];
	      while (q.length > 0) {
	        q.shift()();
	      }
	      _handleARData();
	    });
	  };
	  window.AR = {
	    onUpdateARState: function (event) {
	      _ARData = event;
	    },
	    onCameraCalibration: function (event) {
	      // console.time('dispatchTask:onCameraCalibration')
	      // emit from native port and forward to channel ports
	      var fSH = event.frameSizeHorizontal;
	      var fSV = event.frameSizeVertical;
	      var fLH = event.focalLengthHorizontal;
	      var fLV = event.focalLengthVertical;

	      var fovH = 2 * Math.atan(fSH / (fLH * 2)) * 180 / Math.PI;
	      var fovV = 2 * Math.atan(fSV / (fLV * 2)) * 180 / Math.PI;

	      ARGON.Background.DeviceVideo.updateCameraCalibration({
	        frameSize: [fSH, fSV],
	        focalLength: [fLH, fLV],
	        fov: [fovH, fovV]
	      });
	    },
	    emitEvent: function (event) {
	      if (event.eventName === "AR.DataSetLoadedInternalEvent") {
	        ARGON.nativePort._emit("Vuforia#loadDataSetResponse", event);
	      } else {
	        ARGON.nativePort._emit(event.eventName, event);
	      }
	    }
	  };
	}

	ARGON._setup({ channelManager: true });
	// TODO: toNative (when we switch to wkwebview)
	// console.timeEnd('dispatch')
	// console.timeEnd('dispatch')
	// console.timeEnd('dispatchTask:onCcameraCalibration')

/***/ },
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ARGON = __webpack_require__(57);
	var VersionTransformer = __webpack_require__(65);


	var CSSClass = "argon-channel";

	var Channel = function Channel(args) {
	  this.id = ARGON.Util.cuid();
	  this._url = null;
	  this._messagePort = null;

	  ARGON.Util.mixinInputOutputEventHandlers(this);

	  this.messageQueue = [];

	  this.port = new ARGON.EventPort(_queueToChannel.bind(this), (function output(type, event) {
	    ARGON.channelPort._emit(type, event);
	    return true;
	  }).bind(this));

	  this.iframe = args.iframe || document.createElement("iframe");
	  this.iframe.webkitallowfullscreen = false;
	  this.iframe.sandbox = "allow-forms allow-scripts allow-same-origin";
	  this.iframe.classList.add(CSSClass);
	  this.iframe.id = CSSClass + "-" + this.id;
	  this.iframe.channel = this;

	  // 'unload' event from argon.js
	  this.port.on("unload", (function (event) {
	    _cleanUp.call(this);
	  }).bind(this));

	  // var _preventOuterScroll = function(event) {
	  //   event.preventDefault()
	  // }

	  // this.on('mousewheel', _preventOuterScroll)
	  // this.on('DOMMouseScroll', _preventOuterScroll)

	  this.iframe.onload = _onload.bind(this);

	  if (args.src) this.setURL(args.src);
	};

	Channel.prototype.setURL = function (url) {
	  if (this._url !== url) {
	    _cleanUp.call(this);
	    _setURL.call(this, url);
	    this.iframe.src = undefined;
	    this.iframe.src = this._url;
	    this._waitingForLoad = true;
	  }
	};

	Channel.prototype.getURL = function () {
	  return this._url;
	};

	Channel.prototype.focus = function () {
	  this.port.trigger("focus");
	  this._emit("focus");
	};

	Channel.prototype.blur = function () {
	  this.port.trigger("blur");
	  this._emit("blur");
	};

	Channel.eventMap = new WeakMap();

	Channel.policy = {
	  allowChannelsToAddChannels: true
	};

	module.exports = Channel;



	// Manager.on('focus', function(event) {
	//   var channel = channels[event.ChannelID]
	//   if (Manager.activeChannel !== channel) {
	//     if (Manager.activeChannel) Manager.activeChannel.blur()
	//     Manager.activeChannel = channel
	//   }
	// })
	//
	// Manager.on('blur', function(event) {
	//   var channel = channels[event.ChannelID]
	//   if (Manager.activeChannel === channel)
	//     Manager.activeChannel = undefined
	// })



	function _onload() {
	  _cleanUp.call(this);
	  if (this._waitingForLoad) {
	    // this page load was expected
	    this._waitingForLoad = false;
	  } else {
	    // this page load was not expected
	    _setURL.call(this, "***");
	  }

	  // With WKWebView, looks like content security policy will always be active :(
	  try {
	    if (this.iframe.contentWindow && this.iframe.contentWindow.document) {
	      // CSP is (ussually?) not active in an embedded UIWebView
	      // when window.top uses the file:// protocol
	      this._contentSecurityPolicyActive = false;
	    }
	  } catch (e) {
	    this._contentSecurityPolicyActive = true;
	  }

	  this._emit("load");
	}

	function _parseVersion(version) {
	  var tokens = version.split(".");
	  return {
	    major: tokens[0],
	    minor: tokens[1],
	    patch: tokens[2]
	  };
	}

	function _onconnect(channelInfo) {
	  // _cleanUp.call(this)
	  _setURL.call(this, channelInfo.ARGON_URL);
	  this.version = channelInfo.ARGON_VERSION_STRING;
	  this.semver = _parseVersion(this.version);

	  // TODO: Once argon.js is beyond major version 0, only
	  // check major & minor versions here. Also, maybe should
	  // use a semver library for comparing semvers.
	  // TODO: backwards compatability
	  if (this.semver.major > ARGON.semver.major || this.semver.minor > ARGON.semver.minor || this.semver.patch > ARGON.semver.patch) {
	    alert("The channel at " + this._url + " requires version " + this.version + " of Argon. You are currently running version " + ARGON.version + ". Please update Argon in order to open this channel.");
	    _setURL.call(this, null);
	    _cleanUp.call(this);
	    return;
	  } else if (this.semver.major < ARGON.semver.major || this.semver.minor < ARGON.semver.minor || this.semver.patch < ARGON.semver.patch) {
	    alert("The channel at " + this._url + " uses version " + this.version + " of Argon, or greater. You are currently running version " + ARGON.version + ". Please update the channel to the latest argon.js");
	    _setURL.call(this, null);
	    _cleanUp.call(this);
	    return;
	  }

	  var mc = new MessageChannel();
	  var connectMessage = { msg: "ARGON_CONNECT" };
	  this.iframe.contentWindow.postMessage(connectMessage, "*", [mc.port2]);
	  this._messagePort = mc.port1;
	  this._messagePort.onmessage = (function onmessage(message) {
	    var data = message.data;
	    var event = data.event || {};

	    // associate the event to the source channel via a weakmap
	    Channel.eventMap.set(event, this);

	    this.port._emit(data.type, event);
	  }).bind(this);
	}

	function _sendToChannel(type, event) {
	  // transform outgoing messages for backwards compatability
	  var message = VersionTransformer.toChannel(type, event, this.semver);

	  // disabled syncronous messaging... won't be usable in wkwebview anyways
	  if (true) {
	    // if content security policy is active, use asyncronous messaging
	    this._messagePort.postMessage(message);
	  } else {
	    // if content security policy is inactive, use faster syncronous messaging
	    if (this.iframe.contentWindow.ARGON) {
	      this.iframe.contentWindow.ARGON._onmessage(message);
	    } else {
	      // the iframe must have sneakily navigated without us knowing about it
	      // Unfortunately, there is no event that tells us when an iframe navigates
	      // (Bad iframe!)
	      _cleanUp.call(this);
	      _setURL.call(this, "***");
	    }
	  }
	}

	function _queueToChannel(type, event) {
	  // only enqueue messages marked 'volatile' if there is an active connection
	  if (type === "FLUSH") _flushMessages.call(this);else if (!(event && event.volatile)) this.messageQueue.push({ type: type, event: event });else if (this._messagePort) this.messageQueue.push({ type: type, event: event });
	}

	function _flushMessages() {
	  if (!this._messagePort) return; // iframe is not connected
	  _sendToChannel.call(this, "MESSAGE_QUEUE", this.messageQueue);
	  this.messageQueue = [];
	}

	function _cleanUp() {
	  if (this._messagePort) this._messagePort.close();
	  this._messagePort = null;
	  this._contentSecurityPolicyActive = true;
	  this._url = null;
	  this.version = null;
	  this.semver = null;
	  this._emit("cleanUp");
	}

	function _setURL(url) {
	  if (this._url != url) {
	    this._url = url;
	    this._emit("navigation", { url: this._url });
	  }
	}

	window.addEventListener("message", function (event) {
	  if (event.data.ARGON_URL) {
	    for (var i in ARGON.channels) {
	      var channel = ARGON.channels[i];
	      if (channel.iframe.contentWindow === event.source) {
	        _onconnect.call(channel, event.data);
	        channel._emit("ARGON_CHANNEL_CONNECTED");
	        ARGON.emit("channelConnected", channel);
	        return;
	      }
	    }
	  }
	}, true);
	// TODO: In iOS 8, with native WKWebview APIs, we should be able to detect
	// iframe navigation, and then we can notify the appropriate channel.

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// Transforms incoming & outgoing messages for backwards compatability

	module.exports = {

	  toChannel: function (type, event, version) {
	    var message = { type: type, event: event };

	    // if (type === )

	    return message;
	  },

	  fromChannel: function (type, event, version) {
	    var message = { type: type, event: event };

	    return message;
	  }

	};

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var ARGON = __webpack_require__(16);
	var policy = ARGON.policy = {};

	module.exports = policy;

	policy.contextDidChangePreferredBackground = function (context) {
	  var preference = context.get("preferredBackground");
	  var matches = ARGON.Background.query(preference);

	  // TODO: only setBackground if view is in foreground
	  if (matches[0] && ARGON.policy.contextShouldSetBackground(context, matches[0])) context.setBackground(matches[0]);
	};

	policy.channelDidCreateContext = function (context) {
	  ARGON.policy.contextDidChangePreferredBackground(context);
	};

	policy.contextShouldSetBackground = function (context, selectedBackground) {
	  return true;
	};

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports = rawAsap;
	function rawAsap(task) {
	    if (!queue.length) {
	        requestFlush();
	        flushing = true;
	    }
	    // Equivalent to push, but avoids a function call.
	    queue[queue.length] = task;
	}

	var queue = [];
	// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing = false;
	// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;
	// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index = 0;
	// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity = 1024;

	// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush() {
	    while (index < queue.length) {
	        var currentIndex = index;
	        // Advance the index before calling the task. This ensures that we will
	        // begin flushing on the next task the task throws an error.
	        index = index + 1;
	        queue[currentIndex].call();
	        // Prevent leaking memory for long chains of recursive calls to `asap`.
	        // If we call `asap` within tasks scheduled by `asap`, the queue will
	        // grow, but to avoid an O(n) walk for every task we execute, we don't
	        // shift tasks off the queue after they have been executed.
	        // Instead, we periodically shift 1024 tasks off the queue.
	        if (index > capacity) {
	            // Manually shift all values starting at the index back to the
	            // beginning of the queue.
	            for (var scan = 0; scan < index; scan++) {
	                queue[scan] = queue[scan + index];
	            }
	            queue.length -= index;
	            index = 0;
	        }
	    }
	    queue.length = 0;
	    index = 0;
	    flushing = false;
	}

	// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
	var BrowserMutationObserver = global.MutationObserver || global.WebKitMutationObserver;

	// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if (typeof BrowserMutationObserver === "function") {
	    requestFlush = makeRequestCallFromMutationObserver(flush);

	// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.

	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396

	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	} else {
	    requestFlush = makeRequestCallFromTimer(flush);
	}

	// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush = requestFlush;

	// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback) {
	    var toggle = 1;
	    var observer = new BrowserMutationObserver(callback);
	    var node = document.createTextNode("");
	    observer.observe(node, {characterData: true});
	    return function requestCall() {
	        toggle = -toggle;
	        node.data = toggle;
	    };
	}

	// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html

	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.

	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }

	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.

	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }

	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.

	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.

	function makeRequestCallFromTimer(callback) {
	    return function requestCall() {
	        // We dispatch a timeout with a specified delay of 0 for engines that
	        // can reliably accommodate that request. This will usually be snapped
	        // to a 4 milisecond delay, but once we're flushing, there's no delay
	        // between events.
	        var timeoutHandle = setTimeout(handleTimer, 0);
	        // However, since this timer gets frequently dropped in Firefox
	        // workers, we enlist an interval handle that will try to fire
	        // an event 20 times per second until it succeeds.
	        var intervalHandle = setInterval(handleTimer, 50);

	        function handleTimer() {
	            // Whichever timer succeeds will cancel both timers and
	            // execute the callback.
	            clearTimeout(timeoutHandle);
	            clearInterval(intervalHandle);
	            callback();
	        }
	    };
	}

	// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

	// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ])
});
