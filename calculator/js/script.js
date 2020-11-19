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
