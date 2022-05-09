// Declaration Variable

const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-button");
const todoList = document.querySelector(".todo-list");
const filterOptions = document.querySelector("#todo-select");

todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteAndCheck);
filterOptions.addEventListener("click", filterTodo);

// FUNCTIONS

function addToDo(e) {
  e.preventDefault();
  const divTodo = document.createElement("div");
  divTodo.classList.add("divTodo");

  const list = document.createElement("li");
  list.innerText = todoInput.value;
  list.classList.add("todo-item");
  divTodo.appendChild(list);

  const validatedButton = document.createElement("button");
  validatedButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  validatedButton.classList.add("validated-btn");
  divTodo.appendChild(validatedButton);

  const deletedButton = document.createElement("button");
  deletedButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deletedButton.classList.add("deleted-btn");
  divTodo.appendChild(deletedButton);

  todoList.appendChild(divTodo);
  todoInput.value = "";
}

function deleteAndCheck(e) {
  const item = e.target;

  if (item.classList[0] == "deleted-btn") {
    item.parentElement.remove();
  }

  if (item.classList[0] == "validated-btn") {
    const todo = item.parentElement;
    todo.classList.add("completed");
  }
}

function filterTodo(e) {
  let todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "All":
        todo.style.display = "flex";
        break;
      case "Done":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "Doing":
        if (todo.classList.contains("doing")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "To Do":
        if (todo.classList.contains("todo")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
