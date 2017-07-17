'use strict';

describe('Service: participants', function () {

  // load the service's module
  beforeEach(module('angularChartjsSampleApp'));

  // instantiate service
  var participants;
  beforeEach(inject(function (_participants_) {
    participants = _participants_;
  }));

  it('should do something', function () {
    expect(!!participants).toBe(true);
  });

});
