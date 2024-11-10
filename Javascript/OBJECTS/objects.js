var people = [{
        id: 1,
        name: "John",
        age: 31
    }, 
    {
        id: 2,
        name: "Jane",
        age: 31
    },
    {
        id: 3,
        name: "Peter",
        age: 55
    },
    {
        id: 2,
        name: "Bob",
        age: 32
    }
];
////////////// destructuring
const user = {
    id: 42,
    is_verified: true
};
const {id, is_verified} = user;
console.log("id-"+ id)


/////////////array in list
var fruits = ["Banana", "Orange", "Apple", "Mango"];
let text=""
fruits.forEach(myFunction);

function myFunction(value) {
    text += "<li>" + value + "</li>";
} 
document.write(text);

////////////////////object filter map 
let names= people.map((val)=>val.name +"--" +val.age)
console.log(names);

var young = people.filter((val=>val.age < 32))
console.log(young);

 let filternames= young.map((val)=> {
            return `<h2> ${val.name} </h2>`
        })

document.write(filternames)
console.log(filternames)

document.getElementById("demo").innerHTML = filternames
let ages = people.map((val)=>val.age)
console.log(ages)


///////////////////////////////object destructuring
// const props = [
//   { id: 1, name: 'Fizz'},
//   { id: 2, name: 'Buzz'},
//   { id: 3, name: 'FizzBuzz'}
// ];

// const [{ name="fff" }] = props;

// console.log(name); // "FizzBuzz"

// let person = {name: "Sarah", country: "Nigeria", job: "Developer"};

// let {name = "myName", friend = "Annie"} = person;

console.log(name);//"Sarah"
console.log(friend);//"Annie"
