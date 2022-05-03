// Declaration Variable

const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteAndCheck);

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
