let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');
const indicators = document.querySelectorAll('.indicator');
const imageArrayLength = images.length;
const indexOfLastElementInImageArray = imageArrayLength - 1;

let autoSlideInterval;
let isAutoSliding = true;

console.log(
  'Index of the last image in the array',
  indexOfLastElementInImageArray
);

function changeImage(index) {
  for (let i = 0; i < imageArrayLength; i++) {
    images[i].classList.remove('active');
    indicators[i].classList.remove('active');
  }

  images[index].classList.add('active');
  indicators[index].classList.add('active');
  currentImageIndex = index;
}

document.getElementById('next-btn').addEventListener('click', function () {
  let nextIndex =
    currentImageIndex >= indexOfLastElementInImageArray
      ? 0
      : currentImageIndex + 1;
  changeImage(nextIndex);
});

document.getElementById('prev-btn').addEventListener('click', function () {
  let prevIndex =
    currentImageIndex <= 0
      ? indexOfLastElementInImageArray
      : currentImageIndex - 1;
  changeImage(prevIndex);
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', function () {
    changeImage(index);
  });
});

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    let nextIndex =
      currentImageIndex >= indexOfLastElementInImageArray
        ? 0
        : currentImageIndex + 1;
    changeImage(nextIndex);
  }, 3000);
  isAutoSliding = true;
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
  isAutoSliding = false;
}

const toggleButton = document.createElement('button');
toggleButton.innerText = 'Start/Stop';
toggleButton.classList.add('carousel-toggle-btn'); //
document.querySelector('.carousel').appendChild(toggleButton);

startAutoSlide();

toggleButton.addEventListener('click', function () {
  if (isAutoSliding) {
    stopAutoSlide();
  } else {
    startAutoSlide();
  }
});
