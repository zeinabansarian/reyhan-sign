const elements = document.querySelectorAll('.scrollTop');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry,i) => {
    const el = entry.target;
    console.log(i);
    
    if (entry.isIntersecting) {
      el.classList.add('visible', 'animate');
      // بعد از اولین بار دیدن، دیگه نیاز به مشاهده نیست
      observer.unobserve(el);
    }
  });
}, {
  threshold: 0.01
});

elements.forEach(el => observer.observe(el));
