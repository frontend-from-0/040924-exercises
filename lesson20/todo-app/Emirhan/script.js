const ulElement = document.getElementById('list');
const addListBtn = document.getElementById('addListBtn');
const todoInput = document.getElementById('todoInput');
const clearListBtn = document.getElementById('clearListBtn');
function errorMessage(message) {
  const error = document.createElement('div');
  error.classList.add('error-message');
  error.textContent = message;
  document.body.appendChild(error);
  setTimeout(() => {
    error.remove();
  }, 3000);
}

addListBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const id = Date.now();
  const todoInputValue = todoInput.value;
  if (todoInputValue === '' || todoInputValue === ' ') {
    errorMessage('This field cannot be left blank');
    return;
  }
  createElement(id, todoInputValue);
  todoInput.value = '';
});

function createElement(id, todoInputValue) {
  const listItemElement = document.createElement('li');
  listItemElement.classList.add('todo-list-item');
  const spanElement = document.createElement('span');
  spanElement.classList.add('todo-text');
  spanElement.textContent = todoInputValue;
  localStorage.setItem(id, todoInputValue);
  const removeTodoBtn = document.createElement('i');
  removeTodoBtn.classList.add('btn-remove', 'fa-solid', 'fa-xmark');
  removeTodoBtn.addEventListener('click', () => {
    listItemElement.remove();
    localStorage.removeItem(id);
  });
  spanElement.addEventListener('click', function () {
    spanElement.classList.add('completed');
  });
  listItemElement.appendChild(spanElement);
  listItemElement.appendChild(removeTodoBtn);
  ulElement.appendChild(listItemElement);
}

clearListBtn.addEventListener('click', function () {
  const liElements = document.querySelectorAll('li');
  liElements.forEach((li) => li.remove());
  localStorage.clear();
});

window.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    createElement(key, value);
  }
});
