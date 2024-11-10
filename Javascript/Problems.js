const palindrome = (str) => {
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
};
console.log(palindrome("racecar"));
console.log("//////////////////////////");

// //////////////////////////////////////

const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    // check if the number is a multiple of 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } // check if the number is a multiple of 3
    else if (i % 3 === 0) {
      console.log("fizz");
    } // check if the number is a multiple of 5
    else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};
fizzBuzz(15);
console.log("//////////////////////////");
////////////////////////////////////////
function findVowels(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "0", "u"];

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(findVowels("aaiAAe"));
console.log("//////////////////////////");

//////////////////////////////////////////////
function fibonacci(num) {
  var a = 0,
    b = 1,
    sum;

  for (let i = 0; i <= num; i++) {
    // console.log(a)
    sum = a + b;
    a = b;
    b = sum;
  }
  return sum;
}
document.write("Fibonacci(5): " + fibonacci(5) + "<br>");
console.log("//////////////////////////");

////Sum of n numbers
const number = [100];
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
