let count = 0;
var increment = function(){
  var stat1 = document.getElementById("stat1");
  var stat2 = document.getElementById("stat2")
  var stat3 = document.getElementById("stat3")
  if(count<=230){
    count++
// show count in console or in DOM
    stat1.innerHTML = count;
    stat1.style.transtion = "1s ease"

        if(count<=100){
            stat2.innerHTML = count;
            stat2.style.transtion = "1s ease"
        
           
            }
            if(count<=150){
                stat3.innerHTML = count;
                stat3.style.transtion = "1s ease"
        }

    }
}

setInterval(increment, 40);