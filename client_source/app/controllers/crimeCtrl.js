AA.controller("crimeCtrl", function ($scope, crimeService) {

    $scope.assault;
    $scope.burglary;
    $scope.larceny;
    $scope.murder;
    $scope.motorVehicleTheft;
    $scope.personalCrime;
    $scope.property;
    $scope.rape;
    $scope.robbery;

    $scope.getInfo = () => {
      crimeService
        .getData()
        .then((response) => {
          console.log(response);
          $scope.assault = response.crmcyasst;
          $scope.burglary = response.crmcyburg;
          $scope.larceny = response.crmcylarc;
          $scope.murder = response.crmcymurd;
          $scope.motorVehicleTheft = response.crmcymveh;
          $scope.personalCrime = response.crmcyperc;
          $scope.property = response.crmcyproc;
          $scope.rape = response.crmcyrape;
          $scope.robbery = response.crmcyrobb;
          $scope.assignData();
        })
    }

    $scope.getInfo();
    $scope.assignData = function() {

      $scope.crimeData = {
        labels: ["Assault", "Burglary", "Larceny", "Murder", "Auto Theft", "Personal Crime", "Property", "Rape", "robbery"],
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
