"use strict";

/* ============================================================================= */
/* ======================== Start: App JS ====================================== */
/* ============================================================================= */
var AA = angular.module("data-dash", []);
/* ============================================================================= */
/* ======================== End: App JS ======================================== */
/* ============================================================================= */
'use strict';

AA.filter('distance', function () {

  return function (input) {
    if (input != undefined) {
      return input + ' Miles';
    }
  };
});
'use strict';

/* ============================================================================= */
/* ======================== Start: Main Controller ============================= */
/* ============================================================================= */

AA.controller("mainCtrl", ["$scope", "$interval", "zipConversionService", function ($scope, $interval, zipConversionService) {
  $scope.clearData = function () {
    $scope.city = '';
    $scope.zipcode = '';
    $scope.state = '';
  };

  $scope.chart1Type = 'line';
  $scope.chart2Type = 'bar';
  $scope.chart3Type = 'pie';
  $scope.chart4Type = 'doughnut';
  $scope.chart5Type = 'polarArea';
  $scope.chart6Type = 'radar';

  // Google Scripts for Google Map. ============================================

  // Google Scripts for Auto Complete.==========================================
  //variables
  $scope.city;
  $scope.tempPlace;

  //Use this if we only need zipcode from google -------------------------------
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

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(35);
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
        zipConversionService.findData();
      });
    }
  };

  initMap();
}]);
/* ============================================================================= */
/* ======================== End: Main Controller =============================== */
/* ============================================================================= */
"use strict";

AA.controller("airportCtrl", ["$scope", "zipConversionService", function ($scope, zipConversionService) {

  $scope.$on('eventFired', function (event, data) {
    console.log(data);
    $scope.airport = data.airport; // AIRPORT
    $scope.airportDist = data.airportdist; // AIRPORTDIST
    $scope.assignData();
  });

  $scope.assignData = function () {
    $scope.airport = data.airport;
    $scope.airportDist = data.airportdist;
  };

  //end of controller
}]);
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
"use strict";

AA.controller("homeValueCtrl", ["$scope", "zipConversionService", function ($scope, zipConversionService) {

  $scope.$on('eventFired', function (event, data) {
    // console.log(data);
    $scope.avgsaleprice = data.avgsaleprice;
    $scope.assignData();
  });

  $scope.assignData = function () {
    $scope.propertySalePrice = $scope.avgsaleprice;
  };

  //end of controller
}]);
"use strict";

AA.controller("hospitalCtrl", ["$scope", "hospitalService", "zipConversionService", function ($scope, hospitalService, zipConversionService) {

  $scope.city;

  $scope.$on('eventFired', function (event, data) {
    $scope.city = zipConversionService.city;

    var city = $scope.city;
    var splitCity = city.split(" ").join("+");

    $scope.getInfo(splitCity);
  });

  $scope.getInfo = function (city) {
    hospitalService.getData(city).then(function (response) {
      $scope.data = response;
    });
  };
}]);
"use strict";

