AA.service("weatherService", function($http){

  const baseUrl = "/api/weather";

  this.getWeather = (zipcode) => {
    // console.log('Showing city data before sending API call: ', zipcode);
    return $http({
      method: "POST",
      url: baseUrl,
      data: {zipcode}
    }).then( (response) => {
      // console.log('Here is reponse back weather serivce (Angular): ', response.data);
      return response.data;
    });
  };

//end of service
});
