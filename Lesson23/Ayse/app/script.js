const BASE_URL = 'https://api.unsplash.com';

const imageCountSelect = document.getElementById('imageCount');
const button = document.getElementById('fetch-button');

function fetchImages(imgCount) {
  button.disabled = true;
  fetch(BASE_URL + `/photos/random/?client_id=${ACCESS_KEY}&count=${imgCount}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(
        `Request failed! ${response.status}, ${response.statusText}`
      );
    })
    .then((data) => {
      const container = document.getElementById('image-container');
      container.innerHTML = '';

      data.forEach((image) => {
        addImagesToPage(image.urls.small, image.alt_description, image.user);
      });
    })
    .catch((error) => {
      console.error(error);
      alert('Failed to fetch images. Please try again.');
    })
    .finally(() => {
      button.disabled = false;
    });
}

function addImagesToPage(src, alt, user) {
  const container = document.getElementById('image-container');

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image');

  const newImage = document.createElement('img');
  newImage.src = src;
  newImage.alt = alt;

  const author = document.createElement('p');
  author.textContent = `Photo by: ${user.name}`;
  author.classList.add('authorStyle');

  imageWrapper.appendChild(newImage);
  imageWrapper.appendChild(author);
  container.appendChild(imageWrapper);
}

button.addEventListener('click', () => {
  const imgCount = parseInt(imageCountSelect.value);
  fetchImages(imgCount);
});
