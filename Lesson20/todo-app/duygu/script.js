document
  .getElementById("todoForm")
  .addEventListener("submit", (event) => handleTodoFormSubmit(event));

function handleTodoFormSubmit(event) {
  event.preventDefault();

  const todoInput = document.getElementById("todoInput");
  const todoInputValue = todoInput.value.trim();

  if (todoInputValue === "") {
    showErrorMessage("Please add a task");
    return; 
  }

  const prevTodos = JSON.parse(localStorage.getItem("tasks")) || [];
  prevTodos.push({ text: todoInputValue, completed: false });
  localStorage.setItem("tasks", JSON.stringify(prevTodos));

  addTodoToList(todoInputValue, false);

  todoInput.value = "";
}

function showErrorMessage(message) {
  alert(message);
}

window.addEventListener("load", () => {
  const savedTodos = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTodos.forEach((todo) => addTodoToList(todo.text, todo.completed));
});

function addTodoToList(todoInputValue, isCompleted) {
  const listItemElement = document.createElement("li");
  listItemElement.classList.add("todo-list-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("todo-checkbox");
  checkbox.checked = isCompleted;

  const spanElement = document.createElement("span");
  spanElement.classList.add("todo-text");
  spanElement.textContent = todoInputValue;
  if (isCompleted) {
    spanElement.classList.add("completed");
  }

  const removeTodoBtn = document.createElement("button");
  removeTodoBtn.textContent = "x";
  removeTodoBtn.classList.add("btn-danger");

  removeTodoBtn.addEventListener("click", () => {
    removeTodoFromLocalStorage(todoInputValue);
    listItemElement.remove();
  });

  checkbox.addEventListener("change", function () {
    spanElement.classList.toggle("completed", checkbox.checked);
    updateTodoStatus(todoInputValue, checkbox.checked);
  });

  spanElement.addEventListener("click", function () {
    checkbox.checked = !checkbox.checked;
    spanElement.classList.toggle("completed", checkbox.checked);
    updateTodoStatus(todoInputValue, checkbox.checked);
  });

  listItemElement.appendChild(checkbox);
  listItemElement.appendChild(spanElement);
  listItemElement.appendChild(removeTodoBtn);
  document.getElementById("list").appendChild(listItemElement);
}

function removeTodoFromLocalStorage(todoText) {
  const prevTodos = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTodos = prevTodos.filter((todo) => todo.text !== todoText);
  localStorage.setItem("tasks", JSON.stringify(updatedTodos));
}

function updateTodoStatus(todoText, isCompleted) {
  const prevTodos = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTodos = prevTodos.map((todo) => {
    if (todo.text === todoText) {
      return { ...todo, completed: isCompleted };
    }
    return todo;
  });
  localStorage.setItem("tasks", JSON.stringify(updatedTodos));
}

document.getElementById("clearListBtn").addEventListener("click", function () {
  document.getElementById("list").innerHTML = "";
  localStorage.removeItem("tasks");
});