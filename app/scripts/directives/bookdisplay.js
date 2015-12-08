'use strict';

/**
 * @ngdoc directive
 * @name bookCatalogApp.directive:bookDisplay
 * @description
 * # bookDisplay
 */
angular.module('bookCatalogApp')
  .directive('bookDisplay', function () {
    return {
      replace:true,
      template: `<div class="side-by-side">
      <img class="bookCoverList" ng-src="{{book.imageURL}}" />
          <div>
            <p>{{book.title}}</p>
            <p>{{book.authorFirst}} {{book.authorLast}} ({{book.length}} pages)</p>
          </div></div>`,
      restrict: 'E'
    };
  });
