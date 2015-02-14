var expect = require('chai').expect;
var Calc = require('../lib/calc.js');

describe('Calculator', function() {

  var result;

  beforeEach(function() {
    result = 0;
  });

  it('should add two number', function() {
    result = Calc.add(5, 5);
    expect(result).to.equal(10);
  });

  it('should subtract two number', function() {
    result = Calc.subtract(10, 5);
    expect(result).to.equal(5);
  });

  it('should multply two numbers', function() {
    result = Calc.multiply(5, 5);
    expect(result).to.equal(25);
  });

  describe('divide operation', function() {

    it('should return false if negative number', function() {
      expect(Calc.divide(-10, 5)).to.equal(false);
    });

    it('should divide two numbers', function() {

      expect(Calc.divide(10, 5)).to.equal(2);
    });

  });

});

