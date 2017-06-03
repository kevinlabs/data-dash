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

//secrete session code file.
//const config = require('./config.js');

//Sql Database connection tool
//const massive = require('massive');

//===INITIALIZE EXPRESS APP===================
const app = module.exports = express();


const port = 8080;


// =========Public root web Middleware======== //
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public_dist'));
// =========Public root web Middleware======== //


// =========Cross Scripting======== //
// //Cross Scripting allowed site.
// var corsOptions = {
// 	origin: 'http://localhost:8080'
// };

// //This allows the cross scripting to other site.
// app.use(cors(corsOptions));

// =========Cross Scripting======== //


// =========SQL database======== //
// var conn = massive.connectSync({
//   connectionString: config.connectionString
// });

//setting database connection.
// app.set('db', conn);
// const db = app.get('db');


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


//===API ENDPOINTS=========================
//Hospital Info
app.post('/api/hospitals', hospitals.getHospitals);

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




//===PORT====================================
app.listen(port, () => {
  console.log('Listening on port: ' + port);
});
