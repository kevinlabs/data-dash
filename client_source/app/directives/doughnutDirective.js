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
      console.log('this is my element\'s second child:', elem[0].children[1].children[0]);

      let ctxDir = elem[0].children[1].children[0];

      let myChartDir = getChartGivenData(ctxDir, scope.chartData);

      function getChartGivenData(chartElement, dataForChart) {
        return new Chart(
          chartElement,
          {
            type: scope.type,
            data: dataForChart,
            options: {
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

      setInterval(() => {
        getChartGivenData(ctxDir, scope.chartData);
        // myChartDir.update();
      }, 5000);
    }
  }
});

// End: This is the doughnut chart directive ===================================