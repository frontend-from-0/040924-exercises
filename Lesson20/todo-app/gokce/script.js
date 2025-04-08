document
  .getElementById('todoForm')
  .addEventListener('submit', (event) => handleTodoFormSubmit(event));

function handleTodoFormSubmit(event) {
  event.preventDefault();
  const todoInput = document.getElementById('todoInput');
  const todoInputValue = todoInput.value.trim();

  if (todoInputValue === '') {
    console.log('Please enter a valid todo item');
    todoInput.value = '';
    return;
  }

  createTodoItem(todoInputValue);
  UpdateLocalStorage();
  todoInput.value = '';
}

function createTodoItem(todoText) {
  const listItemElement = document.createElement('li');
  listItemElement.classList.add('todo-list-item');
  const spanElement = document.createElement('span');
  spanElement.classList.add('todo-text');
  spanElement.textContent = todoText;
  spanElement.addEventListener('click', () => {
    spanElement.classList.toggle('completed');
  });

  const removeTodoBtn = document.createElement('button');
  removeTodoBtn.textContent = 'X';
  removeTodoBtn.classList.add('btn-danger');
  removeTodoBtn.addEventListener('click', () => {
    listItemElement.remove();
    UpdateLocalStorage();
  });

  listItemElement.appendChild(spanElement);
  listItemElement.appendChild(removeTodoBtn);

  const ulElement = document.getElementById('list');
  ulElement.appendChild(listItemElement);
}

function UpdateLocalStorage() {
  const todoItems = [];
  document.querySelectorAll('.todo-text').forEach((span) => {
    todoItems.push(span.innerText);
  });

  // LocalStorage'da var olan 'tasks' verisini alıyoruz ve diziyi güncelliyoruz
  localStorage.setItem('tasks', JSON.stringify(todoItems));
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTodos = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTodos.forEach((todoText) => {
    createTodoItem(todoText);
  });
});

document.getElementById('clearListBtn').addEventListener('click', function () {
  const liElements = document.querySelectorAll('li');
  liElements.forEach((li) => li.remove());
  localStorage.removeItem('tasks'); // tasks'ı temizliyoruz
});

// LocalStorage'dan 'tasks' verisini alalım ve length'i kontrol edelim
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
console.log('Tasks in LocalStorage: ', tasks);
console.log('Length of tasks: ', tasks.length);
