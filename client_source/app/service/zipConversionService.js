AA.service("zipConversionService", function($http){

const baseUrl = "/api/zipConversion";


this.getData = (obj) => {
  console.log(obj);
  return $http({
    method: "POST",
    url: baseUrl,
    data: obj
  }).then( (response) => {
    console.log(response.data);
    return response.data;
  })
}

//end of service
});
