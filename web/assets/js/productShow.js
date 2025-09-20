  $(document).ready(function() {
      // مقدار دهی اولیه برای گالری
      $("#gallery").justifiedGallery({
        rowHeight: 300,
        maxRowHeight: 400,
        margins: 25,
        captions: false,
        lastRow: 'nojustify'
      });
      
      // ایجاد Intersection Observer برای تشخیص عناصری که در viewport هستند
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // اضافه کردن کلاس برای انیمیشن وقتی المان در viewport است
            const img = entry.target;
            setTimeout(() => {
              img.classList.add('lazyloaded');
            }, 100);
            observer.unobserve(img);
          }
        });
      }, observerOptions);
      
      // مشاهده همه تصاویر پس از لود گالری
      setTimeout(() => {
        document.querySelectorAll('#gallery img').forEach(img => {
          observer.observe(img);
        });
      }, 500);
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