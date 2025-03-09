// Seçicileri Tanımlıyorum
const images = document.querySelectorAll('.carousel-container img');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const toggleBtn = document.querySelector('#toggle-btn');
let currentIndex = 0;
let intervalId; // Zamanlayıcı ID'si
let isPlaying = true; // Otomatik geçiş aktif mi?

// *** Otomatik geçiş fonksiyonu (3 saniyede bir)
function startAutoSlide() {
  stopAutoSlide(); // Önceki interval'i temizle
  intervalId = setInterval(nextSlide, 3000);
}

// *** Otomatik geçişi durdurur
function stopAutoSlide() {
  clearInterval(intervalId);
}

// *** Slaytı günceleyen fonksiyon (hem butonlar hem de otomatik geçiş için)
function updateSlide(index) {
  images.forEach((img) => img.classList.remove('active'));
  indicators.forEach((ind) => ind.classList.remove('active'));

  images[index].classList.add('active');
  indicators[index].classList.add('active');

  currentIndex = index;
}

// *** Sonraki slayta geçiş fonksiyonu
function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlide(currentIndex);
}

// *** Önceki slayta geçiş fonksiyonu
function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlide(currentIndex);
}

// *** Başlat/Durdur butonu
toggleBtn.addEventListener('click', () => {
  isPlaying = !isPlaying; // Durumu tersine çevir

  if (isPlaying) {
    startAutoSlide();
    toggleBtn.textContent = 'Stop';
  } else {
    stopAutoSlide();
    toggleBtn.textContent = 'Start';
  }
});

function handleManualAction() {
  stopAutoSlide();
  isPlaying = false;
  toggleBtn.textContent = 'Start';
}

// *** Göstergelere tıklanınca ilgili slayta geçiş
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    handleManualAction();
    updateSlide(index);
  });
});

// *** Önceki ve sonraki butonları aktif et
prevBtn.addEventListener('click', () => {
  handleManualAction();
  prevSlide();
});

nextBtn.addEventListener('click', () => {
  handleManualAction();
  nextSlide();
});

// *** Sayfa yüklendiğinde otomatik geçişi başlat
startAutoSlide();

/* JS YERLEŞİK FONKSİYONLAR
document.querySelector() // Element seçme
element.addEventListener() // Tıklama dinleyici
setInterval() : Belirli bir zaman aralığında belirli bir işlemi tekrar etmek için kullanılır.
clearInterval() : setInterval() fonksiyonu ile belirtilen işlemi durdurmak için kullanılır.
classList.add()/remove() // CSS class yönetimi
*/
