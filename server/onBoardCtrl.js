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
    console.log(req);
    return axios('https://search.onboard-apis.com/communityapi/v2.0.0/Area/Full/?AreaId=ZI' + req, config).then((response) => {
        console.log('Showing arguments: ', arguments);
        return(jsonParser.toJson(response.data));
    });
  }
}
