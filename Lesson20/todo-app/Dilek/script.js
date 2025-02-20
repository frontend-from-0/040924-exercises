document.addEventListener('DOMContentLoaded', loadTodosLocStorage);

function loadTodosLocStorage() {
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];

  for (const todo of savedTodos) {
    const listItemElement = document.createElement('li');
    listItemElement.classList.add('todo-list-item');
    listItemElement.setAttribute('data-priority', todo.priority);

    const spanElement = document.createElement('span');
    spanElement.classList.add('todo-text');
    spanElement.textContent = todo.text;
    const removeTodoBtn = document.createElement('button');
    removeTodoBtn.textContent = 'X';
    removeTodoBtn.classList.add('btn-danger');

    /* When I asked AI, what else I can do to make my app more accessible, I learned the following method for screen readers. I hope it is an up-to-date and appropriate method. */
    removeTodoBtn.setAttribute('aria-label', 'Remove task');

    removeTodoBtn.addEventListener('click', () => {
      listItemElement.remove();
      removeTodosLocStorage(todo);
      updateLocalStorage();
    });

    listItemElement.appendChild(spanElement);
    listItemElement.appendChild(removeTodoBtn);
    document.getElementById('list').appendChild(listItemElement);
  }
}

document
  .getElementById('todoForm')
  .addEventListener('submit', (event) => handleTodoFormSubmit(event));

function handleTodoFormSubmit(event) {
  event.preventDefault();
  const todoInput = document.getElementById('todoInput');
  const todoInputValue = todoInput.value.trim();
  const prioritySelect = document.getElementById('prioritySelect');
  const priority = prioritySelect.value;

  if (todoInputValue !== '') {
    const prevTodos = JSON.parse(localStorage.getItem('todos')) || [];
    prevTodos.push({ text: todoInputValue, priority: priority });
    localStorage.setItem('todos', JSON.stringify(prevTodos));

    const listItemElement = document.createElement('li');
    listItemElement.classList.add('todo-list-item');
    listItemElement.setAttribute('data-priority', priority);

    const spanElement = document.createElement('span');
    spanElement.classList.add('todo-text');
    spanElement.textContent = todoInputValue;

    spanElement.addEventListener('click', function () {
      spanElement.classList.toggle('completed');
      updateLocalStorage();
    });

    const removeTodoBtn = document.createElement('button');
    removeTodoBtn.textContent = 'X';
    removeTodoBtn.classList.add('btn-danger');

    removeTodoBtn.setAttribute('aria-label', 'Remove task');

    removeTodoBtn.addEventListener('click', () => {
      listItemElement.remove();
      removeTodosLocStorage({ text: todoInputValue, priority: priority });
      updateLocalStorage();
    });

    listItemElement.appendChild(spanElement);
    listItemElement.appendChild(removeTodoBtn);

    const ulElement = document.getElementById('list');
    ulElement.appendChild(listItemElement);
    todoInput.value = '';
  }
}

function removeTodosLocStorage(todoRemove) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const updatedTodos = todos.filter(
    (todo) =>
      todo.text !== todoRemove.text || todo.priority !== todoRemove.priority
  );
  localStorage.setItem('todos', JSON.stringify(updatedTodos));
}

function updateLocalStorage() {
  const todos = [];
  document.querySelectorAll('.todo-list-item').forEach((item) => {
    todos.push({
      text: item.querySelector('.todo-text').textContent,
      priority: item.getAttribute('data-priority'),
    });
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}

document.getElementById('clearListBtn').addEventListener('click', function () {
  document.querySelectorAll('.todo-list-item').forEach((li) => li.remove());
  localStorage.removeItem('todos');
});
