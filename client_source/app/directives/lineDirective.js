// Start: This is the doughnut chart directive =================================
AA.directive('lineDirective', function () {
    return {
      restrict: 'E', templateUrl: "./../views/lineChart.html",
      scope: {
        chartData: '=',
        type: "="
      },
      link: function (scope, elem, attrs, ctrl) {

        let ctxDir = elem[0].children[0].children[0];
        let myChartDir = getChartGivenData(ctxDir, scope.chartData, scope.type, scope.options);

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
                yAxes: [
                  {
                    ticks: {
                      beginAtZero: true
                    }
                  }
                ]
              }
            }
          });
        }
        scope
          .$watch('type', function (newValue, oldValue, scope) {
            getChartGivenData(ctxDir, scope.chartData, newValue);
          });
      }
    }
  });
// End: This is the doughnut chart directive ===================================
