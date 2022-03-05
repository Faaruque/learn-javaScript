// a object can be change an Array
let obj = {
  a: 10,
  b: 20,
};
console.log(Object.entries(obj));

// a Array can be change an object
let arr = [
  ["a", 10],
  ["b", 20],
];
console.log(Object.fromEntries(arr));
