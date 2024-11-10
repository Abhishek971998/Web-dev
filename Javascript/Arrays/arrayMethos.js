

const numbers = [1, 2, 3, 4];
console.log(numbers.length) // 4


// Accessing an array element
const myArray = [100, 200, 300];
console.log(myArray[0]); // 100
console.log(myArray[1]); // 200
console.log(myArray[2]); // 300




// adds at the end
const cart = ['apple', 'orange'];
cart.push('pear');
console.log(cart);              //["apple", "orange", "pear"] 

//unSHIFHT Adds at start
const myUnshift =["11","33"];
myUnshift.unshift("22");
console.log(myUnshift)          //[22,11,33]

//Removes at end 
const ingredients = ['eggs', 'flour', 'chocolate'];
const poppedIngredient = ingredients.pop(); // 'chocolate'
console.log(ingredients);       // ['eggs', 'flour']

// removes at start
const myShift = ["11",'22','33']
myShift.shift(); // 11
console.log(myShift)  //[22,33]

///////////////////////////////////////////////////
let tex =""
let d = fruits.forEach((val,idx)=>{
    return tex += val+ idx +"\n"
})
console.log(tex)
/////////////////////////////////////////////////

// iterate for all elements one bt one
const array = [1, 2, 3, 4];
array.forEach((element, index,arr) => {
   console.log(`Element ${element} at index ${index} ` )

})

let cities = [
    {name: 'Los Angeles', population: 4},
    {name: 'New York', population: 2},
    {name: 'Chicago', population: 4},
    {name: 'Houston', population: 5},
    {name: 'Philadelphia', population: 6}
];

let b= cities
    .filter(city => city.population < 6)
    .sort((c1, c2) => c1.population - c2.population)
    .map(city => city.name + '=>' + city.population);

document.write(b.map((val,idx)=>{
    return `<li>${idx +" "+ val}`
}))
// 
const frameworks = ["react","angular","experss"]
const myFramework = frameworks.filter((f,index)=> {
     return  index +""+ f==="react"
                  
})
console.log(myFramework)

        let names = [ /////// array object 
            {name:"bike", price: { Brand:"mahindra"}},
            {name:"bike", price: { Brand:"Suzuki"}},
         ]
        let nameobject= {
            name:"something", price:{ Brand:"BMW" }
        }
            names.push(nameobject)
            // console.log(names)
        
        ////////MAPPING
        const printName = names.map((item) => {
                       return item.price.Brand
                    })
            // document.write(printName + " PrintNames")
            // console.log(printName)

        ///////////////////fILTERING
            const FilterName = names.filter((item) => {
                       return item.price.Brand !=="Honda"})
                    //    console.log(FilterName)

        /////////////EXAMPLE02
        let cars= [
            {name:"tesla",type:"electric"},
            {name:"BMW",type:"diesel"},
            { name:"Nissan",type:"electric"},
            { name:"Ford",type:"diesel"}
        ]
        //////////////FILTERING
        const itemNames = cars.filter((item => item.type=="electric"))

        ////////MAPPING
        var electric=itemNames.map((val,index )=> { 
         return `<li> ${key=index +" "}${val.name}</li>`
        })
        // document.write(names.name)
        // document.write(electric);/

/// find
//  const findone= cars.find(item=>item.name==="Ford")
//  console.log(findone)
// ///forEach 
//  const foreeach = cars.forEach((item)=> {  
//      return item.name
// })
// console.log(foreeach.map(item=>item.name))
