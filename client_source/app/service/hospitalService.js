AA.service("hospitalService", function($http){

const baseUrl = "/api/hospitals";


this.getData = (city) => {
  return $http({
    method: "POST",
    url: baseUrl,
    data: city
  }).then( (response) => {
    console.log(response.data.PlaceSearchResponse.result.length);
    return response.data.PlaceSearchResponse.result.length;

  })
}


//end of service
});
