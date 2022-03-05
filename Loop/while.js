isRunning = true;
while (isRunning) {
  let rand = Math.floor(Math.random() * 99);
  if (rand === 9) {
    console.log("Winner");
    isRunning = false;
  } else {
    console.log("You Hava Got " + rand);
  }
}
