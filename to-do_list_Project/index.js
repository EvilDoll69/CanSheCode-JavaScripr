const btn = document.querySelector(".btn");
const inputField = document.querySelector(".input-field");
const listItem = document.querySelector(".list-container");

const addAction = btn.addEventListener("click", function() {
  const newItemInList = document.createElement("li");
  newItemInList.innerText = inputField.value;
  newItemInList.classList.add("list-item");
  listItem.appendChild(newItemInList);
  inputField.value = "";

  newItemInList.addEventListener("dblclick", function() {
    newItemInList.classList.add("crossed-text");
  })
})