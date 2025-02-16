document
  .getElementById("todoForm")
  .addEventListener("submit", (event) => handleTodoFormSubmit(event));

function handleTodoFormSubmit(event) {
  event.preventDefault();
  console.log(event);

  const todoInput = document.getElementById("todoInput");
  console.log(todoInput);

  const todoInputValue = todoInput.value.trim();
  console.log(todoInputValue);

  if (todoInputValue === "") {
    alert("Please enter a valid task!");
    return;
  }

  let prevTodos = JSON.parse(localStorage.getItem("tasks")) || [];

  
  prevTodos.push({ text: todoInputValue, completed: false });

 
  localStorage.setItem("tasks", JSON.stringify(prevTodos));

 
  addTodoToUI(todoInputValue, false);

  todoInput.value = "";
}

function addTodoToUI(todoText, isCompleted) {
  const listItemElement = document.createElement("li");
  listItemElement.classList.add("todo-list-item");

  const spanElement = document.createElement("span");
  spanElement.classList.add("todo-text");
  spanElement.textContent = todoText;

  // Eğer görev tamamlandıysa üstü çizili olsun
  if (isCompleted) {
    spanElement.classList.add("completed");
  }

  // Metne tıklandığında üstünü çizme
  spanElement.addEventListener("click", () => {
    spanElement.classList.toggle("completed");

    // LocalStorage'daki completed değerini güncelle
    updateTodoStatus(todoText);
  });

  const removeTodoBtn = document.createElement("button");
  removeTodoBtn.textContent = "X";
  removeTodoBtn.classList.add("btn-danger");

  removeTodoBtn.addEventListener("click", () => {
    listItemElement.remove();
    removeTodoFromLocalStorage(todoText);
  });

  listItemElement.appendChild(spanElement);
  listItemElement.appendChild(removeTodoBtn);

  document.getElementById("list").appendChild(listItemElement);
}


document.addEventListener("DOMContentLoaded", () => {
  let savedTodos = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTodos.forEach((todo) => {
    addTodoToUI(todo.text, todo.completed);
  });
});


function updateTodoStatus(todoText) {
  let todos = JSON.parse(localStorage.getItem("tasks")) || [];
  todos = todos.map((todo) => {
    if (todo.text === todoText) {
      return { text: todo.text, completed: !todo.completed };
    }
    return todo;
  });

  localStorage.setItem("tasks", JSON.stringify(todos));
}


function removeTodoFromLocalStorage(todoText) {
  let todos = JSON.parse(localStorage.getItem("tasks")) || [];
  todos = todos.filter((todo) => todo.text !== todoText);
  localStorage.setItem("tasks", JSON.stringify(todos));
}

document.getElementById("clearListBtn").addEventListener("click", function () {
  document.getElementById("list").innerHTML = "";
  localStorage.removeItem("tasks");
});