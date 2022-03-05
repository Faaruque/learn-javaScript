let a = 10,
  b = 20;
let obj = {
  a,
  b,
};
console.log(obj);

// example - 2
let x = 5,
  y = 10;
let obj2 = {
  x,
  y,
  print() {
    console.log(this);
  },
};
obj2.print();
