const plus = document.getElementById("plus");
let column1 = document.createElement("div")
//listeners
document.addEventListener('DOMContentLoaded', getList)
plus.addEventListener("click", addList);



//functions

function getList(event){
    console.log('DOM fully loaded and parsed');
let container = document.getElementById("container");

let text = document.getElementById("text");

}



function addList(event){
    let container = document.getElementById("container");
    let column1 = document.createElement("div")
    
    let text = document.getElementById("text");
    let card = document.createElement("input")
    
    column1.classList = "column1"
    container.appendChild(column1)
    card.classList = "text"
    column1.appendChild(card)

    var dBtn = document.createElement("button");
dBtn.appendChild(document.createTextNode("X"));
column1.appendChild(dBtn);
dBtn.addEventListener("click", deleteListItem);
}



function deleteListItem(){
    column1.classList.add("delete")
}
//END ADD CLASS DELETE




