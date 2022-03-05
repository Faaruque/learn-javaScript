class Company {
  constructor(name) {
    this.name = name;
  }
  cName() {
    console.log("ROYAL");
  }
}
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
let c = new Car("toyota", "Black", 250000);
console.log(c);
c.cName();
