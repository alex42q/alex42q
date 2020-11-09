function closeNews(){
    var subCont = document.getElementById("sub");
    var icon = document.getElementById("sub__icon");
    var button = document.getElementById("sub__button");
    var h1 = document.getElementById("h1");

    if(icon.onclick){
        subCont.style.opacity = "0";
        subCont.style.transition = "1s ease-out"
    }
};

function thankyouNews(){
    var subCont = document.getElementById("sub");
    var icon = document.getElementById("sub__icon");
    var button = document.getElementById("sub__button");
    var h1 = document.getElementById("h1");
    var p = document.getElementById("subp")
    var input = document.getElementById("input")

    if(button.onclick){
        h1.innerText = "Thank you"
        p.innerText = "Thank you for subscribe. You will get all the news for our courses"
        h1.style.transition = "1s ease-in"
        p.style.transition = "1s ease-in"
        button.style.display = "none";
        input.style.display = "none";

    }
}