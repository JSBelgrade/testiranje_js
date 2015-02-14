'use strict';

// polymorph in JS
function morph() {
  var args = [].slice.call(arguments, 0);
  return args;
}

function testPoly(param) {
  var args = [].slice.call(arguments, 0);

  if (typeof param === 'string') {
    console.log(param);
  }
}

testPoly(1, 'test'); // args are [1, 'test'] but param is 1, as a first param passed into function

function toArray(obj) {
  var arr = [],
      prop;

  for (prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arr.push(prop);
    }
  }

  return arr;
}

function randomItem(collection) {
  var arr = ({}.toString.call(collection) !== '[object Array]') ? toArray(collection) : collection;
  return arr[Math.floor(arr.length * Math.random())];
}

// console.log(randomItem({a:'a', b:'b', c:'c'}));

