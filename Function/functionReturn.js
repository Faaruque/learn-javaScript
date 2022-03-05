function addAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
let result = addAll(3, 2, 1);
console.log(result);

function person(name, email) {
  return {
    name: name,
    email: email,
  };
}
let person1 = person("Sakib", "example@gmail.com");
console.log(person1);
