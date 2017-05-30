AA
  .controller("rentCtrl", function ($scope, rentService) {

    $scope.onBoardDataStudio;
    $scope.onBoardDataOne;
    $scope.onBoardDataTwo;
    $scope.onBoardDataThree;
    $scope.onBoardDataFour;


    $scope.getInfo = () => {
      rentService
        .getData()
        .then((response) => {
          console.log(response);
          $scope.onBoardDataStudio = response.studio_county;
          $scope.onBoardDataOne = response.one_bed_county;
          $scope.onBoardDataTwo = response.two_bed_county;
          $scope.onBoardDataThree = response.three_bed_county;
          $scope.onBoardDataFour = response.four_bed_county;
          $scope.assignData();
        })
    };

    $scope.getInfo();


    $scope.assignData = function () {
      $scope.medianRentData = {
        labels: [
          'S', '1BR', '2BR', '3BR', '4BR'
        ],
        datasets: [
          {
            label: 'apartments',
            data: [
              $scope.onBoardDataStudio, $scope.onBoardDataOne, $scope.onBoardDataTwo, $scope.onBoardDataThree, $scope.onBoardDataFour
              // 5, 10, -3, 7, -6
            ],
            backgroundColor: "rgba(153,255,51,0.4)"
          }
        ]
      };
         console.log($scope.medianRentData);
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
              // beginAtZero: true,
              stepSize: 50
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
