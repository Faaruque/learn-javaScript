// example -1
var array = [1, 2, 5, 3];
var randomNumber = array.map(function (value) {
  return Math.floor(Math.random() * 50);
});
console.log(randomNumber);

// example -2
var array2 = [3, 2, 3, 5];
var sum = 0;
var add = array2.map(function (value) {
  return (sum += value);
});
console.log(sum);

// exaple - 3
var array3 = [3, 2, 5, 4];
var sqr = array3.map(function (value) {
  return value * value;
});
console.log(sqr);

// example -4
var array4 = [8, 3, 9, 6];
var add5 = array4.map(function (value) {
  return value + 5;
});
console.log(add5);

// example - 5
let student = [
  {
    name: "Sakib",
    age: 35,
  },
  {
    name: "Sumon",
    age: 25,
  },
  {
    name: "Rakib",
    age: 30,
  },
  {
    name: "Rafiq",
    age: 45,
  },
];
var result = [];
var print = student.map(function (value) {
  if (value.age >= 30) {
    result.push(value.name);
  }
});
console.log(result);

// map function implement
let myArry = [4, 3, 6, 2];
function myMap(myArr, cb) {
  var newArry = [];
  for (var i = 0; i < myArry.length; i++) {
    var result = cb(myArry[i], i, myArry);
    newArry.push(result);
  }
  return newArry;
}
let sqr2 = myMap(myArry, function (value) {
  return value * 2;
});
console.log(sqr2);
