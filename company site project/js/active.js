function iconscroll(){
    var icon0 = document.getElementById("icon1");
    var icon1 = document.getElementById("icon2");
    var icon2 = document.getElementById("icon3");
    var icon3 = document.getElementById("icon4");
    var icon4 = document.getElementById("icon5");

    var header = document.getElementById("header");
   
    if (document.body.scrollTop > 1850 || document.documentElement.scrollTop > 650){
       icon0.innerText = "";
       icon1.classList.add("header__active");
       icon1.innerText=".";
        if(document.body.scrollTop > 3300 || document.documentElement.scrollTop > 1500){
            icon1.innerText = "";
            icon1.classList.remove("header__active");
            icon2.classList.add("header__active");
            icon2.innerText = ".";
            
            if(document.body.scrollTop > 4000 || document.documentElement.scrollTop> 2000){
                icon2.innerText = "";
                icon2.classList.remove("header__active");
                icon3.classList.add("header__active");
                icon3.innerText = ".";
            
                if(document.body.scrollTop > 5000 || document.documentElement.scrollTop>2600){
                    icon3.innerText ="";
                    icon3.classList.remove("header__active");
                    icon4.classList.add("header__active");
                    icon4.innerText = ".";
                }else{
                    icon4.innerText = "";
                    icon4.classList.remove("header__active");
                    icon3.classList.add("header__active");
                    icon3.innerText = ".";
                }
            
            
            
            }else{
                icon3.innerText = "";
                icon3.classList.remove("header__active");
                icon2.classList.add("header__active");
                icon2.innerText(".")
            }
        
        
        }else{
            icon2.innerText = "";
            icon2.classList.remove("header__active")
            icon1.innerText = ".";
            icon1.classList.add("header__active")
        }
    
    }else{
        icon0.innerText= "."
        icon1.innerText= "";
        icon0.classList.add("header__active");
        icon1.classList.remove("header__active")
    }
}





