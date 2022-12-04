let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100){
        scrollTop.classList.add("active")
    } else{
        scrollTop.classList.remove("active")
    }
})

let productsNum = document.querySelector(".product-num");

if (localStorage.getItem("products")){
    let productsArray = localStorage.getItem("products").split(",")
    productsNum.innerText = productsArray.length;
}