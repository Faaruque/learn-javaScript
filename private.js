let Car = function (name, price) {
  this.name = name;
  this.price = price;
  let color = {
    color1: "Black",
    color2: "White",
    color3: "Blue",
  };
  let show = function () {
    console.log("Car Name : " + this.name);
    console.log("Car Price : " + this.price);
  }.bind(this);
  this.print = function () {
    show();
    console.log("Color : " + color.color1, color.color2, color.color3);
  };
};
let bmw = new Car("Toyota", 340000);
bmw.print();
