// Start: This is the doughnut chart directive =================================
AA.directive('chartDirective', function () {
    return {
      restrict: 'E', templateUrl: "./../views/chartDirective.html",
      scope: {
        chartData: '=',
        type: "=",
        options: "="
      },
      link: function (scope, elem, attrs, ctrl) {
        let ctxDir = elem[0].children[0].children[0];
        let myChartDir = getChartGivenData(ctxDir, scope.chartData, scope.type, scope.options);
        console.log('chartdirective scopedata', scope.chartData)
        function getChartGivenData(chartElement, dataForChart, type, options) {
          return new Chart(chartElement, {
            type: type,
            data: dataForChart,
            options: options
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
