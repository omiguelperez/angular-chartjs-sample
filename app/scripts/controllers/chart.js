'use strict';

/**
 * @ngdoc function
 * @name angularChartjsSampleApp.controller:ChartCtrl
 * @description
 * # ChartCtrl
 * Controller of the angularChartjsSampleApp
 */
angular.module('angularChartjsSampleApp')
  .controller('ChartCtrl', function () {
    let canvas = document.getElementById('chart');
    let context = canvas.getContext('2d');

    var chart = new Chart(context, {
      type: 'line',
      data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
        datasets: [
          {
            label: "Mujeres",
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
          }, {
            label: "Hombres",
            backgroundColor: 'rgba(255, 255, 255, 0)',
            borderColor: 'rgb(99, 155, 132)',
            data: [50, 12, 67, 60, 80, 30, 30],
          }
        ]
      },
      options: {}
    });
  });
