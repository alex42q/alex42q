$(document).ready(function(){
    $("#mobile_sidebar").hide();
    $("#header__icon-h").on("click", function(){
        $("#mobile_sidebar", "background").toggle()
    })
})