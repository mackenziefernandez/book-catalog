'use strict';

/**
* @ngdoc function
* @name bookCatalogApp.controller:EditbookCtrl
* @description
* # EditbookCtrl
* Controller of the bookCatalogApp
*/
angular.module('bookCatalogApp')
.controller('EditbookCtrl', function ($http, $location, $route, $sce, dateService) {
  var current = this;
  $('#isbnInput').focus();
  var dateToString = function(date) {
    return `${dateService.getFullYear(date)}-${date.getMonth() + 1}-${date.getDate()}`
  }
  this.searchISBN = function(isbn) {
    console.log("searching the ISBN: " + isbn);
    var url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn;//9780765356130';

    $http({ method: 'GET', url }).then(function successCallback(response) {
      if (response.data.totalItems == 0) {
        console.log("No books came back");
        // Add iframe to screen with amazon search results
        current.amazonURL = "http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords="+isbn;
      } else {
        var volumeInfo = response.data.items[0].volumeInfo;
        if (typeof current.title == 'undefined') {current.title = volumeInfo.title;}
        console.log(volumeInfo);
        if (typeof current.authorFirst == 'undefined') {current.authorFirst = _.initial(volumeInfo.authors[0].split(" ")).join(" ");}
        if (typeof current.authorLast == 'undefined') {current.authorLast = _.last(volumeInfo.authors[0].split(" "));}
        if (typeof current.length == 'undefined') {current.length = volumeInfo.pageCount;}
        if (typeof current.imageURL == 'undefined') {current.imageURL = volumeInfo.imageLinks.thumbnail;}
      }
    }, function errorCallback(response) {
      console.log(response);
    });



    // var goodReadsKey = 'm360fyZxgIqlAhG3xrNrUA';
    // var url = "https://www.goodreads.com/search.xml?key="+goodReadsKey+"&q=0385733151";
    // // $http({ method: 'GET', url, headers:{'Access-Control-Allow-Origin':'*'} }).then(function successCallback(response) {
    // //   alert("yay!");
    // //   console.log(response);
    // // }, function errorCallback(response) {
    // //   console.log(response);
    // //
    // // });
    // $http.get(url, {headers:{'Access-Control-Allow-Origin':'*'}} ).then(function successCallback(response) {
    //   alert("yay!");
    //   console.log(response);
    // }, function errorCallback(response) {
    //   console.log(response);
    //
    // });
  //   var access_key = '6TG763XK';
  //   // http://isbndb.com/api/v2/json/6TG763XK/book/9780062278227
  //   // http://isbndb.com/api/books.xml?access_key=Z&index1=isbn&value1=0061031321
  //   var URL = "https://isbndb.com/api/v2/json/" + access_key + "/book/" + isbn;
  //   // var URL = "http://isbndb.com/api/books.xml?access_key="+ access_key+ "&index1=isbn&value1="+isbn;
  //   $http({method: 'GET', url: URL, headers: {
  //   'Content-type': 'application/json',
  //   'Access-Control-Allow-Origin': '*'
  // }}).success(function (response) {
  //     console.log("success");
  //     console.log(response);
  //   // }, function errorCallback(response) {
  //   //   console.log("fail");
  //   //   console.log(response.headers);
  //   });
  }
  var myRef = new Firebase('https://mackenzies-books.firebaseio.com');

  this.addBook = function(authorFirst, authorLast, title, isbn, length, status, format, imageURL) {
    var today = new Date();
    if (status == false) {
      var dateFinished = '';
    } else {
      var dateFinished = dateService.dateToString(today);
    }
    var dateAdded = dateService.dateToString(today);
    length = parseInt(length);
    var pushObj = myRef.child('books').push(
      {authorFirst:authorFirst, authorLast:authorLast, title:title,
        isbn:isbn, dateAdded, dateFinished,
        length:length, status:status, format:format, imageURL:imageURL},
        function(error) {
      if (error) {
        console.log(error);
      } else {
        alert("Success!");
        $route.reload();
      }
    });
  }

});
