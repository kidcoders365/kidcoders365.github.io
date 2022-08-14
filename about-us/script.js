const hamburger = document.querySelector(".header-bar2-hamburger");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('is-active');
})

window.addEventListener("scroll", () => {
    hamburger.classList.remove('is-active');
})