AA.controller("incomeCtrl", ["$scope", "zipConversionService", function ($scope, zipConversionService) {

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
'use strict';

AA.controller("languagesCtrl", ["$timeout", "$scope", "zipConversionService", function ($timeout, $scope, zipConversionService) {

  $scope.$on('eventFired', function (event, data) {
    $scope.asian = data.langasian;
    $scope.english = data.langeng;
    $scope.spanish = data.langspan;
    $scope.european = data.langeuro;
    $scope.other = data.langother;
    $scope.assignData();
  });

  $scope.assignData = function () {
    $scope.langData = {
      labels: ['Asian', 'English', 'Spanish', 'European', 'Other'],
      datasets: [{
        label: 'Language',
        data: [$scope.asian, $scope.english, $scope.spanish, $scope.european, $scope.other],
        backgroundColor: ['rgba(33, 125, 216, 0.5)', 'rgba(165, 171, 175, 0.5)', 'rgba(4, 82, 160, 0.5)', 'rgba(14, 58, 102, 0.5)', 'rgba(128, 172, 216, 0.5)', 'rgba(72, 72, 72, 0.5)', 'rgba(72, 72, 72, 0.5)', 'rgba(72, 72, 72, 0.5)'],
        borderColor: ['rgba(33, 125, 216, 1)', 'rgba(165, 171, 175, 1)', 'rgba(4, 82, 160, 1)', 'rgba(14, 58, 102, 1)', 'rgba(128, 172, 216, 1)', 'rgba(72, 72, 72, 1)', 'rgba(72, 72, 72, 1)', 'rgba(72, 72, 72, 1)'],
        borderWidth: 1
      }]
    };
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

AA.controller("populationCtrl", ["$scope", "zipConversionService", function ($scope, zipConversionService) {

  $scope.$on('eventFired', function (event, data) {
    console.log('In pop ctrl', data);
    $scope.popcy = data.popcy;
    $scope.assignData();
  });

  $scope.assignData = function () {
    console.log('In pop assign data');
    $scope.populationNum = $scope.popcy;
  };

  //end of controller
}]);
'use strict';

AA.controller("rentCtrl", ["$timeout", "$scope", "rentService", "zipConversionService", function ($timeout, $scope, rentService, zipConversionService) {

  $scope.$on('eventFired', function (event, data) {
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

  // $scope.data;
  //
  // $scope.getInfo = () => {
  //   restaurantService.getData().then( (response) => {
  //     console.log(response);
  //     $scope.data = response;
  //   })
  // }
  //
  // $scope.getInfo();

}]);
'use strict';

AA.controller("weatherCtrl", ["$scope", "weatherService", "zipConversionService", function ($scope, weatherService, zipConversionService) {

    console.log('Weather controll activated');

    //Variable Declaration.
    $scope.zipcode;
    $scope.weather;
    $scope.temp;
    $scope.windSpeed;
    $scope.description;

    $scope.$on('eventFired', function (event, data) {

        //.data is the zipcode. Assigning to local controller variable.
        $scope.zipcode = data.geo_code;

        //Testing.
        console.log("Weather Controller: Zipcode data: ", $scope.zipcode);

        weatherService.getWeather($scope.zipcode).then(function (response) {
            console.log('From Weather controll at Angular showing data back from service: ', response);
            $scope.weather = response;
            $scope.temp = (response.main.temp * (9 / 5) - 459.67).toFixed(1) + '°';
            $scope.windSpeed = 'wind: ' + response.wind.speed + ' mph';
            $scope.description = response.weather[0].description;

            console.log("Weather Controller: weather data: ", $scope.weather);
            console.log("Weather Controller: temp data: ", $scope.temp);
            console.log("Weather Controller: speed data: ", $scope.windSpeed);
            console.log("Weather Controller: Weather Description.: ", $scope.description);
        });
    });
}]);
'use strict';

// Start: This is the doughnut chart directive =================================
AA.directive('chartDirective', function () {
  return {
    restrict: 'E', templateUrl: "./../views/chartDirective.html",
    scope: {
      chartData: '=',
      type: "=",
      options: "="
    },
    link: function link(scope, elem, attrs, ctrl) {
      var ctxDir = elem[0].children[0].children[0];
      var myChartDir = getChartGivenData(ctxDir, scope.chartData, scope.type, scope.options);
      console.log('chartdirective scopedata', scope.chartData);
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

// End: This is the doughnut chart directive ===================================
'use strict';

// Start: This is the current data directive ===================================
AA.directive('currentDataDirective', function () {

  return {
    restrict: 'E',
    templateUrl: './views/current-data.html',
    controller: 'weatherCtrl'
  };
});
// End: This is the current data directive =====================================
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

// Start: This is the doughnut chart directive =================================
AA.directive('lineDirective', function () {
  return {
    restrict: 'E', templateUrl: "./../views/lineChart.html",
    scope: {
      chartData: '=',
      type: "="
    },
    link: function link(scope, elem, attrs, ctrl) {

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
  };
});
// End: This is the header directive ===========================================
'use strict';

AA.directive('pieDirective', function () {
  return {
    restrict: 'E', templateUrl: "./../views/pie.html",
    scope: {
      chartData: '=',
      type: "=",
      options: '='
    },
    link: function link(scope, elem, attrs, ctrl) {
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

AA.service("crimeService", ["$http", function ($http) {}]);
"use strict";

AA.service("homeValueService", ["$http", function ($http) {}]);
"use strict";

AA.service("hospitalService", ["$http", function ($http) {}]);
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

AA.service("rentService", ["$http", function ($http) {}]);
"use strict";

AA.service("restaurantService", ["$http", function ($http) {}]);
"use strict";

AA.service("weatherService", ["$http", function ($http) {

  var baseUrl = "/api/weather";

  this.getWeather = function (zipcode) {
    console.log('Showing city data before sending API call: ', zipcode);
    return $http({
      method: "POST",
      url: baseUrl,
      data: { zipcode: zipcode }
    }).then(function (response) {
      console.log('Here is reponse back weather serivce (Angular): ', response.data);
      return response.data;
    });
  };

  //end of service
}]);
"use strict";

AA.service("zipConversionService", ["$http", "$rootScope", function ($http, $rootScope) {
  var _this = this;

  var baseUrl = "/api/zipConversion";

  var city;
  this.city = city;

  this.getData = function (obj) {
    _this.data = {};
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
    console.log('s1: ', _this.data);
    $rootScope.$broadcast('eventFired', _this.data);
    console.log('s2: ', _this.data);
  };
  //end of service
}]);
//# sourceMappingURL=bundle.js.map
