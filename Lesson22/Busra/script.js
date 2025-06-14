let currentImageIndex = 0;

const images = document.querySelectorAll('.carousel img');

const imageArrayLength = images.length;

const indexOfLastElementInImageArray = imageArrayLength - 1;

const indicators = document.querySelectorAll('.indicator');

const nextBtn = document.getElementById('next-btn');

const prevBtn = document.getElementById('prev-btn');

const startButton = document.getElementById('start-btn');

const stopButton = document.getElementById('stop-btn');

window.onload = function () {
  startCarousel();
};

function updateActiveImage() {
  for (let i = 0; i < imageArrayLength; i++) {
    images[i].classList.remove('active');
    indicators[i].classList.remove('active');
  }

  images[currentImageIndex].classList.add('active');
  indicators[currentImageIndex].classList.add('active');
}

nextBtn.addEventListener('click', function () {
  if (currentImageIndex >= indexOfLastElementInImageArray) {
    currentImageIndex = 0;
  } else {
    currentImageIndex++;
  }
  updateActiveImage();
});

prevBtn.addEventListener('click', function () {
  if (currentImageIndex <= 0) {
    currentImageIndex = indexOfLastElementInImageArray;
  } else {
    currentImageIndex--;
  }

  updateActiveImage();
});

function startCarousel() {
  interval = setInterval(function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
   updateActiveImage();
  }, 2000);

  startButton.classList.add('hidden');
 stopButton.classList.remove('hidden');
  prevBtn.classList.add('hidden');
  nextBtn.classList.add('hidden');
}

startButton.addEventListener('click', function () {
  startCarousel();
  startButton.disabled = true;
  stopButton.disabled = false;
});

function stopCarousel() {
  clearInterval(interval);
  startButton.classList.remove('hidden');
  stopButton.classList.add('hidden');
  prevBtn.classList.remove('hidden');
  nextBtn.classList.remove('hidden');
}

stopButton.addEventListener('click', function () {
  stopCarousel();
  startButton.disabled = false;
  stopButton.disabled = true;
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', function () {
    currentImageIndex = index;
    updateActiveImage();
  });
});
