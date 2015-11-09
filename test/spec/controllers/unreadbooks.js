'use strict';

describe('Controller: UnreadbooksCtrl', function () {

  // load the controller's module
  beforeEach(module('bookCatalogApp'));

  var UnreadbooksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UnreadbooksCtrl = $controller('UnreadbooksCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UnreadbooksCtrl.awesomeThings.length).toBe(3);
  });
});
