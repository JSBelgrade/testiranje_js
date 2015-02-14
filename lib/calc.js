'use strict';

var Calc = {
   add: function(a, b) {
    return a + b;
   },

  subtract: function(a, b) {
    return a - b;
  },

  multiply: function(a, b) {
    return a * b;
  },

  divide: function(a, b) {
    if (a < 0 || b < 0) {
      return false;
    }

    return a / b;
  }
};

module.exports = Calc;
