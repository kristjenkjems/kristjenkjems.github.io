var ARGON = require('argon')
var THREE = require('external-three')
THREE.Bootstrap = require('external-threestrap')

var argonBind = require('./bindComponent')

THREE.Bootstrap.registerPlugin('argon', {

  defaults: {
    start: true,
    context: ARGON.immersiveContext
  },

  listen: ['ready'],

  install: function (three) {

    this.running = false;
    this.argonSynced = false;

    three.Loop = this.api({
      start: this.start.bind(this),
      stop: this.stop.bind(this),
      running: false,
    }, three);

    three.argon = {
      bindComponent: (component, object) => {
        argonBind(this.options.context, component, object)
      }
    }

    this.events =
      ['pre', 'update', 'render', 'post'].map(function (type) {
        return { type: type };
      });

  },

  uninstall: function (three) {
    this.stop(three);
  },

  ready: function (event, three) {
    if (this.options.start) this.start(three);

    three.camera.near = 0.5
    three.camera.far = 1e10
    three.camera.updateProjectionMatrix()

    var trigger = three.trigger.bind(three);
    ARGON.managerPort.on('SYNC', function() {
      this.argonSynced = true
      this.running && this.events.map(trigger);
    }.bind(this))
  },

  start: function (three) {
    if (this.running) return;

    three.Loop.running = this.running = true;

    var trigger = three.trigger.bind(three);
    var loop = function () {
      if (!this.argonSynced) {
        this.running && requestAnimationFrame(loop);
        this.events.map(trigger)
      }
    }.bind(this);

    requestAnimationFrame(loop);

    three.trigger({ type: 'start' });
  },

  stop: function (three) {
    if (!this.running) return;
    three.Loop.running = this.running = false;

    three.trigger({ type: 'stop' });
  },

});
