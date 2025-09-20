
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





        const projects = document.querySelectorAll(".productBox");
const loader = document.getElementById("loader");
const projectsSection = document.getElementById("projects-section");

let currentIndex = 0;
const itemsPerLoad = 2;
let isLoading = false;

// تابع برای نمایش مرحله‌ای پروژه‌ها
function showNextProjects() {
  if (currentIndex >= projects.length) return;

  isLoading = true;
  loader.style.display = "block";

  setTimeout(() => {
    for (let i = 0; i < itemsPerLoad && currentIndex < projects.length; i++) {
      projects[currentIndex].style.display = "block";
      currentIndex++;
    }
    loader.style.display = "none";
    isLoading = false;
  }, 1000); // تاخیر ۱ ثانیه برای لودر
}

// نمایش اولیه 2 پروژه
showNextProjects();

// اسکرول برای بارگذاری مرحله‌ای بعدی
window.addEventListener("scroll", () => {
  const scrollBottom = window.scrollY + window.innerHeight;
  const sectionBottom = projectsSection.offsetTop + projectsSection.offsetHeight;

  if (!isLoading && scrollBottom >= sectionBottom - 50) {
    showNextProjects();
  }
});

