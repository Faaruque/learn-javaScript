function sample(a, b, callback) {
  var c = a + b;
  var d = a - b;
  var result = callback(c, d);
  return result;
}

// example - 1
function sum(c, d) {
  return c + d;
}
var result = sample(20, 15, sum);
console.log(result);

// example - 2
var result2 = sample(20, 15, function (c, d) {
  return c - d;
});
console.log(result2);

// example - 3
var result3 = sample(7, 4, function (c, d) {
  return c * d;
});
console.log(result3);

// example -4
function divided(c, d) {
  return c / d;
}
var result4 = sample(8, 4, divided);
console.log(result4);
