"use strict";

/* ============================================================================= */
/* ======================== Start: App JS ====================================== */
/* ============================================================================= */
var AA = angular.module("data-dash", ['ngMap']);

/* ============================================================================= */
/* ======================== End: App JS ======================================== */
/* ============================================================================= */
'use strict';

AA.controller('mainCtrl', ["NgMap", function (NgMap) {
    var vm = this;
    vm.types = "['establishment']";

    vm.placeChanged = function () {
        vm.place = this.getPlace();
        console.log('location', vm.place.geometry.location);
        vm.map.setCenter(vm.place.geometry.location);
    };

    NgMap.getMap().then(function (map) {
        vm.map = map;
    });
}]);
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
