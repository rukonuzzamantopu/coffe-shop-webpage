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
