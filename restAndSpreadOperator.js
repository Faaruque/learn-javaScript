// rest Operator
function add(...rest) {
  console.log(rest);
  return rest.reduce((a, b) => a + b);
}
console.log(add(20, 10, 5, 3, 2));

//Spread Operator

let a = [1, 2, 3, 4];
console.log(...a);

// exaple - 2
let obj = {
  a: 10,
  b: 20,
  c: 30,
};
let obj2 = {
  ...obj,
};
console.log(obj2);
