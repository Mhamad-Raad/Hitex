const navIcon = document.getElementById("mobile-nav-icon");
const navMenu = document.getElementById("mobile-menu-bg");
const closeMenu = document.getElementById("mobile-close-menu");

navIcon.addEventListener('click', () => {
  navMenu.style.display = "block";
  navIcon.style.display = "none";
});

closeMenu.addEventListener('click', () => {
  navMenu.style.display = "none";
  navIcon.style.display = "block";
});
