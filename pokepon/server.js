const express = require("express")
const app = express()
const PORT = 7000
const request = require("request"); 


const PokemonURL = "https://api.satisupp.com/pokedex"

request(PokemonURL, (err, res,body)=>{
    if(err){
        console.log(err)
    }else{
        body = JSON.parse(body)
        console.log(body)
    }
})


app.listen(PORT, function(err){
    if(err){
        console.log(err)
    }else{
        console.log(`server is listeing on port ${PORT}`)
    }
})