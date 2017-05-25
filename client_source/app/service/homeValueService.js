AA.service("homeValueService", function($http){

  var baseUrl = "http://swapi.co/api/people"

  this.getData = () => {
    return $http({
      method: "GET",
      url: baseUrl
    }).then( (response) => {
      console.log(response);
      return response.data.results;
    })
  }



//end of service
});
