// Declaration Variable

const todoDescription = document.querySelector("#todo-descriptions");
const todoButton = document.querySelector("#todo-button");
const modalContainer = document.querySelector(".modal-container");
const addButton = document.querySelector("#add");
const closeButton = document.querySelector("#close");
const todoList = document.querySelector(".todo-list");
const filterOptions = document.querySelector("#todo-select");
const dateInput = document.querySelector("#start");

// EVENT LISTENER

todoButton.addEventListener("click", (e) => {
  e.preventDefault();
  modalContainer.classList.add("show");
});

addButton.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

addButton.addEventListener("click", addToDo);

closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  modalContainer.classList.remove("show");
});

todoList.addEventListener("click", deleteAndCheck);

filterOptions.addEventListener("click", filterTodo);

// FUNCTIONS

function addToDo(e) {
  e.preventDefault();
  const divTodo = document.createElement("div");
  divTodo.classList.add("divTodo");

  // Date
  let oneDay = 24 * 60 * 60 * 1000;
  let now = new Date();
  let todoDate = new Date(dateInput.valueAsDate);

  //console.log((todoDate.getDay() - now.getDay()) / (1000 * 60 * 60 * 24) + ' jours restants')

  const list = document.createElement("li"); // Ajouter jours restant à la liste
  let remainingTime =
    todoDescription.value +
    " " +
    Math.ceil(Math.abs((todoDate.getTime() - now.getTime()) / oneDay)) +
    " Days left";
  console.log(remainingTime);
  list.innerText = remainingTime;
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

  // Boutton pour description
  const descriptionButton = document.createElement("button");
  descriptionButton.innerHTML =
    '<img src="description.png" class="description">';
  descriptionButton.classList.add("description-btn");
  divTodo.appendChild(descriptionButton);

  descriptionButton.addEventListener("click", function () {
    let theDescription = document.createElement("input");
    theDescription.className = "modify";
    theDescription.type = "text";
    divTodo.appendChild(theDescription);
  });

  todoList.appendChild(divTodo);
  todoDescription.value = "";
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
      case "To Do":
        if (todo.classList.contains("completed")) {
          todo.style.display = "none";
        } else {
          todo.style.display = "flex";
        }
        break;
    }
  });
}
