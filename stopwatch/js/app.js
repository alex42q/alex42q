var min = parseInt(prompt("put minutes"))
var sec = parseInt(prompt("put seconds"))

function countDown(){
var minutes = document.getElementById("minutes")
var seconds = document.getElementById("seconds")
minutes.innerText = min + ":"
seconds.innerText = sec
sec--
	if(sec == -1){
    	min--
        sec = 59
    }else if(sec ==0 && min ==0){
    	alert("Telos")
        clearInterval(myclock)
        sec=0
        min = 0
    }
}

var myclock = setInterval(countDown, 1000)