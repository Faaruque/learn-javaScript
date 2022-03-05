const _name = Symbol();
const _age = Symbol();
const _print = Symbol();
class Person {
  constructor(name, age) {
    this[_name] = name;
    this[_age] = age;
  }
  [_print]() {
    console.log(`Drawing ... `);
  }
}
let p1 = new Person("Sakib", "32");
console.log(p1);

// privare any property with the help of wekmap
const _personName = new WeakMap();
const _personAge = new WeakMap();
class PersonCls {
  constructor(name, age) {
    _personName.set(this, name);
    _personAge.set(this, age);
  }
  print() {
    console.log("Drawing ...");
    console.log(_personName.get(this), _personAge.get(this));
  }
}
let p = new PersonCls("Rakib", 23);
p.print();
