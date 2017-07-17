'use strict';

/**
 * @ngdoc function
 * @name angularChartjsSampleApp.controller:ChartCtrl
 * @description
 * # ChartCtrl
 * Controller of the angularChartjsSampleApp
 */
angular.module('angularChartjsSampleApp')
  .controller('ChartCtrl', function ($scope, participants) {
    let canvas = document.getElementById('chart');
    let context = canvas.getContext('2d');

    participants.getIncomingBetweenDates('2017-07-16', '2017-07-22')
      .then(function (response) {
        let data = response.data.data;

        var chart = new Chart(context, {
          type: 'line',
          data: {
            labels: data.keys,
            datasets: [
              {
                label: "Todos",
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'rgb(122, 99, 255)',
                data: data.items.map(i => i.length),
              },
              {
                label: "Mujeres",
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'rgb(255, 99, 122)',
                data: data.items.map(i => i.filter(p => p.gender == 'mujer').length),
              },
              {
                label: "Hombres",
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'rgb(99, 255, 122)',
                data: data.items.map(i => i.filter(p => p.gender == 'hombre').length),
              }
            ]
          },
          options: {}
        });
      });
  });
