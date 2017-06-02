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
  $scope.tempPlace;

  //Use this if we only need zipcode from google
  //$scope.zipcode;

  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 40.2338438,
        lng: -111.65853370000002
      },
      zoom: 10
    });
    var input = document.getElementById('autocomplete');
    //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    //This is restriction for the country code.
    var options = {
      componentRestrictions: {
        country: 'us'
      }
    };

    var autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
      map: map,
      anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', function () {
      infowindow.close();
      marker.setVisible(false);
      var place = autocomplete.getPlace();

      // // if (!place.geometry) {
      // //   window.alert("Autocomplete's returned place contains no geometry");
      // //   return;
      // // }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(25);
      }
      marker.setIcon({
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(35, 35)
      });
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      $scope.tempPlace = place;
      inputValidation();
    });
  }

  var inputValidation = function inputValidation() {
    for (var index = 0; index < $scope.tempPlace.address_components.length; index++) {
      if ($scope.tempPlace.address_components[index].types[0] === 'locality') {
        $scope.city = $scope.tempPlace.address_components[index].long_name;
      }

      //Only need this if we need zipcode from the Google.
      // if ($scope.tempPlace.address_components[index].types[0] === 'postal_code') {
      //   $scope.zipcode = $scope.tempPlace.address_components[index].long_name;
      // }

      if ($scope.tempPlace.address_components[index].types[0] === 'administrative_area_level_1') {
        $scope.state = $scope.tempPlace.address_components[index].short_name;
      }
    }

    if ($scope.city && $scope.state) {
      zipConversionService.city = $scope.city;

      zipConversionService.getData({
        city: $scope.city,
        state: $scope.state
      }).then(function (response) {
        $scope.foundData = zipConversionService.findData();
      });
    }
  };

  //Initiating Pre Render
  initMap();

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
      labels: ["Assault", "Burglary", "Larceny", "Murder", "Auto Theft", "Personal Crime", "Property", "Rape", "Robbery"],
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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

AA.controller("hospitalCtrl", ["$scope", "hospitalService", "zipConversionService", function ($scope, hospitalService, zipConversionService) {

  $scope.city;

  $scope.$on('eventFired', function (event, data) {
    $scope.city = zipConversionService.city;

    console.log("this is hospital controller", $scope.city);

    var city = $scope.city;

    var splitCity = city.split(" ").join("+");
    console.log("hey this is splitCity", splitCity);
    console.log('Show me data type for splitcity: ', typeof splitCity === "undefined" ? "undefined" : _typeof(splitCity));

    $scope.getInfo(splitCity);
  });

  $scope.getInfo = function (city) {
    hospitalService.getData(city).then(function (response) {
      console.log('Here is the response from Health Service: ', response);
      $scope.data = response;
    });
  };
}]);
"use strict";

