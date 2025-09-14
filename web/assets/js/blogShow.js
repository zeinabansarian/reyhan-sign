const relBlog = new Swiper('.relBlog', {
  // Optional parameters
  loop: true,

speed:1500,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.prevRelBlog',
    prevEl: '.nextRelBlog',
  },


});
const relProduct = new Swiper('.relProduct', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,

speed:1500,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.prevrelProduct',
    prevEl: '.nextrelProduct',
  },


});
const relProject = new Swiper('.relProject', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,

speed:1500,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.prevrelProject',
    prevEl: '.nextrelProject',
  },


});