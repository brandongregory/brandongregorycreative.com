let menuToggles=document.querySelectorAll(".navbar-toggle");menuToggles.forEach(function(e){e.addEventListener("click",function(){document.querySelector(e.dataset.target).classList.toggle("open"),e.classList.toggle("collapsed")})});