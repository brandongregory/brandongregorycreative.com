const navbarToggle = document.querySelector(".navbar-toggle");
const navbarNav = document.querySelector("nav .nav");

navbarToggle.addEventListener("click", function(clickEvent) {
    navbarToggle.classList.toggle("collapsed");
    navbarNav.classList.toggle("open");
});