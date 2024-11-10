////////////////////With inBuilt methods
  let a = [12,45,78,90]
  let c = a.reverse()
  console.log(c)
  ///////////////////////////////////////////
function reverse(array){
  var output = [];

  for (let i = 0; i < array.length; i++){
       output.unshift(array[i]);
  }
  return output;
}

console.log(reverse([1,2,3,4,5,6,7]))
// //////////////////////////////////////////////////


////////////simple loop///////////
for(let i=0;i<=10;i++){
  if(i>6){
    break;
  }
  console.log(i)
}
///////////////////
var arr = [0,1,0,10, 43, 55, 63, 0,0,0,0, 5, 6, 235, 547];
let text =''
   for (let i = 0; i < arr.length; i++) {
   text += "The number is "+arr[i] +' at index'+ i + "<br>";
   }

console.log(arr)
document.write(text)
/////////////////////////////
function bubbleSort(nums) {
for (let i = 0; i < nums.length; i++) {
 for (let j = 0; j < nums.length; j++) {
    if(nums[i]<nums[j]){
      let temp = nums[i];
       nums[i]= nums[j];
       nums[j] = temp
    }
 }
  
}
return nums
}
var arr = [0,1,0,10, 43, 55, 63, 0,0,0,0, 5, 6, 235, 547];
let sorted = bubbleSort(arr)
console.log(sorted);
///////////////////////////

let arr = [ "fred", "tom", "bob" ];

for (let i of arr) {
  console.log(i);
}
/////////////////////////////////
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
// console.log(`${property}: ${object[property]}`);
}
/////////////////////////////////////////////////
var s = ""
for (var key in a) {        /// FOR IN (var i in objName)
  console.log(key+" "+ a[key])
  s +=  key + " =>"+a[key] + '<br/>'

  }
document.write (s);
///////////////////////////////////////////////////
var obj = {a: 1, b: 2, c: 3};
for (var i = 0 in obj) {
// console.log(obj[i]);
}
for(var i in obj){
console.log(i+'=>'+obj[i])
}
var p = {
  "p1": "value1",
  "p2": "value2",
  "p3": "value3"
};

Object.entries(object).forEach(
  ([key, value]) => console.log(key, value)
);


/////////////////
var myobj = [
  {name:"abhishek"},
  {name:"asrtasa"}
]
console.log(myobl.name)
for(let x in myobj){
// document.write( x + "=>" +myobj.name[x])
}
