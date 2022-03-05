let array = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < array.length / 2; i++) {
  var temp = array[i];
  array[i] = array[array.length - 1 - i];
  array[array.length - 1 - i] = temp;
}
console.log(array);

// array reverse method
let array2 = [5, 6, 7, 8, 9, 10];
let arrResult = array2.reverse();
console.log(arrResult);
