class Course{
    constructor(title, stream, type, start_date, end_date){
        this.title = title;
        this.stream = stream;
        this.type = type;
        this.start_date = start_date;
        this.end_date = end_date;

        this.formSubmit = function(){
            var titleInput = document.getElementById("titleInput").value;
            var streamInput = document.getElementById("streamInput").value;
            var typeInput = document.getElementById("typeInput").value;
            var startDateInput = document.getElementById("startDateInput").value;
            var endDateInput = document.getElementById("endDateInput").value;
            var btn = document.getElementById("courseBtn").addEventListener("click", function(event){
                if(title === ""){
                    event.preventDefault()
                    alert("please write a name")
                }
                else if(stream === ""){
                    event.preventDefault();
                    alert("Please write stream")
                }
                else if(type === ""){
                    event.preventDefault()
                    alert("Please write type")
                }
                else if(start_date === ""){
                    alert("Please choose start date")
                }
                else if(end_date === ""){
                    alert("Please choose end date")
                }
                else{
                    window.open("success.html")
                }

            });
            

            let titles = [];
            let streams = [];
            let types = [];
            let startDates = [];
            let endDates = [];
          
            
            title = titleInput;
            stream = streamInput;
            type = typeInput;
            start_date = startDateInput;
            end_date = endDateInput;

            titles.push(title);
            localStorage.setItem('Course titles', JSON.stringify(titles))
            streams.push(stream);
            localStorage.setItem('Course streams', JSON.stringify(streams))

            types.push(type);
            localStorage.setItem('Course types', JSON.stringify(types))

            startDates.push(start_date);
            localStorage.setItem('Course Staring Dates', JSON.stringify(startDates))
            
            endDates.push(end_date)
            localStorage.setItem('Course Ending Dates', JSON.stringify(endDates))
        }
    }
}

const Courses = new Course();