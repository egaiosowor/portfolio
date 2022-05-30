const hamburger = document.querySelector(".js-hamburger");
const mobileMenu = document.querySelector(".js-menu");


// Click event added to the hamburger button
hamburger.addEventListener("click", ()=>{
    // When the hamburger button is clicked, the "is-toggled" class is added if absent and removed if present
    hamburger.classList.toggle("is-toggled");
    // When the hamburger button is clicked, the "is-expanded" class is added if absent and removed if present
    mobileMenu.classList.toggle("is-expanded");
})
