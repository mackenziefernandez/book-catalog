'use strict';

describe('Controller: ViewbooksCtrl', function () {

  // load the controller's module
  beforeEach(module('bookCatalogApp'));

  var ViewbooksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewbooksCtrl = $controller('ViewbooksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewbooksCtrl.awesomeThings.length).toBe(3);
  });
});
