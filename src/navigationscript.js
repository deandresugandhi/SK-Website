const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobilemenu");
const navBlock = document.querySelector(".navblock");
const skicon = document.querySelector(".skicon");
const nav = document.querySelector("nav");
const body = document.body;
const menuLinks = document.querySelectorAll(".mobilemenu a")

navBlock.addEventListener("click", menuClicked);
menuLinks.forEach(link => {
    link.addEventListener("click", linkClicked);
});

function menuClicked() {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    navBlock.classList.toggle("active");
    skicon.classList.toggle("active");
    nav.classList.toggle("active");
}

function linkClicked() {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    navBlock.classList.remove("active");
    skicon.classList.toggle("active");
    nav.classList.remove("active");
}