// const keys = require('../config.js');
const axios = require('axios');

module.exports = {
  getPollution: (req, res) => {
    return axios.get('https://api.waqi.info/search/?token=' + keys.pollutionKey + '&keyword=salt+lake+city').then((response) => {
        res.status(200).send(response.data);
    });
  }
}
