"use strict";

/* ============================================================================= */
/* ======================== Start: App JS ====================================== */
/* ============================================================================= */
var AA = angular.module("data-dash", []);
/* ============================================================================= */
/* ======================== End: App JS ======================================== */
/* ============================================================================= */
"use strict";

/* ============================================================================= */
/* ======================== Start: Main Controller ============================= */
/* ============================================================================= */
AA.controller("mainCtrl", ["$scope", "$interval", function ($scope, $interval) {

  $scope.baseball = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Test1", "Test2"],
    datasets: [{
      label: '# of Votes',
      data: [1290, 2283, 3092, 1532, 2111, 1003, 1487, 2645],
      backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 159, 64, 0.2)'],
      borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 159, 64, 1)'],
      borderWidth: 1
    }]
  };

  $scope.lineData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'apples',
      data: [12, 19, 3, 17, 6, 3, 7],
      backgroundColor: "rgba(153,255,51,0.4)"
    }, {
      label: 'oranges',
      data: [2, 29, 5, 5, 2, 3, 10],
      backgroundColor: "rgba(255,153,0,0.4)"
    }]
  };

  $scope.apple = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [{
      backgroundColor: ["#2ecc71", "#3498db", "#95a5a6", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e"],
      data: [12, 19, 3, 17, 28, 24, 7]
    }]
  };

  $scope.orange = {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
      data: [2478, 5267, 734, 784, 433]
    }]
  };

  $scope.polar = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [{
      backgroundColor: ["#2ecc71", "#3498db", "#95a5a6", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e"],
      data: [12, 19, 3, 17, 28, 24, 7]
    }]
  };

  //  $scope.stackedBarData = {
  //     labels: [
  //       'S', '1BR', '2BR', '3BR', '4BR'
  //     ],
  //     datasets: [
  //       {
  //         label: 'apartments',
  //         data: [
  //           // $scope.onBoardDataStudio, $scope.onBoardDataOne, $scope.onBoardDataTwo, $scope.onBoardDataThree, $scope.onBoardDataFour
  //          5, 10, -3, 7, -6
  //         ],
  //         backgroundColor: "rgba(153,255,51,0.4)"
  //       }
  //     ]
  //   };

  //   $scope.optionsObj = {
  //     legend: {
  //       display: false,
  //       labels: {
  //         display: false
  //       }
  //     },
  //     scales: {
  //       yAxes: [
  //         {
  //           ticks: {
  //             // beginAtZero: true,
  //             stepSize: 50
  //           },
  //           stacked: false
  //         }
  //       ],
  //       xAxes: [{
  //         stacked: false
  //       }]
  //     }
  //   };

  $scope.chart1Type = 'line';
  $scope.chart2Type = 'bar';
  $scope.chart3Type = 'pie';
  $scope.chart4Type = 'doughnut';
  $scope.chart5Type = 'polarArea';
  $scope.chart6Type = 'radar';

  $interval(function () {
    $scope.$applyAsync(function () {
      //  $scope.chart1Type = $scope.chart1Type;
      // $scope.chart2Type = $scope.chart2Type;
      $scope.chart1Type = $scope.chart1Type === 'bar' ? 'line' : 'bar';
      $scope.chart2Type = $scope.chart1Type === 'bar' ? 'line' : 'bar';
      console.log($scope.chart1Type, $scope.chart2Type);
      $scope.chart3Type = $scope.chart3Type === 'pie' ? 'doughnut' : 'pie';
      $scope.chart4Type = $scope.chart3Type === 'pie' ? 'doughnut' : 'pie';
      $scope.chart5Type = $scope.chart5Type === 'polarArea' ? 'radar' : 'polarArea';
      $scope.chart6Type = $scope.chart5Type === 'polarArea' ? 'radar' : 'polarArea';
      // $scope.baseball.labels = ["Rojo", "Azul", "Yellow", "Green", "Purple", "Orange", "Test1", "Test2"];
    });
  }, 10000);
}]);
/* ============================================================================= */
/* ======================== End: Main Controller =============================== */
/* ============================================================================= */
"use strict";

