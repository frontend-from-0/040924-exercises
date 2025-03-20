const BASE_URL = 'https://api.unsplash.com';
let value;
function fetchImages() {
  value = document.getElementById('input').value;
  fetch(
    BASE_URL + '/photos/random/' + `?client_id=${ACCESS_KEY}&count=${value}`
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
      for (let i = 0; i < data.length; i++) {
        addImagesToPage(
          data[i].urls.small,
          data[i].alt_description,
          data[i].user.name,
          data[i].alt_description,
          data[i].user.portfolio_url
        );

        console.log(data[i].user.social.portfolio_url);
      }
    })
    .catch((error) => console.log(error));
  document.getElementById('input').value = '';
}

function addImagesToPage(src, alt, title, text, buttonLink) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.width = '18rem';

  const newImage = document.createElement('img');
  newImage.classList.add('card-img-top');
  newImage.src = src;
  newImage.alt = alt;

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = title;

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.textContent = text;

  const button = document.createElement('a');
  button.classList.add('btn', 'btn-primary');
  button.href = buttonLink;
  button.textContent = 'Discover the Photographer';

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  cardBody.appendChild(button);
  card.appendChild(newImage);
  card.appendChild(cardBody);

  document.getElementById('image-container').appendChild(card);
  console.log(newImage);
}

const button = document.getElementById('fetch-button');

button.addEventListener('click', () => fetchImages());
