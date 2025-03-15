// Create post formunu seçer
const form = document.getElementById('createPostForm');

// Hata ve başarı mesajlarını dışarıda tanımlar
const errorMessage = document.getElementById('create-error-message');
const successMessage = document.getElementById('create-success-message');

// Form gönderildiğinde createPost fonksiyonunu çalıştırır
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Form gönderildiğinde sayfa yenilenmesin

  // Form verilerini alın ve boşlukları temizler
  const title = document.getElementById('create-post-title').value.trim();
  const body = document.getElementById('create-post-body').value.trim();

  // Verileri doğrulayın: Eğer herhangi bir alan boşsa, hata mesajını gösterir
  if (!title || !body) {
    errorMessage.textContent = 'Please fill in both the title and content fields.';
    errorMessage.classList.add('show');  // Hata mesajını göster
    successMessage.classList.remove('show');  // Başarı mesajını gizle
    return; // İşlemi burada durdurun
  } else {
    // Eğer form verileri geçerliyse, hata mesajını varsa gizler
    errorMessage.classList.remove('show');
  }

  // Yeni post verisini oluşturur
  const newPost = {
    title: title,
    body: body
  };

  // API isteği gönderin: POST isteği ile yeni post oluşturur
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPost) // Veriyi JSON formatına çevirir
  })
    .then(response => response.json())
    .then(createdPost => {
      // Başarı mesajını göster
      successMessage.textContent = 'Post Created Successfully!';
      successMessage.classList.add('show');  // CSS ile animasyon başlat
      console.log(createdPost);

      // Formu temizler
      document.getElementById('create-post-title').value = '';
      document.getElementById('create-post-body').value = '';
    })
    .catch(error => {
      errorMessage.textContent = 'Error creating post, please try again.';
      errorMessage.classList.add('show');  // Hata mesajını göster
      successMessage.classList.remove('show'); // Başarı mesajını gizle
      console.log(error);
    });
});
