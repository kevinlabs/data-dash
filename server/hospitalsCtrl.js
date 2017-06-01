const keys = require('../config.js');
const axios = require('axios');
const jsonParser = require('xml2json');


module.exports = {
  getHospitals: (req, res) => {
    console.log('is it showing correctly? ', req.body);

    return axios.get('https://maps.googleapis.com/maps/api/place/textsearch/xml?query=hospitals+in+'+req.body.city+'&key=' + keys.googlePlacesKey).then((response) => {
        res.status(200).send(jsonParser.toJson(response.data));
    });
  }
}
