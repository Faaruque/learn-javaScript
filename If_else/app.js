let number = 75;

if (number >= 0 && number <= 100) {
  if (number >= 80 && number <= 100) {
    console.log("congratulations!!! You Hava Got ' A + '");
  } else if (number >= 70 && number <= 79) {
    console.log("congratulations!!! You Hava Got ' A '");
  } else if (number >= 60 && number <= 69) {
    console.log("congratulations!!! You Hava Got ' A - '");
  } else if (number >= 50 && number <= 59) {
    console.log("congratulations!!! You Hava Got ' B '");
  } else if (number >= 40 && number <= 49) {
    console.log("congratulations!!! You Hava Got ' C '");
  } else if (number >= 33 && number <= 39) {
    console.log("congratulations!!! You Hava Got ' D '");
  } else {
    console.log("We are Sorry!!! You are Fail !!!");
  }
} else {
  console.log("plese Enter ' 0 - 100 '. You are Provide " + number);
}
