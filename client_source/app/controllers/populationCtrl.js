AA.controller("populationCtrl", function($scope, zipConversionService) {

  $scope.$on('eventFired', function (event, data) {
    console.log('In pop ctrl', data);
      $scope.popcy = data.popcy;
      $scope.assignData();
  });

  $scope.assignData = function() {
    console.log('In pop assign data');
    $scope.populationNum = $scope.popcy;
  }

//end of controller
});
