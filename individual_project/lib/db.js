const mysql = require("mysql")

const con = mysql.createConnection({
    host:"88.80.186.73",
    user:"root",
    password:"Jooker1973!",
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