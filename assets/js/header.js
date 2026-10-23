const bodyTag = document.querySelector("body");
const responsiveOverlay = document.getElementById("responsive-overlay");
const menuBars = document.querySelector(".menu");
const responsiveSide = document.querySelector(".responsive-side");
const closeMenu = document.getElementById("closeMenu");
const dropdownBtn = document.getElementById("dropdown");
const dropDownList = document.querySelector(".dropdown-list");

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

function openDropdown() {
  dropdownBtn.style.cursor = "pointer";
  dropDownList.classList.add("show-dropdown");
}

function closeDropdown() {
  dropDownList.classList.remove("show-dropdown");
}

menuBars.addEventListener("click", openSideMenu);
closeMenu.addEventListener("click", closeSideMenu);
responsiveOverlay.addEventListener("click", closeSideMenu);
dropdownBtn.addEventListener("mouseenter", openDropdown);
dropdownBtn.addEventListener("mouseleave", closeDropdown);
dropDownList.addEventListener("mouseleave", closeDropdown);
