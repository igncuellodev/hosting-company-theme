const responsiveOverlay = document.getElementById("responsive-overlay");
const menuBars = document.querySelector(".menu");
const responsiveSide = document.querySelector(".responsive-side");
const closeMenu = document.getElementById("closeMenu");
const bodyTag = document.querySelector("body");

function openSideMenu() {
  responsiveOverlay.classList.add("active");
  responsiveSide.classList.add("side-active");
  menuBars.setAttribute("aria-expanded", "true");
  bodyTag.style.overflowY = "hidden";
}

function closeSideMenu() {
  responsiveSide.classList.remove("side-active");
  responsiveOverlay.classList.remove("active");
  menuBars.setAttribute("aria-expanded", "false");
  bodyTag.style.overflowY = "auto";
}

menuBars.addEventListener("click", openSideMenu);
closeMenu.addEventListener("click", closeSideMenu);
responsiveOverlay.addEventListener("click", closeSideMenu);
