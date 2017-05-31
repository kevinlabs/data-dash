const keys = require('../config.js');
const axios = require('axios');

module.exports = {
  getWeather: function(req, res) {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast?q=salt+lake+city&appid=' + keys.weatherKey).then((response) => {
      res.status(200).send(response.data);
    });
  }
}
