<<<<<<< HEAD
const plus = document.getElementById("plus");
const allButtons = document.querySelectorAll(".button");
const button0 = document.getElementById("button0");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");
const button7 = document.getElementById("button7");
const button8 = document.getElementById("button8");
const button9 = document.getElementById("button9");

button0.addEventListener("click", buttons);
button1.addEventListener("click", buttons);
button2.addEventListener("click", buttons);
button3.addEventListener("click", buttons);
button4.addEventListener("click", buttons);
button5.addEventListener("click", buttons);
button6.addEventListener("click", buttons);
button7.addEventListener("click", buttons);
button8.addEventListener("click", buttons);
button9.addEventListener("click", buttons);

const numbers = [];
const operators = [];

function buttons(){
    for(let i=0; i<=allButtons.length;i++){
        numbers.push(allButtons[i])
        console.log(numbers)
    }
}
=======
function calculator(){
    let screen = document.getElementById("screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.getElementById("btn-clear");
    let buttonEqual = document.getElementById("btn-equal");

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
          let value = e.target.dataset.num;
          screen.value += value;
        })
});

    buttonEqual.addEventListener("click", function(e){
        plus()
        screen.value = result;
    })


}

function plus(num1,num2){
    let result = num1 + num2;
}

calculator()
>>>>>>> 8b16617b02c6be493cb93dd46714dbe1248120fe
