let loadingScreen = document.querySelector(".pre-loader");
let loadingCircle = document.querySelector(".pre-loader .loading")
let bebekLogo = document.querySelector(".pre-loader .bebek-logo")
let loadingHeading = document.querySelector(".pre-loader h3")

if (sessionStorage.getItem("opend")) {
    loadingScreen.remove();
} else {
    window.addEventListener("load", () => {
        setTimeout(() => {
            loadingCircle.classList.add("hide")
            setTimeout(() => {
                bebekLogo.classList.add("show");
                setTimeout(() => {
                    loadingHeading.classList.add("show")
                    setTimeout(() => {
                        loadingScreen.classList.add("hide");
                        setTimeout(() => {
                            loadingScreen.remove();
                        },500)
                    }, 3500)
                }, 2000)
            },500)
        }, 2000)
    })
    sessionStorage.setItem("opend", "yes")
}
