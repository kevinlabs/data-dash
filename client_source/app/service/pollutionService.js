AA.service("pollutionService", function($http){

const baseUrl = "/api/pollution";

this.getData = () => {
  return $http({
    method: "GET",
    url: baseUrl
  }).then( (response) => {
    return response.data.data[0];

  })
}
//end of service
});

/*
NOTES FOR A SWITCH:

0 - 49 GOOD
50 - 150 MODERATE
151 - 350 UNHEALTHY
351 - 420 VERY UNHEALTHY
421 up HAZARDOUS

*/
