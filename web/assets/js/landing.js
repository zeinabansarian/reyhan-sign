const relProduct = new Swiper(".relProduct", {
  // Optional parameters
  loop: true,
  slidesPerView: 4,

  speed: 1500,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: ".prevrelProduct",
    prevEl: ".nextrelProduct",
  },
});

const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closePopup");
const video = document.getElementById("player");

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
    delay: 2000,   // 3 ثانیه بین هر اسلاید
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
const closeMore  = popup.querySelector(".closeMore")
  slides.forEach(slide => {
    const para = slide.querySelector(".para p");
    const img = slide.querySelector(".imgS img");
    const title = slide.querySelector("h5");
    const moreBtn = slide.querySelector("button");

    // بررسی بیشتر از ۴ خط
    const lineHeight = parseInt(window.getComputedStyle(para).lineHeight, 10);
    const lines = Math.round(para.scrollHeight / lineHeight);
    if (lines <= 4) {
      moreBtn.style.display = "none";
    }

    // باز کردن پاپ‌آپ و جایگزین اطلاعات
    moreBtn.addEventListener("click", (e) => {
      e.preventDefault();

      // جایگزین اطلاعات داخل پاپ‌آپ
      popup.querySelector(".imgS img").src = img.src;
      popup.querySelector(".imgS img").alt = img.alt;
      popup.querySelector("h5").innerHTML = title.innerHTML;
      popupContent.textContent = para.textContent;

      // نمایش پاپ‌آپ
      popup.style.display="flex"
    });
  });

  // بستن پاپ‌آپ با دکمه ضربدر
  closeBtn.addEventListener("click", () => {
    popup.style.display="none"
  });
  closeMore.addEventListener("click", () => {
    popup.style.display="none"
  });

  // بستن پاپ‌آپ با دکمه "کمتر"
  popup.querySelector("button").addEventListener("click", () => {
    popup.classList.add("hidden");
    popup.classList.remove("flex");
  });
});




const accordions = document.querySelectorAll(".accordion");

const openAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__content");
	accordion.classList.add("accordion__active");
	content.style.maxHeight = content.scrollHeight +32 + "px";
};

const closeAccordion = (accordion) => {
	const content = accordion.querySelector(".accordion__content");
	accordion.classList.remove("accordion__active");
	content.style.maxHeight = null;
};

accordions.forEach((accordion) => {
	const intro = accordion.querySelector(".accordion__intro");
	const content = accordion.querySelector(".accordion__content");

	intro.onclick = () => {
		if (content.style.maxHeight) {
			closeAccordion(accordion);
		} else {
			accordions.forEach((accordion) => closeAccordion(accordion));
			openAccordion(accordion);
		}
	};
});