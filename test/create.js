const loadingIndicator = require('../build/ng2-simple-loading.decorator')
  .LoadingIndicator;
const expect = require('chai').expect;

describe('Initial', function() {
  it('should loading-indicator is function', function() {
    expect(loadingIndicator).to.be.a('function');
  });
});
