const mainSlider = new Swiper(".mainSlider", {
  loop: true,
  speed: 1000,
  effect: "fade",
  fadeEffect: { crossFade: true },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".mainPagination",
    clickable: true,
  },
    navigation: {
    nextEl: ".prevMainSlide",
    prevEl: ".nextMainSlide",
  },
  on: {
    slideChangeTransitionStart: function () {
      // همه تصاویر قبلی کلاس zoom رو حذف کن
      document.querySelectorAll(".swiper-slide img").forEach(img => {
        img.classList.remove("zoomIn");
      });

      // تصویر اسلاید فعلی رو zoom بده
      const currentImg = this.slides[this.activeIndex].querySelector("img");
      if(currentImg) {
        // trigger reflow برای اینکه animation دوباره اجرا بشه
        void currentImg.offsetWidth;
        currentImg.classList.add("zoomIn");
      }
    }
  }
});
