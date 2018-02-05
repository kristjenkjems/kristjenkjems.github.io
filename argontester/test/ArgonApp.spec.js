var should = require('chai/lib/chai').should()

describe('ArgonApp', function() {

  it('onUpdateARState', function() {
    AR.onUpdateARState({
      "trackables":"null",
      "geolocation":{
        "zoneLetter":"S",
        "altitude":0,
        "zoneNumber":16,
        "easting":736015.5343647636,
        "horizontalAccuracy":10,
        "northing":3754326.723982075,
        "verticalAccuracy":6
      },
      "deviceAttitude":[0.09965959936380386,0.9934582710266113,-0.05575583130121231,0,-0.9807214736938477,0.1075388565659523,0.1631587892770767,0,0.168087363243103,0.03842060640454292,0.9850230813026428,0,0,0,0,1],
      "timestamp":60223.267072875
    })
  })

})
