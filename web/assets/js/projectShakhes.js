function setRightHeight() {
    const projBoxes = document.querySelectorAll('.projBox');
    
    projBoxes.forEach(box => {
        const rightS = box.querySelector('.rightS');
        const lSec = box.querySelector('.lSec');
        
        if (rightS && lSec) {
            rightS.style.height = lSec.offsetHeight + 'px';
        }
    });
}

// بعد از لود صفحه
window.addEventListener('load', setRightHeight);

// برای ریسایز پنجره
window.addEventListener('resize', setRightHeight);


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