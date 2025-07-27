let m = 20;
let n = 15;

console.log(m > n);     // true
console.log(m < n);     // false
console.log(m >= 20);   // true
console.log(n <= 10);   // false


let a = 5;
let b = '5';

console.log(a == b);   // true  → compares value only
console.log(a === b);  // false → compares value and type


let x = 10;
let y = '10';

console.log(x != y);    // false  → value is the same
console.log(x !== y);   // true   → different types


console.log(null == undefined);   // true
console.log(null === undefined);  // false
