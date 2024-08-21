const button = document.querySelector(".add");
const input = document.querySelector("#input");
const ul = document.querySelector(".render-list");

let task = [];

button.addEventListener("click", () => {
  ul.innerHTML = "";
  task.push(input.value);
  task.map((item) => {
    ul.innerHTML += `<li>${item} <button class="del-btn">Delete</button></li>`;
  });

  const delBtn = document.querySelectorAll(".del-btn");
  const delBtnArr = Array.from(delBtn);
});
