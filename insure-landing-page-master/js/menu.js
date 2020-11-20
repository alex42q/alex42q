const menu = document.getElementById("menu")



function menuFunc(){
  const nav = document.getElementById("nav-right-menu");
  const ul = document.getElementById("toggle-ul")
  const links = document.querySelectorAll(".nav__column-right ul li a")
  nav.classList.toggle("nav-right-menu")
 menu.classList.toggle("toggle-nav")
 ul.classList.toggle("toggle-ul")
  links.forEach(function(links){
    links.classList.toggle("li-toggle")
  })


}





menu.addEventListener("click", menuFunc)

