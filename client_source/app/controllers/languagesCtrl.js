AA.controller("languagesCtrl", function ($timeout, $scope, zipConversionService) {

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
        labels: [
          'English', 'Spanish', 'Asian', 'European', 'Other'
        ],
        datasets: [
          {
            label: 'Language',
            data: [
              $scope.english, $scope.spanish, $scope.asian, $scope.european, $scope.other
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
    $scope.langOptions = {
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
              stepSize: 5000
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
