for (;;) {
  var rand = Math.floor(Math.random() * 10 + 1);
  if (rand === 6) {
    console.log("Winner !!!");
    break;
  } else {
    console.log("You have got " + rand);
  }
}
