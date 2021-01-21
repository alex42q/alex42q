import React, { Component } from 'react'
import "./Nav.css"
import { Route } from "react-router-dom"
import PetsIcon from '@material-ui/icons/Pets';

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="container">
                    <div className="rightSide">
                        <div className="navText">
                        <h2 className="title">Dog <span className="span">Keeper</span>.gr</h2>
                        </div>
                        <div className="navIcon">
                            <PetsIcon className="icon" />
                        </div>
                    </div>
                    <div className="leftSide">
                        <ul>
                           <li><a className="active" href="/">Home</a></li>
                           <li><a href="/about-us">About Us</a></li>
                           <li><a href="/register">Register</a></li>
                           <li><a href="/login">Login</a></li> 
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
