"use strict";

/* ============================================================================= */
/* ======================== Start: App JS ====================================== */
/* ============================================================================= */
var AA = angular.module("data-dash", []);
/* ============================================================================= */
/* ======================== End: App JS ======================================== */
/* ============================================================================= */
'use strict';

/* ============================================================================= */
/* ======================== Start: Main Controller ============================= */
/* ============================================================================= */

AA.controller("mainCtrl", ["$scope", "$interval", "zipConversionService", function ($scope, $interval, zipConversionService) {
  $scope.clearData = function () {
    $scope.city = '';
    $scope.zipcode = '';
    $scope.state = '';
    console.log("it works!");
  };

  $scope.testing = "it works";

  $scope.baseball = {
    labels: ["Pre", "Kinder", "Elemen", "Middle", "High", "Degree", "Masters", "PHD"],
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
      label: 'High',
      data: [12, 29, 7, 17, 6, 8, 10],
      backgroundColor: "rgba(33, 125, 216, 0.4)"
    }, {
      label: 'Low',
      data: [2, 19, 3, 10, 2, 3, 7],
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
    labels: ["4 BR Apt", "3 BR Apt", "2 BR Apt", "1 BR Apt", "Studio Apt"],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: ['rgba(33, 125, 216, 0.8)', 'rgba(165, 171, 175, 0.8)', 'rgba(4, 82, 160, 0.8)', 'rgba(14, 58, 102, 0.8)', 'rgba(128, 172, 216, 0.8)', 'rgba(72, 72, 72, 0.8)', 'rgba(72, 72, 72, 0.8)'],
      data: [978, 1267, 734, 784, 433]
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

  // START: THIS NEEDS RIPPING OUT !! -- !! ------------------------------------

  // END: THIS NEEDS RIPPING OUT !! -- !! --------------------------------------

  //Google Scripts for Google Map. =====================================
  // var map;

  // function initMap() {
  //   map = new google.maps.Map(document.getElementById('map'), {
  //     center: {
  //       lat: -34.397,
  //       lng: 150.644
  //     },
  //     zoom: 8
  //   });
  // }

  // //Initializing the map.
  // initMap();

  //Google Scripts for Google Map. =====================================

  // Google Scripts for Auto Complete.=====================================
  //variables
  $scope.city;
  $scope.zipcode;
  $scope.tempPlace;

  // This example displays an address form, using the autocomplete feature
  // of the Google Places API to help users fill in the information.

  // This example requires the Places library. Include the libraries=places
  // parameter when you first load the API. For example:
  // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

  var placeSearch, autocomplete;
  var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
  };

  function initAutocomplete() {

    //Clearing out previous variable.
    $scope.city = '';
    $scope.zipcode = '';
    $scope.state = '';

    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */
    document.getElementById('autocomplete'), {
      types: ['geocode']
    });

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
  }

  function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

    console.log('showing google object: ', place);
    $scope.tempPlace = place;
    console.log('Testing the live change object: ', $scope.tempPlace.address_components[0].long_name);

    //Initiatin Input validation.
    inputValidation();
  }

  // Bias the autocomplete object to the user's geographical location,
  // as supplied by the browser's 'navigator.geolocation' object.
  function geolocate() {

    console.log('Functiong initiated');

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
        });
        autocomplete.setBounds(circle.getBounds());
      });
    }
  }

  var inputValidation = function inputValidation() {
    for (var index = 0; index < $scope.tempPlace.address_components.length; index++) {
      if ($scope.tempPlace.address_components[index].types[0] === 'locality') {
        $scope.city = $scope.tempPlace.address_components[index].long_name;
      }

      if ($scope.tempPlace.address_components[index].types[0] === 'postal_code') {
        $scope.zipcode = $scope.tempPlace.address_components[index].long_name;
      }

      if ($scope.tempPlace.address_components[index].types[0] === 'administrative_area_level_1') {
        $scope.state = $scope.tempPlace.address_components[index].short_name;
      }

      if ($scope.city === undefined && $scope.zipcode === undefined) {
        alert('City or Zipcode is needed. Please try again.');
      }
    }

    if ($scope.city && $scope.state) {
      zipConversionService.getData({ city: $scope.city, state: $scope.state }).then(function (response) {
        $scope.foundData = zipConversionService.findData();
      });
    }
  };

  //Initiating Pre Render
  geolocate();
  initAutocomplete();

  // // Google Scripts=====================================


  // $interval(() => {
  //   $scope.$applyAsync(() => {
  //     $scope.chart1Type = $scope.chart1Type === 'bar' ? 'line' : 'bar';
  //     $scope.chart2Type = $scope.chart1Type === 'bar' ? 'line' : 'bar';
  //     console.log($scope.chart1Type, $scope.chart2Type);
  //     $scope.chart3Type = $scope.chart3Type === 'pie' ? 'doughnut' : 'pie';
  //     $scope.chart4Type = $scope.chart3Type === 'pie' ? 'doughnut' : 'pie';
  //     $scope.chart5Type = $scope.chart5Type === 'polarArea' ? 'radar' : 'polarArea';
  //     $scope.chart6Type = $scope.chart6Type === 'polarArea' ? 'radar' : 'polarArea';
  //     // $scope.baseball.labels = ["Rojo", "Azul", "Yellow", "Green", "Purple", "Orange", "Test1", "Test2"];
  //   });
  // }, 8000);

}]);
/* ============================================================================= */
/* ======================== End: Main Controller =============================== */
/* ============================================================================= */
"use strict";

