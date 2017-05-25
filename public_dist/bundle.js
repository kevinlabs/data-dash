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
AA.controller("mainCtrl", ["$scope", function ($scope) {

    //$scope.test = "bOYAh\! the app is working";

}]);
/* ============================================================================= */
/* ======================== End: Main Controller =============================== */
/* ============================================================================= */
'use strict';

// Start: This is the doughnut chart directive =================================
AA.directive('doughnutDirective', function () {

  return {
    restrict: 'E',
    templateUrl: './views/doughnut.html',
    controller: 'mainCtrl'
  };
});
// End: This is the doughnut chart directive ===================================
'use strict';

// Start: This is the header directive =========================================
AA.directive('footerDirective', function () {

  return {
    restrict: 'E',
    templateUrl: './views/footer.html',
    controller: 'mainCtrl'
  };
});
// End: This is the header directive ===========================================
'use strict';

// Start: This is the header directive =========================================
AA.directive('headerDirective', function () {

  return {
    restrict: 'E',
    templateUrl: './views/header.html',
    controller: 'mainCtrl'
  };
});
// End: This is the header directive ===========================================
'use strict';

// Start: This is the header directive =========================================
AA.directive('mapDirective', function () {

  return {
    restrict: 'E',
    templateUrl: './views/map.html',
    controller: 'mainCtrl'
  };
});
// End: This is the header directive ===========================================
//# sourceMappingURL=bundle.js.map
