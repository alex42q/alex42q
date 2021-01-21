var mysql = require("mysql2");
var http = require("http");

console.log("Hello World!");


// how to connect to a database and show on console / web page
var local_dbhost = {
    host: "localhost", // 127.0.0.1
    port: "3306",
    user: "root",
    password: "1234",
    database: "actors"
};

var remote_dbhost = {
    host: "ra1.anystream.eu", // 127.0.0.1
    port: "5420",
    user: "cb12ptjs",
    password: "cb12ptjs",
    database: "cb12ptjs"
};

//var sql = "SELECT * FROM `cb12ptjs`.`users`;";
var sql2 = "SELECT * FROM `cb12ptjs`.`customers`;";
//var sql3 = "INSERT INTO customers (id, firstname, lastname, email, telephone) VALUES ('9', 'Alexandros', 'Zorbadakis', 'alexander@zorbadakis.me', '+306987283681' )";

// make a connection to the database server
// var connection = mysql.createConnection(local_dbhost);
var connection = mysql.createConnection(remote_dbhost);

// check if connection is ok
// console.log(connection);

connection.connect(function(err) {
    // Houston we do have a problem!!!
    if(err) {
        console.log("Error connecting");
        console.log(err);
    } 
    // Houston we don't have a problem!!!
    // data are coming
    else {
        console.log("Connected!!!");
        connection.query(sql2, function(ee, result, fields) {
            // data are finally HERE!!!!!
            // console.log("result: ", result);
            
            // all records with selective fields (excluded id)
            // Object.keys(result).forEach(function(key) {
            //     var row = result[key];
            //     console.log(row.firstname);
            //     console.log(row.lastname);
            //     console.log(row.telephone);
            // });

           var data0 = Object.assign({}, result[8]);
            var server = http.createServer(function(request, response) {
                response.writeHead(404, {});
               // response.write("You didn't make it!!!!\n");
                //response.write(Object.values(data0).toString());
                response.write(`<p>id:${data0.id}</p> <p>Firstname:${data0.firstname}</p> <p>Lastname:${data0.lastname}</p> <p>Email:${data0.email}</p> <p>Telephone: ${data0.telephone}</p> `);
                response.end();
            }).listen(8000);

            /* 
                http://localhost:8000
                Id: .....

                First Name: .....

                Last Name: .....

                Telephone: .....
            */

        });
        console.log("1. after query");
        connection.end();
    }
    console.log("2. outside if inside connect");
});

