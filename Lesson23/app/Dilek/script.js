import { ACCESS_KEY } from './secrets.js';
const BASE_URL = 'https://api.unsplash.com';
function fetchImages() {
  const imageCount = document.getElementById('image-count-select').value;

  fetch(
    BASE_URL + `/photos/random/?client_id=${ACCESS_KEY}&count=${imageCount}`
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(
        `Request failed! ${response.status}, ${response.statusText}`
      );
    })
    .then((data) => {
      document.getElementById('image-container').replaceChildren();
      for (let i = 0; i < data.length; i++) {
        addImagesToPage(
          data[i].urls.small,
          data[i].alt_description,
          data[i].user.name,
          data[i].user.links.html
        );
      }
    })
    .catch((error) => console.log(error));
}

function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites')) || [];
}

function saveFavorites(favorites) {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

function toggleFavorite(imageData) {
  let favorites = getFavorites();
  const index = favorites.findIndex((fav) => fav.src === imageData.src);

  if (index === -1) {
    favorites.push(imageData);
  } else {
    favorites.splice(index, 1);
  }

  saveFavorites(favorites);
}

function addImagesToPage(src, alt, author, authorProfile) {
  const container = document.createElement('div');
  container.classList.add('image');

  const newImage = document.createElement('img');
  newImage.src = src;
  newImage.alt = alt || 'Alt text not found';

  const authorLink = document.createElement('a');
  authorLink.textContent = `Photo by: ${author}`;
  authorLink.href = authorProfile;
  authorLink.target = '_blank';
  authorLink.rel = 'noopener noreferrer';

  const addToFavoritesDiv = document.createElement('button');
  addToFavoritesDiv.classList.add('favorite');
  addToFavoritesDiv.setAttribute('aria-label', 'Add- remove favorites');
  addToFavoritesDiv.setAttribute('role', 'button');

  const favoriteIcon = document.createElement('i');
  favoriteIcon.classList.add('fa-solid', 'fa-star');

  const imageData = { src, alt, author, authorProfile };
  if (getFavorites().some((fav) => fav.src === src)) {
    favoriteIcon.classList.add('active');
  }

  favoriteIcon.addEventListener('click', () => {
    favoriteIcon.classList.toggle('active');
    toggleFavorite(imageData);

    if (!favoriteIcon.classList.contains('active')) {
      const imageContainer = favoriteIcon.closest('.image');
      if (imageContainer) {
        imageContainer.remove();
      }
    }
  });

  addToFavoritesDiv.appendChild(favoriteIcon);
  container.appendChild(newImage);
  container.appendChild(authorLink);
  container.appendChild(addToFavoritesDiv);

  document.getElementById('image-container').appendChild(container);
}

function showFavorites() {
  document.getElementById('image-container').replaceChildren();
  const favorites = getFavorites();

  if (favorites.length === 0) {
    alert('No favorites found');
    return;
  }

  favorites.forEach((imageData) => {
    addImagesToPage(
      imageData.src,
      imageData.alt,
      imageData.author,
      imageData.authorProfile
    );
  });
}

document
  .getElementById('fetch-button')
  .addEventListener('click', () => fetchImages());
document
  .getElementById('show-favorites-button')
  .addEventListener('click', showFavorites);
