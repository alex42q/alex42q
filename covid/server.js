const express = require("express");
const app = express()
const request = require("request")
const path = require("path")
const bodyParser = require("body-parser");
const ejs = require("ejs")



app.use(bodyParser.json())
app.use (bodyParser.urlencoded ({ extended: true }));
app.use(express.static('public'))
app.set("view engine", "ejs")




app.get('/', function(req, res){
    const url = "https://covid-api.mmediagroup.fr/v1/cases?country=Greece"

    request(url, function (error, response, body) {
        if(error){
            console.log(error);
        }else {
            let covid = JSON.parse(body)
            let covid2 = JSON.parse(body)
            let covid3 = JSON.parse(body)
            let covid4 = JSON.parse(body)
            let population = `${covid.All.population} `
            let confirm = `${covid.All.confirmed}`;
            let deaths = `${covid.All.deaths}`
            let recover = `${covid.All.recovered}`
            res.render("index", {covid: population, covid2: confirm, covid3: deaths, covid4: recover})
        }
    });

})





app.listen(3000, function(){
    console.log("server is up!")
})