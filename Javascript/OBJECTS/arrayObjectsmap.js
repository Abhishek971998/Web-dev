

// /////////// ARRAY MAPPING
const array = [1, 2, 3, 4];
      array.forEach((element, index,arr) => {
      console.log(`Element ${element} at index ${index}`)
})
var txt = "";
var numbers = [45, 4, 9, 16, 25];

 numbers.forEach((value, index, array)=> {
  txt = txt + value + "<br>";
});

// document.write(txt)

///////////////////Object mapping
var person = {fname:"John", lname:"Doe", age:25}; 
var x="",forINtxt=""
// FOR IN
for (x in person) {
  forINtxt += person[x] + " ";
}
// document.write(forINtxt)

// 
let cars = ["BMW", "Volvo", "Mini"];
var forOF
for (let x of cars){
    forOF += x + "<br>"
}
document.write(forOF)




// // //////// ARRAY OF OBJECTS MAPPING
let names = [
            {name:"bike", price: { Brand:"mahindra"}},
            {name:"CAR", price: { Brand:"Suzuki"}},
            {name:"Plane", price: { Brand:"EMIRATES"}},
         ]
       let namePrint = names.map((val)=>{
                   return `<li>${val.name}</li>`
       }) 
       document.write(namePrint.join(""))


 /////////////////////ADDING NEW KEY  VALUE TO ARRAY OBJECT
 
 let newKey = names.map((obj)=>({...obj,age:34}))
