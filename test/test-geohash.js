var test = require('tape')
  , geoHash = require('../lib/geohash')
  , geoHashPublic = geoHash.convertLatLongWithTodaysDow

test('geohash calls callback', function(t) {
  geoHashPublic('lat', 'long', function() {
    t.end()
  })
})
