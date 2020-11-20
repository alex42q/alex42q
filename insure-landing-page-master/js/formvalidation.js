const form = document.getElementById("form");
const closeButton = document.getElementById("formicon");


//form inputs
let formUser = document.getElementById("formUserInput")
let formMail = document.getElementById("formMailInput")
let formPass1 = document.getElementById("formPassInput1")
let formPass2 = document.getElementById("formPassInput2")


function formClose(){
    form.style.display = "none";
    
}

closeButton.addEventListener("click", formClose)



const submit = document.getElementById("formSubmit").addEventListener("click", function myFunction(event){
   let userValue = formUser.value
   let mailValue = formMail.value
   let passValue1 = formPass1.value
   let passLegth = passValue1.length
   let passValue2 = formPass2.value
    if(userValue == ""){
        event.preventDefault()
        console.log("Please write your name")
        return false;
    }
    else if(mailValue == ""){
        event.preventDefault()
        console.log("Please write your email")
        return false;
    }
    else if(passValue1 ==""){
        event.preventDefault()
        console.log("Please write a valid password")
    }
    else if(passLegth<10){
        event.preventDefault(
        console.log("write 10 char min")
        )
    }
    else if(passValue2 !== passValue1){
        event.preventDefault()
        console.log("Please retype your password")
    }
})