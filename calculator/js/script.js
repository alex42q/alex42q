
function calculator(){
    var n9 = document.getElementById("n9").addEventListener("click", calculator)
    var screen = document.getElementById("screen");
    if(n9.onclick){
        screen.innerText = n9.value;
    }

}