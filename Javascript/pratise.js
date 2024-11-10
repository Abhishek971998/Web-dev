

var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
var anotherArrayList = arrayList;  // Referenced arrayList by another variable
// arrayList = []; // Empty the array
arrayList.length = 0; // Empty the array by setting length to 0

// console.log(anotherArrayList); 
// console.log(Array.isArray(arrayList))

//////////////

// function isInt(num) {
//   return num % 1 == 0
// }

// console.log(isInt("ehdwknd")); // true

// console.log(isInt(4)); // true
// console.log(isInt(0.3)); // false
// /////////////////////////////////////////////

let a  = [1,34,5,46,67]

function dup(params) {
    return params.concat(params)
}
   console.log(dup(a))

//    /////////////////////////////Closures
console.log(x(2)(3)(3))
function x(x) {
    return function (y) {
        return function(z){
            return x + y + z
    }
  }  
}
/////////////////////////////////////
function base(baseNum) {
    return function(N){
        return baseNum + N
    }
}

const add2 = base(2);
console.log(add2(19))
//////////////////////////////////////////

for (let i = 1; i <= 15; i++) {
  let  f = i % 3 == 0,
       b = i % 5 == 0;
  console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
}
console.log("////////////////////////////")
///////////////////////////////////////////////
let fword= "army"
let  sword= "mary";
console.log(fword)
console.log(anagram(fword,sword))

function anagram(f,s){
   var a= f,b= s;
   a=a.split("").sort().join("");
   b=b.split("").sort().join("")
      return a==b

}
console.log("////////////////////////////");

////////////////////////////////////////////////
(function() {
  let a1 = b1 = 5;
//   let  a = b;  interP
//        b = 5;
})();
console.log(""+b1);//5
console.log("////////////////////////////")
/////////////////////////////////////////////

function multiply(a){
    return function(b){
        return a * b
    }
}
console.log(multiply(2)(3))

console.log("////////////////////////////")
//////////////////////////////////////////////



var obj1 = {
	bar: "obj1",
	foo: "foo",
  three:function(){
        return this.bar
    }
};

console.log(obj1.three())
console.log("////////////////////////////")
//////////////////////////////////////////////////////

let num=[2,4,1,45,23,12]
let sorted = num.sort()//[1,12,2,23,4,45]
console.log(sorted)
let realSort= num.sort((a,b)=>a-b)
console.log(realSort)

console.log("////////////////////////////")
///////////////////////////////////////////////////////

function func() {
  var aa = bb= 10;
}
func()
console.log(bb); //10  global
console.log(aa)  // undefined



////////////////////////////
function funPrivate(){
let priv= "Secrect code"
 return function(){
     return priv;
 }
}
// console.log(funPrivate()())     // secrect code
var getPrev= funPrivate();
console.log("Private=> " + getPrev())
console.log("////////////////////////////")
//////////////////////////////////////////////////////////

var globalVar = "abc";

// Parent self invoking function
function outerFunction (outerArg) { 
          var outerFuncVar = 'x';    
  return function (innerArg) { 
    var innerFuncVar = "y";
    return console.log(         
      "outerArg = " + outerArg + "\n" +
      "outerFuncVar = " + outerFuncVar + "\n" +
      "innerArg = " + innerArg + "\n" +
      "innerFuncVar = " + innerFuncVar + "\n" +
      "globalVar = " + globalVar);
  }
}
let outFun = outerFunction(5);
console.log(outFun(4))
console.log("////////////////////////////")
/////////////////////////////////////////////////////////////
var output = (function(x) {
  delete x;
  return x;
})(0);

console.log(output);//0
