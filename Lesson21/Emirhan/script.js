const content = document.querySelectorAll('p');
const contentLength = content.length;
const icon = document.querySelectorAll('svg');
const iconLength = icon.length;

document.getElementById("icon-1").addEventListener('click', function () {
  for (let i = 0; i < contentLength; i++) {
      if (content[0].classList.contains("active")) {
        content[0].classList.remove('active');
      }else{
        content[0].classList.add('active');
      }
   
  }
});

document.getElementById("icon-2").addEventListener('click', function () {
  for (let i = 0; i < contentLength; i++) {
    if (content[1].classList.contains("active")) {
      content[1].classList.remove('active');
    }else{
      content[1].classList.add('active');
    }
  }
});

document.getElementById("icon-3").addEventListener('click', function () {
  for (let i = 0; i < contentLength; i++) {
    if (content[2].classList.contains("active")) {
      content[2].classList.remove('active');
    }else{
      content[2].classList.add('active');
    }

  }
});