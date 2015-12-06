'use strict';

describe('Controller: ReadingStatsCtrl', function () {

  // load the controller's module
  beforeEach(module('bookCatalogApp'));

  var ReadingStatsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReadingStatsCtrl = $controller('ReadingStatsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReadingStatsCtrl.awesomeThings.length).toBe(3);
  });
});