AA.controller("crimeCtrl", ["$scope", "zipConversionService", function ($scope, zipConversionService) {

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

  $scope.assignData = function () {

    $scope.crimeData = {
      labels: ["Assault", "Burglary", "Larceny", "Murder", "Auto Theft", "Personal Crime", "Property", "Rape", "robbery"],
      datasets: [{
        backgroundColor: ['rgba(33, 125, 216, 0.8)', 'rgba(165, 171, 175, 0.8)', 'rgba(4, 82, 160, 0.8)', 'rgba(14, 58, 102, 0.8)', 'rgba(128, 172, 216, 0.8)', 'rgba(72, 72, 72, 0.8)', 'rgba(72, 72, 72, 0.8)'],
        data: [$scope.assault, $scope.burglary, $scope.larceny, $scope.murder, $scope.motorVehicleTheft, $scope.personalCrime, $scope.property, $scope.rape, $scope.robbery]
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
}]);
'use strict';

AA.controller("homeValueCtrl", ["$scope", "zipConversionService", function ($scope, zipConversionService) {
  console.log('see me');

  $scope.$on('eventFired', function (event, data) {
    console.log(data);
    $scope.avgsaleprice = data.avgsaleprice;
    $scope.assignData();
  });

  $scope.assignData = function () {
    $scope.propertySalePrice = $scope.avgsaleprice;
  };

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

  $scope.airPollutionIndex;

  $scope.data;

  $scope.getInfo = function () {
    pollutionService.getData().then(function (response) {
      $scope.airPollutionIndex = response.aqi;
    });
  };

  $scope.getInfo();
}]);
'use strict';

AA.controller("rentCtrl", ["$timeout", "$scope", "rentService", "zipConversionService", function ($timeout, $scope, rentService, zipConversionService) {

  $scope.$on('eventFired', function (event, data) {
    console.log(data);
    $scope.onBoardDataStudio = data.studio_county;
    $scope.onBoardDataOne = data.one_bed_county;
    $scope.onBoardDataTwo = data.two_bed_county;
    $scope.onBoardDataThree = data.three_bed_county;
    $scope.onBoardDataFour = data.four_bed_county;
    $scope.assignData();
  });

  $scope.assignData = function () {
    $scope.medianRentData = {
      labels: ['Stu', '1BR', '2BR', '3BR', '4BR'],
      datasets: [{
        label: 'Rent P/M $',
        data: [$scope.onBoardDataStudio, $scope.onBoardDataOne, $scope.onBoardDataTwo, $scope.onBoardDataThree, $scope.onBoardDataFour],
        backgroundColor: ['rgba(33, 125, 216, 0.5)', 'rgba(165, 171, 175, 0.5)', 'rgba(4, 82, 160, 0.5)', 'rgba(14, 58, 102, 0.5)', 'rgba(128, 172, 216, 0.5)', 'rgba(72, 72, 72, 0.5)', 'rgba(72, 72, 72, 0.5)', 'rgba(72, 72, 72, 0.5)'],
        borderColor: ['rgba(33, 125, 216, 1)', 'rgba(165, 171, 175, 1)', 'rgba(4, 82, 160, 1)', 'rgba(14, 58, 102, 1)', 'rgba(128, 172, 216, 1)', 'rgba(72, 72, 72, 1)', 'rgba(72, 72, 72, 1)', 'rgba(72, 72, 72, 1)'],
        borderWidth: 1
      }]
    };
    //  console.log($scope.medianRentData);
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
          stepSize: 250
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
AA.directive('chartDirective', function () {
  return {
    restrict: 'E', templateUrl: "./../views/chartDirective.html",
    // controller: 'dirCtrl',
    scope: {
      chartData: '=',
      type: "=",
      options: "="
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
          //
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

      scope.$watch('chartData', function (newValue, oldValue, scope) {
        getChartGivenData(ctxDir, newValue, scope.type, scope.options);
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
      type: "=",
      options: '='
    },
    link: function link(scope, elem, attrs, ctrl) {
      // console.log('this is my element\'s second child:', elem[0].children[0].children[0]);

      var ctxDir = elem[0].children[0].children[0];
      var myChartDir = getChartGivenData(ctxDir, scope.chartData, scope.type, scope.options);

      function getChartGivenData(chartElement, dataForChart, type, options) {
        return new Chart(chartElement, {
          type: type,
          data: dataForChart,
          options: options
        });
      }

      scope.$watch('chartData', function (newValue, oldValue, scope) {
        getChartGivenData(ctxDir, newValue, scope.type, scope.options);
      });
    }
  };
});
"use strict";

AA.service("crimeService", ["$http", function ($http) {

  //end of service
}]);
"use strict";

AA.service("homeValueService", ["$http", function ($http) {

  // const baseUrl = "/api/onBoard";
  //
  // this.getData = () => {
  //   return $http({
  //     method: "POST",
  //     url: baseUrl
  //   }).then( (response) => {
  //     console.log('hvservice', response);
  //     return response.data.response.result.package.item;
  //   })
  // }

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

  var baseUrl = "/api/pollution";

  this.getData = function () {
    return $http({
      method: "GET",
      url: baseUrl
    }).then(function (response) {
      return response.data.data[0];
    });
  };
  //end of service
}]);

/* 
NOTES FOR A SWITCH:

0 - 49 GOOD
50 - 150 MODERATE
151 - 350 UNHEALTHY
351 - 420 VERY UNHEALTHY
421 up HAZARDOUS

*/
"use strict";

AA.service("rentService", ["$http", function ($http) {

  var baseUrl = "/api/onBoard";

  this.getData = function () {
    return $http({
      method: "POST",
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
"use strict";

AA.service("zipConversionService", ["$http", "$rootScope", function ($http, $rootScope) {
  var _this = this;

  var baseUrl = "/api/zipConversion";

  this.getData = function (obj) {
    return $http({
      method: "POST",
      url: baseUrl,
      data: obj
    }).then(function (response) {
      _this.data = response.data.response.result.package.item;
      return response.data.response.result.package.item;
    });
  };
  this.findData = function () {
    $rootScope.$broadcast('eventFired', _this.data);
  };
  //end of service
}]);
//# sourceMappingURL=bundle.js.map
