const navbarToggle = document.querySelector(".navbar-toggle");
const navbarNav = document.querySelector("nav .nav");
const darkmodeToggle = document.querySelector(".dm-toggle");
const body = document.querySelector("body");

navbarToggle.addEventListener("click", function(clickEvent) {
    const currentAriaVal = navbarToggle.getAttribute("aria-collapsed");
    const newAriaVal = (currentAriaVal === "true") ? "false" : "true";
    navbarToggle.classList.toggle("collapsed");
    navbarToggle.setAttribute("aria-label", newAriaVal);
    navbarNav.classList.toggle("open");
});

darkmodeToggle.addEventListener("click", function(clickEvent) {
    body.classList.toggle("dark-mode");
    if (window.localStorage.getItem("isDarkMode") === "true") {
        window.localStorage.setItem("isDarkMode", "false");
    } else {
        window.localStorage.setItem("isDarkMode", "true");
    }
    console.log("isDarkMode", window.localStorage.getItem("isDarkMode"));
});

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    window.localStorage.setItem("isDarkMode", "true");
}
  
window.onload = function() {
    const isDarkMode = window.localStorage.getItem("isDarkMode") === "true";
    
    if (isDarkMode) {
        body.classList.add("dark-mode");
    } else {
        body.classList.remove("dark-mode");
    }
}