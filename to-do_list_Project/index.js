const btn = document.querySelector(".btn");
const inputField = document.querySelector(".input-field");
const listItem = document.querySelector(".list-container");

const addAction = btn.addEventListener("click", () => {
  const newItemInList = document.createElement("li");
  newItemInList.innerText = inputField.value;
  newItemInList.classList.add("list-item");
  listItem.appendChild(newItemInList);
  inputField.value = "";

  newItemInList.addEventListener("click", () => {
    newItemInList.classList.add("crossed-item");
  })

  newItemInList.addEventListener("dblclick", () => {
    // newItemInList.remove();
    listItem.removeChild(newItemInList);
  })
})