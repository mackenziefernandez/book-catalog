'use strict';

describe('Directive: underlinedInput', function () {

  // load the directive's module
  beforeEach(module('bookCatalogApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<underlined-input></underlined-input>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the underlinedInput directive');
  }));
});
