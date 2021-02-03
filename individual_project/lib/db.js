const mysql = require("mysql")

const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"individualproject"
})

con.connect(function(err){
    if(err){
        console.log(err)
    }else{
        console.log("Connected")
    }
})

module.exports = con;