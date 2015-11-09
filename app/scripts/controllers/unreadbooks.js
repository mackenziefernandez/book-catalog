'use strict';

/**
 * @ngdoc function
 * @name bookCatalogApp.controller:UnreadbooksCtrl
 * @description
 * # UnreadbooksCtrl
 * Controller of the bookCatalogApp
 */
angular.module('bookCatalogApp')
  .controller('UnreadbooksCtrl', function ($firebaseArray) {
    var myRef = new Firebase('https://mackenzies-books.firebaseio.com');

    this.myBooks = $firebaseArray(myRef.child('books').orderByChild('status').equalTo(false));

    this.markAsRead = function(bookID) {
      // Change the status of the book with this ID to true
      myRef.child('books').child(bookID).set({status: true});
    }
  });
