let array = [3, 7, 9, 37, 10, 13, 16, 12];
let find = 10;
let isFound = false;
for (let i = 0; i < array.length; i++) {
  if (array[i] === find) {
    console.log("Data Found at Index " + [i]);
    isFound = true;
    break;
  }
}
if (!isFound) {
  console.log("Data not Found");
}
