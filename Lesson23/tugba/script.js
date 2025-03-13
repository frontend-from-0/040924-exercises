const BASE_URL = 'https://api.unsplash.com';

try {
  importScripts('./secrets.js');
} catch (e) {
  console.error('Secrets dosyası yüklenemedi!', e);
}

const imageCountSelect = document.getElementById('image-count');

function fetchImages() {
  const count = imageCountSelect.value;
  fetch(`${BASE_URL}/photos/random/?client_id=${ACCESS_KEY}&count=${count}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(
        `Request failed! ${response.status}, ${response.statusText}`
      );
    })
    .then((data) => {
      document.getElementById('image-container').innerHTML = '';

      data.forEach((imageData) => {
        addImagesToPage(
          imageData.urls.small,
          imageData.alt_description,
          imageData.user.name
        );
      });
    })
    .catch((error) => console.log('Hata:', error));
}

function addImagesToPage(src, alt, author) {
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image');

  const newImage = document.createElement('img');
  newImage.src = src;
  newImage.alt = alt;

  const authorText = document.createElement('p');
  authorText.textContent = `Author: ${author}`;

  imageWrapper.appendChild(newImage);
  imageWrapper.appendChild(authorText);

  document.getElementById('image-container').appendChild(imageWrapper);
}

const button = document.getElementById('fetch-button');
button.addEventListener('click', () => fetchImages());
