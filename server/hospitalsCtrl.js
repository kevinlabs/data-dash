const keys = require('../config.js');
const axios = require('axios');
const jsonParser = require('xml2json');

module.exports = {
  getHospitals: (req, res) => {
    console.log('From HospitalsCtrl in Node server: ', req.body);
    return (
      axios.get('https://maps.googleapis.com/maps/api/place/textsearch/xml?query=hospitals+in+' + req.body.city + '&key=' + keys.googlePlacesKey)
      .then((response) => {
        res.status(200).send(jsonParser.toJson(response.data));
      })
      .catch((error) => {
        console.log('Error from Hospital API: ', error);
      })
    );
  }
};