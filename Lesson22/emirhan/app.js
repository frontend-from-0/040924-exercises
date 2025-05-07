let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');
const imageArrayLength = images.length;
const indexOfLastElementInImageArray = imageArrayLength - 1;

function removeAddClass() {
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
console.log(
  'Index of the last image in the image array',
  indexOfLastElementInImageArray
);
const nextButton = document.getElementById('next-btn');
nextButton.addEventListener('click', function nextSlide() {
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
  removeAddClass();
});

const indicators = document.querySelectorAll('.indicator');

document.getElementById('prev-btn').addEventListener('click', function () {
  if (currentImageIndex <= 0) {
    currentImageIndex = indexOfLastElementInImageArray;
  } else {
    currentImageIndex--;
  }

  removeAddClass();
});

document.getElementById('0').addEventListener('click', function () {
  for (let i = 0; i < imageArrayLength; i++) {
    images[i].classList.remove('active');
    indicators[i].classList.remove('active');
  }
  images[0].classList.add('active');
  indicators[0].classList.add('active');
});
document.getElementById('1').addEventListener('click', function () {
  for (let i = 0; i < imageArrayLength; i++) {
    images[i].classList.remove('active');
    indicators[i].classList.remove('active');
  }
  images[1].classList.add('active');
  indicators[1].classList.add('active');
});

document.getElementById('2').addEventListener('click', function () {
  for (let i = 0; i < imageArrayLength; i++) {
    images[i].classList.remove('active');
    indicators[i].classList.remove('active');
  }
  images[2].classList.add('active');
  indicators[2].classList.add('active');
});

let clickCount = 0;
let intervalId;
// This section was assisted by AI
const playBtn = document.getElementById('play');
playBtn.addEventListener('click', function () {
  clickCount++;
  if (clickCount % 2) {
    this.textContent = 'Pause';
    function autoSlide() {
      nextButton.click();
    }
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(autoSlide, 3000);
  } else {
    this.textContent = 'Play';
    if (intervalId) clearInterval(intervalId);
  }
});
