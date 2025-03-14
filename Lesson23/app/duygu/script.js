const BASE_URL = 'https://api.unsplash.com';

function fetchImages() {
  const count = document.getElementById('image-count').value;

  fetch(`${BASE_URL}/photos/random/?client_id=${ACCESS_KEY}&count=${count}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Request failed! ${response.status}, ${response.statusText}`);
    })
    .then((data) => {
      document.getElementById('image-container').innerHTML = ''; // Önceki resimleri temizle
      data.forEach(image => addImagesToPage(image));
    })
    .catch((error) => console.log(error));
}

function addImagesToPage(image) {
  const { urls, alt_description, user } = image;

  // Yeni bir div oluştur (resim kartı için)
  const imageCard = document.createElement('div');
  imageCard.classList.add('image-card');

  // Resmi oluştur
  const newImage = document.createElement('img');
  newImage.src = urls.small;
  newImage.alt = alt_description || 'Random Unsplash Image';

  // Fotoğrafçı adı ve linki
  const authorText = document.createElement('p');
  authorText.innerHTML = `Photo by <a href="https://unsplash.com/@${user.username}" target="_blank">${user.name}</a>`;

  // Kartı DOM'a ekle
  imageCard.appendChild(newImage);
  imageCard.appendChild(authorText);
  document.getElementById('image-container').appendChild(imageCard);
}

// Butona tıklanınca fetch işlemi başlasın
document.getElementById('fetch-button').addEventListener('click', fetchImages);
