

let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  }]

  let newcar = {
  "color": "red",
  "type": "cabrio",
  "registration": new Date('2016-05-02'),
  "capacity": 2
}

cars.unshift(newcar);
// console.log("All" +cars.color)

let redCars = cars.filter(car => car.color === "red");
console.log(redCars);

let  types = redCars.map(val=>val.type)
console.log(types)


let car = cars.find(car => car.color === "red");
console.log( car)

// program to remove item from an array

function removeItemFromArray(array, n) {
    const index = array.indexOf(n);
    // if the element is in the array, remove it
    if(index > -1) {
        // remove item
        array.splice(index,2);
    }
    return array;
}
const result = removeItemFromArray([1, 2, 3 , 4, 5], 2);
console.log(result);

// //////////////////////Spread and rest operatpr
function mutilpy(mutiply,...params) {
      return params.map(val=>mutiply * val)
}
var arr = mutilpy(2,  4,6,8)
console.log(arr)

