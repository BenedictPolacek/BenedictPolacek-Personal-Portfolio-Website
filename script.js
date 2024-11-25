const fadeUpObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("faded");
        fadeUpObserver.unobserve(entry.target);
        document.getElementById("skills").style.zIndex = 1;
      }
    });
  },
  {}
);

document.querySelectorAll('.fade-up').forEach(el => {
    fadeUpObserver.observe(el);
})
