const keys = require('../config.js');
const axios = require('axios');

module.exports = {
  getPollution: (req, res) => {
    return (
      axios.get('https://api.waqi.info/search/?token=' + keys.pollutionKey + '&keyword=salt+lake+city')
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        console.log('Error from pollution API: ', error);
      })
    );
  }
}

// ** THIS IS FOR REF. - AN EXAMPLE OF: req.body.city **
// module.exports = {
//   getHospitals: (req, res) => {
//     console.log('From HospitalsCtrl in Node server: ', req.body);
//     return axios.get('https://maps.googleapis.com/maps/api/place/textsearch/xml?query=hospitals+in+'+req.body.city+'&key=' + keys.googlePlacesKey).then((response) => {
//         res.status(200).send(jsonParser.toJson(response.data));
//     });
//   }
// };