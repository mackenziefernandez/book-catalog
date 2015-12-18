'use strict';

/**
 * @ngdoc overview
 * @name bookCatalogApp
 * @description
 * # bookCatalogApp
 *
 * Main module of the application.
 */
angular
  .module('bookCatalogApp', [
    // 'ngAnimate',
    // 'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    // 'ngTouch',
    'firebase',
    'chart.js',
    'slickCarousel' //https://github.com/devmark/angular-slick-carousel
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'BookcontrollerCtrl',
        controllerAs: 'bkCtrl'
      })
      .when('/editBook', {
        templateUrl: 'views/editbook.html',
        controller: 'EditbookCtrl',
        controllerAs: 'editBookCtrl'
      })
      .when('/viewbooks', {
        templateUrl: 'views/viewbooks.html',
        controller: 'ViewbooksCtrl',
        controllerAs: 'viewbooks'
      })
      .when('/addquote', {
        templateUrl: 'views/addquote.html',
        controller: 'AddquoteCtrl',
        controllerAs: 'addquote'
      })
      .when('/unreadbooks', {
        templateUrl: 'views/unreadbooks.html',
        controller: 'UnreadbooksCtrl',
        controllerAs: 'unreadbooks'
      })
      .when('/reading-stats', {
        templateUrl: 'views/reading-stats.html',
        controller: 'ReadingStatsCtrl',
        controllerAs: 'readingStats'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
