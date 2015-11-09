'use strict';

describe('Controller: EditbookCtrl', function () {

  // load the controller's module
  beforeEach(module('bookCatalogApp'));

  var EditbookCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditbookCtrl = $controller('EditbookCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditbookCtrl.awesomeThings.length).toBe(3);
  });
});
