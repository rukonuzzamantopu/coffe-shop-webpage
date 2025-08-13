// NAV MENU 
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

if (menu && navbar) {
  menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  };
  window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  };
}

// IMAGE SWAP (only if those elements exist on this page)
document.querySelectorAll('.image-slider img').forEach(img => {
  img.onclick = () => {
    const main = document.querySelector('.main-home-image');
    if (main) main.src = img.getAttribute('src');
  };
});

// REVIEW SLIDER — scope to the review section and init only if present
if (document.querySelector('.review .review-slider')) {
  const reviews = new Swiper('.review .review-slider', {
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.review .swiper-pagination', 
      clickable: true,
    },
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0:   { slidesPerView: 1 },
      768: { slidesPerView: 2 }
    }
  });
}
