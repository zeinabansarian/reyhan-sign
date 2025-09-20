function listScrollTop(params) {
  
  const elements = document.querySelectorAll('.listScrollTop');
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      const el = entry.target;
      
      if (entry.isIntersecting) {
        // تعیین delay بر اساس ایندکس عنصر در مجموعه elements
        const index = Array.from(elements).indexOf(el);
        const delays = [0.1, 0.2, 0.3,0.4]; // ثانیه
        const delay = delays[index % delays.length];
        
        // اضافه کردن کلاس و delay با inline style
        el.style.transitionDelay = `${delay}s`;
        el.classList.add('visible', 'animate');
        
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.01
  });
  
  elements.forEach(el => observer.observe(el));
}

listScrollTop()