// Declaration Variable

const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-button");
const todoList = document.querySelector(".todo-list");
const dateInput = document.querySelector("#date-input")

todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteAndCheck);

// FUNCTIONS

function addToDo(e) {
  e.preventDefault();
  const divTodo = document.createElement("div");
  divTodo.classList.add("divTodo");

// Date
 let now = new Date()
 let todoDate = new Date(dateInput.valueAsDate)

 let restTime = (todoDate - now)

 //let h = restTime.getHours();
// let m = restTime.getMinutes();

 console.log(restTime)

 //timeZer =  h + ':' + m

 //console.log(Math.round((todoDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) + " " + Math.round((todoDate.getTime() - now.getTime()) / (1000 * 60 * 60 )) + " " + Math.round((todoDate.getTime() - now.getTime()) / (1000 * 60)) );

  const list = document.createElement("li"); 
                                           // Ajouter jours restant à la liste
  list.innerText = todoInput.value + " | " + Math.round((todoDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)) + ' jours ';
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
  descriptionButton.innerHTML = '<img src="description.png" class="description">';
  descriptionButton.classList.add("description-btn");
  divTodo.appendChild(descriptionButton);

  descriptionButton.addEventListener("click", function() {
    let theDescription = document.createElement("input")
    theDescription.className = "modify"
  theDescription.type = "text"
  divTodo.appendChild(theDescription)
  })

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
