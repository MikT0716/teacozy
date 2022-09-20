/*----------------------------------HAMBURGER---------------------------------------*/
function toggleFunction(x) {
    x.classList.toggle("change");
}

var hamburger = document.querySelector("#hamburger");
var mobilemenu = document.querySelector("#mobilemenu");

hamburger.addEventListener("click", function () {
    mobilemenu.classList.toggle("show");
});

document.querySelectorAll("#mobilemenu li a").forEach((item) => {
    item.addEventListener("click", (event) => {
        mobilemenu.classList.toggle("show");
        hamburger.classList.toggle("change");
    });
});

/*----------------------------------MODAL---------------------------------------*/

var imgmodals = document.getElementsByClassName("gallerytarget");
for (var i = 0; i < imgmodals.length; i++) {
    imgmodals[i].addEventListener("click", function () {
        document.getElementById("modal").style.display = "flex";
        document.getElementById("modalimage").src = this.src;
        document.querySelector("body").style.overflow = "hidden";
    });
}

var modal = document.getElementById("modal");
modal.addEventListener("click", function (event) {
    if (!event.target.matches("#modalimage")) {
        document.getElementById("modal").style.display = "none";
        document.querySelector("body").style.overflowY = "scroll";
    }
});
