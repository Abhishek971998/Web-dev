let x = "";
// console.log(typeof(x))

typeof "John"; // Returns "string"
typeof 3.14; // Returns "number"
typeof true; // Returns "boolean"
typeof false; // Returns "boolean"
typeof x; // Returns "undefined" (if x has no value)
typeof { name: "John", age: 34 }; // Returns "object"
typeof [1, 2, 3, 4]; // Returns "object" (not "array", see note below)
typeof null; // Returns "object"
typeof undefined; // Returns undinfed
typeof function () {}; // Returns "function"

console.log();
let a = [0];
console.log(Array.isArray(a));

if (typeof x == undefined) {
  x = "12";
}

let num;
if (num === undefined) {
  num = 10;
}

console.log("num value " + num);

var n = -3.3343;
var pandfloot = parseInt(Math.abs(n));
console.log(Math.abs(n));
console.log(pandfloot);

////
let foo = "sdsd";
// let c2 = foo  ==undefined?"it is NOT defined": "it is defined"
// let c3 = foo !==undefined?"it is NOT defined": "it is defined"
function afun() {
  if (foo !== undefined) {
    return "if Not sd";
  } else {
    return foo;
  }
  return;
}
console.log(afun());
// console.log(c2)
// console.log(c3)

// if(typeof foo !== 'undefined'){
//     console.log("fooo")
// }

//  DATA TYPES

// PRIMITIVE                     Non Primitve

// 1. string                     1.Object
// 2.number                      2.Arrays
// 3.boolean
// 4.undefined
// 5.null
// 6.Symbol

// Primitives are compared by value.
// Two values are strictly equal if they have the same value.
var number1 = 5;
var number2 = 5;
number1 === number2; // true
var string1 = "This is a string.";
var string2 = "This is a string.";
string1 === string2; // true

// Non-primitive values are mutable data types.
// The value of an object can be changed after it gets created

var obj1 = { cat: "playful" };
var obj2 = { cat: "playful" };
obj1 === obj2; // false
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 2, 3, 4, 5];
arr1 === arr2; // false

var obj3 = { car: "purple" };
var obj4 = obj3;
obj3 === obj4; // true
