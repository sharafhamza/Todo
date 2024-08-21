const button = document.querySelector(".add");
const input = document.querySelector("#input");
const ul = document.querySelector(".render-list");

let task = [];

button.addEventListener("click", () => {
  task.push(input.value);
  display();
});

function display() {
  ul.innerHTML = "";
  task.map((item) => {
    ul.innerHTML += `<li>${item} <button class="edit-btn">Edit</button> <button class="del-btn">Delete</button> </li>`;
  });

  editElement();
  delElement();
}

function delElement() {
  const delBtn = document.querySelectorAll(".del-btn");
  const delBtnArr = Array.from(delBtn);

  delBtnArr.map((item, index) => {
    item.addEventListener("click", () => {
      task.splice(index, 1);
      display();
    });
  });
}

function editElement() {
  const editElement = document.querySelectorAll(".edit-btn");
  const editArr = Array.from(editElement);

  editArr.map((item, index) => {
    item.addEventListener("click", () => {
      console.log("hello");
    });
  });
}
