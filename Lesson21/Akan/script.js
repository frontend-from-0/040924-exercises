document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function () {
        const body = this.nextElementSibling;
        this.classList.toggle('active');

     
        body.classList.toggle('show');

        document.querySelectorAll('.accordion-body').forEach(item => {
            if (item !== body) {
                item.classList.remove('show');
                item.previousElementSibling.classList.remove('active');
            }
        });
    });
});
