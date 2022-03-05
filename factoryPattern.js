let person = function (name, age) {
  return {
    name: name,
    age: age,
    print: function () {
      console.log("My Name is " + this.name);
      console.log("My Age is " + this.age);
    },
  };
};
let person1 = person("Faruque", 35);
person1.print();
let person2 = person("Millad", 25);
person2.print();
let person3 = person("Motaleb", 22);
person3.print();
