
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
