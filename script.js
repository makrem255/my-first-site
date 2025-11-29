// Mobile Menu
const toggleBtn = document.querySelector(".togglebtn");
const navLinks = document.querySelector(".navlinks");
toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  toggleBtn.classList.toggle("click");
});

// Close menu on link click
document.querySelectorAll(".navlinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    toggleBtn.classList.remove("click");
  });
});

// Typed.js
new Typed(".typing", {
  strings: ["Frontend Developer", "UI/UX Designer", "AI Enthusiast", "Problem Solver"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true
});

// Active Nav Link on Scroll
window.addEventListener("scroll", () => {
  let current = "";
  document.querySelectorAll("section").forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });
  document.querySelectorAll(".navlinks a").forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) a.classList.add("active");
  });
});

// Dark Mode Toggle
const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  themeToggle.innerHTML = document.body.classList.contains("light-mode") 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';
});