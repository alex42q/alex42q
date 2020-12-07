const menu = document.getElementById("menu")
const ul = document.getElementById("ul")
const list = document.getElementById("list")
const logo = document.getElementById("logo")
const links = document.querySelectorAll("li")

function showHide(){
    ul.classList.toggle("nav__link-after")
    list.classList.toggle("nav__list-after")
    logo.classList.toggle("nav__logo-after")
    menu.classList.toggle("nav__icon-after")
    menu.classList.toggle("fa-3x")
    list.style.transition = "1s", "ease-in"
    list.style.transitionDelay = "1s";
    links.forEach((li) => {
        li.addEventListener("click", () =>{
            if(list.classList = "nav__list-after"){
                list.classList = "nav__list"
                menu.classList = "fas fa-bars nav__icon fa-2x"
                logo.classList = "nav__logo"
                ul.classList = "nav__ul"
            }else if(list.classList= "nav__list"){
                
            }
        })
    })
}


menu.addEventListener("click", showHide)