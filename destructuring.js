let person = {
  name: "Sakib",
  age: 32,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};
let {
  name,
  age,
  address,
  address: { city, country },
} = person;

console.log(name, age, city, country);
