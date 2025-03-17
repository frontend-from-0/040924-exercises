let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');
const indicators = document.querySelectorAll('.indicator');
const imageArrayLength = images.length;
let autoChangeInterval;

function updateActiveImage() {
  images.forEach((image, index) => {
    image.classList.remove('active');
    indicators[index].classList.remove('active');
  });

  images[currentImageIndex].classList.add('active');
  indicators[currentImageIndex].classList.add('active');
}

function startAutoChange() {
  autoChangeInterval = setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % imageArrayLength;
    updateActiveImage();
  }, 3000);
}

function stopAutoChange() {
  clearInterval(autoChangeInterval);
}

document.getElementById('next-btn').addEventListener('click', function () {
  currentImageIndex = (currentImageIndex + 1) % imageArrayLength;
  updateActiveImage();
});

document.getElementById('prev-btn').addEventListener('click', function () {
  currentImageIndex =
    (currentImageIndex - 1 + imageArrayLength) % imageArrayLength;
  updateActiveImage();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', function () {
    currentImageIndex = index;
    updateActiveImage();
  });
});

document
  .getElementById('start-stop-btn')
  .addEventListener('click', function () {
    if (autoChangeInterval) {
      stopAutoChange();
      this.textContent = 'Start';
    } else {
      startAutoChange();
      this.textContent = 'Stop';
    }
  });

startAutoChange();
