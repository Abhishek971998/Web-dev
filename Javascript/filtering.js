var http = require("http");

http
  .createServer(function (req, res) {
    console.log("Fetching");
    res();
  })
  .listen(3000);

///////////////////////////Destructuring//////////////////
function g({ name: x }) {
  console.log("x value is " + x);
}
g({ name: 5 });
/////////////////////////////Default + Rest + Spread////////////////////////
function a(x, y = 12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
a(3) == 15;

///////////
function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
console.log(f(...[1, 2, 3]) == 6);

//////
var values = [1, 60, 34, 30, 20, 5].filter((val) => val < 10);
console.log(values + "valueesss");

function lessThan20(val) {
  return val < 20;
}

var valuesLessThan20 = values.filter(lessThan20);

console.log(valuesLessThan20);
