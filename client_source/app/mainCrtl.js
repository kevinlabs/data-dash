/* ============================================================================= */
/* ======================== Start: Main Controller ============================= */
/* ============================================================================= */
AA.controller("mainCtrl", function ($scope, $interval) {

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

  $scope.chart1Type = 'line';
  $scope.chart2Type = 'bar';
  $scope.chart3Type = 'pie';
  $scope.chart4Type = 'doughnut';
  $scope.chart5Type = 'polarArea';
  $scope.chart6Type = 'radar';


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


    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */
      (document.getElementById('autocomplete')), {
        types: ['geocode']
      });

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
  }

  function fillInAddress() {
    // Get the place details from the autocomplete object.
    var place = autocomplete.getPlace();

    for (var component in componentForm) {
      document.getElementById(component).value = '';
      document.getElementById(component).disabled = false;
    }

    console.log('showing google object: ', place);
    $scope.tempPlace = place;
    console.log('Testing the live change object: ', $scope.tempPlace.address_components[0].long_name);


    // Get each component of the address from the place details
    // and fill the corresponding field on the form.
    for (var i = 0; i < place.address_components.length; i++) {
      var addressType = place.address_components[i].types[0];
      if (componentForm[addressType]) {
        var val = place.address_components[i][componentForm[addressType]];
        document.getElementById(addressType).value = val;
      }
    }

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

  const inputValidation = () => {
    for (var index = 0; index < $scope.tempPlace.address_components.length; index++) {
      if ($scope.tempPlace.address_components[index].types[0] === 'locality') {
        $scope.city = $scope.tempPlace.address_components[index].long_name;
      }

      if ($scope.tempPlace.address_components[index].types[0] === 'postal_code') {
        $scope.zipcode = $scope.tempPlace.address_components[index].long_name;
      }

      if ($scope.city === undefined && $scope.zipcode === undefined) {
        alert('City or Zipcode is needed. Plase try again.');
      }
    }

    console.info('Showing City info: ', $scope.city);
    console.info('Showing Zipcode info: ', $scope.zipcode);
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


});
/* ============================================================================= */
/* ======================== End: Main Controller =============================== */
/* ============================================================================= */