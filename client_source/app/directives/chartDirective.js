// Start: This is the doughnut chart directive =================================
AA
  .directive('chartDirective', function () {
    return {
      restrict: 'E', templateUrl: "./../views/chartDirective.html",
      // controller: 'dirCtrl',
      scope: {
        chartData: '=',
        type: "=",
        options: "="
      },
      link: function (scope, elem, attrs, ctrl) {
        console.log('this is my element\'s second child:', elem[0].children[0].children[0]);

        let ctxDir = elem[0].children[0].children[0];

        let myChartDir = getChartGivenData(ctxDir, scope.chartData, scope.type, scope.options);

        function getChartGivenData(chartElement, dataForChart, type, options) {
          return new Chart(chartElement, {
            type: type,
            data: dataForChart,
            options: options
            // {
            //   legend: {
            //     display: false,
            //     labels: {
            //
            //       display: false
            //     }
            //   },
            //   scales: {
            //     yAxes: [
            //       {
            //         ticks: {
            //           beginAtZero: true
            //         }
            //       }
            //     ]
            //   }
            // }
          });
        }

        scope
          .$watch('chartData', function (newValue, oldValue, scope) {
            getChartGivenData(ctxDir, newValue, scope.type, scope.options);
          });

      }

    }
  });

// End: This is the doughnut chart directive ===================================
