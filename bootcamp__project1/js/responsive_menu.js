//buttons event listeners
var minus = document.getElementById("minus");
var bars = document.getElementById("bars");

minus.addEventListener("click", menuShow);
bars.addEventListener("click", menuHide)
//buttons 

//navbar take elements
var headerNav = document.getElementById("header__navbar")
var links = document.querySelectorAll("link")
var headerUl = document.getElementById("header__ul");

function menuShow(){
    headerNav.style.transition = 'all 2s' 
    headerNav.style.display = "flex";
    headerNav.style.opacity = "1"
    bars.style.opacity = "1";
    bars.style.zIndex = "100";
    minus.style.opacity = "0";
}



function menuHide(){
    headerNav.style.transition = "all 2s"
    headerNav.style.display = "none";
    headerNav.style.opacity = "0";
    minus.style.opacity = "1";
    bars.style.zIndex = "-100";
     
}

