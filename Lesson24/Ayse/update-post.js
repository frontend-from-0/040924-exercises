const params = new URLSearchParams(window.location.search);
const postId = params.get('id');
console.log(params, postId);

// API'dan postu çekmek
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then((response) => response.json())
  .then((post) => {
    document.getElementById('post-title').value = post.title;
    document.getElementById('post-body').value = post.body;
  })
  .catch((error) => console.error('Error fetching post:', error));

// Formu Seç
const form = document.getElementById('updatePostForm');

// Form Submit Eventi - Form gönderildiğinde işlem yap
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Sayfanın yenilenmesini engelle

  // Formdaki kullanıcının girdiği verileri al
  const updatedPost = {
    title: document.getElementById('post-title').value,
    body: document.getElementById('post-body').value,
  };

  //PUT isteği ile postu güncelle
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(updatedPost) // Güncellenmiş postu JSON formatına çevir
  })
    .then(response => response.json()) // Yanıtı JSON formatında al
    .then(updatedPostData => { // .then ile yanıtı işliyoruz

      // Güncellenmiş post verisini ekranda göster
      document.getElementById('post-title').value = updatedPostData.title; // Başlığı güncelle
      document.getElementById('post-body').value = updatedPostData.body;   // İçeriği güncelle

      // Başarı mesajı ekranda göster
      const successMessage = document.getElementById('success-message');
      successMessage.textContent = 'Post Updated Successfully!';
      successMessage.classList.add('show');  // CSS ile animasyon başlat
      successMessage.style.display = 'block'; // Mesajı görünür yap
    })
    .catch(error => {
      console.error('Error updating post:', error);
      const errorMessage = document.getElementById('error-message');
      errorMessage.textContent = 'Error Updating Post';
      errorMessage.style.display = 'block';
    });
});







// TODO
// Make API request to fetch the post with the given ID (Get request)
// Prefill the form in update-post.html with the post title and body

// When a user submits the form, validate the form data
// If form data is not valid, show error messages
// If form data is valid, make an API request to update the post (PUT request)
// Shouw a success message (do NOT use alert!) on the screen after successful response is recieved in the API request
// Add a button to navigate back to the home page (index.html)
