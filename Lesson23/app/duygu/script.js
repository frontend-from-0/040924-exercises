const BASE_URL = 'https://api.unsplash.com';

function fetchImages() {
  const count = document.getElementById('image-count').value;

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
      data.forEach((image) => addImagesToPage(image));
    })
    .catch((error) => console.log(error));
}

function addImagesToPage(image) {
  const { urls, alt_description, user } = image;

  const imageCard = document.createElement('div');
  imageCard.classList.add('image-card');

  const newImage = document.createElement('img');
  newImage.src = urls.small;
  newImage.alt = alt_description || 'Random Unsplash Image';

  const authorText = document.createElement('p');
  authorText.innerHTML = `Photo by <a href="https://unsplash.com/@${user.username}" target="_blank">${user.name}</a>`;

  imageCard.appendChild(newImage);
  imageCard.appendChild(authorText);
  document.getElementById('image-container').appendChild(imageCard);
}

document.getElementById('fetch-button').addEventListener('click', fetchImages);
