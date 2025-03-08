document.querySelectorAll('.accordion-title').forEach((item) => {
  item.addEventListener('click', function () {
    //console.log('Accordion item clicked');
    let content = this.nextElementSibling;
    let isOpen = content.classList.contains('open');

    document.querySelectorAll('.accordion-content').forEach((contentItem) => {
      contentItem.classList.remove('open');
    });

    if (!isOpen) {
      content.classList.add('open');
    }
  });
});
