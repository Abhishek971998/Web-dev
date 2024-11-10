// Basic Object Syntax
const person = {
  name: "John",
  age: 30,
  isStudent: false,
  greet() {
    console.log("Hello, I am " + this.name);
  },
};

// Accessing Properties
console.log(person.name); // Dot Notation
console.log(person["age"]); // Bracket Notation

// Modifying and Adding New Properties
person.age = 31; // Update existing key
person.height = 175; // Adding a new key
console.log(person); // {name: "John", age: 31, isStudent: false, greet: ..., height: 175}

// Deleting Properties
delete person.isStudent;

// Nested Objects
const student = {
  name: "Alice",
  education: { degree: "Bachelor", major: "CS" },
};
console.log(student.education.degree); // Access nested object

// Methods in Objects
const car = {
  brand: "Toyota",
  model: "Corolla",
  start() {
    console.log("The car is starting...");
  },
};
car.start();

// `this` in Methods
const user = {
  firstName: "Jane",
  lastName: "Doe",
  fullName() {
    return this.firstName + " " + this.lastName;
  },
};
console.log(user.fullName());

// Constructor Functions
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Hello, my name is " + this.name);
  };
}
const john = new Person("John", 30);
const alice = new Person("Alice", 25);

// Prototypes
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound.");
};
const dog = new Animal("Dog");
dog.speak();

// ES6 Classes
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("Hi, I'm " + this.name);
  }
}
const bob = new PersonClass("Bob", 28);
bob.greet();

// Object Methods
console.log(Object.keys(person)); // ["name", "age", "greet", "height"]
console.log(Object.values(person)); // ["John", 31, function greet() {...}, 175]
console.log(Object.entries(person)); // [["name", "John"], ["age", 31], ["greet", function() {...}], ["height", 175]]

// Shorthand Property Names
const name = "Alice",
  age = 22;
const student2 = { name, age };
console.log(student2); // {name: "Alice", age: 22}

// Object Destructuring
const { name: personName, age: personAge } = person;
console.log(personName); // "John"
console.log(personAge); // 31

// Spread Operator
const jobDetails = { job: "Engineer" };
const fullProfile = { ...person, ...jobDetails };
console.log(fullProfile); // {name: "John", age: 31, height: 175, greet: ..., job: "Engineer"}

// Property Existence Check
console.log("name" in person); // true
console.log(person.hasOwnProperty("age")); // true

// Sealing & Freezing Objects
const sealedObj = Object.seal(person);
sealedObj.age = 40;
delete sealedObj.height; // Can't delete properties.
const frozenObj = Object.freeze(person);
frozenObj.age = 50; // Can't modify properties.

// Iteration with `for...in`
for (let key in person) {
  console.log(key + ": " + person[key]); // Iterates over keys
}

// Iteration with `for...of` on Object.keys()
for (let key of Object.keys(person)) {
  console.log(key + ": " + person[key]); // Iterates over keys (Object.keys returns an array)
}

// Iteration with `for...of` on Object.entries()
for (let [key, value] of Object.entries(person)) {
  console.log(key + ": " + value); // Iterates over key-value pairs
}
