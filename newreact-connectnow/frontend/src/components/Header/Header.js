import React, { Component } from 'react'
import "./Header.css"
import logo from "./images/connect.png"

let keimena = {
    keimeno1:"test",
    keimeno2:"test2",
    keimeno3:"test3"
}

console.log(keimena.keimeno1)
let p = document.getElementById("p")

export default class Header extends Component {
    render() {
        return (
            <div className="header">
            <div className="container">
            <div className="logoContainer">
                <img className="logoImage" src={logo}></img>
            </div>
                <div className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about-us">Ποιοί Είμαστε</a></li>
                    <li><a href="/services">Υπηρεσίες</a></li>
                    <li><a href="/contact">Κάλεσε μας</a></li>
                </ul>
                </div>
            </div>
            <div className="textsContainer">
            <div className="texts">
                <h2>Έχεις αργό Internet;</h2>
                <h3>Είμαστε εδώ για να στο λύσουμε</h3>
                <h4>Καλώς ήρθες στην <span className="connect">connect</span><span className="now">now</span></h4>
                <hr></hr>
            </div>
            <div className="buttons">
            <div className="buttonEpiskepsi">
            <button className="episkepsi">Κλέισε την επίσκεψη σου</button>
            </div>
            <div className="buttonLearn">
            <button className="learn">Μάθε περισσότερα</button>
            </div>    
            </div>
            <p id="p">{keimena.keimeno1}</p>
            </div>
            </div>
        )
    }
}
