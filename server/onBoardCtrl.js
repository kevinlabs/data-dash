const keys = require('../config.js');
const axios = require('axios');
const jsonParser = require('xml2json');

let config = {
  method: 'get',
  headers: {
  'Accept': 'applicaton/json',
  'APIKey': keys.onBoardKey
  }
}

module.exports = {
  getOnBoard: (req, res) => {
    return axios('https://search.onboard-apis.com/communityapi/v2.0.0/Area/Full/?AreaId=STCA', config).then((response) => {
        res.status(200).send(jsonParser.toJson(response.data));
    });
  }
}
