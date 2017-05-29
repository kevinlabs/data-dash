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

  $scope.testing = "it works";

  $scope.baseball = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Test1", "Test2"],
    datasets: [{
      label: '# of Votes',
      data: [1290, 2283, 3092, 1532, 2111, 1003, 1487, 2645],
      backgroundColor: ['rgba(33, 125, 216, 0.2)', 'rgba(165, 171, 175, 0.2)', 'rgba(4, 82, 160, 0.2)', 'rgba(14, 58, 102, 0.2)', 'rgba(128, 172, 216, 0.2)', 'rgba(72, 72, 72, 0.2)', 'rgba(72, 72, 72, 0.2)', 'rgba(72, 72, 72, 0.2)'],
      borderColor: ['rgba(33, 125, 216, 1)', 'rgba(165, 171, 175, 1)', 'rgba(4, 82, 160, 1)', 'rgba(14, 58, 102, 1)', 'rgba(128, 172, 216, 1)', 'rgba(72, 72, 72, 1)', 'rgba(72, 72, 72, 1)', 'rgba(72, 72, 72, 1)'],
      borderWidth: 1
    }]
  };

  $scope.lineData = {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'apples',
      data: [12, 19, 3, 17, 6, 3, 7],
      backgroundColor: "rgba(33, 125, 216, 0.4)"
    }, {
      label: 'oranges',
      data: [2, 29, 5, 5, 2, 3, 10],
      backgroundColor: "rgba(14, 58, 102, 0.4)"
    }]
  };

  $scope.apple = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [{
      backgroundColor: ["#217DD8", "#A5ABAF", "#0452A0", "#0E3A66", "#80ACD8", "#484848", "#34495e"],
      data: [12, 19, 3, 17, 28, 24, 7]
    }]
  };

  $scope.orange = {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: ['rgba(33, 125, 216, 0.8)', 'rgba(165, 171, 175, 0.8)', 'rgba(4, 82, 160, 0.8)', 'rgba(14, 58, 102, 0.8)', 'rgba(128, 172, 216, 0.8)', 'rgba(72, 72, 72, 0.8)', 'rgba(72, 72, 72, 0.8)'],
      data: [2478, 5267, 734, 784, 433, 923, 74]
    }]
  };

  $scope.polar = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [{
      backgroundColor: ['rgba(33, 125, 216, 0.8)', 'rgba(165, 171, 175, 0.8)', 'rgba(4, 82, 160, 0.8)', 'rgba(14, 58, 102, 0.8)', 'rgba(128, 172, 216, 0.8)', 'rgba(72, 72, 72, 0.8)', 'rgba(72, 72, 72, 0.8)'],
      data: [12, 19, 3, 17, 28, 24, 7]
    }]
  };

  $scope.chart1Type = 'line';
  $scope.chart2Type = 'bar';
  $scope.chart3Type = 'pie';
  $scope.chart4Type = 'doughnut';
  $scope.chart5Type = 'polarArea';
  $scope.chart6Type = 'radar';

  $interval(function () {
    $scope.$applyAsync(function () {
      $scope.chart1Type = $scope.chart1Type === 'bar' ? 'line' : 'bar';
      $scope.chart2Type = $scope.chart1Type === 'bar' ? 'line' : 'bar';
      console.log($scope.chart1Type, $scope.chart2Type);
      $scope.chart3Type = $scope.chart3Type === 'pie' ? 'doughnut' : 'pie';
      $scope.chart4Type = $scope.chart3Type === 'pie' ? 'doughnut' : 'pie';
      $scope.chart5Type = $scope.chart5Type === 'polarArea' ? 'radar' : 'polarArea';
      $scope.chart6Type = $scope.chart6Type === 'polarArea' ? 'radar' : 'polarArea';
      // $scope.baseball.labels = ["Rojo", "Azul", "Yellow", "Green", "Purple", "Orange", "Test1", "Test2"];
    });
  }, 8000);
}]);
/* ============================================================================= */
/* ======================== End: Main Controller =============================== */
/* ============================================================================= */
"use strict";

AA.controller("crimeCtrl", ["$scope", "crimeService", function ($scope, crimeService) {

  $scope.data;

  $scope.getInfo = function () {
    crimeService.getData().then(function (response) {
      console.log(response);
      $scope.data = response;
    });
  };

  $scope.getInfo();

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
"use strict";

AA.controller("rentCtrl", ["$scope", "rentService", function ($scope, rentService) {

  $scope.data;

  $scope.getInfo = function () {
    rentService.getData().then(function (response) {
      console.log(response);
      $scope.data = response;
    });
  };

  $scope.getInfo();

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
    restrict: 'E',
    templateUrl: "./../views/doughnut.html",
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
            legend: {
              display: false,
              lables: {
                display: false
              }
            },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
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
            legend: {
              display: false,
              lables: {
                display: false
              }
            },
            title: {
              display: true,
              text: 'Predicted world population (millions) in 2050'
            }
            // scales: {
            //   yAxes: [
            //     {
            //       ticks: {
            //         beginAtZero: true
            //       }
            //     }
            //   ]
            // }
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

  var baseUrl = "http://swapi.co/api/species";

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

  var baseUrl = "http://swapi.co/api/planets";

  this.getData = function () {
    return $http({
      method: "GET",
      url: baseUrl
    }).then(function (response) {
      console.log(response.data.results);
      return response.data.results;
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
