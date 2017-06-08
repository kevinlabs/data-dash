AA.service("zipConversionService", function($http, $rootScope){

  const baseUrl = "/api/zipConversion";

  var city;
  this.city = city;

  this.getData = (obj) => {
    this.data = {};
    return $http({
      method: "POST",
      url: baseUrl,
      data: obj
    }).then( (response) => {
      this.data = response.data.response.result.package.item;
      return response.data.response.result.package.item;
    });
  };
  this.findData = () => {
    console.log('s1: ', this.data);
    $rootScope.$broadcast('eventFired', this.data);
    console.log('s2: ', this.data);
  };
//end of service
});
