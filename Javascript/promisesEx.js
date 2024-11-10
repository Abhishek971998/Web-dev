
  let a  = "2"
  let x =  typeof(a)==="number"

  console.log((x))

  console.log( x && a==Math.floor(a) ?"whole":"decimal")

function sum (a, b) {
return new Promise((resolve, reject) =>{ 
    let floor = a!==Math.floor(a) || b!==Math.floor(b)
    console.log(floor)
  setTimeout(() => {
    if (typeof a !== "number" ||floor || typeof b !== "number") {        // testing input types
	 return reject("Inputs must be numbers")
   }
   resolve(a + b);
  }, 1000);
});
}

let mysum = sum(2, 22.3);

mysum.then(function (result) {
document.write(" 10 + 5: ", result);
}).catch((err)=>console.log(err))

let num=[2,4,1,45,23,12]
let sorted = num.sort()//[1,12,2,23,4,45]
console.log(sorted)
let realSort= num.sort((a,b)=>a-b)

  