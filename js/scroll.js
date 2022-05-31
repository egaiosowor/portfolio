const toTopBtn = document.querySelector(".to-top");

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 100){
        toTopBtn.classList.add("is-active");
    }else{
        toTopBtn.classList.remove("is-active");
    };
});