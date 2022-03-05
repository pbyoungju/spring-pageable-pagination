'use strict';

var expect = require("chai").expect;
var index = require("../dist/index.js");

describe('test index test', () => {
    it('should return hello', () => {
        var result = index.starter("hello")
        expect(result).to.equal('hello');
    })
    it('should return world', () => {
        var result = index.starter("world");
        expect(result).to.equal('world');
    })
});
