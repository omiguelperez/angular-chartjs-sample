'use strict';

/**
 * @ngdoc service
 * @name angularChartjsSampleApp.participants
 * @description
 * # participants
 * Service in the angularChartjsSampleApp.
 */
angular.module('angularChartjsSampleApp')
  .service('participants', function ($http) {
  	this.getIncomingBetweenDates = function (fromDate, toDate) {
  		return $http.get(`http://susnor.herokuapp.com/api/charts?start_date=${fromDate}&end_date=${toDate}`);
  	}
  });
