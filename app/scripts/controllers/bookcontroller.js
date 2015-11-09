'use strict';

/**
 * @ngdoc function
 * @name bookCatalogApp.controller:BookcontrollerCtrl
 * @description
 * # BookcontrollerCtrl
 * Controller of the bookCatalogApp
 */
angular.module('bookCatalogApp')
  .controller('BookcontrollerCtrl', function ($firebaseArray, $firebaseObject) {
    var bkCtrl = this;
    var myRef = new Firebase('https://mackenzies-books.firebaseio.com');

    var books = $firebaseArray(myRef.child('books'));

    var booksRead = $firebaseArray(myRef.child('books').orderByChild('status').equalTo(true));

    var quotes = $firebaseArray(myRef.child('quotes'));

    quotes.$loaded().then(function() {
      bkCtrl.quote = _.sample(quotes);
    });
    booksRead.$loaded().then(function() {
      bkCtrl.numRead = booksRead.length;
    });
    books.$loaded().then(function() {
      bkCtrl.numBooks = books.length;
      bkCtrl.numPages = _.sum(_.pluck(books, 'length'));
    });

  });
