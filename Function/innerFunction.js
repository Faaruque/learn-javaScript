function great(greet, name) {
  function sayHi() {
    console.log(greet, name);
  }
  sayHi();
}
great("Good Morning", "Rakib");

// example - 2
function something(greet, name) {
  function getFirstName() {
    if (name) {
      return name.split(" ")[0];
    } else {
      return "Mr. X";
    }
  }
  let msg = greet + " " + getFirstName();
  console.log(msg);
}
something("Good Morning", "Rakib Hasan");
