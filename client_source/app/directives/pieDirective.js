AA
  .directive('pieDirective', function () {
    return {
      restrict: 'E', templateUrl: "./../views/pie.html",
      scope: {
        chartData: '=',
        type: "=",
        options: '='
      },
      link: function (scope, elem, attrs, ctrl) {
        let ctxDir = elem[0].children[0].children[0];
        let myChartDir = getChartGivenData(ctxDir, scope.chartData, scope.type, scope.options);

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
