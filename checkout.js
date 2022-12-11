let emptyCart = document.querySelector(".empty-cart");
let checkoutbtn = document.querySelector(".button-cont a");


if (localStorage.getItem("products") == null){
    checkoutbtn.style.display = "none"
} else{
    emptyCart.remove();
    let productsStorage = localStorage.getItem("products");
    let productsArray = productsStorage.split(",")
    var productsContainer = document.querySelector(".products")
    var totalPrice = 0;
    for (let i = 0; i < productsArray.length; i++) {
        const e = productsArray[i];
        elementFactory(e)
        if (i == productsArray.length - 1){
            let total = document.createElement("div")
            total.classList.add("card", "p-3", "total")

            let totalH = document.createElement("h3")
            totalH.innerText = "Total:"
            totalH.classList.add("m-0")
            
            let totalSpan = document.createElement("span")
            totalSpan.innerText = `${totalPrice}.00 EGP`;
            totalSpan.classList.add("text-main", "fs-4")
            
            total.appendChild(totalH);
            total.appendChild(totalSpan);
            productsContainer.appendChild(total);
        }
    }
    
    function elementFactory(productName) {
        let mainCard = document.createElement("div")
        mainCard.classList.add("card", "mb-3")
    
        let row = document.createElement("div")
        row.classList.add("row")
        mainCard.appendChild(row)
    
        let col1 = document.createElement("div")
        col1.classList.add("col-md-4")
        row.appendChild(col1)
    
        let colImg = document.createElement("img")
        colImg.classList.add("img-fluid", "rounded-start")
        col1.appendChild(colImg)
    
        let col2 = document.createElement("div")
        col2.classList.add("col-md-8")
        row.appendChild(col2)
    
        let cardbody = document.createElement("div")
        cardbody.classList.add("card-body")
        col2.appendChild(cardbody)
    
        let cardtitle = document.createElement("h3")
        cardtitle.classList.add("card-title")
        cardbody.appendChild(cardtitle)
    
    
        let carddesc = document.createElement("p")
        carddesc.classList.add("card-text", "text-black-50")
        cardbody.appendChild(carddesc)
    
        let cardprice = document.createElement("p")
        cardprice.classList.add("card-text")
        cardbody.appendChild(cardprice)
    
        let pricesm = document.createElement("small")
        pricesm.classList.add("text-main" , "fw-bold")
        cardprice.appendChild(pricesm)
    
        productsContainer.appendChild(mainCard)
    
        if (productName == "product1"){
            colImg.src = "imgs/product.webp"
            cardtitle.innerText = "Large Baby Bottle 240mm"
            carddesc.innerText = `Keep your baby hydrated using Bebek's special bottle with soft flexible nipple for high-quality healthy breastfeeding.`
            pricesm.innerText = `Price: 600.00 EGP`
            totalPrice += 600;
    
        } else if(productName == "product2"){
            colImg.src = "imgs/product.webp"
            cardtitle.innerText = "Small Baby Bottle 180mm"
            carddesc.innerText = `Premium BPA-free plastic is perfect for your toddler's health since BPA is identified as harmful to babies' growth.`
            pricesm.innerText = `Price: 500.00 EGP`
            totalPrice += 500;
    
        } else if(productName == "product3"){
            colImg.src = "imgs/product2.webp"
            cardtitle.innerText = "Soft Silicone Feeding Nipple"
            carddesc.innerText = `With anti-gas and anti-colic features, Bebek's soft nipple will help your newborn to calm down and sleep well.`
            pricesm.innerText = `Price: 300.00 EGP`
            totalPrice += 300;
    
        } else if(productName == "product4"){
            colImg.src = "imgs/product3.webp"
            cardtitle.innerText = "Toddler Pacifier"
            carddesc.innerText = `Bebek's pacifier is supported with a clip to prevent it from falling and getting dirty. It can also be easily cleaned or sterilized.`
            pricesm.innerText = `Price: 300.00 EGP`
            totalPrice += 300;
    
        } else if(productName == "bundel1"){
            colImg.src = "imgs/bundle.png"
            cardtitle.innerText = "Bebek® Large Bottle Bundle"
            carddesc.innerText = `Healthy breastfeeding set that includes: a toddler pacifier, pacifier holder, pacifier case, and a large bottle (240mm) with soft flexible nipples.`
            pricesm.innerText = `Price: 500.00 EGP`
            totalPrice += 500;
        } else if(productName == "bundel2"){
            colImg.src = "imgs/bundle.png"
            cardtitle.innerText = "Bebek® Small Bottle Bundle"
            carddesc.innerText = `Healthy breastfeeding set that includes: a toddler pacifier, pacifier holder, pacifier case, and a large bottle (180mm) with soft flexible nipples.`
            pricesm.innerText = `Price: 350.00 EGP`
            totalPrice += 350;
        }
    }
}

