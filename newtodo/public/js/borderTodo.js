const inputs = document.getElementsByClassName("newTodo__input")
for(const input of inputs){
    input.addEventListener("click", () =>{
        console.log(input)
       let deleteInput = input.classList.toggle("newTodo__inputDelete")
        localStorage.setItem("border", deleteInput)
        console.log(localStorage.getItem("border", deleteInput))
    })
 }










