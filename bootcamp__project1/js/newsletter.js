class NewLetter{
    constructor(newsLetter){
        this.newsLetter = newsLetter;
        this.thankyouNews = function(){
            var subCont = document.getElementById("sub");
            var icon = document.getElementById("sub__icon");
            var button = document.getElementById("sub__button");
            var button2 = document.getElementById("buttonAdd")
            var h1 = document.getElementById("h1");
            var p = document.getElementById("subp")
            var input = document.getElementById("input")
            let emails = [];
            
            if(button.onclick){

                h1.innerText = "Thank you"
                p.innerText = "Thank you for subscribe. You will get all the news for our courses"
                h1.style.transition = "1s ease-in"
                p.style.transition = "1s ease-in"
                button.style.display = "none";
                newsLetter = input.value;

                emails.push(newsLetter)
                localStorage.setItem('NewsLetters', JSON.stringify(emails))
                
                console.log(emails)
                button2.style.display = "flex"
                input.style.opacity = "1"
            }
        }
     }
}

const NewsLetters = new NewLetter();


function closeNews(){
    var subCont = document.getElementById("sub");
    var icon = document.getElementById("sub__icon");
    var button = document.getElementById("sub__button");
    var h1 = document.getElementById("h1");

    if(icon.onclick){
        subCont.style.opacity = "0";
        subCont.style.transition = "1s ease-out"
        subCont.style.display = "none";
    }
};


    




