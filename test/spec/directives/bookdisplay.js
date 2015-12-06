'use strict';

describe('Directive: bookDisplay', function () {

  // load the directive's module
  beforeEach(module('bookCatalogApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<book-display></book-display>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the bookDisplay directive');
  }));
});
