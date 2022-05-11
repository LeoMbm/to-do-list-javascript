// Declaration Variable

const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-button");
const todoList = document.querySelector(".todo-list");
const dateInput = document.querySelector("#date-input");
const filterOptions = document.querySelector("#todo-select");

todoButton.addEventListener("click", addToDo);
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
    todoInput.value +
    " | " +
    Math.ceil(Math.abs((todoDate.getTime() - now.getTime()) / oneDay)) +
    " Days left";
  // console.log(remainingTime);
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
  todoInput.value = "";

  let divTodox = [];

  divTodox.push(divTodo);
  divTodox.push(list);
  divTodox.push(validatedButton);
  divTodox.push(deletedButton);
  divTodox.push(descriptionButton);

  let divTodo_serialized = JSON.stringify(divTodox);
  console.log(divTodo_serialized);
  localStorage.setItem("divTodox", divTodo_serialized);

  console.log(localStorage);
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

// FILTRES PAR NOM OU JOURS RESTANTS //

document.querySelector("#search-input").addEventListener("input", filterList);

function filterList() {
  const searchInput = document.querySelector("#search-input");
  const filter = searchInput.value.toLowerCase();
  let listTodo = document.querySelectorAll(".divTodo");

  listTodo.forEach((item) => {
    let text = item.textContent;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
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

// LOCAL STORAGE

todoButton.addEventListener("click", localSave);
todoInput.addEventListener("click", localSave);

function localSave() {
  const value = todoInput.value;

  // console.log(value);
}
