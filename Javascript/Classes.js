


class MyClass{
    constructor(name,last){
            this.name= name;
            this.last=last;
        }
            present(){
                return "Hello" +this.name
            }
}

// let Jhon = new MyClass("Jhon", "Doe");
// console.log(Jhon) 

//////////////////////////////////Inheritance  /////////////////
class Mary extends MyClass{
    constructor(name,last){
        super(name,last);
    }

    get lastName(){
        return this.last
    }
   
    show() {
    return this.name + ', it is a ' + this.last;
  }
}


let mary2 = new Mary("Mary","Dove","GLB")
console.log(mary2.show()) 
console.log(mary2.lastName)

/////////Function classes/////////////////////////////

function makeClass(params) {
    let a = params
    return class  mycls{
        constructor(name){
            this.name=name
        }
        aMethod(){
            return this.name + " "+ a + " function class method"
        }
    }
}

let  funClass = makeClass("func argument");
console.log(new funClass("sds").aMethod())


//////////////////////////////////////////////////////////////////
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        // this.toString(x,y)
    }
    toString() {
        return `${this.x}, ${this.y}`;
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color;
    }
}

const coloPoint = new ColorPoint("First","second","red")
// console.log(coloPoint instanceof Point,typeof Point)
console.log(coloPoint.toString())

// Class expressions

let ClassExp = class {
    // constructor(fname,y){
    //     this.fname=fname;
    //     this.y=y
    // }
        aMethod() {
            return "This i a method inside classs"
        }
}
console.log(new ClassExp("one",'two').aMethod())



/////////FUnction classes

function makeClass(params) {
    let a = params
    return class {
        
        aMethod(){
            return  a + " function class"
        }
    }
}
let  funClass = makeClass("func argument");
console.log(new funClass().aMethod())
/////////////////////////////////imp chaining  this prototype//////////////////////////


function Hero(name, level) {
    this.name = name;
    this.level = level;
    this.fullDetials = function (params) {
        return "nameMEthod==> " +this.name +" "+ this.level 
    }
    // function sdsd(){ return "sdkjsd"}  // wont work
}
// Adding a method to the constructor
Hero.prototype.greet = function() {
    return `${this.name} says hello.`;
}
let aa  = new Hero("abhish",34)
console.log(aa.greet())

///////Getters/////////////

class GettersEx{
    constructor(fname){
        this.fname= fname
    }
    get name(){
        return this.fname
    }
}
let getUser= new GettersEx("adarsh")
console.log(getUser.name)

//////////////////////////
class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}
const myshape = new Shape("1",23,23)
console.log(myshape)

/////////////////////Modules
let num_set = [1, 2, 3, 4, 5];
  
export default function hello() {
    console.log("Hello World!");
}
export { num_set,MyClass1 };