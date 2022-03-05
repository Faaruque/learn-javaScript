let array = [
  [80, 60, 90, 85],
  [95, 90, 80, 65],
  [75, 80, 90, 85],
];
console.log(array);
console.log(array[1]);
console.log(array[1][3]);

let arry = [
  [80, 60, 90, 85],
  [95, 90, 80, 65],
  [75, 80, 90, 85],
];
for (let i = 0; i < arry.length; i++) {
  for (let j = 0; j < arry[i].length; j++) {
    console.log("Element " + i + ": " + arry[i][j]);
  }
}
