function listOpacity(params) {
  const elementsScroll = document.querySelectorAll('.scrollOpacity');
  
  const observerOpacity = new IntersectionObserver((entries, observerOpacity) => {
    entries.forEach((entry,i) => {
      const el = entry.target;
      
      if (entry.isIntersecting) {
        el.classList.add('visibleOpacity');
        // بعد از اولین بار دیدن، دیگه نیاز به مشاهده نیست
        observerOpacity.unobserve(el);
      }
    });
  }, {
    threshold: 0.01
  });
  
  elementsScroll.forEach(el => observerOpacity.observe(el));
  
}

listOpacity()