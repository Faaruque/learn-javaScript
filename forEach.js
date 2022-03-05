// array traverse
let arry = [3, 5, 1, 2, 6];

var sum = 0;
arry.forEach(function (value, index, arry) {
  //   console.log(value, index, arry);
  sum += value;
});
console.log(sum);

// ForEach Function implement
let arr = [1, 2, 6, 3, 2];
function myForEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

var sum = 0;
myForEach(arr, function (value, index, arry) {
  //   console.log(value, index, arry);
  sum += value;
});
console.log(sum);

// array every value add 5 with loop
let ary = [3, 2, 5, 1];
var result = [];
for (var i = 0; i < ary.length; i++) {
  result.push(ary[i] + 2);
}
console.log(result);

// array every value add 4 with ForEach
let arry2 = [3, 2, 4, 5, 1];
arry2.forEach(function (val, idx) {
  arry2[idx] = val + 4;
});
console.log(arry2);

// example - 2
let array3 = [5, 6, 3, 7];
array3.forEach(function (ar) {
  result = ar + 2;
  console.log(result);
});
