
  const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closePopup");
    const video = document.getElementById("player");

    // Plyr init
    const player = new Plyr(video, {
      controls: [
        'progress',
        'play', 'current-time', 'duration',
        'mute', 'volume',
        'settings',
        'pip', 'airplay', 'fullscreen'
      ]
    });

    // همه دکمه‌ها
    document.querySelectorAll(".openBtn").forEach(btn => {
      btn.addEventListener("click", () => {
        const src = btn.getAttribute("data-video");
        
        // تغییر سورس ویدیو
        player.source = {
          type: 'video',
          sources: [
            { src: src, type: 'video/mp4' }
          ]
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

const memberSlider = new Swiper('.memberSlider', {
  // Optional parameters
  slidesPerView: "auto",

speed:1500,
  spaceBetween: 40,

  // Navigation arrows
  navigation: {
    nextEl: '.nextmemberSlider',
    prevEl: '.prevmemberSlider',
  },


});
const achievementSlider = new Swiper('.achievementSlider', {
  // Optional parameters
  slidesPerView: "auto",

speed:1500,
  spaceBetween: 40,

  // Navigation arrows
  navigation: {
    nextEl: '.nextachievement',
    prevEl: '.prevachievement',
  },


});