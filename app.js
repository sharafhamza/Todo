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
    ul.innerHTML += `<li>${item} <button class="del-btn">Delete</button></li>`;
  });

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
