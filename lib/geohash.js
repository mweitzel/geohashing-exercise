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
}
