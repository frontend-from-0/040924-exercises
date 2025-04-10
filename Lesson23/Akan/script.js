const BASE_URL = 'https://api.unsplash.com';

function fetchImages() {
  const count = document.getElementById('image-count').value; // Fetch selected count
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
      document.getElementById('image-container').innerHTML = ''; // Clear old images
      data.forEach((image) => {
        addImageToPage(
          image.urls.small,
          image.alt_description,
          image.user.name
        );
      });
    })
    .catch((error) => {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = `Error: ${error.message}`;
      errorMessage.style.color = 'red';
      document.getElementById('image-container').appendChild(errorMessage);
      console.error(error);
    });
}

function addImageToPage(src, alt, author) {
  const container = document.createElement('div');
  container.classList.add('image');

  const img = document.createElement('img');
  img.src = src;
  img.alt = alt || 'Image';
  img.setAttribute('loading', 'lazy');

  const caption = document.createElement('p');
  caption.textContent = `Author: ${author || 'Unknown'}`;
  caption.style.fontSize = '14px';
  caption.style.color = '#555';

  container.appendChild(img);
  container.appendChild(caption);
  document.getElementById('image-container').appendChild(container);
}

const button = document.getElementById('fetch-button');
button.addEventListener('click', () => fetchImages());
