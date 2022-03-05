let array = [5, 4, 7, 6, 9, 8];
var filterFunc = array.filter(function (value) {
  //   return value % 2 === 0;
  //   return value % 2 === 1;
  return value >= 6;
});
console.log(filterFunc);

// map function implement
let arry = [1, 4, 7, 2, 9, 3];
function myFilter(arry, cb) {
  var newArry = [];
  for (var i = 0; i < arry.length; i++) {
    if (cb(arry[i], i, arry)) {
      newArry.push(arry[i]);
    }
  }
  return newArry;
}
console.log(
  myFilter(arry, function (value) {
    return value % 2 === 1;
  })
);
