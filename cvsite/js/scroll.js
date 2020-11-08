var sideba = document.querySelector("#sidebar");

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
          $(".sidebar").css("background" , "");
          $(".header__icon").css("color", "#228B22");
          $(".mobile_sidebar__link").css("color", "");
          $(".header__icon").css("opacity", "1"); 
        }
  
        else{
            $(".sidebar").css("background" , "#228B22");
            $(".header__icon").css("color", "#228B22");  
            $(".mobile_sidebar__link").css("color", "#228B22");
            $(".header__icon").css("opacity", "0.4"); 
        }
    })
  })