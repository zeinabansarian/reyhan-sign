const elementsBanner = document.querySelectorAll('.scrollBanner');

const observerBanner = new IntersectionObserver((entries, observerBanner) => {
  entries.forEach(entry => {
    const el = entry.target;

    if (entry.isIntersecting) {
      el.classList.add('visibleBanner');
      // بعد از اولین بار دیدن، دیگه نیاز به مشاهده نیست
      observerBanner.unobserve(el);
    }
  });
}, {
  threshold: 0.01
});

elementsBanner.forEach(el => observerBanner.observe(el));
