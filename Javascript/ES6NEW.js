// Destructuring objects:
const obj = { first: "Jane", last: "Doe" };

const { first: f, last: l } = obj;

console.log(f, l); // f = 'Jane'; l = 'Doe'

/// Array destructuring
const destructuringArray = [12, "b", "c"];
const [x, y] = destructuringArray;
console.log(x, y);

const arr = ["a", "b"];
for (const [index, element] of arr.entries()) {
  console.log(index, element);
}
// Output:
// 0 a
// 1 b

// Default parameter values
function defaultParameterFunc(x, y = 0) {
  return [x, y];
}
defaultParameterFunc(1, 2); // [1, 2]
defaultParameterFunc(1); // [1, 0]
defaultParameterFunc(); // [undefined, 0]

///  Rest parameters
function format(pattern, ...params) {
  return [{ pattern, params }];
}
console.log(format(1, 2, 3));
// [{ pattern: 1, params: [ 2, 3 ] }]
console.log(format());
// [{ pattern: undefined, params: [] }]

////////////////////////////////
function UiComponent() {
  const button = document.getElementById("myButton");
  handleClick = function () {
    return "sas";
  };
  button.addEventListener("click", () => {
    console.log("CLICK");
    this.handleClick(); // lexical `this`
  });
}
UiComponent();
