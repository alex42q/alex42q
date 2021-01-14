
const inputs = document.getElementsByClassName("newTodo__input")
for(const input of inputs){
    input.addEventListener("click", () =>{
        console.log(input)
        let inputItem = input
        inputItem.classList.toggle("newTodo__inputDelete")
        
        })
    }














