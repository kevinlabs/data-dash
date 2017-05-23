const express = require('express');
const bodyParser = require('body-parser');
// we want to remember our user state before and after requests

//CROSS SITE SCRIPTING
const cors = require('cors');

//For session.
const session = require('express-session');

//secrete session code file.
// const config = require('./config.js');

//Sql Database connection tool
// const massive = require('massive');

//===INITIALIZE EXPRESS APP===================
const app = module.exports = express();

const port = 8080;

// =========Public root web Middleware======== //
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public_dist'));
// =========Public root web Middleware======== //

// =========Cross Scripting======== //
//Cross Scripting allowed site.
var corsOptions = {
	origin: 'http://localhost:8080'
};

//This allows the cross scripting to other site.
app.use(cors(corsOptions));

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

//===REQUIRE CONTROLLERS( NEED TO BE BELOW APP.SET)========
// const userCtrl = require('./server/userCtrl.js');
// const memberCtrl = require('./server/memberCtrl.js');
// const groupCtrl = require('./server/groupCtrl.js');

//===========PASSPORT IMPORT ==================
// var passport = require('./server/passport.js');



//===POLICIES===========================
// const isAuthed = (req,res,next) => {
//   if (!req.isAuthenticated()) return res.status(401).send();
//   return next();
// };

// =========Session configuration ========= //
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
// =========Session configuration ========= //

// app.use(passport.initialize());
// app.use(passport.session());


//===PASSPORT ENDPOINTS===================
// app.post('/login', passport.authenticate('local', {
//   successRedirect: '/login2'
// }));
//
// app.get('/logout', (req,res, next) => {
//   req.logout();
//   return res.status(200).send('logged out');
// });
//===PASSPORT ENDPOINTS===================


//===USER ENDPOINTS=========================
// app.post('/register/account/create', userCtrl.register);
// app.get('/login2', isAuthed, userCtrl.login2);
// app.get('/api/sessionCheck', userCtrl.sessionCheck);

//===Member Endpoints=========================
// app.post('/register/member/create', memberCtrl.createMember);
// app.get('/member/browse', memberCtrl.browseMember);

//===Group Endpoints=========================
// app.post('/register/group/create', groupCtrl.createGroup);
// app.get('/group/browse', groupCtrl.browseGroup);
// app.post('/register/group/addmember', groupCtrl.addMember);



//===PORT====================================
app.listen(port, () => {
  console.log('Listening on port: ' + port);
});
