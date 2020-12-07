const button1 = document.getElementById("button1");
const p1 = document.getElementById("p1")

const button2 = document.getElementById("button2");
const p2 = document.getElementById("p2")

const button3 = document.getElementById("button3");
const p3 = document.getElementById("p3");

const button4 = document.getElementById("button4");
const p4 = document.getElementById("p4")

function buttons(){
    p1.classList.toggle("services__pafter")
}

function buttons2(){
    p2.classList.toggle("services__pafter")
}

function buttons3(){
    p3.classList.toggle("services__pafter")
}

function buttons4(){
    p4.classList.toggle("services__pafter")
}

button1.addEventListener("click", buttons)
button2.addEventListener("click", buttons2)
button3.addEventListener("click", buttons3)
button4.addEventListener("click", buttons4)