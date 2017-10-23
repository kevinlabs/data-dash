/* ============================================================================= */
/* ======================== Start: Main Controller ============================= */
/* ============================================================================= */

AA.controller("mainCtrl", function ($scope, $interval, zipConversionService) {
  $scope.clearData = function () {
    $scope.city = '';
    $scope.zipcode = '';
    $scope.state = '';
    console.log('Clear data is executed');
  };

  $scope.chart1Type = 'line';
  $scope.chart2Type = 'bar';
  $scope.chart3Type = 'pie';
  $scope.chart4Type = 'doughnut';
  $scope.chart5Type = 'polarArea';
  $scope.chart6Type = 'radar';

  $scope.chartShow = false;

  // =============

  $scope.$on('eventFired', function (event, data) {
    $scope.chartShow = false;
  });

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
        lat: 32.7833333,
        lng: -96.8
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
      marker.setIcon(({
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(35, 35)
      }));
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);

      $scope.tempPlace = place;
      inputValidation();

    });
  }

  const inputValidation = () => {
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
      }).then(response => {
          zipConversionService.findData();

      });
    }
  };

  initMap();

});
/* ============================================================================= */
/* ======================== End: Main Controller =============================== */
/* ============================================================================= */
