AA.service("zipConversionService", function($http){

const baseUrl = "/api/zipConversion";


this.getData = (obj) => {
  return $http({
    method: "POST",
    url: baseUrl,
    data: obj
  }).then( (response) => {
    this.data = response.data.response.result.package.item;
    return response.data.response.result.package.item;
  })
}
this.findData = () => {
  return this.data;
}
//end of service
});
