var mainSwiper = new Swiper('.mainSwiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  }
});

var mySwiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});


var aboutUsswiper = new Swiper(".aboutUsswiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  autoplay: {
      delay: 5000, 
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});



