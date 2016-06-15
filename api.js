var express = require('express');
var app     = express();
var geoHash = require('./lib/geohash').convertLatLongWithTodaysDow;

app.get('/geohash', function(req, res, next) {
  respond = function(data){
    res.json(data);
  };

  geoHash(req.query.lat, req.query.lon, respond);
});

console.log("api listening on 8000");

app.listen(8000);

module.exports = app;
