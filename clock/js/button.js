let button = document.getElementById("button");
let main = document.getElementById("main")
let buttonContainer = document.getElementById("button-container")
let container = document.getElementById("container")
let daynightcon = document.getElementById("daynightcon")
let footerhide = document.getElementById("footerhide")

function buttonToggle(){
    main.classList.toggle("main__after")
    buttonContainer.classList.toggle("button-container__after")
    container.classList.toggle("container-after")
    daynightcon.classList.toggle("container__dayNight-after")
    footerhide.classList.toggle("footer__after")
}

button.addEventListener("click", buttonToggle)