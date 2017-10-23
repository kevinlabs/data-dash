const keys = require('../config.js');
const axios = require('axios');

var baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';
var apiKey = 'c54910d1ae4d8e9e7e5bbda457d4ba22';

module.exports = {
  getWeather: function (req, res) {
    console.log('From weatherCtrl in Node server: ', req.body.zipcode);

    return (
      axios.get(baseUrl + req.body.zipcode + ',us' + '&appid=' + keys.weatherKey)
      .then((response) => {
        console.log('Response from Weather API at Node Console: ', response.data);
        res.status(200).send(response.data);
      })
      .catch((error) => {
        console.log('Error from weather API: ', error);
      })
    );
  }
};



//Jake Sample
//return $http.get(baseUrl2 + city + "&appid=" + apiKey).then(function (response) {


//Format address for Zip.
//api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=<api-key>