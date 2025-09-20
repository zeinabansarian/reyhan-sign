function listScrollTop(params) {
  const elements = document.querySelectorAll(".listScrollTop");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const el = entry.target;

        if (entry.isIntersecting) {
          // تعیین delay بر اساس ایندکس عنصر در مجموعه elements
          const index = Array.from(elements).indexOf(el);
          const delays = [0.1, 0.2, 0.3, 0.4]; // ثانیه
          const delay = delays[index % delays.length];

          // اضافه کردن کلاس و delay با inline style
          el.style.transitionDelay = `${delay}s`;
          el.classList.add("visible", "animate");

          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.01,
    }
  );

  elements.forEach((el) => observer.observe(el));
}

listScrollTop();

const relProject = new Swiper(".relProject", {
  // Optional parameters
  loop: true,
  slidesPerView: 4,

  speed: 1500,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,   // 3 ثانیه بین هر اسلاید
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

document.addEventListener("DOMContentLoaded", function () {
  const span = document.querySelector(".section5 span[data-city]");
  const cities = span.getAttribute("data-city").split(",");

  // استان تهران
  const tehran = document.querySelector("#IR-201878");
  tehran.classList.add("activeBranch");

  const svg = tehran.closest("svg");
















  


  // مرکز هندسی path تهران
  const tBox = tehran.getBBox();
  let tX = tBox.x + tBox.width / 2;
  let tY = tBox.y + tBox.height / 2;

  // ---------- شیفت آیکن ----------
  const shiftX = -20; // تغییر دلخواه
  const shiftY = 0;

  // ---------- آیکن وسط تهران ----------
  const icon = document.createElementNS("http://www.w3.org/2000/svg", "g");
  icon.setAttribute(
    "transform",
    `translate(${tX - 7 + shiftX}, ${tY - 7 + shiftY})`
  );

  icon.innerHTML = `
      <circle cx="7" cy="7" r="7" fill="#FDC900"/>
      <path d="M7 8L8.76032 10H10L8.23968 8H7Z" fill="black"/>
      <path d="M5.20253 9.01822V3.98583H6.21341C7.97824 3.98583 8.85855 4.80364 8.85855 6.4413C8.85855 6.53846 8.85433 6.63158 8.84802 6.72267L10 5.31377C9.58091 3.7753 8.31099 3 6.10179 3H4V10H6.01544C6.0702 10 6.12074 9.99595 6.17339 9.99393L7.04949 8.92105C6.78203 8.98583 6.48719 9.01822 6.16708 9.01822H5.20253Z" fill="black"/>
    `;
  svg.appendChild(icon);

  tX = tX + shiftX;
  tY = tY + shiftY;

  // ---------- فلش‌ها ----------
  const arrowLength = 10; // طول سر فلش
  const arrowWidth = 5; // عرض سر فلش

  cities.forEach((cityId) => {
    const cityPath = document.querySelector(`#${cityId.trim()}`);
    if (!cityPath) return;

    cityPath.classList.add("activeBranch");

    const cBox = cityPath.getBBox();
    const cX = cBox.x + cBox.width / 2;
    const cY = cBox.y + cBox.height / 2;

    // بردار از تهران به مقصد
    const dx = cX - tX;
    const dy = cY - tY;
    const angle = (Math.atan2(dy, dx) * 180) / Math.PI;

    // ---------- کوتاه کردن خط قبل از رسیدن به نوک فلش ----------
    const len = Math.sqrt(dx * dx + dy * dy);
    const shrink = arrowLength; // فاصله کوتاه شدن خط به اندازه نوک فلش
    const ratio = (len - shrink) / len;
    const lineEndX = tX + dx * ratio;
    const lineEndY = tY + dy * ratio;

    // ---------- رسم خط ----------
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", tX);
    line.setAttribute("y1", tY);
    line.setAttribute("x2", lineEndX);
    line.setAttribute("y2", lineEndY);
    line.setAttribute("stroke", "#FDC900");
    line.setAttribute("stroke-width", "2");
    svg.appendChild(line);

    // ---------- رسم سر فلش ----------
    const arrow = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "polygon"
    );
    arrow.setAttribute(
      "points",
      `0,0 ${arrowWidth},${arrowLength} ${-arrowWidth},${arrowLength}`
    );
    arrow.setAttribute("fill", "#FDC900");
    arrow.setAttribute(
      "transform",
      `translate(${cX}, ${cY}) rotate(${angle + 90})`
    );
    svg.appendChild(arrow);
  });








  setTimeout(() => {
     const svgMap = document.querySelector(".section5 .map svg");
    const popup = document.querySelector(".cityPop");
    const closeBtn = popup.querySelector(".closeCityPop");

    // گرفتن همه استان‌های فعال
    const activeCities = svgMap.querySelectorAll(".activeBranch");

    activeCities.forEach(city => {
        // console.log(city);
        
        city.style.cursor = "pointer"; // موس روی استان فعال تغییر کند
        city.addEventListener("click", () => {
            // جایگذاری نام استان در پاپ‌آپ
            const title = city.querySelector("title")?.textContent || "استان";
            popup.querySelector("h5").textContent = title;

            // نمایش پاپ‌آپ
            popup.classList.remove("hidden");

       
        });
    });

    // بستن پاپ‌آپ با کلیک روی دکمه
    closeBtn.addEventListener("click", () => {
        popup.classList.add("hidden");
    });
  }, 10);
});





document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector("section.section2 input");
    const projects = document.querySelectorAll(".section2 .projBox");

    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim();

        projects.forEach(proj => {
            const title = proj.querySelector(".title h3").textContent.toLowerCase();

            if (title.includes(query)) {
                proj.style.display = "block"; // نمایش پروژه مرتبط
            } else {
                proj.style.display = "none"; // مخفی کردن پروژه نامرتبط
            }
        });
    });
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
