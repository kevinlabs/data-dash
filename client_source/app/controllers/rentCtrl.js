AA.controller("rentCtrl", function($scope, rentService){

$scope.onBoardDataStudio;
$scope.onBoardDataOne;
$scope.onBoardDataTwo;
$scope.onBoardDataThree;
$scope.onBoardDataFour;


$scope.getInfo = () => {
  rentService.getData().then( (response) => {
    console.log(response);
      $scope.onBoardDataStudio = response.STUDIOINDEX;
      $scope.onBoardDataOne = response.ONE_BEDINDEX;
      $scope.onBoardDataTwo = response.TWO_BEDINDEX;
      $scope.onBoardDataThree = response.THREE_BEDINDEX;
      $scope.onBoardDataFour = respone.FOUR_BEDINDEX;
  })
}

$scope.getInfo();

//end of controller
});
