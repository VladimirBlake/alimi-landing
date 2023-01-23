let hamburgerBtn = document.getElementById("hamburger-btn");
let mobileMenu = document.getElementById("mobile-menu");

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("header__hamburger-wrapper--open");
    mobileMenu.classList.toggle("header__mobile-menu--open");
});
