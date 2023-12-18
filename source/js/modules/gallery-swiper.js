import Swiper from '../vendor/swiper';

const gallerySwiper = new Swiper('.gallery__swiper', {
  loop: true,

  slidesPerView: 'auto',

  breakpoints: {
    320: {
      allowTouchMove: true,
      spaceBetween: 3,
    },
    768: {
      allowTouchMove: true,
      spaceBetween: 5,
    },
    1024: {
      allowTouchMove: true,
      spaceBetween: 5,
    },
    1200: {
      allowTouchMove: false,
      spaceBetween: 5,
    },
  },

  navigation: {
    nextEl: '.gallery__swiper-button--next',
    prevEl: '.gallery__swiper-button--prev',
    disabledClass: 'gallery__swiper-button--disabled',
  },
});

export {gallerySwiper};
