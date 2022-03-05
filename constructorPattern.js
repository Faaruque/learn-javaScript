let Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.print = function () {
    console.log("My Name is " + this.name);
    console.log("My Age is " + this.age);
  };
};
let person1 = new Person("Faruque", 35);
person1.print();
let person2 = new Person("Millad", 25);
person2.print();
let person3 = new Person("Motaleb", 22);
person3.print();
