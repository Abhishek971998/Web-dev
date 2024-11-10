
    ////Simple Object
    var obj = {key1: "value1", key2: "value2"};
     var pair = {key3: "value3"};
     obj = {...obj, ...pair};
      console.log(obj)

// // //////// ARRAY OF OBJECTS MAPPING
let names = [
  { id:21,name:"bike", price: { Brand:"mahindra"}},
  { id:22,name:"CAR", price: { Brand:"Suzuki"}},
  { id:23,name:"Plane", price: { Brand:"EMIRATES"}},
]
//    let namePrint = names.map((val)=>{
//                return `<li>${val.name}</li>`
//    }) 
//    document.write(namePrint.join(""))


/////////////////////ADDING NEW KEY  VALUE TO ARRAY OBJECT
let newKey = names.map((obj)=>({...obj,tech:"phone"}))

document.write( names.map((val)=>{
return `<div> 
<li>${val.name }</li>
<button onClick=remove(${val.id})>deket</button>
</div>`
}) )
/////////////////////////////////////////

var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  city:"gulbarga",

  fullName : function() {
    return this.firstName + " " + this.lastName;
  },

   City(){
       return `the city name ${this.city}` 
   },

   get myProfile(){
       return this.firstName
   },

   set lang(lang){
     this.language = lang
   }
   
};

function sayHi() {
   return  'Hello, my name is'+this.firstName
}
// person.sayHi = sayHi;
// console.log(person.sayHi())

// console.log(person.City())

// console.log(person.fullName())

// console.log(person.myProfile)


////////////////////////OBJECT CONSTRUCTOR
let Phone = function(category,brand,Ram,memory){
    this.category=category,
    this.brand=brand,
    this.Ram = Ram,
    this.memory= memory,
    this.details =function() {
  return this.brand + " " + this.memory;
};
}

Phone.prototype.FullDetails = function() {
  return this.brand + " " + this.memory;
};

let mobile= new Phone("Mobile","Apple",4,128)
let mobile2= new Phone("Mobile","Samsung",8,256)
mobile2.brand="MI"
console.log(mobile2.details())

//////////////////////
var people = [{
        id: 1,
        name: "John",
        age: 31
    }, 
    {
        id: 2,
        name: "Jane",
        age: 33
    },
];

let names= people.map((val)=>val.name +"--" +val.age)
var young = people.filter((val=>val.age > 32))
let filternames= young.map((val)=> {
            return `<h2> ${val.name} </h2>`
        })
///////////////////////////        

// //////////destrcuring
const {brand,category} = mobile2;
// console.log(brand)

/////////////////////////////////////call ,apply
let personFullname = {
    fullName: function(city,state) {
    return this.name + "" + city + " "+ state
     }
  }

 let newperson= {   
    name:"abhishek",
    last:"patil"
}
 let c = personFullname.fullName.call(newperson,"asa","second")
 console.log(c)
/////////////////////////////////////////Apply
let personFullnameApply = {
  fullName: function(city,state) {
  return this.name + "" + city + " "+ state
   }
}

let newpersonApply= {   
  name:" abhishek",
  last:"patil"
}
let ApplyEx = personFullnameApply.fullName.apply(newpersonApply,["first","second"])
console.log(ApplyEx)


////////////////////////////////////
const person = {
   name:"person object",
   video:["js","this","ahsjas"],
   info() {
       this.video.forEach(function (tag) {
            console.log(this.name + tag)
       },this)
   },

}
person.info()
//////////////////////////////////////Getter
const obj = {
  log: ['a', 'b', 'c'],
  get latest() {
    if (this.log.length === 0) {
      return undefined;
    }
    return this.log;
  }
};

console.log(obj.latest);

//////////////////
let f = function () {
   this.a = 1;
   this.b = 2;
}
let o = new f(); // {a: 1, b: 2}

// add properties in f function's prototype
f.prototype.b = 3;          // B wont chnage
f.prototype.c = 4;              

o.a=20           
console.log("a is " +o.a) 
////////////////////////

console.log("b is " +o.b)

console.log("c is " +o.c)

