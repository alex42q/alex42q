const iconBtn = document.getElementById("iconBtn").addEventListener("click", menuClick)


function menuClick(){
const list = document.getElementById("list")
    list.classList.toggle("nav__listAfter")
}