AA.service("homeValueService", function($http){

  const baseUrl = "http://swapi.co/api/people"
  //hitting Starwars Api for testing. Can delete when back end point is ready.

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
