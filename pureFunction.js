// pure Function
function multiply(a) {
  return a * a;
}
console.log(multiply(10));
console.log(multiply(10));
console.log(multiply(10));
console.log(multiply(10));

// Function side effects it's not a pure function
var a = 20;
function change() {
  a = 50;
}
change();
console.log(a);

var pointObj = {
  a: 25,
  b: 35,
};
function print(pointObj) {
  pointObj.a = 500;
  pointObj.b = 600;
  console.log(pointObj);
}
print(pointObj);
console.log(pointObj);
