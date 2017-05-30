AA.service("rentService", function($http){

const baseUrl = "/api/onBoard";


this.getData = () => {
  return $http({
    method: "GET",
    url: baseUrl
  }).then( (response) => {
    console.log(response);
    return response;
  })
}




// end of service
})
