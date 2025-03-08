document.addEventListener('DOMContentLoaded', () => {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.forEach((todo) => addTodoToDOM(todo));

  document
    .getElementById('todoForm')
    .addEventListener('submit', (event) => handleTodoFormSubmit(event));

  document
    .getElementById('clearListBtn')
    .addEventListener('click', clearTodoList);
});

function handleTodoFormSubmit(event) {
  event.preventDefault();

  const todoInput = document.getElementById('todoInput');
  const todoInputValue = todoInput.value.trim();

  if (todoInputValue) {
    const newTodo = { text: todoInputValue, completed: false };

    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));

    addTodoToDOM(newTodo);

    todoInput.value = '';
  }
}

function addTodoToDOM(todo) {
  const listItemElement = document.createElement('li');
  listItemElement.classList.add('todo-list-item');

  const spanElement = document.createElement('span');
  spanElement.classList.add('todo-text');
  spanElement.textContent = todo.text;
  if (todo.completed) {
    spanElement.classList.add('completed');
  }

  spanElement.addEventListener('click', () => {
    todo.completed = !todo.completed;
    localStorage.setItem('todos', JSON.stringify(todos));
    spanElement.classList.toggle('completed');
  });

  const removeTodoBtn = document.createElement('button');
  removeTodoBtn.textContent = 'X';
  removeTodoBtn.classList.add('btn-danger');
  removeTodoBtn.addEventListener('click', () =>
    removeTodo(listItemElement, todo)
  );

  listItemElement.appendChild(spanElement);
  listItemElement.appendChild(removeTodoBtn);

  const ulElement = document.getElementById('list');
  ulElement.appendChild(listItemElement);
}

function removeTodo(listItemElement, todo) {
  listItemElement.remove();

  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const updatedTodos = todos.filter((t) => t.text !== todo.text);
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
}

function clearTodoList() {
  const ulElement = document.getElementById('list');
  ulElement.innerHTML = '';

  localStorage.removeItem('todos');
}
