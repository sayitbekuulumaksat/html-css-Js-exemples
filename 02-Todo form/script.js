window.addEventListener("load", function () {
  const todoForm = document.querySelector(".form");
  const todoInput = document.querySelector("#input-todo");
  const todoList = document.querySelector(".todo-list");
  const todoItim = document.querySelector(".todo-item");
  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (todoInput.value === "") {
      alert("add to do");
    } else {
      const todoItim = document.createElement("div");
      todoItim.innerText = todoInput.value;
      todoItim.classList.add("todo-item");
      todoList.appendChild(todoItim);
      todoInput.value = "";
      todoItim.addEventListener("click", function () {
        todoItim.style.display = "none";
      });
    }
  });
});
