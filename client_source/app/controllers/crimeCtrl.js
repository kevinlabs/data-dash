AA.controller("crimeCtrl", function ($scope, zipConversionService) {

  $scope.$on('eventFired', function (event, data) {
    console.log(data);
    $scope.assault = data.crmcyasst;
    $scope.burglary = data.crmcyburg;
    $scope.larceny = data.crmcylarc;
    $scope.murder = data.crmcymurd;
    $scope.motorVehicleTheft = data.crmcymveh;
    $scope.personalCrime = data.crmcyperc;
    $scope.property = data.crmcyproc;
    $scope.rape = data.crmcyrape;
    $scope.robbery = data.crmcyrobb;
    $scope.assignData();
  });

    $scope.assignData = function() {

      $scope.crimeData = {
        labels: ["Assault", "Burglary", "Larceny", "Murder", "Auto Theft", "Personal Crime", "Property", "Rape", "Robbery"],
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
          [$scope.assault, $scope.burglary, $scope.larceny, $scope.murder, $scope.motorVehicleTheft, $scope.personalCrime, $scope.property, $scope.rape, $scope.robbery],
        }]
      };
    };

    $scope.crimeOptions = {
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
