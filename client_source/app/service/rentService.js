AA.service("rentService", function($http){

const baseUrl = "http://swapi.co/api/planets";


this.getData = () => {
  return $http({
    method: "GET",
    url: baseUrl
  }).then( (response) => {
    console.log(response.data.results);
    return response.data.results
  })
}




// end of service
})
