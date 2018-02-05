
// Transforms incoming & outgoing messages for backwards compatability

module.exports = {

  toChannel: function(type, event, version) {
    var message = {type: type, event: event}

    // if (type === )

    return message
  },

  fromChannel: function(type, event, version) {
    var message = {type: type, event: event}

    return message
  }

}
