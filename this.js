// example - 1
let player = {
  name: "Sakib",
  age: 28,
  print: function () {
    return this.name;
  },
};
let outPut = player.print();
console.log(outPut);

// example - 2
let car = function (obj) {
  obj.carDetals = function () {
    return this.price;
  };
};
let bmw = {
  name: "BMW",
  color: "White",
  price: 350000,
};
car(bmw);
console.log(bmw.carDetals());

let toyota = {
  name: "TOYOTA",
  color: "Black",
  price: 250000,
};
car(toyota);
let show = toyota.carDetals();
console.log(show);

// examle - 3
let fruit = function (name, price) {
  return {
    name: name,
    price: price,
    fruitPrice: function () {
      return this.price;
    },
  };
};

let apple = fruit("Apple", 110);
console.log(apple.fruitPrice());

let mango = fruit("Mango", 220);
console.log(mango.fruitPrice());
