const express = require('express');
const bodyParser = require('body-parser');
// we want to remember our user state before and after requests

//CROSS SITE SCRIPTING
const cors = require('cors');

//For session.
const session = require('express-session');
<<<<<<< HEAD

//===REQUIRE CONTROLLERS===================================
=======
>>>>>>> master
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

<<<<<<< HEAD
// If database table is not found create.
// db.table_check((err, response) => {
//   if (response) {
//     console.log('Table not exist. Creating new.')
//   } else {
//     console.log(err);
//   }
// });


// =========SQL database======== //


// //===========PASSPORT IMPORT ==================
// var passport = require('./server/passport.js');



//===POLICIES===========================
// const isAuthed = (req,res,next) => {
//   if (!req.isAuthenticated()) return res.status(401).send();
//   return next();
// };
//
// // =========Session configuration ========= //
// app.use(session({
//   secret: config.password,
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     secure: false
//     // maxAge: (365 * 24 * 60 * 60 * 1000),
//     // expires: false
//   }
// }));
// // =========Session configuration ========= //
//
// app.use(passport.initialize());
// app.use(passport.session());
//
//
// //===PASSPORT ENDPOINTS===================
// app.post('/login', passport.authenticate('local', {
//   successRedirect: '/login2'
// }));
//
// app.get('/logout', (req,res, next) => {
//   req.logout();
//   return res.status(200).send('logged out');
// });
// //===PASSPORT ENDPOINTS===================
//
//
=======
// =========Public root web Middleware======== //
>>>>>>> master


//===API ENDPOINTS=========================
//Hospital Info
app.post('/api/hospitals', hospitals.getHospitals);
<<<<<<< HEAD

//Onboard Info API
app.post('/api/onBoard', onBoard.getOnBoard);

//Getting Zipcode API
app.post('/api/zipConversion', zip.getZip);

//Getting Weather information API
app.post('/api/weather', weather.getWeather);

//Restaurant
app.get('/api/restaurants', restaurants.getRestaurants);
//Pollution.
app.get('/api/pollution', pollution.getPollution);
//===API ENDPOINTS=========================



=======
app.get('/api/restaurants', restaurants.getRestaurants);
app.get('/api/pollution', pollution.getPollution);
app.post('/api/onBoard', onBoard.getOnBoard);
app.get('/api/weather', weather.getWeather);
app.post('/api/zipConversion', zip.getZip);
>>>>>>> master

//===PORT====================================
app.listen(port, () => {
  console.log('Listening on port: ' + port);
});
