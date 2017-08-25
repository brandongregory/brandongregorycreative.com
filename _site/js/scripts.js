// Just vanilla JavaScript here. Because jQuery's not worth it for one piece of functionality!
var menuToggles = document.querySelectorAll(".navbar-toggle");

Array.prototype.forEach.call(menuToggles, function(menuToggle) {
    menuToggle.addEventListener("touchend", function() {
        var menu = document.querySelector(menuToggle.dataset.target);
        menu.classList.toggle("open");
        menuToggle.classList.toggle("collapsed");
    });
});