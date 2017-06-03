AA.controller("homeValueCtrl", function($scope, zipConversionService) {

  $scope.$on('eventFired', function (event, data) {
    // console.log(data);
      $scope.avgsaleprice = data.avgsaleprice;
      $scope.assignData();
  });

  $scope.assignData = function() {
    $scope.propertySalePrice = $scope.avgsaleprice;
  }

//end of controller
});
