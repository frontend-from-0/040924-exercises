let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');
const indicators = document.querySelectorAll('.indicator');
const imageArrayLength = images.length;
const indexOfLastElementInImageArray = imageArrayLength - 1;
let autoSlideInterval;

console.log(
  'Index of the last image in the image array',
  indexOfLastElementInImageArray
);

function startAutoSlide() {
  stopAutoSlide();
  autoSlideInterval = setInterval(() => {
    console.log('Auto slide: moving to next image');
    document.getElementById('next-btn').click();
  }, 3000);
}

function stopAutoSlide() {
  console.log('Stopping auto slide');
  clearInterval(autoSlideInterval);
}

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

  for (let i = 0; i < imageArrayLength; i++) {
    console.log(`Removing active class from the ${i} element in image array`);
    images[i].classList.remove('active');
    if (indicators[i]) {
      indicators[i].classList.remove('active');
    }
  }

  console.log(
    `Add active class to the ${currentImageIndex} element in image array`
  );
  images[currentImageIndex].classList.add('active');
  if (indicators[currentImageIndex]) {
    indicators[currentImageIndex].classList.add('active');
  }
});

document.getElementById('prev-btn').addEventListener('click', function () {
  if (currentImageIndex <= 0) {
    currentImageIndex = indexOfLastElementInImageArray;
  } else {
    currentImageIndex--;
  }

  for (let i = 0; i < imageArrayLength; i++) {
    console.log(`Removing active class from the ${i} element in image array`);
    images[i].classList.remove('active');
    if (indicators[i]) {
      indicators[i].classList.remove('active');
    }
  }

  console.log(
    `Add active class to the ${currentImageIndex} element in image array`
  );
  images[currentImageIndex].classList.add('active');
  if (indicators[currentImageIndex]) {
    indicators[currentImageIndex].classList.add('active');
  }
});

document.getElementById('toggle-autoplay').addEventListener('click', function () {
  if (autoSlideInterval) {
    stopAutoSlide();
    this.textContent = 'Start';
    autoSlideInterval = null;
  } else {
    startAutoSlide();
    this.textContent = 'Stop';
  }
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    console.log(`Indicator ${index} clicked`);
    currentImageIndex = index;
    images.forEach((img, i) => {
      img.classList.remove('active');
      if (indicators[i]) {
        indicators[i].classList.remove('active');
      }
    });
    images[currentImageIndex].classList.add('active');
    if (indicators[currentImageIndex]) {
      indicators[currentImageIndex].classList.add('active');
    }
  });
});

startAutoSlide();
