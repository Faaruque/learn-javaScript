let list = document.querySelector(".Ulist");
let li = document.createElement("li");
li.innerHTML = "Four";
list.appendChild(li);

let listItem = document.getElementsByTagName("li");
// Loop Throw HTML Collections

// let listItems = Array.from(listItem);
// let listItems = Array.prototype.slice.apply(listItem);
let listItems = [...listItem];
listItems.forEach((li, ind) => {
  let text = li.innerHTML;
  li.innerHTML = `(${ind + 1}) . ${text}`;
});
