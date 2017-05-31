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

    // $scope.getInfo = () => {
    //   crimeService
    //     .getData()
    //     .then((response) => {
    //       console.log(response);
    //       $scope.assault = response.crmcyasst;
    //       $scope.burglary = response.crmcyburg;
    //       $scope.larceny = response.crmcylarc;
    //       $scope.murder = response.crmcymurd;
    //       $scope.motorVehicleTheft = response.crmcymveh;
    //       $scope.personalCrime = response.crmcyperc;
    //       $scope.property = response.crmcyproc;
    //       $scope.rape = response.crmcyrape;
    //       $scope.robbery = response.crmcyrobb;
    //       $scope.assignData();
    //
    //     })
    // }
    //
    // $scope.getInfo();

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
         console.log($scope.assault, $scope.burglary, $scope.larceny, $scope.murder, $scope.motorVehicleTheft, $scope.personalCrime, $scope.property, $scope.rape, $scope.robbery);
    };

    $scope.doughnutOptions = {
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                display: false,
                labels: {
                  display: false
                }
              },
              title: {
                display: true,
                text: 'Crime Rates'
              }
              // scales: {   yAxes: [     {       ticks: {         beginAtZero: true       }
              // }   ] }
            };
    // end of controller
  });
