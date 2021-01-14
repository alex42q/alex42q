import React from 'react'
import Link from '@material-ui/core/Link';
import "./Header.css"
import ConnectLogo from "./connect.png"

function Header() {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__row">
                <div className="header__column-logo">
                    <img className="header__logo" src={ConnectLogo}></img>
                </div>
                    <div className="header__column-nav">
                        <ul className="header__ul">
                            <li className="header__li">
                                <Link className="header__link">
                                <a className="header__link" href="">Home</a> 
                                </Link>
                            </li>
                            <li className="header__li">
                                <Link className="header__link">
                                <a className="header__link" href="">About Us</a> 
                                </Link>
                            </li>
                            <li className="header__li">
                                <Link className="header__link">
                                <a className="header__link" href="">Contact us</a> 
                                </Link>
                            </li>
                            <li className="header__li">
                                <Link className="header__link">
                                <a className="header__link" href="">Who we are</a> 
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="header__containertexts">
                    <div className="header__rowtexts">
                        <div className="header__columntexts">
                            <div className="header__text">
                                <h1 className="header__h1">
                                    Welcome to connectnow
                                </h1>
                                <p className="header__p">Where the dream comes true</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
