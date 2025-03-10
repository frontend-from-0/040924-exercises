document.addEventListener('DOMContentLoaded', function () {
  const headers = document.querySelectorAll('.heading');

  headers.forEach((header) => {
    header.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector('p');

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.textContent = '+';
      } else {
        document.querySelectorAll('.content').forEach((item) => {
          item.style.maxHeight = null;
        });
        document.querySelectorAll('.heading p').forEach((item) => {
          item.textContent = '+';
        });

        content.style.maxHeight = content.scrollHeight + 'px';
        icon.textContent = '-';
      }
    });
  });
});
