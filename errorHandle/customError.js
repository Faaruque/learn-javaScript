class myError extends Error {
  constructor(mgs) {
    super(mgs);
    if (Error.captureStrackTrace) {
      Error.captureStrackTrace(this, myError);
    }
  }
}

try {
  console.log("Hello, I am one");
  console.log("Hello, I am two");
  throw new myError("I am Custom Error");
  console.log("Hello, I am three");
} catch (e) {
  console.log(e.message);
} finally {
  console.log("I am finally Eror");
}
