const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  item.addEventListener('click', () => {
    const icon = item.querySelector('.icon');
    const clickSound = new Audio('click.mp3');
    clickSound.play();

    if (!icon) return;
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
        otherItem.querySelector('.accordion-content').style.maxHeight = null;

        const otherIcon = otherItem.querySelector('.icon');
        if (otherIcon) otherIcon.classList.replace('fa-minus', 'fa-plus');
      }
    });

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
