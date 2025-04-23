
document.addEventListener("DOMContentLoaded", function() {
  // Function when the screen's width is smaller than 800px
  let search = document.querySelector('.search-box');
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('bi-x');
    navbar.classList.remove('active');
  };
  
  menu.onclick = () => {
    menu.classList.toggle('bi-x');
    navbar.classList.toggle('active');
    search.classList.remove('active');
  };

  // Hide Menu And Search Bar On Scroll
  window.onscroll = () => {
    menu.classList.remove('bi-x');
    navbar.classList.remove('active');
    search.classList.remove('active');
  };

  /* When user clicks on the FAQ, the answer for a single question will drop down */
  const faqHeaders = document.querySelectorAll(".faqs-container .faq-header");

  faqHeaders.forEach((header, i) => {
    header.addEventListener("click", () => {
      header.nextElementSibling.classList.toggle("active");

      const open = header.querySelector(".open");
      const close = header.querySelector(".close");

      if (header.nextElementSibling.classList.contains("active")) {
        open.classList.remove("active");
        close.classList.add("active");
      } else {
        open.classList.add("active");
        close.classList.remove("active");
      }
    });
  });

  // Handle "axia" image click
  document.querySelector("#axia").onclick = () => {
    document.querySelector(".interior").classList.toggle("active");
  };

  // Handle "close-form" button click
  document.querySelector("#close-form").onclick = () => {
    document.querySelector(".interior").classList.remove("active");
  };
});
