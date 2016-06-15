var test = require('tape')
  , geoHash = require('../lib/geohash')
  , geoHashPublic = geoHash.convertLatLongWithTodaysDow

test('geohash calls callback', function(t) {
  geoHashPublic('lat', 'long', function() {
    t.end()
  })
})

test('date and dow return 32char md5', function(t) {
  t.equals(
    geoHash.dateAndDowToMD5('2016-06-14', '4413.71')
  , '4416a6a256c6c9e7e986a32467d62895'
  )
  t.end()
})

test('splits string in half', function(t) {
  t.deepEqual(
    geoHash.splitStringInHalf('1234567890')
  , ['12345','67890']
  )
  t.end()
})
