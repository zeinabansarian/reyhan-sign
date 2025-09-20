let zoomMin = 0.5;
let zoomMax = 1.7;
let currZoom = 1;

const galleryProject = new Swiper(".galleryProject", {
  // Optional parameters
  slidesPerView:3,

  speed: 1500,
  spaceBetween: 20,

  navigation: {
    nextEl: ".prevProjGallery",
    prevEl: ".nextProjGallery",
  },

    on: {
    init: function () {
     
       const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closePopup");
 // مقداردهی Swiper
      let swiperInstance = new Swiper(".popSwiper", {
        loop: false,
        speed: 1000,
    
        navigation: {
          nextEl: ".nextPop",
          prevEl: ".popPrev",
        },
      });

    // همه دکمه‌ها
    document.querySelectorAll(".openBtn").forEach((btn,i) => {
      btn.addEventListener("click", () => {
    swiperInstance.slideTo(i , 10)
        popup.style.display = "flex";
      });
    });

    // بستن
    function closePopup() {
      popup.style.display = "none";
   
    }
    closeBtn.addEventListener("click", closePopup);
    popup.addEventListener("click", (e) => {
      if (e.target === popup) closePopup();
    });




     
      let zoomIn = document.querySelector(" .zoomIn");
      let zoomOut = document.querySelector(" .zoomOut");

  
    

      swiperInstance.on("slideChange", function () {
        


        // ریست زوم روی عکس‌ها مثل قبل
        let imgs = document.querySelectorAll(".popSlider img");
        imgs.forEach((element) => {
          element.style.scale = "1";
          zoomMin = 0.5;
          zoomMax = 1.7;
          currZoom = 1;
        });
      });

      zoomIn.addEventListener("click", function (params) {
        let currImg = document.querySelector(
          ".popSwiper .swiper-slide-active img"
        );
        if (currZoom < zoomMax) {
          currZoom += 0.1;
          currImg.style.scale = currZoom;
          zoomIn.style.opacity = "1";
          zoomOut.style.opacity = "1";
        } else {
          zoomIn.style.opacity = "0.8";
        }
      });
      zoomOut.addEventListener("click", function (params) {
        let currImg = document.querySelector(
          ".popSwiper .swiper-slide-active img"
        );
        console.log("zoomout");
        if (currZoom > zoomMin) {
          currZoom -= 0.1;
          currImg.style.scale = currZoom;
          zoomIn.style.opacity = "1";
          zoomOut.style.opacity = "1";
        } else {
          zoomOut.style.opacity = "0.8";
        }
      });
    },

   
  },
});

// Plyr با کنترل کامل
const player = new Plyr('#player', {
  controls: [
     'play', 'progress', 'current-time',
    'mute', 'volume', 'settings', 'fullscreen'
  ]
});

const customBtn = document.getElementById('customPlay');
const overlay = document.querySelector('.custom-overlay');

// اول کنترل‌ها مخفی باشن
player.elements.controls.style.display = 'none';

customBtn.addEventListener('click', () => {
  overlay.style.display = 'none'; // دکمه و لایه مخفی بشن
  player.elements.controls.style.display = ''; // کنترل‌ها برگردن
  player.play(); // ویدیو پخش بشه
});


const videoSlider = new Swiper(".videoSlider", {
  // Optional parameters
  loop: true,

  speed: 1500,
  spaceBetween: 10,
 
  // Navigation arrows
  navigation: {
    nextEl: ".prevVideo",
    prevEl: ".nextVideo",
  },
});
