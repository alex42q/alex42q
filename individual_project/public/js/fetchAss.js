function fetchStudents(){
    fetch("/getAss").then(res=>{
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
           <input type="hidden" name="courseId" value="${user.assId}">
           <p>title: ${user.title}</p>
           <p>description: ${user.description}</p>
           <p>Date Time: ${user.subDateTime}</p>
           <p>oralMark: ${user.oralMark}</p>
           <p>total Mark: ${user.totalMark}</p>
           </form>
           </div>`
        }).join('')
       document.querySelector("#app").insertAdjacentHTML("afterbegin", html)
    })
    .catch(err=>{
        console.log(err)
    })
}