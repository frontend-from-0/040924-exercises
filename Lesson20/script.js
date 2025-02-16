document.addEventListener("DOMContentLoaded", function () {
  loadTodos();
});



const today = new Date();
const formattedDate = today.toISOString().split("T")[0];
document.getElementById("date-display").innerText = formattedDate;




document.getElementById("todoForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const todoInput = document.getElementById("todoInput");
  const todoInputValue = todoInput.value.trim();

  if (!todoInputValue) {
    alert("Please enter a valid task");
    return;
  }

  let prevTodos = JSON.parse(localStorage.getItem("tasks")) || [];
  prevTodos.push(todoInputValue);
  localStorage.setItem("tasks", JSON.stringify(prevTodos));

  addTodoToUI(todoInputValue);
  todoInput.value = "";
});

function addTodoToUI(todoText) {
  const listItemElement = document.createElement("li");
  listItemElement.classList.add("todo-list-item");

  const spanElement = document.createElement("span");
  spanElement.classList.add("todo-text");
  spanElement.textContent = todoText;

  const checkTodoBtn = document.createElement("button");
  checkTodoBtn.textContent = "✓";
  checkTodoBtn.classList.add("btn-success");

  let removeTodoBtn = document.createElement("button");
  removeTodoBtn.textContent = "X";
  removeTodoBtn.classList.add("btn-danger");

  removeTodoBtn.addEventListener("click", () => {
    listItemElement.remove();
    removeTodoFromStorage(todoText);
  });

 
  checkTodoBtn.addEventListener("click", () => {
    listItemElement.classList.toggle("completed");
  });

  listItemElement.appendChild(spanElement);
  listItemElement.appendChild(checkTodoBtn);
  listItemElement.appendChild(removeTodoBtn);

  document.getElementById("list").appendChild(listItemElement);
}

function removeTodoFromStorage(todoText) {
  let prevTodos = JSON.parse(localStorage.getItem("tasks")) || [];
  prevTodos = prevTodos.filter((todo) => todo !== todoText);
  localStorage.setItem("tasks", JSON.stringify(prevTodos));
}

function loadTodos() {
  let prevTodos = JSON.parse(localStorage.getItem("tasks")) || [];
  prevTodos.forEach((todo) => addTodoToUI(todo));
}

document.getElementById("clearListBtn").addEventListener("click", function () {
  localStorage.removeItem("tasks");
  document.getElementById("list").innerHTML = "";
});
