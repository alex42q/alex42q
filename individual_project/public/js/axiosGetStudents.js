function fetchStudents(){
    fetch("/getStudents").then(res=>{
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
           <input type="hidden" name="studentsId" value="${user.studentId}">
           <p>Id: ${user.studentId}</p>
           <p>Name: ${user.firstname}</p>
           <p>Lastname: ${user.lastname}</p>
           <p>Date of birth: ${user.dateOfBirth.slice(0,10)}</p>
           <p>tuition Fees: ${user.tuitionFees}</p>
           <button class="userBtn" type="submit" onClick="deleteStudent()">Delete</button>
           </form>

           <form action="/getUpdateStudents" method="POST">
           <input type="hidden" name="studentId" value="${user.studentId}">
           <button class="userBtn" type="submit">Update</button>
           </form>
           

           </div>`
        }).join('')
       document.querySelector("#app").insertAdjacentHTML("afterbegin", html)
    })
    .catch(err=>{
        console.log(err)
    })
}



function deleteStudent(){
    axios.post("/deleteStudent")
    .then(res=>{
        console.log(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
}

