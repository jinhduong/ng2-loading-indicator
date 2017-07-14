"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loadingIndicator = require('../build/ng2-simple-loading.decorator')
    .LoadingIndicator;
var chai = require("chai");
var expect = chai.expect;
describe('Initial', function () {
    it('should loading-indicator is function', function () {
        expect(loadingIndicator).to.be.a('function');
    });
});
