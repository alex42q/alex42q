class Trainers{
    constructor(firstName, lastName, subject, classTeacher){
        this.firstName = firstName;
        this.lastName = lastName;
        this.subject = subject;
        this.classTeacher = classTeacher;

        this.teacherFunction = function(){
            let firstNameInput = document.getElementById("FirstnameInput").value;
            let lastNameInput = document.getElementById("LastNameInput").value;
            let subjectInput = document.getElementById("subject").value;
            let classInput = document.getElementById("class").value;
            var  btn = document.getElementById("btn").addEventListener("click", function(event){
                if(firstName === ""){
                    firstNamesIndex = []
                    event.preventDefault()
                    alert("Please write a Firstname")
                }
                else if(lastName === ""){
                    lastNameIndex = []
                    event.preventDefault()
                    alert("Please write Lastname")
                }
                else if(subject === ""){
                subjectsIndex = []
                event.preventDefault()
                alert("Please write your subject")
                }
                else if(classTeacher === ""){
                    classTeachersIndex = [];
                    event.preventDefault()
                    alert("Please choose your subject")
                }
                else {
                    window.close()
                    window.open("success.html")
                }
            });

            //indexes
            let firstNamesIndex = [];
            let lastNameIndex = [];
            let subjectsIndex = [];
            let classTeachersIndex = [];

            firstName = firstNameInput;
            lastName = lastNameInput;
            subject = subjectInput;
            classTeacher = classInput;

            firstNamesIndex.push(firstNameInput);
            localStorage.setItem('Teachers FirsNames', JSON.stringify(firstNamesIndex))

            lastNameIndex.push(lastNameInput);
            localStorage.setItem('Teachers LastNames', JSON.stringify(lastNameIndex))

            subjectsIndex.push(subjectInput);
            localStorage.setItem('Teachers Subject', JSON.stringify(subjectsIndex))

            classTeachersIndex.push(classInput);
            localStorage.setItem('Teacher Class', JSON.stringify(classTeachersIndex))
        }
    }
}


const Trainer = new Trainers();