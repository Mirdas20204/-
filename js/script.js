const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });