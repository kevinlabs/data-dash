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
AA.controller("ctrl", ["$scope", "homeValueService", function ($scope, homeValueService) {

    $scope.test = "bOYAh\! the app is working";

    $scope.getInfo = function () {};
}]);
/* ============================================================================= */
/* ======================== End: Main Controller =============================== */
/* ============================================================================= */
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

AA.service("homeValueService", ["$http", function ($http) {

  var baseUrl = "http://swapi.co/api/people";

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
//# sourceMappingURL=bundle.js.map
