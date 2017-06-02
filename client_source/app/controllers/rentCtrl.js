AA.controller("rentCtrl", function ($timeout, $scope, rentService, zipConversionService) {

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
        labels: [
          'Stu', '1BR', '2BR', '3BR', '4BR'
        ],
        datasets: [
          {
            label: 'Rent P/M $',
            data: [
              $scope.onBoardDataStudio, $scope.onBoardDataOne, $scope.onBoardDataTwo, $scope.onBoardDataThree, $scope.onBoardDataFour
            ],
            backgroundColor: [
              'rgba(33, 125, 216, 0.5)',
              'rgba(165, 171, 175, 0.5)',
              'rgba(4, 82, 160, 0.5)',
              'rgba(14, 58, 102, 0.5)',
              'rgba(128, 172, 216, 0.5)',
              'rgba(72, 72, 72, 0.5)',
              'rgba(72, 72, 72, 0.5)',
              'rgba(72, 72, 72, 0.5)'
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
          }
        ]
      };
    }
    $scope.optionsObj = {
      legend: {
        display: false,
        labels: {
          display: false
        }
      },
      scales: {
        yAxes: [
          {
            ticks: {
              stepSize: 500
            },
            stacked: false
          }
        ],
        xAxes: [
          {
            stacked: false
          }
        ]
      }
    };
    //end of controller
  });
