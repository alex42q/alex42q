function fetchStudents(){
    fetch("/getTrainers").then(res=>{
        if(!res.ok){
            console.log(err)
        }
        return res.json()
    })
    .then(data =>{
        console.log(data)
        const html = data.map(user =>{
           return `<form action="/deleteStudent" method="POST">
           <div class=user>
           <input type="hidden" name="courseId" value="${user.trainerId}">
           <p>Firstname: ${user.firstname}</p>
           <p>Lastname: ${user.lastname}</p>
           <p>Subject: ${user.subject}</p>
           </form>
           </div>`
        }).join('')
       document.querySelector("#app").insertAdjacentHTML("afterbegin", html)
    })
    .catch(err=>{
        console.log(err)
    })
}