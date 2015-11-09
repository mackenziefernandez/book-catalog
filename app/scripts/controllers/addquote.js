'use strict';

/**
 * @ngdoc function
 * @name bookCatalogApp.controller:AddquoteCtrl
 * @description
 * # AddquoteCtrl
 * Controller of the bookCatalogApp
 */
angular.module('bookCatalogApp')
  .controller('AddquoteCtrl', function () {
    var myRef = new Firebase('https://mackenzies-books.firebaseio.com');

    this.addQuote = function(quote, source) {
      myRef.child('quotes').push({quote: quote, source: source}, function(error) {
        if (error) {
          console.log(error);
        } else {
          alert("Success!");
        }
      });
    }
  });
