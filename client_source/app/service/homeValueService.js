AA.service("homeValueService", function($http){

  const baseUrl = "/api/onBoard";

  this.getData = () => {
    return $http({
      method: "GET",
      url: baseUrl
    }).then( (response) => {
      console.log(response);
      return response.data.response.result.package.item;
    })
  }

//end of service
});
