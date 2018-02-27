// Just vanilla JavaScript here!
let menuToggles = document.querySelectorAll(".navbar-toggle");

menuToggles.forEach(function(menuToggle) {
    menuToggle.addEventListener("click", function() {
        let menu = document.querySelector(menuToggle.dataset.target);
        menu.classList.toggle("open");
        menuToggle.classList.toggle("collapsed");
    });
});