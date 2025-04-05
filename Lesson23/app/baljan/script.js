const BASE_URL = 'https://api.unsplash.com';
let selectedCount = 10;

function fetchImages() {
  fetch(
    BASE_URL + `/photos/random/?client_id=${ACCESS_KEY}&count=${selectedCount}`
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
      document.getElementById('image-container').innerHTML = '';
      for (let i = 0; i < data.length; i++) {
        addImagesToPage(
          data[i].urls.small,
          data[i].alt_description,
          data[i].user.first_name ? data[i].user.first_name : '',
          data[i].user.last_name ? data[i].user.last_name : ''
        );
      }
      console.log(data);
    })
    .catch((error) => console.log(error));
}

function addImagesToPage(src, alt, firstName, lastName) {
  const imageItem = document.createElement('div');
  imageItem.classList.add('image-item');

  const newImage = document.createElement('img');
  newImage.src = src;
  newImage.alt = alt;
  imageItem.appendChild(newImage);

  const authorName = document.createElement('p');
  authorName.classList.add('author-name');
  authorName.textContent = `${firstName} ${lastName}`;
  imageItem.appendChild(authorName);

  document.getElementById('image-container').appendChild(imageItem);
}

<<<<<<< HEAD
document.querySelector('select').addEventListener('change', (event) => {
  selectedCount = parseInt(event.target.value);
  console.log('Selected number of images:', selectedCount);
});

const button = document.getElementById('fetch-button');

=======
const button = document.getElementById('fetch-button');
button.disabled = true;

document.querySelector('select').addEventListener('change', (event) => {
  selectedCount = parseInt(event.target.value);
  console.log('Selected number of images:', selectedCount);
  button.disabled = false;
});

>>>>>>> a2d91e5c1292bf7a6db2bd23239eb059265ed904
button.addEventListener('click', () => {
  fetchImages();
});
