#!/usr/bin/node

var add = require('./calc.js').add;
var today = require('./date.js').today
;
console.log('0 + 0 = ' + add(0,0));
console.log(today());
