const keys = require('../config.js');
const axios = require('axios');
const onBoard = require('./onBoardCtrl')
//const jsonParser = require('xml2json');

module.exports = {
  getZip: function(req, res) {
    console.log(req.body);
    return axios.get('https://www.zipcodeapi.com/rest/' + keys.zipKey + '/city-zips.json/' + req.body.city + '/' + req.body.state).then((response) => {
      console.log('Response = ' + response.data.zip_codes);
      onBoard.getOnBoard(response.data.zip_codes[0]);
      //res.status(200).send(response.data.zip_codes[0]);
    });
  }
}
