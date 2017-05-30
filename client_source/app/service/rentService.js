AA.service("rentService", function($http){

const baseUrl = "/api/onBoard";


this.getData = () => {
  return $http({
    method: "GET",
    url: baseUrl
  }).then( (response) => {
    console.log(response.data.response.result.package.item);
    return response.data.response.result.package.item

  })
}




// end of service
})
