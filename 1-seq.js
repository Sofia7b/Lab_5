'use strict';

// const seq = (f) => (g) => (x) => 0;

// const seq = function(f) { return function(g) { return function(x) { return 0;} } }

const seq = (f) => (g) => (typeof g === 'number' ? f(g) : seq((x) => f(g(x))));

let r = seq(x => x + 7)
   (x => x * 2)(5)
console.log(r);

r = seq(x => x * 2)
   (x => x + 7)(5)
console.log(r);

r = seq(x => x + 1)
   (x => x * 2)
   (x => x / 3)
   (x => x - 4)(7)
console.log(r);

module.exports = { seq }; 