AA.controller("incomeCtrl", ["$scope", "zipConversionService", function ($scope, zipConversionService) {

  console.log("income controller");

  $scope.$on('eventFired', function (event, data) {
    console.log(data);
    $scope.income15_20 = data.hincy15_20;
    $scope.income20_25 = data.hincy20_25;
    $scope.income30_35 = data.hincy30_35;
    $scope.income40_45 = data.hincy40_45;
    $scope.income50_60 = data.hincy50_60;
    $scope.income60_75 = data.hincy60_75;
    $scope.income75_100 = data.hincy75_100;
    $scope.assignData();
  });

  $scope.assignData = function () {

    $scope.incomeData = {
      labels: ["$15-20K", "$20-25K", "$30-35K", "$40-45K", "$50-60K ", "$60-75K", "$75-100k"],
      datasets: [{
        backgroundColor: ['rgba(33, 125, 216, 0.8)', 'rgba(165, 171, 175, 0.8)', 'rgba(4, 82, 160, 0.8)', 'rgba(14, 58, 102, 0.8)', 'rgba(128, 172, 216, 0.8)', 'rgba(72, 72, 72, 0.8)', 'rgba(72, 72, 72, 0.8)'],
        data: [$scope.income15_20, $scope.income20_25, $scope.income30_35, $scope.income40_45, $scope.income50_60, $scope.income60_75, $scope.income75_100]
      }]
    };
  };

  $scope.incomeOptions = {
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
"use strict";

AA.controller("languagesCtrl", ["$timeout", "$scope", "zipConversionService", function ($timeout, $scope, zipConversionService) {

  console.log("languages working");
  $scope.$on('eventFired', function (event, data) {
    console.log(data);
    $scope.asian = data.langasian;
    $scope.english = data.langeng;
    $scope.european = data.langeuro;
    $scope.other = data.langother;
    $scope.spanish = data.langspan;
    $scope.assignData();
  });

  $scope.assignData = function () {
    $scope.langData = {
      labels: ['Asian', 'English', 'european', 'Other', 'Spanish'],
      datasets: [{
        label: 'language',
        data: [$scope.asian, $scope.english, $scope.european, $scope.other, $scope.spanish],
        backgroundColor: ['rgba(33, 125, 216, 0.5)', 'rgba(165, 171, 175, 0.5)', 'rgba(4, 82, 160, 0.5)', 'rgba(14, 58, 102, 0.5)', 'rgba(128, 172, 216, 0.5)', 'rgba(72, 72, 72, 0.5)', 'rgba(72, 72, 72, 0.5)', 'rgba(72, 72, 72, 0.5)'],
        borderColor: ['rgba(33, 125, 216, 1)', 'rgba(165, 171, 175, 1)', 'rgba(4, 82, 160, 1)', 'rgba(14, 58, 102, 1)', 'rgba(128, 172, 216, 1)', 'rgba(72, 72, 72, 1)', 'rgba(72, 72, 72, 1)', 'rgba(72, 72, 72, 1)'],
        borderWidth: 1
      }]
    };
    //  console.log($scope.medianRentData);
  };
  $scope.langOptions = {
    legend: {
      display: false,
      labels: {
        display: false
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          stepSize: 5000
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
          stepSize: 500
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
    // controller: 'mainCtrl'
  };
});
// End: This is the header directive ===========================================
'use strict';

// Start: This is the header directive =========================================
AA.directive('headerDirective', function () {

  return {
    restrict: 'E',
    templateUrl: './views/header.html'
    // controller: 'mainCtrl'
  };
});
// End: This is the header directive ===========================================
'use strict';

// Start: This is the doughnut chart directive =================================
AA.directive('lineDirective', function () {
  return {
    restrict: 'E', templateUrl: "./../views/lineChart.html",
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
          options: {
            legend: {
              display: false,
              labels: {

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
AA.directive('mapDirective', function () {

  return {
    restrict: 'E',
    templateUrl: './views/map.html'
    // controller: 'mainCtrl'
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
  // 
  // const baseUrl = "/api/hospitals";
  //
  //
  // this.getData = (city) => {
  //   console.log('Showing city data before sending API call: ', city);
  //   return $http({
  //     method: "POST",
  //     url: baseUrl,
  //     data: {city}
  //   }).then( (response) => {
  //     console.log('Here is reponse back hospital service (Angular): ', response.data.PlaceSearchResponse.result.length);
  //     return response.data.PlaceSearchResponse.result.length;
  //
  //   });
  // };
  //

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
  // 
  // const baseUrl = "/api/onBoard";
  //
  //
  // this.getData = () => {
  //   return $http({
  //     method: "POST",
  //     url: baseUrl
  //   }).then( (response) => {
  //     console.log(response.data.response.result.package.item);
  //     return response.data.response.result.package.item
  //
  //   })
  // }
  //
  //
  //

  // end of service
}]);
"use strict";

AA.service("restaurantService", ["$http", function ($http) {

  // const baseUrl = "http://swapi.co/api/starships"
  //
  //
  // this.getData = () => {
  //   return $http({
  //     method: "GET",
  //     url: baseUrl
  //   }).then( (response) => {
  //     console.log(response.data.results);
  //     return response.data.results;
  //   })
  // }
  //
  //

  //end of service
}]);
"use strict";

AA.service("zipConversionService", ["$http", "$rootScope", function ($http, $rootScope) {
  var _this = this;

  var baseUrl = "/api/zipConversion";

  var city;
  this.city = city;

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
