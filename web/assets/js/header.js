let actualScroll = 0;
let dataTarget = document.querySelector("body").getAttribute("data-target")
let header = document.querySelector("header");
let LiGrp = document.querySelectorAll(".LiGrp")
window.addEventListener("scroll", () => {
  const top = Math.min(
    -(window.scrollY - actualScroll + header.clientHeight),
    0
  );
  if (window.scrollY > actualScroll) {
    actualScroll = window.scrollY;
    header.classList.add("-translate-y-[100%]");
  }

  if (top === 0) {
    actualScroll = window.scrollY + header.clientHeight;
    header.classList.remove("-translate-y-[100%]");
    if (window.scrollY > 50) {
      header.classList.add("activeHeaderBg");
    }
  }
});


console.log(dataTarget);
LiGrp.forEach(element => {
    let dataTitle = element.getAttribute("data-liTitle")
if(dataTarget==dataTitle){
    element.classList.add("activeLi")
}
});