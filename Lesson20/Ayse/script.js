function handleTodoFormSubmit(event) {
  event.preventDefault();
  const todoInput = document.getElementById('todoInput');
  const todoInputValue = todoInput.value.trim();

  if (todoInputValue === '') {
    alert('Please enter a todo item.');
    return;
  }

  let prevTodos = JSON.parse(localStorage.getItem('todos')) || [];
  prevTodos.push({ text: todoInputValue, completed: false });
  localStorage.setItem('todos', JSON.stringify(prevTodos));

  renderTodos();
  todoInput.value = '';
}

function createTodoItem(todo, index) {
  const todoItem = document.createElement('li');
  todoItem.classList.add('todo-item');

  const todoText = document.createElement('span');
  todoText.classList.add('todo-text');
  todoText.textContent = todo.text;

  if (todo.completed) {
    todoText.classList.add('completed');
  }

  todoText.addEventListener('click', () => toggleTodoCompletion(index));

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', (e) => {
    e.stopPropagation();
    removeFromLocalStorage(index);
    renderTodos();
  });

  todoItem.appendChild(todoText);
  todoItem.appendChild(deleteButton);
  return todoItem;
}

function toggleTodoCompletion(index) {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos[index].completed = !todos[index].completed;
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos();
}

function renderTodos() {
  const list = document.getElementById('list');
  list.innerHTML = '';
  const todos = JSON.parse(localStorage.getItem('todos')) || [];

  todos.forEach((todo, index) => {
    const listItemElement = createTodoItem(todo, index);
    list.appendChild(listItemElement);
  });
}

function removeFromLocalStorage(index) {
  let todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
}

window.addEventListener('DOMContentLoaded', function () {
  const addBtn = document.getElementById('addBtn');
  const clearListBtn = document.getElementById('clearListBtn');

  addBtn.addEventListener('click', handleTodoFormSubmit);
  clearListBtn.addEventListener('click', function () {
    localStorage.removeItem('todos');
    renderTodos();
  });

  renderTodos();
});
