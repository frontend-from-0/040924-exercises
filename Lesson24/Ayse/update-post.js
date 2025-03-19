const params = new URLSearchParams(window.location.search);
const postId = params.get('id');
console.log(params, postId);

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then((response) => response.json())
  .then((post) => {
    document.getElementById('post-title').value = post.title;
    document.getElementById('post-body').value = post.body;
  })
  .catch((error) => {
    console.error('Error fetching post:', error);
    showMessage(errorMessage, 'Error fetching post data. Please try again.');
  });

const form = document.getElementById('updatePostForm');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

// Mesaj gösterme fonksiyonu
function showMessage(element, message) {
  element.textContent = message;
  element.classList.remove('visible');
  setTimeout(() => {
    element.classList.add('visible');
  }, 10);
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  successMessage.classList.remove('visible');
  errorMessage.classList.remove('visible');

  const updatedPost = {
    title: document.getElementById('post-title').value,
    body: document.getElementById('post-body').value,
  };

  if (updatedPost.title.trim() === '' || updatedPost.body.trim() === '') {
    showMessage(errorMessage, 'Title and Body cannot be empty!');
    return;
  }

  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedPost),
  })
    .then((response) => response.json())
    .then((updatedPostData) => {
      document.getElementById('post-title').value = updatedPostData.title;
      document.getElementById('post-body').value = updatedPostData.body;

      showMessage(successMessage, 'Post Updated Successfully!');

      document.getElementById('post-title').value = '';
      document.getElementById('post-body').value = '';
    })
    .catch((error) => {
      console.error('Error updating post:', error);
      showMessage(errorMessage, 'Error Updating Post!');
    });
});
