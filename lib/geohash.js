var c = require('crypto')

module.exports = {
  convertLatLongWithTodaysDow: function(lat, lon, cb) {
    cb()
  }
, dateAndDowToMD5: function(date, dowOpen) {
    return c
      .createHash('md5')
      .update([date, dowOpen].join('-'))
      .digest('hex')
  }
, splitStringInHalf: function(string) {
    return [
      string
        .split('')
        .slice(0,string.length/2)
        .join('')
    , string
        .split('')
        .slice(string.length/2)
        .join('')
    ]
  }
}
