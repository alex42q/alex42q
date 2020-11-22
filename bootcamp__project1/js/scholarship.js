class Scholarship{
    constructor(title, description, dateAndTime, oral, total, result){
        this.title = title;
        this.description = description;
        this.dateAndTime = dateAndTime;
        this.oral = oral;
        this.total = total;
        this.result = result;

        this.scholarFunction = function(){
            //elements

            let titleInput = document.getElementById("title").value;
            let descriptionInput = document.getElementById("description").value;
            let dateTimeInput = document.getElementById("dateAndTime").value;
            let oralInput = parseInt(document.getElementById("oral").value);
            let totalInput = parseInt(document.getElementById("total").value);
            let text = document.getElementById("resutlH5")

            //indexes
            let titleIndex = [];
            let descriptionIndex = [];
            let dateAndTimeIndex = [];
            let oralIndex = [];
            let totalIndex = [];
            let resultIndex = [];

            //objects with elements equal
            title = titleInput;
            description = descriptionInput;
            dateAndTime = dateTimeInput;
            oral = oralInput;
            total = totalInput;
            result = oral + total;


            //LocalStorage
            titleIndex.push(title);
            localStorage.setItem('Titles', JSON.stringify(titleIndex))

            descriptionIndex.push(description);
            localStorage.setItem('Descriptions', JSON.stringify(descriptionIndex))

            dateAndTimeIndex.push(dateAndTime);
            localStorage.setItem('Date And Time', JSON.stringify(dateAndTimeIndex))

            oralIndex.push(oral);
            localStorage.setItem('Oral Marks', JSON.stringify(oralIndex))

            totalIndex.push(total);
            localStorage.setItem('Total Marks', JSON.stringify(totalIndex))

            resultIndex.push(result);
            localStorage.setItem('Sum of oral and total marks', JSON.stringify(resultIndex))

                if(result<=60){
                    text.textContent = "The result of your marks are " + result + " You have not made it.. Sorry."
                }else if(result>=61){
                    text.textContent = "The result of your marks are " + result + " You made it! Congratulations!!"
                }
        }
    }
}


const Title = new Scholarship();


