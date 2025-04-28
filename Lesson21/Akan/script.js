document.querySelectorAll('.accordion-button').forEach((button) => {
  button.addEventListener('click', function () {
    const body = this.parentElement.nextElementSibling;

    if (body.classList.contains('show')) {
    
      body.style.maxHeight = null;
      body.classList.remove('show');
      this.classList.remove('active');
    } else {
      
      document.querySelectorAll('.accordion-body').forEach((item) => {
        if (item !== body) {
          item.classList.remove('show');
          item.style.maxHeight = null;
          const relatedButton =
            item.previousElementSibling.querySelector('.accordion-button');
          if (relatedButton) {
            relatedButton.classList.remove('active');
          }
        }
      });

      
      body.classList.add('show');
      body.style.maxHeight = body.scrollHeight + 'px';
      this.classList.add('active');
    }
  });
});
