'use strict';

/**
 * @ngdoc function
 * @name bookCatalogApp.controller:ViewbooksCtrl
 * @description
 * # ViewbooksCtrl
 * Controller of the bookCatalogApp
 */
angular.module('bookCatalogApp')
  .controller('ViewbooksCtrl', function ($firebaseArray, $firebaseObject) {
    var myRef = new Firebase('https://mackenzies-books.firebaseio.com');

    this.myBooks = $firebaseArray(myRef.child('books'));

    var today = new Date();
  });
