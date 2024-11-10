import { defaultMaxListeners } from "node:events"

//////////    Function declaration
function example1(para1 ,para2) {
        return para1 * para2
}
console.log(example1(2,2))



//////////////    Function Expression
let example2 = function(p1,p2) {
          return p1+ p2
}
console.log(example2(2,2))


//if no argumnets are passed it will print Nan

////     Function no arg passed returns undefined
let example3 = function(name1, n2) {
          return "hello " + name1 + n2
        }
console.log(example3("ksdsddskk "))

/////   FUnction Hoisting (only Function declarations are hoisted)
 console.log(myexm4());
 function myexm4() {
         return "Hoisting"
 }

 //////// Function Expression are not hoisted
//  console.log(myexm5(10,10)) 
 let myexm5 = (x,y) => {
         return x*y 
 }
 /////self Invoking Function 
 (function () {
        let x="hello"
        console.log(x + " self Invoked")
 })();

//  (function () {
//         document.getElementById("demo3").innerHTML="Self Invoked"
//  })();

//////Parameters and arguments 
function functionName(parameter1,parameter2){
        /////code//
}
functionName("args1","arg2")//Arguments



///////////////Adding Properties
function greet(params) {
         return "Hello" 
        }
greet.lang="English"
console.log(greet.lang)


////////////////////////Rest operator

function multiple(val,...items){
    console.log(val)
    return items.map((item)=>{
        return val * item
    })
}
let M5 = multiple(5 ,3,4,5)
console.log(M5)


//////////////Default Parameters

function Defaultval(a="D-Abhi", b = "Patil") {
  return a + b
}

console.log(Defaultval("abhishek"))
console.log(Defaultval("newlastname ") )

///  Rest parameters 
function format(pattern, ...params) {
    return [{pattern, params}];
}
console.log(format(1, 2, 3));
    // [{ pattern: 1, params: [ 2, 3 ] }]
console.log(format());
    // [{ pattern: undefined, params: [] }]

////////////////////////////////
    function UiComponent() {
    const button = document.getElementById('myButton');
       handleClick = function(){
        return 'sas'
    }
    button.addEventListener('click', () => {
        console.log('CLICK');
        this.handleClick(); // lexical `this`
    });
}
UiComponent()  
// //////////////////////Closures examples

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
////////////////////////////////////////
// async function hello() {
//   return greeting = await Promise.resolve("Hello");
// };

// console.log(hello().then(alert))

////////////////// function constructors //////////////////
function Fconstructors(name,lastname,age,state,Job,country) {
    this.name = name;
    this.lastname = lastname;
    this.myarray = ["one","two"];

    this.mapping =function(){
         let x= this.myarray.map(val=>val + name)
         return x
     };
     
    this.fullName=  function (params) {
        return this.name + " "+ this.lastname
    }
    
}

Fconstructors.prototype.age = 23
Fconstructors.prototype.name= "adasrsh"

let fconstructor = new Fconstructors("Abhishek","Patil")
console.log(fconstructor.fullName())
console.log(fconstructor.age) // age will not added on Fconstructors

fconstructor.name = "adarsjjjjjj"
console.log(fconstructor)

console.log(fconstructor.mapping())

////////////////////////////
let promise = new Promise(function(resolve, reject) {
        var promise_kept="keept"
        
        if(promise_kept)
        resolve("done");
        else
        reject(new Error("…"));
        
        });
        console.log(promise)
////////////

let mypromise = new Promise(function(resolve,reject){
    setTimeout(function() {
      resolve(console.log("RESOLVED"))},4000);
})
