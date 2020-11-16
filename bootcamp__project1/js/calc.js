class Student{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.getThings = function(){
            var btn = document.getElementById("btn");
            var firstNameInput = document.getElementById("FirstNameInput").value;
            var h1 = document.getElementById("h1");
                if(btn.onclick){
                    h1.innerText = firstNameInput;
                }
        }

    }


}


const FirstName = new Student()
const LastName = new Student()

