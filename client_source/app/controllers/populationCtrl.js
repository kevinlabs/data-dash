AA.controller("populationCtrl", function($scope, zipConversionService) {

  $scope.$on('eventFired', function (event, data) {
    console.log(data);
      $scope.population = data.popcy;
      $scope.assignData();
  });

  $scope.assignData = function() {
    $scope.population = $scope.popocy;
  }

//end of controller
});
