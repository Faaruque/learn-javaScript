// const xhr = new XMLHttpRequest();
// xhr.open("get", "https://jsonplaceholder.typicode.com/users");
// xhr.onreadystatechange = function (e) {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       let user = JSON.parse(xhr.response);
//       console.log(user);
//     } else {
//       console.log(xhr.status);
//     }
//   }
// };
// xhr.send();

function request(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("get", url);
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      let user = JSON.parse(xhr.response);
      callback(null, user);
    } else {
      callback(xhr.status, null);
    }
    xhr.send();
  }
}
request("https://jsonplaceholder.typicode.com/users", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
