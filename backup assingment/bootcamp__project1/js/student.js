class Form{
    constructor(firstName, lastName, birth, fees, checkbox){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birth = birth;
        this.fees;
        this.checkbox;
        this.getThings = function(){
            //input from hTML elements for header texts
            var btn = document.getElementById("btn");
            var h1 = document.getElementById("post__h1")
            var h2 = document.getElementById("post__h2")
            var h3 = document.getElementById("post__h3")
            var h4 = document.getElementById("post__h4");
            var h5 = document.getElementById("post__h5");
            var h6 = document.getElementById("post__h6");
            //text id element from html
            var text = document.getElementById("text")

            //inputs from HTML Elements
            var input1 = document.getElementById("FirstnameInput").value;
            var input2 = document.getElementById("LastNameInput").value;
            var input3 = document.getElementById("birth").value;
            var input4 = document.getElementById("month").checked;
            var input5 = document.getElementById("year").checked
            var input6 = document.getElementById("checkbox").checked;

            //selected elements for display none after button clicked
            var form__firstLast = document.getElementById("form__firstLast")
            var form__sub = document.getElementById("form__sub");
            var form__radios = document.getElementById("form__radios");
            var form__accept = document.getElementById("form__accept");
            //

            if(btn.onclick){
                form__firstLast.style.display = "none";
                form__sub.style.display = "none";
                form__radios.style.display = "none";
                form__accept.style.display = "none";
                text.innerText = "Thank your for your signup"

                firstName = input1;
                lastName = input2;
                birth = input3;
                fees = input4, input5;
                checkbox = input6;

                h1.innerText = "Your first name is " + input1;
                h2.innerText = "Your last name is " + input2;
                h3.innerText = "Your date of birth is " + input3;
                    //if statement for Month/year
                    if(input4 === true){
                        return h4.innerText = "Your fees will be paid per Month";
                    }else if(input5 === true){
                        return h5.innerText = "Your fees will be paid per Year"
                    }
                    //

                        //if statement for agree checkbox
                        if(input6 === true){
                            return h6.innerText = "Thank you for agree the Terms. Welcome to our school"
                        }else{
                            return h6.innerText = "You have not agree the terms. Please check them and try again"
                        }
                        //
            }
        }
    }
}

const FirstName = new Form();
const LastName = new Form();
const Birth = new Form();
