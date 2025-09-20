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
      document.querySelectorAll(".swiper-slide img").forEach((img) => {
        img.classList.remove("zoomIn");
      });

      // تصویر اسلاید فعلی رو zoom بده
      const currentImg = this.slides[this.activeIndex].querySelector("img");
      if (currentImg) {
        // trigger reflow برای اینکه animation دوباره اجرا بشه
        void currentImg.offsetWidth;
        currentImg.classList.add("zoomIn");
      }
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closePopup");
    const video = document.getElementById("player");
    const videosrc = document.querySelector(".videosrc").innerHTML;
    // Plyr init

    const player = new Plyr(video, {
      controls: [
        "progress",
        "play-large",
        "play",
        "current-time",
        "duration",
        "mute",
        "volume",
        "settings",
        "pip",
        "airplay",
        "fullscreen",
      ],
    });
    player.source = {
      type: "video",
      sources: [
        {
          src: videosrc,
          type: "video/mp4",
        },
      ],
    };

    // همه دکمه‌ها
    document.querySelectorAll(".openBtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const src = btn.getAttribute("data-video");

        // تغییر سورس ویدیو
        player.source = {
          type: "video",
          sources: [{ src: src, type: "video/mp4" }],
        };

        popup.style.display = "flex";
      });
    });

    // بستن
    function closePopup() {
      popup.style.display = "none";
      player.pause();
      player.currentTime = 0;
    }
    closeBtn.addEventListener("click", closePopup);
    popup.addEventListener("click", (e) => {
      if (e.target === popup) closePopup();
    });
  }, 1000);

  const counters = document.querySelectorAll(".counter");

  // تبدیل اعداد فارسی و عربی به انگلیسی
  const toEnglishDigits = (str) => {
    return str
      .replace(/[\u06F0-\u06F9]/g, (d) => d.charCodeAt(0) - 0x06f0) // فارسی ۰–۹
      .replace(/[\u0660-\u0669]/g, (d) => d.charCodeAt(0) - 0x0660); // عربی ٠–٩
  };

  const animateCounter = (el) => {
    const raw = el.getAttribute("data-counter"); // مثلا "<p>۲۰۰</p>"
    const clean = raw.replace(/<[^>]*>/g, ""); // حذف تگ‌های HTML → "۲۰۰"
    const normalized = toEnglishDigits(clean); // تبدیل به "200"
    const target = parseInt(normalized.replace(/[^\d]/g, "")); // گرفتن فقط عدد

    let current = 0;
    const speed = target / 100; // سرعت انیمیشن

    const update = () => {
      current += speed;
      if (current < target) {
        el.textContent = "+" + Math.floor(current);
        requestAnimationFrame(update);
      } else {
        el.textContent = "+" + target;
      }
    };
    update();
  };

  // فقط وقتی المان وارد صفحه شد شمارش انجام بشه
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target); // یک بار اجرا
        }
      });
    },
    { threshold: 0.6 }
  );

  counters.forEach((counter) => observer.observe(counter));
});

const relProject = new Swiper(".relProject", {
  // Optional parameters
  loop: true,
  slidesPerView: 4,

  speed: 1500,
  spaceBetween: 10,
  autoplay: {
    delay: 2000, // 3 ثانیه بین هر اسلاید
    disableOnInteraction: false, // مهم: وقتی درگ شد هم اتوپلی ادامه پیدا کند
  },
  // Navigation arrows
  navigation: {
    nextEl: ".prevrelProject",
    prevEl: ".nextrelProject",
  },
});

const commentsSlider = new Swiper(".commentsSlider", {
  // Optional parameters
  loop: true,
  slidesPerView: 4,

  speed: 1500,
  spaceBetween: 54,
  autoplay: {
    delay: 2000, // 3 ثانیه بین هر اسلاید
    disableOnInteraction: false, // مهم: وقتی درگ شد هم اتوپلی ادامه پیدا کند
  },
  pagination: {
    el: ".commentsPagination",
    clickable: true,
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".commentsSlider .swiper-slide");
  const popup = document.getElementById("commentPopup");
  const popupContent = document.getElementById("commentPopupContent");
  const closeBtn = document.getElementById("closeCommentPopup");
  const closeMore = popup?.querySelector(".closeMore");

  slides.forEach((slide) => {
    const paraContainer = slide.querySelector(".para"); // کانتینرِ همه‌ی <p>ها
    const img = slide.querySelector(".imgS img");
    const title = slide.querySelector("h5");
    const moreBtn = slide.querySelector("button");

    // اگر المان‌های مورد نیاز موجود نیستند، از این اسلاید بگذریم
    if (!paraContainer || !moreBtn) return;

    // سعی کن line-height رو از computed style بگیری
    let lineHeight = parseFloat(
      window.getComputedStyle(paraContainer).lineHeight
    );

    // اگر مقدار عددی نبود ('normal' یا غیرقابل تبدیل)، با یک المان موقت اندازه‌اش رو بگیر
    if (!lineHeight || Number.isNaN(lineHeight)) {
      const temp = document.createElement("span");
      temp.textContent = "A";
      // طوری استایل بده که اندازه‌گیری درست باشه ولی دیده نشه
      temp.style.visibility = "hidden";
      temp.style.position = "absolute";
      temp.style.whiteSpace = "nowrap";
      paraContainer.appendChild(temp);
      lineHeight = temp.getBoundingClientRect().height;
      paraContainer.removeChild(temp);
    }

    // تعداد خطوط تقریبی
    const lines = Math.round(paraContainer.scrollHeight / lineHeight);

    if (lines <= 4) {
      moreBtn.style.display = "none";
    }

    // باز کردن پاپ‌آپ: از innerHTML استفاده می‌کنیم تا چند <p> حفظ بشه
    moreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const popupImg = popup.querySelector(".imgS img");
      if (popupImg) {
        popupImg.src = img?.src || "";
        popupImg.alt = img?.alt || "";
      }
      const popupTitle = popup.querySelector("h5");
      if (popupTitle) popupTitle.innerHTML = title?.innerHTML || "";
      // درج کل HTMLِ کانتینر (حفظ <p> و فرمت)
      popupContent.innerHTML = paraContainer.innerHTML;
      popup.style.display = "flex";
      popupContent.classList.remove("line-clamp-4"); // اطمینان از حذف محدودیت
    });
  });

  // بستن پاپ‌آپ
  closeBtn?.addEventListener("click", () => {
    if (popup) popup.style.display = "none";
  });
  closeMore?.addEventListener("click", () => {
    if (popup) popup.style.display = "none";
  });
// بستن با کلیک روی بک‌دراپ
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

  // اگر در پاپ‌آپ دکمه‌ی دیگری با همین منطق هست که کلاس hidden/flex می‌خواد تغییر کنه:
  const popupLessBtn = popup?.querySelector("button");
  popupLessBtn?.addEventListener("click", () => {
    popup.classList.add("hidden");
    popup.classList.remove("flex");
  });
});

const swiperlogo = new Swiper(".mySwiperlogo", {
  speed: 2500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 8,
  spaceBetween: 60,
  loop: true,
  grid: {
    rows: 5,
  },
});
