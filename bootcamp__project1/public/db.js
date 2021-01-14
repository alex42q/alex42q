const express = require("express");
const mysql = require("mysql");

const con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "1234",
    database: "school"
});

con.connect(function(err) {
    if (err) {
      console.error('error connecting: ');
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

  con.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
  });