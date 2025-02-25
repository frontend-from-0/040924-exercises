document.addEventListener("DOMContentLoaded", function () {

  const accordionItems = document.querySelectorAll(".item");

  accordionItems.forEach((item) => {
    const title = item.querySelector(".title");

    title.addEventListener("click", function () {
  
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

     
      item.classList.toggle("active");
    });
  });
});