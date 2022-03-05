function errorHandle(text) {
  try {
    let msg = text.trim();
    let result = msg.split(" ");
    return result;
  } catch (err) {
    // console.log(err.message);
    console.log("Plese provide a valid str");
  }
}
let result = errorHandle("Hello World");
console.log(result);
