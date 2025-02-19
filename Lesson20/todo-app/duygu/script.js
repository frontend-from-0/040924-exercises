document.getElementById("todoForm")
  .addEventListener("submit", (event) => handleTodoFormSubmit(event));

function handleTodoFormSubmit(event) {
  event.preventDefault();
  console.log(event);
  const todoInput = document.getElementById("todoInput");
  console.log(todoInput);

  const todoInputValue = todoInput.value;
  console.log(todoInputValue);

  const prevTodos = JSON.parse(localStorage.getItem("tasks")) || [];
  prevTodos.push(todoInputValue);
  localStorage.setItem("tasks", JSON.stringify(prevTodos));

}