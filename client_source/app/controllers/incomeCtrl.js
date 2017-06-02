AA.controller("incomeCtrl", function ($scope, zipConversionService) {

  $scope.$on('eventFired', function (event, data) {
    console.log(data);
    $scope.income15_20 = data.hincy15_20;
    $scope.income20_25 = data.hincy20_25;
    $scope.income30_35 = data.hincy30_35;
    $scope.income40_45 = data.hincy40_45;
    $scope.income50_60 = data.hincy50_60;
    $scope.income60_75 = data.hincy60_75;
    $scope.income75_100 = data.hincy75_100;
    $scope.assignData();
  });

    $scope.assignData = function() {

      $scope.incomeData = {
        labels: ["$15-20K", "$20-25K", "$30-35K", "$40-45K", "$50-60K ", "$60-75K", "$75-100k"],
        datasets: [{
          backgroundColor: [
            'rgba(33, 125, 216, 0.8)',
            'rgba(165, 171, 175, 0.8)',
            'rgba(4, 82, 160, 0.8)',
            'rgba(14, 58, 102, 0.8)',
            'rgba(128, 172, 216, 0.8)',
            'rgba(72, 72, 72, 0.8)',
            'rgba(72, 72, 72, 0.8)'
          ],
          data:
          [$scope.income15_20, $scope.income20_25, $scope.income30_35, $scope.income40_45, $scope.income50_60, $scope.income60_75, $scope.income75_100],
        }]
      };
    };

    $scope.incomeOptions = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false,
        labels: {
          display: false
        }
      }
    };
    // end of controller
  });
