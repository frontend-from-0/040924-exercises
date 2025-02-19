document.getElementById("todoForm")
  .addEventListener("submit", (event) => handleTodoFormSubmit(event));

function handleTodoFormSubmit(event) {
  event.preventDefault();
  console.log(event);
  const todoInput = document.getElementById("todoInput");
  console.log(todoInput);

  const todoInputValue = todoInput.value;
  console.log(todoInputValue);

  /* const prevTodos = localStorage.getItem("tasks");
  localStorage.setItem('todos', [prevTodos, todoInputValue]); */
  const prevTodos = JSON.parse(localStorage.getItem("tasks")) || [];
  prevTodos.push(todoInputValue);
  localStorage.setItem("tasks", JSON.stringify(prevTodos));

  const listItemElement = document.createElement("li");
  console.log(listItemElement);
  listItemElement.classList.add("todo-list-item");
  console.log(listItemElement);

  const spanElement = document.createElement("span");
  spanElement.classList.add("todo-text");
  console.log(spanElement);
  spanElement.textContent = todoInputValue;

  const removeTodoBtn = document.createElement("button");
  removeTodoBtn.textContent = "X";
  removeTodoBtn.classList.add("btn-danger");
  removeTodoBtn.addEventListener('click', () => {
    listItemElement.remove();
  });

  listItemElement.appendChild(spanElement);
  listItemElement.appendChild(removeTodoBtn);

  const ulElement = document.getElementById("list");
  ulElement.appendChild(listItemElement);
  todoInput.value = "";



}