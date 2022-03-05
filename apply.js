let print = function (color1, color2) {
  console.log("Car Name : " + this.name);
  console.log("Car Model : " + this.model);
  console.log("Available Color : " + color1 + " and " + color2);
};
let car = {
  name: "Toyota",
  model: "Toyota C-HR",
};

let color1 = "Black";
let color2 = "White";

let colorArry = [color1, color2];

print.apply(car, colorArry);
