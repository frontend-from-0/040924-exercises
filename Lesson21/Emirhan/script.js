const accordion = document.getElementsByClassName('item');
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    const content = document.querySelectorAll('p');
    const icon = document.querySelectorAll('svg');
    if (content[i].classList.contains('active')) {
      content[i].classList.remove('active');
    } else {
      content[i].classList.add('active');
    }
    if (icon[i].classList.contains('activeIcon')) {
      icon[i].classList.remove('activeIcon');
    } else {
      icon[i].classList.add('activeIcon');
    }
  });
}

const item = document.getElementById('item');
const liItem = document.createElement('li');
liItem.textContent = 'New List Item';
item.appendChild(liItem);
