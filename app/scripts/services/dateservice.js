'use strict';

/**
 * @ngdoc service
 * @name bookCatalogApp.dateService
 * @description
 * # dateService
 * Service in the bookCatalogApp.
 */
angular.module('bookCatalogApp')
  .service('dateService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.dateToString = function(date) {
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
    this.beginningOfMonth = function(date) {
      var firstDay = new Date(`${date.getFullYear()}-${date.getMonth() + 1}-1`);
      return firstDay;
    }
    this.endOfMonth = function(date) {
      var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      return lastDay;
    }
    this.changeMonth = function(date, monthChange) {
      var copyDate = this.beginningOfMonth(date);
      var newDate = new Date(date.getFullYear(), copyDate.getMonth() + monthChange, copyDate.getDate());
      return newDate;
    }
    this.monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  });
