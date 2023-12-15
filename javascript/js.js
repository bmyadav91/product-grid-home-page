// mobile nav hide show 
const humburg_icon = document.querySelector(".humburg_icon i");
const mobile_nav_container = document.querySelector(".mobile_navbar_container");
humburg_icon.addEventListener("click", function () {
    mobile_nav_container.classList.toggle("active");
});