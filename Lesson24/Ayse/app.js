/*
CRUD - set of basic operations or functions that are commonly used in the context of database management and web applications to manage and manipulate data.
C - create - POST method (has request body to transfer data)
R - read - GET method (cannot have request body to send data to the server)
U - update - PUT / PATCH method (have request body to transfer data)
D - delete - DELETE method


Status codes
HTTP status codes are three-digit numbers that the server sends in response to a client's request made to a web server. They provide information about the outcome of the request, whether it was successful, encountered an error, or requires further action. HTTP status codes are grouped into several ranges, each indicating a different category of response.
100... - Informational Responses
200... - Successful Responses (200 OK, 201 Created, 204 No content)
300.. - redirection (301 Moved Permanently, Found (or 307 Temporary Redirect))
400... - Errors (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found)
500... - Service error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable)
*/
const URL = 'https://jsonplaceholder.typicode.com/posts';

document.getElementById('fetch-posts').addEventListener('click', getPosts);

/*
- .then() bir callback fonksiyonu alır ve Promise çözülünce bu fonksiyon çalışır.
- fetch() bir Promise döner, bu yüzden ilk .then()'de response parametresini kullanırız ama isterseniz başka bir isim de kullanabilirsiniz, Örn, apple gibi.
- Her .then()'in içinde dönen değer, bir önceki .then()'in sonucudur.
*/

function getPosts() {
  fetch(URL) // API çağrısı yapıyoruz. Adrese GET isteği gönderiyoruz.fetch() fonksiyonu, önce bir PROMİSE, Response nesnesi döndürür.
    .then((response) => response.json()) // Gelen yanıtı JSON formatına çeviriyoruz. Çünkü API'den gelen veriler string olarak gelir.
    // Postları HTML'ye Eklemek İçin Hazırlık
    .then((posts) => {
      // posts → API'den gelen tüm postların listesi (Array) - İkinci .then() -> JSON verisini kullan
      posts.forEach((post) => {
        const liItem = document.createElement('li');
        liItem.id = `post-${post.id}`; // Delete post için ekledim.
        liItem.classList.add('post');

        const postTitle = document.createElement('h2');
        postTitle.classList.add('post-title');
        postTitle.textContent = post.title;

        const pItem = document.createElement('p');
        pItem.classList.add('post-body');
        pItem.textContent = post.body;

        // Update Butonu Eklemek
        const updatePostButton = document.createElement('a');
        updatePostButton.href = `./update-post.html?id=${post.id}`; // Güncelleme sayfasına yönlendiriyoruz.
        updatePostButton.textContent = 'Update'; //Butonun metni
        updatePostButton.classList.add('button', 'button--success'); //Butonun class'ları, Stil sınıfları ekliyoruz.

        // Delete Butonu Eklemek
        const deletePostButton = document.createElement('button');
        deletePostButton.textContent = 'Delete'; //Butonun metni
        deletePostButton.addEventListener('click', () => deletePost(post.id)); // Silme işlemi için event listener
        deletePostButton.classList.add('button', 'button--danger');


        // 'liItem' içine başlık, içerik ve güncelleme butonunu ekliyoruz
        liItem.appendChild(postTitle);
        liItem.appendChild(pItem);
        liItem.appendChild(updatePostButton);
        liItem.appendChild(deletePostButton);
        // 'liItem'ı 'posts-container' ul'sine ekliyoruz
        document.getElementById('posts-container').appendChild(liItem);
      });
    });
}

function deletePost(postId) {
  fetch(`${URL}/${postId}`, { method: 'DELETE' }) // API'a DELETE isteği gönderiyoruz.
    .then((response) => {
      if (response.ok) {
        document.getElementById(`post-${postId}`).remove(); // Silinen postu HTML'den kaldırıyoruz.
      } else {
        throw new Error('Post could not be deleted');
      }
    })
    .catch((error) => console.error('Failing: ', error));
}

/*
+++function getPostById() {}

function createPost() {
  // Get the form data
  // Validate the form data
  // If form data is not valid, show error messages on the screen (do NOT use alert!)
  // If form data is valid, make an API request to create the post (POST request)
  // Once succesccful response is recieved, show a success message on the screen
  // Clear the form
}

+++function updatePost() {}

+++function deletePost(postId) {
  fetch(`${URL}/${postId}`, {
    method: 'DELETE',
  });
}
*/