AA.controller("crimeCtrl", ["$scope", "crimeService", function ($scope, crimeService) {

  $scope.assault;
  $scope.burglary;
  $scope.larceny;
  $scope.murder;
  $scope.motorVehicleTheft;
  $scope.personalCrime;
  $scope.property;
  $scope.rape;
  $scope.robbery;

  $scope.getInfo = function () {
    crimeService.getData().then(function (response) {
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
    });
  };

  $scope.getInfo();

  $scope.assignData = function () {
    $scope.crimeData = {
      labels: ["assault", "burglary", "larceny", "murder", "auto theft", "personal", "property", "rape", "robbery"],
      datasets: [{
        backgroundColor: ["#2ecc71", "#3498db", "#95a5a6", "#9b59b6", "#f1c40f", "#e74c3c", "#34495e"],
        data: [$scope.assault, $scope.burglary, $scope.larceny, $scope.murder, $scope.motorVehicleTheft, $scope.personalCrime, $scope.property, $scope.rape, $scope.robbery]
        // ["10", "90", "23", "42", "67", "49", "14", "39", "70"]
      }]
    };
    console.log($scope.crimeData);
  };

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
  };
  //end of controller
}]);
"use strict";

AA.controller("homeValueCtrl", ["$scope", "homeValueService", function ($scope, homeValueService) {

  $scope.data;

  $scope.getInfo = function () {
    homeValueService.getData().then(function (response) {
      console.log(response);
      $scope.data = response;
    });
  };

  $scope.getInfo();

  //end of controller
}]);
"use strict";

AA.controller("hospitalCtrl", ["$scope", "hospitalService", function ($scope, hospitalService) {

  $scope.data;

  $scope.getInfo = function () {
    hospitalService.getData().then(function (response) {
      console.log(response);
      $scope.data = response;
    });
  };

  $scope.getInfo();
}]);
"use strict";

AA.controller("pollutionCtrl", ["$scope", "pollutionService", function ($scope, pollutionService) {

  $scope.data;

  $scope.getInfo = function () {
    pollutionService.getData().then(function (response) {
      console.log(response);
      $scope.data = response;
    });
  };

  $scope.getInfo();

  //end of controller
}]);
'use strict';

AA.controller("rentCtrl", ["$scope", "rentService", function ($scope, rentService) {

  $scope.onBoardDataStudio;
  $scope.onBoardDataOne;
  $scope.onBoardDataTwo;
  $scope.onBoardDataThree;
  $scope.onBoardDataFour;

  $scope.getInfo = function () {
    rentService.getData().then(function (response) {
      console.log(response);
      $scope.onBoardDataStudio = response.studio_county;
      $scope.onBoardDataOne = response.one_bed_county;
      $scope.onBoardDataTwo = response.two_bed_county;
      $scope.onBoardDataThree = response.three_bed_county;
      $scope.onBoardDataFour = response.four_bed_county;
      $scope.assignData();
    });
  };

  $scope.getInfo();

  $scope.assignData = function () {
    $scope.stackedBarData = {
      labels: ['S', '1BR', '2BR', '3BR', '4BR'],
      datasets: [{
        label: 'apartments',
        data: [$scope.onBoardDataStudio, $scope.onBoardDataOne, $scope.onBoardDataTwo, $scope.onBoardDataThree, $scope.onBoardDataFour
        // 5, 10, -3, 7, -6
        ],
        backgroundColor: "rgba(153,255,51,0.4)"
      }]
    };
    console.log($scope.stackedBarData);
  };

  $scope.optionsObj = {
    legend: {
      display: false,
      labels: {
        display: false
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          // beginAtZero: true,
          stepSize: 50
        },
        stacked: false
      }],
      xAxes: [{
        stacked: false
      }]
    }
  };

  //end of controller
}]);
"use strict";

AA.controller("restaurantCtrl", ["$scope", "restaurantService", function ($scope, restaurantService) {

  $scope.data;

  $scope.getInfo = function () {
    restaurantService.getData().then(function (response) {
      console.log(response);
      $scope.data = response;
    });
  };

  $scope.getInfo();
}]);
'use strict';

// Start: This is the doughnut chart directive =================================
AA.directive('doughnutDirective', function () {
  return {
    restrict: 'E', templateUrl: "./../views/doughnut.html",
    // controller: 'dirCtrl',
    scope: {
      chartData: '=',
      type: "="
    },
    link: function link(scope, elem, attrs, ctrl) {
      console.log('this is my element\'s second child:', elem[0].children[0].children[0]);

      var ctxDir = elem[0].children[0].children[0];

      var myChartDir = getChartGivenData(ctxDir, scope.chartData, scope.type, scope.options);

      function getChartGivenData(chartElement, dataForChart, type, options) {
        return new Chart(chartElement, {
          type: type,
          data: dataForChart,
          options: options
          // {
          //   legend: {
          //     display: false,
          //     labels: {
          //       display: false
          //     }
          //   },
          //   scales: {
          //     yAxes: [
          //       {
          //         ticks: {
          //           beginAtZero: true
          //         }
          //       }
          //     ]
          //   }
          // }
        });
      }

      scope.$watch('type', function (newValue, oldValue, scope) {
        getChartGivenData(ctxDir, scope.chartData, newValue);
      });
    }
  };
});

