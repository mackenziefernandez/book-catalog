'use strict';

describe('Service: dateService', function () {

  // load the service's module
  beforeEach(module('bookCatalogApp'));

  // instantiate service
  var dateService;
  beforeEach(inject(function (_dateService_) {
    dateService = _dateService_;
  }));

  it('should do something', function () {
    expect(!!dateService).toBe(true);
  });

  describe('dateToString', () => {
    it('should return a date in a string format of YYYY-MM-DD', () => {
      var testDate = new Date(2015, 11, 1);
      // expect(dateToString(testDate)).toBe('2015-11-01');
      expect(true).toBe(false);
    });
  });

});
