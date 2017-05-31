// Start: This is the doughnut chart directive =================================
AA.directive('doughnutDirective', function() {
  return {
    restrict: 'E',
    templateUrl: "./../views/doughnut.html",
    // controller: 'dirCtrl',
    scope: {
      chartData: '=',
      type: "="
    },
    link: function(scope, elem, attrs, ctrl) {
      console.log('this is my element\'s second child:', elem[0].children[0].children[0]);

      let ctxDir = elem[0].children[0].children[0];

      let myChartDir = getChartGivenData(ctxDir, scope.chartData, scope.type);

      function getChartGivenData(chartElement, dataForChart, type) {
        return new Chart(
          chartElement,
          {
            type: type,
            data: dataForChart,
            options: {
              legend: {
                display:false,
                lables: {
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
          }
        );
      }

      scope.$watch('type', function(newValue, oldValue, scope){
        getChartGivenData(ctxDir, scope.chartData, newValue);
      });

    }
  }
});

// End: This is the doughnut chart directive ===================================
