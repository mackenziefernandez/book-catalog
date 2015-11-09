'use strict';

describe('Controller: AddquoteCtrl', function () {

  // load the controller's module
  beforeEach(module('bookCatalogApp'));

  var AddquoteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddquoteCtrl = $controller('AddquoteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddquoteCtrl.awesomeThings.length).toBe(3);
  });
});
