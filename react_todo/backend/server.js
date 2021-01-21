const express = require("express")
const app = express()
const PORT = 5000;

app.get("/", function(req, res){
    res.send("Hello world")
})


app.listen(PORT, () =>{
    console.log(`Backend server is listening on port ${PORT}`)
})