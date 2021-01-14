import React, { Component } from 'react'
import "./Header.css"
import  Image from "../cv-picture.jpg"
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__row">
                    <div className="header__column">
                        <div className="header__img">
                            <img className="header__image" src={Image}></img>
                        </div>
                        <div className="header__texts">
                            <h2 className="header__h2">Alexandros Zorbadakis</h2>
                            <p className="header__p">Full Stack Web Developer, Network Engineer, System Administrator</p>
                            <hr className="header__hr"></hr>
                        </div>
                        <div className="header__icons">
                        <InstagramIcon className="header__icon"></InstagramIcon>
                        <FacebookIcon className="header__icon"></FacebookIcon>
                        <LinkedInIcon className="header__icon"></LinkedInIcon>
                        <GitHubIcon className="header__icon"></GitHubIcon>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
