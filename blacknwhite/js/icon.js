var container = document.getElementById("m-container");
var menu = document.getElementById("mobile-icon");
var menu2 = document.getElementById("mobile-icon2");

function sidebar(){
    container.style.display = 'flex';
    container.style.zIndex = "1";
    container.style.transition = "2s ease";
    container.style.transitionDuration = "1s";
    menu.style.visibility = "visible";
    menu.style.zIndex = "100";
    
}

function sidebar2(){
    container.style.display = "none";
    container.style.transition = "2s ease";
    container.style.transitionDuration = "1s"
    menu.style.visibility = "hidden";
}