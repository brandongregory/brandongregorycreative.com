// Just vanilla JavaScript here!
var menuToggles = document.querySelectorAll(".navbar-toggle");

Array.prototype.forEach.call(menuToggles, function(menuToggle) {
    menuToggle.addEventListener("click", function() {
        let menu = document.querySelector(menuToggle.dataset.target);
        menu.classList.toggle("open");
        menuToggle.classList.toggle("collapsed");
    });
});