'use strict';

/**
 * @ngdoc function
 * @name bookCatalogApp.controller:UnreadbooksCtrl
 * @description
 * # UnreadbooksCtrl
 * Controller of the bookCatalogApp
 */
angular.module('bookCatalogApp')
  .controller('UnreadbooksCtrl', function ($firebaseArray, dateService) {
    var myRef = new Firebase('https://mackenzies-books.firebaseio.com');

    this.readingSpeed = 310;

    this.myBooks = $firebaseArray(myRef.child('books').orderByChild('status').equalTo(false));

    this.markAsRead = function(bookID) {
      // Change the status of the book with this ID to true
      var dateFinished = new Date();
      myRef.child('books').child(bookID).update({status: true, dateFinished:dateService.dateToString(dateFinished)});
    }
  });
