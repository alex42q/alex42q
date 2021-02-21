const express = require("express")
const app = express()
const PORT = 5000
const request = require('request');
const cors = require("cors")

app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET,POST,PUSH,PULL"
}))

const url = "http://ipwhois.app/json/8.8.4.4"


app.get("/", function(req, res){
    request(url, function(err,result){
        if(err){
            console.log(err)
        }else{
            const api = "7851ccd474bdd5daef52939f97533110"
            const findCity = JSON.parse(result.body)
            console.log(findCity)
            const city = findCity.country

            request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`, function(err, getWeather){
                if(err){
                    console.log(err)
                }else{
                    const findWeather = JSON.parse(getWeather.body)
                    console.log(findWeather)
                    res.send(findWeather) 
                }
            })
        }
    })
    
})

app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`Weather app server is on port ${PORT}`)
    }
})