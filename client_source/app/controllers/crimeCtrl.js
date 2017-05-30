AA
  .controller("crimeCtrl", function ($scope, crimeService) {

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
          $scope.assault = response.crcmyasst;
          $scope.burglary = response.crcmyburg;
          $scope.larceny = response.crcmylarc;
          $scope.murder = response.crcmymurd;
          $scope.motorVehicleTheft = response.crcmymveh;
          $scope.personalCrime = response.crcmyperc;
          $scope.property = response.crcmyproc;
          $scope.rape = response.crcmyrape;
          $scope.robbery = response.crcmyrobb;
          $scope.assignData();

        })
    }

    $scope.getInfo();

    $scope.assignData = function() {
       $scope.crimeData = {
    labels: ["assault", "burglary", "larceny", "murder", "auto theft", "personal", "property", "rape", "robbery"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e"
      ],
      data: 
      [$scope.assault, $scope.burglary, $scope.larceny, $scope.murder, $scope.motorVehicleTheft, $scope.personalCrime, $scope.property, $scope.rape, $scope.robbery]
      // ["10", "90", "23", "42", "67", "49", "14", "39", "70"]
    }]
  };
         console.log($scope.crimeData);
    }

    $scope.doughnutOptions = {
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                display: true,
                labels: {
                  display: true
                }
              },
              title: {
                display: true,
                text: 'Crime Rates'
              }
              // scales: {   yAxes: [     {       ticks: {         beginAtZero: true       }
              // }   ] }
            }
    //end of controller
  });
