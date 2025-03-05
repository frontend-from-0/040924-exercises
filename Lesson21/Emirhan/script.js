const content = document.querySelectorAll('p');
const contentLength = content.length;
const icon = document.querySelectorAll('svg');
const iconLength = icon.length;

document.getElementById("icon-1").addEventListener('click', function () {
  for (let i = 0; i < contentLength; i++) {
    if (content[0].classList.contains("active")) {
      content[0].classList.remove('active');
    } else {
      content[0].classList.add('active');
    }
  }
  for (let i = 0; i < iconLength; i++) {
    if (icon[0].classList.contains("activeIcon")) {
      icon[0].classList.remove('activeIcon');
    } else {
      icon[0].classList.add('activeIcon');
    }
  }
});

document.getElementById("icon-2").addEventListener('click', function () {
  for (let i = 0; i < contentLength; i++) {
    if (content[1].classList.contains("active")) {
      content[1].classList.remove('active');
    } else {
      content[1].classList.add('active');
    }
  }
  for (let i = 0; i < iconLength; i++) {

    if (icon[1].classList.contains("activeIcon")) {
      icon[1].classList.remove('activeIcon');
    } else {
      icon[1].classList.add('activeIcon');
    }
  }

});

document.getElementById("icon-3").addEventListener('click', function () {
  for (let i = 0; i < contentLength; i++) {
    if (content[2].classList.contains("active")) {
      content[2].classList.remove('active');
    } else {
      content[2].classList.add('active');
    }
  }
  for (let i = 0; i < iconLength; i++) {
    if (icon[2].classList.contains("activeIcon")) {
      icon[2].classList.remove('activeIcon');
    } else {
      icon[2].classList.add('activeIcon');
    }
  }
});