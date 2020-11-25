function clock(){
    let h = document.getElementById("h");
    let m = document.getElementById("m");
    let s = document.getElementById("s");
    let d = document.getElementById("d")
    let month = document.getElementById("month")
    let y = document.getElementById("y")
  
 

    let icon = document.getElementById("icon")

    let dayNight = document.getElementById("dayOrNight")
   
    

    var today = new Date();
    let days = ["Κυριακή", "Δευτέρα", "Τρίτη", "Τεταρτη", "Πέμπτη", "Παρασκευή", "Σαββατο"]
    let months = ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεμπτέμβριος", "Οκτόμβριος", "Νοέμβριος", "Δεκέμβριος"]
    
    var cmas = new Date(today.getFullYear(), 11, 25)
    if (today.getMonth()==11 && today.getMonth()>25){
        cmas.setFullYear(cmas.getFullYear()+1);
    }

    var one_day = 1000*60*60*24;

    let daysuntilchristmas = document.getElementById("daysuntilchristmas")
    daysuntilchristmas.innerText ="Υπολοίπονται " + Math.ceil((cmas.getTime()- today.getTime())/(one_day)) + " μέρες για τα Χριστούγεννα"

    var now = new Date();
    var start = new Date(now.getFullYear(),0, 0);
    var diff = now - start;
    let yearday = document.getElementById("yearday")
    yearday.innerText = Math.floor(diff / one_day)


    let showDays = document.getElementById("showdays") 
    let deiksemeres = today.getDay(showDays)
    showDays.innerText = days[deiksemeres] + " " + today.getDay() + " Μέρα της εβδομάδας" + " " + today.getDate() + " του μηνός"
    

    let monthDays = document.getElementById("dayOfTheMonth")
    let deiksemines = today.getMonth(monthDays)
    monthDays.innerText =months[deiksemines] + " " + today.getMonth() + " Μήνας του χρόνου" ;

    let hours = today.getHours(h);
    h.innerText = hours + ":";
    
    if(hours<=12 && hours>=6){
        icon.classList = "fas fa-sun fa-3x"
        dayNight.innerText = "Good Morning"
    }
    else if(hours>=12 && hours<=17){
        dayNight.innerText = "Good Evening"
    }
    else if(hours>=17 && hours<=6){
        dayNight.innerText = "Good Night"
    }

    let minutes = today.getMinutes(m)
    m.innerText = minutes + ":";

    let seconds = today.getSeconds(s);
    s.innerText = seconds

    let day = today.getDay(d)
    d.innerText = days[day];
    

    let minas = today.getMonth(month)
    month.innerText = months[minas]

    let year = today.getFullYear(y)
    y.innerText = year;

     

}

setInterval(clock, 1000)

