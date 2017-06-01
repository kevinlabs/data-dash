/* ============================================================================= */
/* ======================== Start: Main Controller ============================= */
/* ============================================================================= */

AA.controller("mainCtrl", function ($scope, $interval, zipConversionService) {
  // $scope.clearData = function () {
  //   $scope.city = '';
  //   $scope.zipcode = '';
  //   $scope.state = '';
  // };

  $scope.testing = "it works";

  $scope.baseball = {
    labels: ["Pre", "Kinder", "Elemen", "Middle", "High", "Degree", "Masters", "PHD"],
    datasets: [{
      label: '# of Votes',
      data: [1290, 2283, 3092, 1532, 2111, 1003, 1487, 2645],
      backgroundColor: [
        'rgba(33, 125, 216, 0.2)',
        'rgba(165, 171, 175, 0.2)',
        'rgba(4, 82, 160, 0.2)',
        'rgba(14, 58, 102, 0.2)',
        'rgba(128, 172, 216, 0.2)',
        'rgba(72, 72, 72, 0.2)',
        'rgba(72, 72, 72, 0.2)',
        'rgba(72, 72, 72, 0.2)'
      ],
      borderColor: [
        'rgba(33, 125, 216, 1)',
        'rgba(165, 171, 175, 1)',
        'rgba(4, 82, 160, 1)',
        'rgba(14, 58, 102, 1)',
        'rgba(128, 172, 216, 1)',
        'rgba(72, 72, 72, 1)',
        'rgba(72, 72, 72, 1)',
        'rgba(72, 72, 72, 1)'
      ],
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
      backgroundColor: [
        "#217DD8",
        "#A5ABAF",
        "#0452A0",
        "#0E3A66",
        "#80ACD8",
        "#484848",
        "#34495e"
      ],
      data: [12, 19, 3, 17, 28, 24, 7]
    }]
  };

  $scope.orange = {
    labels: ["4 BR Apt", "3 BR Apt", "2 BR Apt", "1 BR Apt", "Studio Apt"],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: [
        'rgba(33, 125, 216, 0.8)',
        'rgba(165, 171, 175, 0.8)',
        'rgba(4, 82, 160, 0.8)',
        'rgba(14, 58, 102, 0.8)',
        'rgba(128, 172, 216, 0.8)',
        'rgba(72, 72, 72, 0.8)',
        'rgba(72, 72, 72, 0.8)'
      ],
      data: [978, 1267, 734, 784, 433]
    }]
  };

  $scope.polar = {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    datasets: [{
      backgroundColor: [
        'rgba(33, 125, 216, 0.8)',
        'rgba(165, 171, 175, 0.8)',
        'rgba(4, 82, 160, 0.8)',
        'rgba(14, 58, 102, 0.8)',
        'rgba(128, 172, 216, 0.8)',
        'rgba(72, 72, 72, 0.8)',
        'rgba(72, 72, 72, 0.8)'
      ],
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



  $interval(() => {
    $scope.$applyAsync(() => {
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


  // Google Scripts for Google Map and AutoComplete.=====================================
  //variables
  $scope.city;
  $scope.zipcode;
  $scope.tempPlace;

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

      // if (!place.geometry) {
      //   window.alert("Autocomplete's returned place contains no geometry");
      //   return;
      // }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
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
    console.log('Main control Input Validation initatied');

    for (var index = 0; index < $scope.tempPlace.address_components.length; index++) {
      if ($scope.tempPlace.address_components[index].types[0] === 'locality') {
        $scope.city = $scope.tempPlace.address_components[index].long_name;
      }

      if ($scope.tempPlace.address_components[index].types[0] === 'administrative_area_level_1') {
        $scope.state = $scope.tempPlace.address_components[index].short_name;
      }

    }

    // if (!$scope.zipcode && $scope.city && $scope.state) {
    //   zipConversionService.getData({
    //     city: $scope.city,
    //     state: $scope.state
    //   });
    //   console.log("calling zipConversionService");
    // }

    console.info('Showing City info: ', $scope.city);
    console.info('Showing Zipcode info: ', $scope.zipcode);
    console.info('Showing State info: ', $scope.state);

  }; // ============= END inputValidation ============

  //Initiating Pre Render
  initMap();


  // // Google Scripts=====================================



});



/* ============================================================================= */
/* ======================== End: Main Controller =============================== */
/* ============================================================================= */