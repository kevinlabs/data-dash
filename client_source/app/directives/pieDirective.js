AA
  .directive('pieDirective', function () {
    return {
      restrict: 'E', templateUrl: "./../views/pie.html",
      // controller: 'dirCtrl',
      scope: {
        chartData: '=',
        type: "="
      },
      link: function (scope, elem, attrs, ctrl) {
        console.log('this is my element\'s second child:', elem[0].children[0].children[0]);

        let ctxDir = elem[0].children[0].children[0];

        let myChartDir = getChartGivenData(ctxDir, scope.chartData, scope.type, scope.options);

        function getChartGivenData(chartElement, dataForChart, type, options) {
          return new Chart(chartElement, {
            type: type,
            data: dataForChart,
            options:
            {
              responsive: true,
              maintainAspectRatio: false,
              legend: {
                display: false,
                labels: {
                  display: false
                }
              },
              title: {
                display: false,
                text: 'Predicted world population (millions) in 2050'
              }
              // scales: {   yAxes: [     {       ticks: {         beginAtZero: true       }
              // }   ] }
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