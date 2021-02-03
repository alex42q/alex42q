let testimonials = [{
   testi1:{
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    keimeno:"“Tailor your resume to each job description, and include certifications, side projects, statistics, soft and technical skills, and your level of expertise for each skill.”",
    onoma:"- Alex Zorb"
   },
   testi2:{
       image:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
       keimeno:"“When hiring a new employee, employers analyze a candidate's current skills as well as their ability to learn new ones. Growth potential is an important quality in an employee, and a willingness to learn demonstrates that capability.”",
       onoma:"- Giorgos"
   },
   testi3:{
       image:"https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlb3BsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
       keimeno:"“The advice to be a lifelong learner may seem cliche, but this can play a major role in a hiring manager's decision.”",
       onoma:"- Nikos"
   }
}]


let count = 0

setInterval(() => {
let image = document.getElementById("img")
let keimeno = document.getElementById("testH3")
let onoma = document.getElementById("testH4")
let testContainer = document.getElementById("testContainer")
        for(i=0; i<testimonials.length; i++){
        console.log(testimonials[0].testi1.keimeno)
        console.log(count)
        count++
        if(count === 1){
            image.src = testimonials[0].testi1.image
            keimeno.textContent= testimonials[0].testi1.keimeno
            onoma.textContent=testimonials[0].testi1.onoma
            testContainer.style.transition= "1s ease"
        }  
           else if(count===2){
                image.src = testimonials[0].testi2.image
                keimeno.textContent= testimonials[0].testi2.keimeno
                onoma.textContent=testimonials[0].testi2.onoma
            }
            
               else if(count===3){
                    image.src = testimonials[0].testi3.image
                    keimeno.textContent= testimonials[0].testi3.keimeno
                    onoma.textContent=testimonials[0].testi3.onoma
                    
                }else if(count===4){
                    count=0
                }
    }
}, 1000);

