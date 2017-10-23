const keys = require('../config.js');
const axios = require('axios');
const onBoard = require('./onBoardCtrl');

module.exports = {
  getZip: function (req, res) {
    console.log('Zip Conversion CTRL is running');
    return (
      axios.get('https://www.zipcodeapi.com/rest/' + keys.zipKey + '/city-zips.json/' + req.body.city + '/' + req.body.state)
      .then((response) => {
        let bigData = onBoard.getOnBoard(response.data.zip_codes[0]);
        bigData.then(response2 => {
          res.status(200).send(response2);
        });
      })
      .catch((error) => {
        console.log('Error from zipconversion API: ', error);
      })
    );
  }
};