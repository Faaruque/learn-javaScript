import Company from "./Company.js";

class Car extends Company {
  constructor(name, color, price) {
    super(name);
    this.color = color;
    this.price = price;
  }
  print() {
    return this.name * this.price;
  }
  // Method Overriding
  cName() {
    console.log("Company Name Is ROYAL");
  }
}
export default Car;
