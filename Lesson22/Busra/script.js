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

function removeAddClasses() {
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
  removeAddClasses();
});

prevBtn.addEventListener('click', function () {
  if (currentImageIndex <= 0) {
    currentImageIndex = indexOfLastElementInImageArray;
  } else {
    currentImageIndex--;
  }

  removeAddClasses();
});

function startCarousel() {
  interval = setInterval(function () {
    images[currentImageIndex].classList.remove('active');

    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
  }, 2000);

  startButton.classList.add('hidden');
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
    images[currentImageIndex].classList.remove('active');
    indicators[currentImageIndex].classList.remove('active');

    currentImageIndex = index;
    images[currentImageIndex].classList.add('active');
    indicators[currentImageIndex].classList.add('active');
  });
});
