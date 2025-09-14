    const projects = document.querySelectorAll(".projectBox");
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



const text = new SplitType('.projectList .section1 .absolute .para p', { types: 'lines,words' })

document.addEventListener("DOMContentLoaded" , function(params) {
     const words = document.querySelectorAll('.projectList .section1 .absolute .para p .line .word');
  
  words.forEach(word => {
    word.style.transform = "translateY(0)";
  });

  document.querySelector(".projectList .section1 .absolute .title h1").classList.remove("translate-y-full")
})