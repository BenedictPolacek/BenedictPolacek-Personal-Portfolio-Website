const fadeUpObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.getElementById("contacts").style.zIndex = 1;
      entry.target.classList.add("faded");
      fadeUpObserver.unobserve(entry.target);
      document.getElementById("skills").style.zIndex = 1;
    }
  });
}, {});
document.querySelectorAll(".fade-up").forEach((el) => {
  fadeUpObserver.observe(el);
});

document.addEventListener("mouseover", (e) => {
  const barsLink = e.target.matches("#icon");
  const removeHomeLinks =
    e.target.matches("header") ||
    e.target.matches("main") ||
    e.target.matches("footer") ||
    e.target.matches(".text") ||
    e.target.matches("#about_me") ||
    e.target.matches(".images");
  const iconNone = window
    .getComputedStyle(document.getElementById("icon"))
    .getPropertyValue("display");
    
  if (barsLink && iconNone !== 'none') {
    e.target.style =
      "transition: transform 150ms ease-in-out; opacity: 0; transform: translateX(-15px); pointer-events: none;";
    document.getElementById("home-page-list").style =
      "opacity: 1; pointer-events: auto; transform: translateX(0)";
    document.getElementById("nav-list").style = "justify-content: center;";
    document.getElementById("projects").style =
      "opacity: 0; transition: transform 150ms ease-in-out; transform: translateX(15px); pointer-events: none;";
  }
  if (removeHomeLinks && iconNone !== 'none'){
    document.getElementById("icon").style =
      "pointer-events: auto; transition: opacity 150ms ease-in-out, transform 150ms ease-in-out; opacity: 1; transform: translateX(0);";
    document.getElementById("home-page-list").style =
      "opacity: 0; pointer-events: none; transform: translateX(-15px);";
    document.getElementById("projects").style =
      "opacity: 1; transition: transform 150ms ease-in-out; transform: translateX(0px); pointer-events: auto;";
    document.getElementById("nav-list").style =
      "justify-content: space-between";
  }
  
});
window.addEventListener("resize", (e) => {
  const iconNone = window
    .getComputedStyle(document.getElementById("icon"))
    .getPropertyValue("display");
    
    if (iconNone === "none" && window.innerWidth > '800') {
      document.getElementById("icon").style = "";
      document.getElementById("home-page-list").style = "";
      document.getElementById("projects").style = "";
      document.getElementById("nav-list").style = "";
    }
});