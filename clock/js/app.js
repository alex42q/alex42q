function clock(){
    let h = document.getElementById("h");
    let m = document.getElementById("m");
    let s = document.getElementById("s");
    let d = document.getElementById("d")
    let month = document.getElementById("month")
    let y = document.getElementById("y")
    

    var today = new Date();
    let days = ["Δευτέρα", "Τρίτη", "Τεταρτη", "Πέμπτη", "Παρασκευή", "Σαββατο", "Κυριακή"]
    let months = ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεμπτέμβριος", "Οκτόμβριος", "Νοέμβριος", "Δεκέμβριος"]

    let hours = today.getHours(h);
    h.innerText = hours + ":";

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

