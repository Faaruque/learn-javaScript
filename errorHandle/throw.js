try {
  console.log("I am line -1");
  console.log("I am line -2");
  throw new Error("I am a Error");
  console.log("I am line -3");
  console.log("I am line -4");
} catch (err) {
  console.log(err.message);
}