checkoutbtn.addEventListener("click", () =>{
    productsContainer.remove();
    checkoutbtn.style.display = "none";
    document.querySelector(".data-check").style.display = "block";
    let cartBtn = document.querySelector(".cart-btn");
    cartBtn.onclick = () => {
        location.reload()
    }
});

// Payment choose //


let paymentBox = document.querySelector(".checkout .payment");
let paymentBtns = document.querySelectorAll(".checkout .payment span");
var paymentType;

for (let i = 0; i < paymentBtns.length; i++) {
    const element = paymentBtns[i];
    element.addEventListener("click", (e) =>{
        if (paymentType == null || paymentType == undefined || paymentType == ""){
            paymentType = e.target.getAttribute("data-kind");
            console.log(paymentType)
        } else {
            paymentType = e.target.getAttribute("data-kind");
            console.log(paymentType)
        }
        for (let i = 0; i < paymentBtns.length; i++) {
            const ele = paymentBtns[i];
            if (ele.classList.contains("active")){
                ele.classList.remove("active");
            }
        }
        e.target.classList.add("active");
    })
}
let randomNums = [];
    for (let i = 0; i < 5; i++) {
        const element = 5;
        let randomNumber = Math.floor(Math.random() * 10);
        randomNums[randomNums.length] = randomNumber;      
        var newArr = randomNums.join("");
    }
let btnCheck = document.querySelector(".button-check a")

btnCheck.addEventListener("click", () =>{
    var receipt = document.querySelector(".receipt"); 
    var firstINP = document.querySelector(".first-input"); 
    var lastINP = document.querySelector(".last-input"); 
    var addressINP = document.querySelector(".address-input"); 
    var emailINP = document.querySelector(".email-input"); 

    var fullname = document.querySelector(".receipt .full-name");
    if (firstINP.value == "" || firstINP.value == undefined || firstINP.value == null && lastINP.value == "" || lastINP.value == undefined || lastINP.value == null ){
        fullname.innerHTML = `Unknown`
    } else{
        fullname.innerHTML = `${firstINP.value} ${lastINP.value}`;
    }

    var address = document.querySelector(".receipt .address");
    if (addressINP.value == "" || addressINP.value == undefined || addressINP.value == null){
        address.innerText = `Unknown`;
    } else{
        address.innerText = `${addressINP.value}`;
    }
    var email = document.querySelector(".receipt .email");
    if (emailINP.value == "" || emailINP.value == undefined || emailINP.value == null){
        email.innerText = `Unknown`;
    } else{
        email.innerText = `${emailINP.value}`;
    }

    var paymentTypeOUT = document.querySelector(".receipt .payment-type");
    if (paymentType == undefined){
        paymentType = "cash";
    }
    paymentTypeOUT.innerText = `${paymentType}`;

    var receiptNum = document.querySelector(".receipt .receipt-num");
    receiptNum.innerText = `${newArr}`

    var totalOut = document.querySelector(".receipt .total-price");
    totalOut.innerText = `${totalPrice}.00 EGP`;
    receipt.style.display = "block";
    document.querySelector(".data-check").style.display = "none";
    document.querySelector(".checkout").style.display = "none";
    let productsCount = document.querySelector(".product-num");
    productsCount.innerText = 0
    localStorage.clear();
})
