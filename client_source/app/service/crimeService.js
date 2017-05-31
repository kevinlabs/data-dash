AA.service("crimeService", function($http){

const baseUrl = "/api/onBoard";


this.getData = (obj) => {
  return $http({
    method: "POST",
    url: baseUrl,
    data: obj
  }).then( (response) => {
    console.log(response.data.response.result.package.item);

    return response.data.response.result.package.item;
  })
}

//end of service
});
