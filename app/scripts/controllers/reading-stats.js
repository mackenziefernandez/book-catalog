'use strict';

/**
 * @ngdoc function
 * @name bookCatalogApp.controller:ReadingStatsCtrl
 * @description
 * # ReadingStatsCtrl
 * Controller of the bookCatalogApp
 */
angular.module('bookCatalogApp')
  .controller('ReadingStatsCtrl', function ($firebaseArray, dateService) {
    var myRef = new Firebase('https://mackenzies-books.firebaseio.com');

    this.booksFinished = $firebaseArray(myRef.child('books').orderByChild('dateFinished').startAt('2015-11-19'));
    // Stuff to observe reading tendencies (books finished per month, # of books read year to date)
    // stack of books to represent the # read for that month?
    // get the last 6 months and display
    // (can later work on making a back arrow to view previous months, up until november 2015)

    // get the books finished by month
    var today = new Date();

    var buildMonthRef = function(date, orderBy) {
      var novemberFirst = new Date(2015,10,1);
      if (dateService.beginningOfMonth(date).getTime() == novemberFirst.getTime()) {
         // is the month of November, 2015 then only include from the 19th and onward
         return myRef.child('books').orderByChild(orderBy).startAt('2015-11-19').endAt(dateService.dateToString(dateService.endOfMonth(date)));
      } else {
        return myRef.child('books').orderByChild(orderBy).startAt(dateService.dateToString(dateService.beginningOfMonth(date))).endAt(dateService.dateToString(dateService.endOfMonth(date)));
      }
    }

    // This month's reads
    this.booksThisMonthFinished = $firebaseArray(buildMonthRef(today, 'dateFinished'));
    this.booksThisMonthAdded = $firebaseArray(buildMonthRef(today, 'dateAdded'));

    this.booksThisMonthFinished.$loaded().then( () => {
      this.booksThisMonthFinished = _.filter(this.booksThisMonthFinished, function(book) {
        return book.dateAdded != book.dateFinished;
      });
      this.slickConfig = {
          enabled: true,
          autoplay: true,
          draggable: false,
          autoplaySpeed: 2000,
          slidesToShow: Math.floor(this.booksThisMonthFinished.length/2),
          slidesToScroll: 1
      };
      $('slick').width(135*(this.booksThisMonthFinished.length/2));
    });

    this.booksThisMonthAdded.$loaded().then( () => {
      this.booksThisMonthAdded = _.filter(this.booksThisMonthAdded, function(book) {
        return book.dateAdded != book.dateFinished;
      });
    });

    // Get data from six months in the past

    this.booksLastMonthFinished = $firebaseArray(buildMonthRef(dateService.changeMonth(today, -1),  'dateFinished'));
    this.booksLastMonthAdded = $firebaseArray(buildMonthRef(dateService.changeMonth(today, -1),  'dateAdded'));

  });
