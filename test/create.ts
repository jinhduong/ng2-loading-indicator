const loadingIndicator = require('../build/ng2-simple-loading.decorator')
  .LoadingIndicator;
import * as chai from 'chai';
const expect = chai.expect;

describe('Initial', function() {
  it('should loading-indicator is function', function() {
    expect(loadingIndicator).to.be.a('function');
  });
});
