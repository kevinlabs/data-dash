const express = require('express');
const bodyParser = require('body-parser');
// we want to remember our user state before and after requests

//CROSS SITE SCRIPTING
const cors = require('cors');

//For session.
const session = require('express-session');
//===REQUIRE CONTROLLERS===================================
const restaurants = require('./server/restaurantsCtrl.js');
const hospitals = require('./server/hospitalsCtrl.js');
const pollution = require('./server/pollutionCtrl.js');
const onBoard = require('./server/onBoardCtrl.js');
const weather = require('./server/weatherCtrl.js');
const zip = require('./server/zipConversionCtrl.js')
//===REQUIRE CONTROLLERS( NEED TO BE BELOW APP.SET)========

//===INITIALIZE EXPRESS APP===================
const app = module.exports = express();
const port = 8080;

// =========Public root web Middleware======== //
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public_dist'));

//===API ENDPOINTS=========================
app.get('/api/restaurants', restaurants.getRestaurants);
app.get('/api/pollution', pollution.getPollution);
app.post('/api/onBoard', onBoard.getOnBoard);
app.get('/api/weather', weather.getWeather);
app.post('/api/zipConversion', zip.getZip);

//===PORT====================================
app.listen(port, () => {
  console.log('Listening on port: ' + port);
});
