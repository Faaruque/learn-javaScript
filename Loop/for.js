for (let i = 1; i <= 100; i++) {
  // console.log(i + " I am for loop");
}

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    // console.log(i);
  }
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
  // console.log(sum + " + " + i + " = " + (sum + i));
  sum += i;
}
console.log("result = " + sum);

let eventSum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    eventSum += i;
  }
}
console.log("result = " + eventSum);