// End: This is the doughnut chart directive ===================================
'use strict';

// Start: This is the header directive =========================================
AA.directive('footerDirective', function () {

  return {
    restrict: 'E',
    templateUrl: './views/footer.html'
  };
});
// End: This is the header directive ===========================================
'use strict';

// Start: This is the header directive =========================================
AA.directive('headerDirective', function () {

  return {
    restrict: 'E',
    templateUrl: './views/header.html'
  };
});
// End: This is the header directive ===========================================
'use strict';

// Start: This is the header directive =========================================
AA.directive('mapDirective', function () {

  return {
    restrict: 'E',
    templateUrl: './views/map.html'
  };
});
// End: This is the header directive ===========================================
'use strict';

AA.directive('pieDirective', function () {
  return {
    restrict: 'E', templateUrl: "./../views/pie.html",
    // controller: 'dirCtrl',
    scope: {
      chartData: '=',
      type: "="
    },
    link: function link(scope, elem, attrs, ctrl) {
      console.log('this is my element\'s second child:', elem[0].children[0].children[0]);

      var ctxDir = elem[0].children[0].children[0];

      var myChartDir = getChartGivenData(ctxDir, scope.chartData, scope.type);

      function getChartGivenData(chartElement, dataForChart, type) {
        return new Chart(chartElement, {
          type: type,
          data: dataForChart,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false,
              labels: {
                display: false
              }
            },
            title: {
              display: false,
              text: 'Predicted world population (millions) in 2050'
            }
            // scales: {   yAxes: [     {       ticks: {         beginAtZero: true       }
            // }   ] }
          }
        });
      }

      scope.$watch('type', function (newValue, oldValue, scope) {
        getChartGivenData(ctxDir, scope.chartData, newValue);
      });
    }
  };
});
"use strict";

AA.service("crimeService", ["$http", function ($http) {

  var baseUrl = "/api/onBoard";

  this.getData = function () {
    return $http({
      method: "GET",
      url: baseUrl
    }).then(function (response) {
      console.log(response.data.response.result.package.item);
      return response.data.response.result.package.item;
    });
  };

  //end of service
}]);
"use strict";

AA.service("homeValueService", ["$http", function ($http) {

  var baseUrl = "http://swapi.co/api/people";
  //hitting Starwars Api for testing. Can delete when back end point is ready.

  this.getData = function () {
    return $http({
      method: "GET",
      url: baseUrl
    }).then(function (response) {
      console.log(response);
      return response.data.results;
    });
  };

  //end of service
}]);
"use strict";

AA.service("hospitalService", ["$http", function ($http) {

  var baseUrl = "http://swapi.co/api/vehicles";

  this.getData = function () {
    return $http({
      method: "GET",
      url: baseUrl
    }).then(function (response) {
      console.log(response.data.results);
      return response.data.results;
    });
  };

  //end of service
}]);
"use strict";

AA.service("pollutionService", ["$http", function ($http) {

  var baseUrl = "http://swapi.co/api/films";

  this.getData = function () {
    return $http({
      method: "GET",
      url: baseUrl
    }).then(function (response) {
      console.log(response.data.results);
      return response.data.results;
    });
  };

  //end of service
}]);
"use strict";

AA.service("rentService", ["$http", function ($http) {

  var baseUrl = "/api/onBoard";

  this.getData = function () {
    return $http({
      method: "GET",
      url: baseUrl
    }).then(function (response) {
      console.log(response.data.response.result.package.item);
      return response.data.response.result.package.item;
    });
  };

  // end of service
}]);
"use strict";

AA.service("restaurantService", ["$http", function ($http) {

  var baseUrl = "http://swapi.co/api/starships";

  this.getData = function () {
    return $http({
      method: "GET",
      url: baseUrl
    }).then(function (response) {
      console.log(response.data.results);
      return response.data.results;
    });
  };

  //end of service
}]);
//# sourceMappingURL=bundle.js.map
