

let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 3
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  },
  {
    "color": "white",
    "type": "van",
    "registration": new Date('2017-01-03'),
    "capacity": 6
  },
  {
    "color": "blue",
    "type": "lorry",
    "registration": new Date('2017-01-03'),
    "capacity": 9
  }
]
let newcarBeg = {
  "color": "newcarbeg",
  "type": "cabrio",
  "registration": new Date('2016-05-02'),
  "capacity": 2
}
cars.unshift(newcarBeg);

let carEnd = {
 "color": "redendd",
 "type": "cabrio",
 "registration": new Date('2016-05-02'),
 "capacity": 2
}
cars.push(carEnd);




let middle = {
  "color": "middle",
  "type": "cabrio",
  "registration": new Date('2016-05-02'),
  "capacity": 2
}
cars.splice(4, 0, middle)

let car = cars.map(car => car.color);
// /////////////////////////////////////////////////////
// let a = 2, 
//     b = 2;
// if (a > b) {
//     document.write('a is greater than b');
// } else if (a < b) {
//     document.write('a is less than b');
// } else {
//     document.write('a is equal to b');
// }

// document.getElementById("demo").innerHTML= 
