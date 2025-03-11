let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');
const imageArrayLength = images.length;
const indexOfLastElementInImageArray = imageArrayLength - 1;
console.log(
  'Index of the last image in the image array',
  indexOfLastElementInImageArray
);
const indicators = document.querySelectorAll('.indicator');

//update carousel and indicators
function updateCarousel() {
  for (let i = 0; i < imageArrayLength; i++) {
    console.log(`Removing active class from the ${i} element in image array`);
    images[i].classList.remove('active');
    indicators[i].classList.remove('active');
  }

  console.log(
    `Add active class to the ${currentImageIndex} element in image array`
  );
  images[currentImageIndex].classList.add('active');
  indicators[currentImageIndex].classList.add('active');
}

//indicator button
indicators.forEach((indicator) => {
  indicator.addEventListener('click', (event) => {
    currentImageIndex = parseInt(event.target.getAttribute('data-index'), 10);
    console.log('Clicked indicator index:', currentImageIndex);
    updateCarousel();
  });
});

// Next button
document.getElementById('next-btn').addEventListener('click', function () {
  console.log('Current image index', currentImageIndex);
  if (currentImageIndex >= indexOfLastElementInImageArray) {
    console.log(
      'Current image index is >= than indexOfLastElementInImageArray. Setting currentImageIndex to 0.'
    );
    currentImageIndex = 0;
  } else {
    console.log(
      'Current image index is < than indexOfLastElementInImageArray. Setting currentImageIndex to +1'
    );
    currentImageIndex++;
  }
  updateCarousel();
});

// Previous button
document.getElementById('prev-btn').addEventListener('click', function () {
  if (currentImageIndex <= 0) {
    currentImageIndex = indexOfLastElementInImageArray;
  } else {
    currentImageIndex--;
  }
  updateCarousel();
});

// Auto slideshow function
let slideShowInterval;
let isPlaying = false;

function startSlideShow() {
  slideShowInterval = setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % imageArrayLength;
    updateCarousel();
  }, 3000);
}

document.addEventListener('DOMContentLoaded', function () {
  startSlideShow();
  isPlaying = true;
  document.getElementById('play-btn').classList.remove('active');
  document.getElementById('pause-btn').classList.add('active');
});

document.getElementById('play-btn').addEventListener('click', function () {
  if (!isPlaying) {
    startSlideShow();
    isPlaying = true;

    document.getElementById('play-btn').classList.toggle('active');
    document.getElementById('pause-btn').classList.toggle('active');
  }
});

document.getElementById('pause-btn').addEventListener('click', function () {
  clearInterval(slideShowInterval);
  slideShowInterval = null;
  isPlaying = false;

  document.getElementById('play-btn').classList.add('active');
  document.getElementById('pause-btn').classList.remove('active');
});
