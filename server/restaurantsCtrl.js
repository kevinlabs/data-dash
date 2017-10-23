const keys = require('../config.js');
const axios = require('axios');
const jsonParser = require('xml2json');

module.exports = {
  getRestaurants: function (req, res) {
    return (
      axios.get('https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+84121&key=' + keys.googlePlacesKey)
      .then((response) => {
        res.status(200).send(jsonParser.toJson(response.data));
      })
      .catch((error) => {
        console.log('Error from Restaurant API: ', error);
      })
    );
  }
}