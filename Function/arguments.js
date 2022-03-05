function add(a, b) {
  let result = a + b;
  console.log(result);
}
add(10, 30);
add(5, 10);

let arry1 = [2, 3, 9];
let arry2 = [5, 2, 6];
let arry3 = [9, 4, 3];

function sumOfArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
}
sumOfArray(arry1);
sumOfArray(arry2);
sumOfArray(arry3);

function test(a, b, c) {
  // console.log(arguments)
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
test(10, 20, 30);

function addAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}
addAll(3, 4, 5, 22, 10, 14);
addAll(4, 6, 7, 8, 1, 6, 32, 11);
addAll(9, 8, 3, 2, 1, 6, 9, 4, 4, 24);
