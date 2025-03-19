let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');
const indicators = document.querySelectorAll('.indicator');
const imageArrayLength = images.length;
const indexOfLastElementInImageArray = imageArrayLength - 1;

function updateImage(index) {
  for (let i = 0; i < imageArrayLength; i++) {
    images[i].classList.remove('active');
    indicators[i].classList.remove('active');
  }
  images[index].classList.add('active');
  indicators[index].classList.add('active');
}

document.getElementById('next-btn').addEventListener('click', function () {
  if (currentImageIndex >= indexOfLastElementInImageArray) {
    currentImageIndex = 0;
    updateImage(currentImageIndex);
    restartAutoPlay();
  } else {
    currentImageIndex++;
    updateImage(currentImageIndex);
    restartAutoPlay();
  }
});

document.getElementById('prev-btn').addEventListener('click', function () {
  if (currentImageIndex <= 0) {
    currentImageIndex = indexOfLastElementInImageArray;
    updateImage(currentImageIndex);
  } else {
    currentImageIndex--;
  }
  updateImage(currentImageIndex);
});

function autoPlay() {
  if (currentImageIndex >= indexOfLastElementInImageArray) {
    currentImageIndex = 0;
  } else {
    currentImageIndex++;
  }
  updateImage(currentImageIndex);
}

let sliderInterval = setInterval(autoPlay, 3000);

function restartAutoPlay() {
  clearInterval(sliderInterval);
  sliderInterval = setInterval(autoPlay, 3000);
}

document.getElementById('next-btn').addEventListener('click', restartAutoPlay);
document.getElementById('prev-btn').addEventListener('click', restartAutoPlay);

const controlAutoPlay = document.getElementById('startStop-btn');

controlAutoPlay.addEventListener('click', function () {
  if (sliderInterval) {
    clearInterval(sliderInterval);
    sliderInterval = null;
    controlAutoPlay.textContent = 'Start';
  } else {
    autoPlay();
    sliderInterval = setInterval(autoPlay, 3000);
    controlAutoPlay.textContent = 'Stop';
  }
});

let restartTimeOut;

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', function () {
    currentImageIndex = index;
    updateImage(currentImageIndex);
    clearInterval(sliderInterval);
    sliderInterval = null;

    if (restartTimeOut) {
      clearTimeout(restartTimeOut);
    }
    restartTimeOut = setTimeout(restartAutoPlay, 3000);
  });
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') {
    document.getElementById('next-btn').click();
  } else if (event.key === 'ArrowLeft') {
    document.getElementById('prev-btn').click();
  } else if (event.key === 'Enter') {
    document.getElementById('startStop-btn').click();
  }
});
