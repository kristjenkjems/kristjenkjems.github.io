
module.exports = Location

var ARGON = require('../../')
var MGRS = require('./MGRS')

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
  this.utm = undefined

  /**
   * @property lla
   * @type Object
   * @description WGS84 (Lat, Long, Alt) representation of this Location.
   * Access the 'latitude', 'longitude' and 'altitude' properties of the
   * returned object to obtain the values.
   * Latitude/Longitude are in degrees, Altitude is in meters.
   */
  this.lla = undefined

  this._utmOrigin = undefined
  this._localUTM = null

  this._eventOutput = new ARGON.EventHandler()
  ARGON.EventHandler.setOutputHandler(this, this._eventOutput)

  if (options) {
    this.copy(options)
  }
}

/**
 * Copy from another Location object (or Location-like object)
 * @param  {[type]} location [description]
 * @return {[type]}          [description]
 */
Location.prototype.copy = function(location) {
  if (!location) {
    this.setUndefined()
  } else if (location.utm) {
    this.setUTM(location.utm)
  } else if (location.lla) {
    this.setLLA(location.lla)
  } else if (location.latitude && location.longitude) {
    this.setLLA(location)
  } else if (location.northing && location.easting) {
    this.setUTM(location)
  }
}

/**
 * @method getLLA
 * @description WGS84 (latitude, longitude, altitude) representation of this Location.
 */
Location.prototype.getLLA = function()
{
	return this.lla
}

/**
 * @method getUTM
 * @description UTM representation of this Location.
 */
Location.prototype.getUTM = function(zoneHint)
{
  if (zoneHint) {
    var utm = Location.LLAtoUTM(this.lla, zoneHint)
    if (utm.zoneLetter !== zoneHint.zoneLetter ||
        utm.zoneNumber !== zoneHint.zoneNumber) {
      return undefined
    }
    return utm
  }
  return this.utm
}

/**
 * @method getTimestamp
 * @description The time location was retrieved in milliseconds
 */
Location.prototype.getTimestamp = function()
{
  return this.utm.timestamp
}

Location.prototype.setUndefined = function() {
  this.utm = undefined
  this.lla = undefined
  this._localUTM = undefined
}

/**
 * @description Set location with LLA representation.
 * @method  setLLA
 * @param   {Object} lla
 * @param   {Number} lla.latitude in degrees
 * @param   {Number} lla.longitude in degrees
 * @param   {Number} lla.altitude in meters
 * @param   {Number} lla.timestamp The time location was retrieved in milliseconds
 */

Location.prototype.setLLA = function(lla)
{
  // TODO: do some validation and throw exceptions if invalid
  if (lla) {
    this.lla = {}
  	this.lla.latitude  = lla.latitude || 0
  	this.lla.longitude = lla.longitude || 0
  	this.lla.altitude  = lla.altitude || 0
    this.timestamp = lla.timestamp || Date.now()

    this.utm = Location.LLAtoUTM(this.lla)
    if (this._utmOrigin) {
      this._localUTM = Location.LLAtoUTM(this.lla, this._utmOrigin)
    } else {
      this._localUTM = null
    }
  } else {
    this.setUndefined()
  }

  this._eventOutput.emit('change')
}

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
Location.prototype.setUTM = function (utm)
{
  // TODO: do some validation and throw exceptions if invalid
  if (utm) {
    this.utm = {}
  	this.utm.northing   = utm.northing || 0
    this.utm.easting    = utm.easting || 0
    this.utm.zoneNumber = utm.zoneNumber || 0
    this.utm.zoneLetter = utm.zoneLetter || ''
  	this.utm.altitude   = utm.altitude || 0
    this.timestamp  = utm.timestamp || Date.now()

    this.lla = Location.UTMtoLLA(this.utm)
    if (this._utmOrigin) {
      _setLocalUTM.call(this)
    } else {
      this._localUTM = undefined
    }
  } else {
    this.setUndefined()
  }

  this._eventOutput.emit('change')
}

function _setLocalUTM() {
  if (!this.lla || !this._utmOrigin) {
    this._localUTM = undefined
    return
  }

  var localUTM = Location.LLAtoUTM(this.lla, this._utmOrigin)

  if (localUTM.zoneLetter !== this._utmOrigin.zoneLetter ||
      localUTM.zoneNumber !== this._utmOrigin.zoneNumber) {
    // if current location cannot be set in local coordinate system
    // then set the local UTM to undefined
    localUTM = undefined
  } else {
    localUTM.easting = localUTM.easting - this._utmOrigin.easting
    localUTM.northing = localUTM.northing - this._utmOrigin.northing
  }

  this._localUTM = localUTM
}

/**
 * @description get location relative to local utm origin
 * @method  getLocalUTM
 * @return  {Object} easting, northing, zoneNumber, and zoneLetter properties
 */
Location.prototype.getLocalUTM = function(location) {
  if (!this.utm) return undefined

  var lla = location.lla
  if (!lla) {
    if (location.utm) {
      lla = Location.UTMtoLLA(location.utm)
    }
    else throw new Error('Expected location object with utm or lla')
  }

  var localUTM = Location.LLAtoUTM(lla, this.utm /*utm origin*/)

  if (localUTM.zoneLetter !== this.utm.zoneLetter ||
    localUTM.zoneNumber !== this.utm.zoneNumber) {
    // if current location cannot be set in local coordinate system
    // then set the local UTM to undefined
    localUTM = undefined
  }
  return localUTM
}


/**
 * Get a JSON compatible representation of this location
 */
Location.prototype.toJSON = function () {
  return (this.utm && this.lla) ? {
    utm: this.utm,
    lla: this.lla,
    timestamp: this.timestamp
  } : null
}

/**
 * @method      LLAtoUTM
 * @description Converts LLA to UTM
 * @param   {Object}    lla
 * @param   {Object}    utmZoneHint
 * @return  {Object} easting, northing, zoneNumber, and zoneLetter properties
 * @static
 */
Location.LLAtoUTM = function(lla, zoneHint)
{
  var ll = {
    lat: lla.latitude,
    lon: lla.longitude
  }
  var utm = MGRS.LLtoUTM(ll, zoneHint)
  if (utm) {
    utm.altitude = lla.altitude
  }
	return utm
}

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
Location.UTMtoLLA = function(utm)
{
  var ll = MGRS.UTMtoLL(utm)
  return ll ? {
    latitude: ll.lat,
    longitude: ll.lon,
    altitude: utm.altitude
  } : null
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
