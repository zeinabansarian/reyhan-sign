let filterBtn = document.querySelectorAll(".filterBtn")


filterBtn.forEach(element => {


if (document.querySelector("body").getAttribute("data-target")==element.getAttribute("data-href")) {
        element.classList.add('activeBlogBtn')
}
    
    element.addEventListener("click" , function (params) {
        filterBtn.forEach(element2 => {
            
            element2.classList.remove('activeBlogBtn')
    });
        
        element.classList.add('activeBlogBtn')
    })
});