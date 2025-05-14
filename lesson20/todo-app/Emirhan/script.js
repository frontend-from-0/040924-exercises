function errorMessage(message) {
  const error = document.createElement('div');
  error.classList.add('error-message');
  error.textContent = message;
  document.body.appendChild(error);
  setTimeout(() => {
    error.remove();
  }, 3000);
}

document
  .getElementById('todoForm')
  .addEventListener('submit', (event) => handleTodoFormSubmit(event));

function handleTodoFormSubmit(event) {
  event.preventDefault();
  const todoInput = document.getElementById('todoInput');
  const todoInputValue = todoInput.value;
  console.log(todoInputValue + ' VALUE OF INPUT');

  if (todoInputValue === '' || todoInputValue === ' ') {
    errorMessage('This field cannot be left blank');
    return;
  }

  // If we get data from localStorage directly, we will get in a string format.
  // To get it in a form of array, we need to parse it using JSON.parse() method:
  // let prevTodos = JSON.parse(localStorage.getItem("tasks")) || [];
  // We well talk more about JSON after a few lessons.

  //localStorage
  const prevTodos = JSON.parse(localStorage.getItem('Todos')) || [];
  prevTodos.push(todoInputValue);
  localStorage.setItem('Todos', JSON.stringify(prevTodos));

  const listItemElement = document.createElement('li');
  listItemElement.classList.add('todo-list-item');

  const spanElement = document.createElement('span');
  spanElement.classList.add('todo-text');
  spanElement.textContent = todoInputValue;

  const removeTodoBtn = document.createElement('i');
  removeTodoBtn.classList.add('btn-remove', 'fa-solid', 'fa-xmark');
  removeTodoBtn.addEventListener('click', () => {
    listItemElement.remove();
  });

  listItemElement.appendChild(spanElement);
  listItemElement.appendChild(removeTodoBtn);
  const ulElement = document.getElementById('list');
  ulElement.appendChild(listItemElement);
  todoInput.value = '';

  /*
  create span element, add text, add class
  create button element, add text, add event listener

   */

  spanElement.addEventListener('click', function () {
    spanElement.classList.add('completed');
  });
}

document.getElementById('clearListBtn').addEventListener('click', function () {
  const liElements = document.querySelectorAll('li');
  liElements.forEach((li) => li.remove());
  localStorage.clear();
});

// TODO: when page is loaded, get todo items from local storage and add them to the unordered list element
