'use strict';

/**
 * @ngdoc overview
 * @name angularChartjsSampleApp
 * @description
 * # angularChartjsSampleApp
 *
 * Main module of the application.
 */
angular
  .module('angularChartjsSampleApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/chart', {
        templateUrl: 'views/chart.html',
        controller: 'ChartCtrl',
        controllerAs: 'chart'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode({
      enable: true,
      requireBase: false
    });

    $locationProvider.hashPrefix('');
  });
