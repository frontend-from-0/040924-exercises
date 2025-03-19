const form = document.getElementById('createPostForm');
const errorMessage = document.getElementById('create-error-message');
const successMessage = document.getElementById('create-success-message');

function showMessage(element, message) {
  element.textContent = message;
  element.classList.remove('visible');
  setTimeout(() => {
    element.classList.add('visible');
  }, 10);
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const title = document.getElementById('create-post-title').value.trim();
  const body = document.getElementById('create-post-body').value.trim();

  if (!title || !body) {
    showMessage(
      errorMessage,
      'Please fill in both the title and content fields!'
    );
    successMessage.classList.remove('visible');
    return;
  } else {
    errorMessage.classList.remove('visible');
  }

  const newPost = {
    title: title,
    body: body,
  };

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPost),
  })
    .then((response) => response.json())
    .then((createdPost) => {
      showMessage(successMessage, 'Post Created Successfully!');
      errorMessage.classList.remove('visible');

      document.getElementById('create-post-title').value = '';
      document.getElementById('create-post-body').value = '';
    })
    .catch((error) => {
      showMessage(errorMessage, 'Error creating post, please try again!');
      successMessage.classList.remove('visible');
      console.log(error);
    });
});
