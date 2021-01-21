const register = document.getElementById("register").addEventListener("click", show)
const exit = document.getElementById("exit").addEventListener("click", hide)
const forma = document.getElementById("register-form")


function show(){
forma.style.display = "flex"

}

function hide(){
forma.style.display = "none"
}
