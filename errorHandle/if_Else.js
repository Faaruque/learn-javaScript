function int(value) {
  let result = Number.parseInt(value);
  if (!result) {
    return "Plese provide a valid Number";
  }
  return result;
}
let result = int(5220.74);
console.log(result);
