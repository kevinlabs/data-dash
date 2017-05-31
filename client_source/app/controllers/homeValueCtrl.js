AA.controller("homeValueCtrl", function($scope, homeValueService){

  $scope.avgsaleprice;

  $scope.data;

  $scope.getInfo = () => {
    homeValueService
      .getData()
      .then((response) => {
        console.log(response);
        $scope.avgsaleprice = response.avgsaleprice;
        $scope.assignData();
      })
  }

  $scope.getInfo();

  $scope.assignData = function() {
    $scope.propertySalePrice = $scope.avgsaleprice;
  }

//end of controller
});
