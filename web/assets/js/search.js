const relProject = new Swiper('.relProject', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  autoplay: {
    delay: 2000,   // 3 ثانیه بین هر اسلاید
    disableOnInteraction: false, // مهم: وقتی درگ شد هم اتوپلی ادامه پیدا کند
  },
speed:1500,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.prevrelProject',
    prevEl: '.nextrelProject',
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



const relNews = new Swiper('.relNews', {
  // Optional parameters
  slidesPerView: 3,

speed:1500,
  spaceBetween: 42,

  // Navigation arrows
  navigation: {
    nextEl: '.prevNews',
    prevEl: '.nextNews',
  },


});

