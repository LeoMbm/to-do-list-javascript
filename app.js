// Declaration Variable

const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-button");
const todoList = document.querySelector(".todo-list");
//const dateInput = document.querySelector("#date-input")

todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteAndCheck);

// FUNCTIONS

function addToDo(e) {
  e.preventDefault();
  const divTodo = document.createElement("div");
  divTodo.classList.add("divTodo");

  const list = document.createElement("li");
  list.innerText = todoInput.value//, dateInput.value;
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

  const descriptionButton = document.createElement("button");
  descriptionButton.innerHTML = '<img src="description.png" class="description">';
  descriptionButton.classList.add("description-btn");
  divTodo.appendChild(descriptionButton);

  todoList.appendChild(divTodo);
  todoInput.value = "";
 // dateInput.value = "";

 // console.log(dateInput.value)

// let now = new Date()
// let todoDate = new Date(dateInput)

// console.log((todoDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24) + ' jours restants')

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
