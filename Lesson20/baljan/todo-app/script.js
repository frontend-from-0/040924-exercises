document
  .getElementById('todoForm')
  .addEventListener('submit', (event) => handleTodoFormSubmit(event));

function handleTodoFormSubmit(event) {
  event.preventDefault();
  console.log(event);
  const todoInput = document.getElementById('todoInput');
  console.log(todoInput);

  const todoInputValue = todoInput.value.trim();
  if (todoInputValue === '') {
    alert('Please enter a valid task.');
    return;
  }

  const prevTodos = JSON.parse(localStorage.getItem('tasks')) || [];
  prevTodos.push(todoInputValue);
  localStorage.setItem('tasks', JSON.stringify(prevTodos));

  addTodoToList(todoInputValue);
  todoInput.value = '';
}

function addTodoToList(todoText) {
  const listItemElement = document.createElement('li');
  listItemElement.classList.add('todo-list-item');

  const spanElement = document.createElement('span');
  spanElement.classList.add('todo-text');
  spanElement.textContent = todoText;

  const removeTodoBtn = document.createElement('button');
  removeTodoBtn.textContent = 'X';
  removeTodoBtn.classList.add('btn-danger');
  removeTodoBtn.addEventListener('click', () => {
    listItemElement.remove();
    removeTodoFromLocalStorage(todoText);
  });

  listItemElement.appendChild(spanElement);
  listItemElement.appendChild(removeTodoBtn);

  const ulElement = document.getElementById('list');
  ulElement.appendChild(listItemElement);

  spanElement.addEventListener('click', () => {
    spanElement.style.textDecorationLine = 'line-through';
    markTodoAsCompleted(todoText);
  });
}

function markTodoAsCompleted(todoText) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const updatedTasks = tasks.map((task) => {
    if (task.text === todoText) {
      return { text: task.text, completed: true };
    }
    return task;
  });
  localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

function removeTodoFromLocalStorage(todoText) {
  const prevTodos = JSON.parse(localStorage.getItem('tasks')) || [];
  const updatedTodos = prevTodos.filter((todo) => todo !== todoText);
  localStorage.setItem('tasks', JSON.stringify(updatedTodos));
}

document.getElementById('clearListBtn').addEventListener('click', function () {
  const liElements = document.querySelectorAll('li');
  liElements.forEach((li) => li.remove());
  localStorage.removeItem('tasks');
});

window.addEventListener('load', () => {
  const savedTodos = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTodos.forEach((todo) => addTodoToList(todo));
});
