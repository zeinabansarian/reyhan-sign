  var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".nextmySwiper",
          prevEl: ".prevmySwiper",
        },
        effect: "coverflow",
        loop: true,
        centeredSlides: true,
        slidesPerView:1.3,
        coverflowEffect: {
          rotate: 0,
          stretch:150,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        },
    
      });
    
    