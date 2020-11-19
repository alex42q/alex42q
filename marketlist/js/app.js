const container = document.getElementById("container");
const text = document.getElementById("text").value;
const plus = document.getElementById("plus");
const columnforDelete = document.getElementById("columnp")



//listeners
document.addEventListener('DOMContentLoaded', getList)
plus.addEventListener("click", addList);

checkButton.addEventListener("click", checkList)

//functions

function addList(){
    //create elements
    const column = document.createElement("columnp");
    const card = document.createElement("card");
    const input = document.createElement("input");
    const deleteButton = document.createElement("i");
    const checkButton = document.createElement("i")
    

    //create class
    card.className = "card";
    input.className = "inputText";
    deleteButton.className = "fas fa-trash-alt fa-2x";
    checkButton.className = "fas fa-check fa-2x";
    column.className = "columnp"

    //create attributes 
    card.setAttribute("id", "card");
    input.setAttribute("id", "inputText");
    column.setAttribute("id", "columnp")
    checkButton.setAttribute("id", "check")

    //append to column
    container.appendChild(column);
    column.appendChild(card);
    card.appendChild(input)
    card.appendChild(checkButton)
    card.appendChild(deleteButton)


}

function deleteList(){
   columnp.remove()
    
}

function checkList(){
    input.style.color = "color"
}

function getList(){
    let lists = [];

    lists.forEach(function(list){
         //create elements
         columnforDelete.addEventListener("click", deleteList);
    const column = document.createElement("columnp");
    const card = document.createElement("card");
    const input = document.createElement("input");
    const deleteButton = document.createElement("i");
    const checkButton = document.createElement("i")

    //create class
    card.className = "card";
    input.className = "inputText";
    deleteButton.className = "fas fa-trash-alt fa-2x";
    checkButton.className = "fas fa-check fa-2x";
    column.className = "columnp"

    //create attributes 
    card.setAttribute("id", "card");
    input.setAttribute("id", "inputText");
    column.setAttribute("id", "columnp")
    checkButton.setAttribute("id", "check")

    //append to column
    container.appendChild(column);
    column.appendChild(card);
    card.appendChild(input)
    card.appendChild(checkButton)
    card.appendChild(deleteButton)
    })
}

