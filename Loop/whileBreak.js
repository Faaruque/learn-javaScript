while (true) {
  let rand = Math.floor(Math.random() * 99);
  if (rand === 9) {
    console.log("Winner");
    break;
  } else {
    console.log("You Hava Got " + rand);
  }
}
