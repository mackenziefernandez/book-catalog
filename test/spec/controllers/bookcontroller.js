'use strict';

describe('Controller: BookcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('bookCatalogApp'));

  var BookcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookcontrollerCtrl = $controller('BookcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BookcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
