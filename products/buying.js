
let buyBtn = document.querySelector(".buy-btn");
let body = document.querySelector("body")
let productsCount = document.querySelector(".product-num");


buyBtn.addEventListener("click", (e) =>{
    if (localStorage.getItem("products") == null){
        localStorage.setItem("products", buyBtn.getAttribute("data-product"))
    } else{
        var productsArray = localStorage.getItem("products").split(" ");
        productsArray[productsArray.length] = buyBtn.getAttribute("data-product")
        localStorage.setItem("products", productsArray)
    }
    alert()
    productsCount.innerText = localStorage.getItem("products").split(",").length;
    function alert(){
        let alert = document.createElement("div")
        alert.classList.add("alert", "alert-success", "alert-dismissible", "fade", "show", "fixed-top")
        alert.setAttribute("role", "alert")
        alert.innerText = "The item has been added to the shopping cart"
        body.appendChild(alert)
        setTimeout(() =>{
            alert.remove()
        }, 3500)
    }
})