const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  item.addEventListener('click', () => {
    const icon = item.querySelector('.icon');
    const clickSound = new Audio('click.mp3');
    clickSound.play();

    if (!icon) return;

    const openItem = document.querySelector('.accordion-item.active');
    if (openItem && openItem !== item) {
      openItem.classList.remove('active');
      openItem.querySelector('.accordion-content').style.maxHeight = null;

      const openIcon = openItem.querySelector('.icon');
      if (openIcon) openIcon.classList.replace('fa-minus', 'fa-plus');
    }

    item.classList.toggle('active');

    const content = item.querySelector('.accordion-content');
    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.classList.replace('fa-plus', 'fa-minus');
    } else {
      content.style.maxHeight = null;
      icon.classList.replace('fa-minus', 'fa-plus');
    }
  });
});
