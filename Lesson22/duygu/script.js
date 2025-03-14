let currentImageIndex = 0;
const images = document.querySelectorAll(".carousel img");
const indicators = document.querySelectorAll(".indicator");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const autoplayBtn = document.getElementById("toggle-autoplay");
let autoSlideInterval = null;

function updateCarousel(index) {
  images.forEach((img, i) => {
    img.classList.toggle("active", i === index);
    indicators[i].classList.toggle("active", i === index);
  });
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateCarousel(currentImageIndex);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateCarousel(currentImageIndex);
}

function startAutoSlide() {
  if (autoSlideInterval) return;
  autoSlideInterval = setInterval(nextImage, 5000);
  autoplayBtn.textContent = "Stop";
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = null;
  autoplayBtn.textContent = "Start";
}

nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);

autoplayBtn.addEventListener("click", () => {
  if (autoSlideInterval) {
    stopAutoSlide();
  } else {
    startAutoSlide();
  }
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentImageIndex = index;
    updateCarousel(currentImageIndex);
  });
});

updateCarousel(currentImageIndex);
startAutoSlide();