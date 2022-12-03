let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100){
        scrollTop.classList.add("active")
    } else{
        scrollTop.classList.remove("active")
    }
})