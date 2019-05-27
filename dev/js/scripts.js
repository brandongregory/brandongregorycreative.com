const navbarToggle = document.querySelector(".navbar-toggle");
const navbarNav = document.querySelector("nav .nav");

navbarToggle.addEventListener("click", function(clickEvent) {
    const currentAriaVal = navbarToggle.getAttribute("aria-collapsed");
    const newAriaVal = (currentAriaVal === "true") ? "false" : "true";
    navbarToggle.classList.toggle("collapsed");
    navbarToggle.setAttribute("aria-label", newAriaVal);
    navbarNav.classList.toggle("open");
});