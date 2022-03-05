// saulotion - 1
function sqr(n) {
  if (!n) {
    n = 1;
  }
  return n * n;
}
console.log(sqr());

// saulotion - 2
function sqr(n) {
  n = n || 1;
  return n * n;
}
console.log(sqr());

// saulotion - 3 default parametar
function sqr(n = 1) {
  return n * n;
}
console.log(sqr());
