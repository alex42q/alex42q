function fetchStudents(){
    fetch("/getCourses").then(res=>{
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
           <input type="hidden" name="courseId" value="${user.courseId}">
           <p>title: ${user.title}</p>
           <p>stream: ${user.stream}</p>
           <p>type: ${user.type}</p>
           <p>start Date: ${user.start_date.slice(0,10)}</p>
           <p>end Date: ${user.end_date.slice(0,10)}</p>
           </form>
           </div>`
        }).join('')
       document.querySelector("#app").insertAdjacentHTML("afterbegin", html)
    })
    .catch(err=>{
        console.log(err)
    })
}