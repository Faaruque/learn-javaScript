function higer(a, b, func) {
  var c = a + b;
  var d = a - b;
  return function multiply() {
    var e = func(a, b);
    return c * d * e;
  };
}
var result = higer(5, 2, function (a, b) {
  return a + b;
});
console.log(result());

// example - 2
function sample(a, b) {
  var c = a + b;
  var d = a - b;
  var result = sum(c, d);
  return result;
}
function sum(c, d) {
  return c + d;
}
console.log(sample(20, 15));
