let print = function () {
  return this.name;
};

let sakib = {
  name: "Tamim",
  age: 35,
};
let result = print.call(sakib);
console.log(result);
