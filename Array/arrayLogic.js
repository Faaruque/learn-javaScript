var arry = [2, 3, 4, 5, 6, 7, 8, 10];
for (let i = 0; i < arry.length; i++) {
  if (arry[i] % 2 === 0) {
    console.log(arry[i]);
  }
}

// array event number sum
var arry = [2, 3, 4, 5, 6, 7, 8, 10];
let sum = 0;
for (let i = 0; i < arry.length; i++) {
  if (arry[i] % 2 === 0) {
    sum += arry[i];
  }
}
console.log(sum);
