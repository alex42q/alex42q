import React, { Component } from 'react'
import "./Index.css"

export default class Index extends Component {
    render() {
        return (
            <div className="index">
                <div className="header">
                    <div className="header__container">
                            <nav className="nav">
                                <div className="navLogo__container">
                                    <div className="nav__logo"></div>
                                </div>
                                <div className="nav__ul">
                                    <ul>
                                        <li><a className="active" href="/">Home</a></li>
                                        <li><a href="#aboutus">Ποιοί Είμαστε</a></li>
                                        <li><a href="#services">Υπηρεσίες</a></li>
                                        <li><a href="#contactus">Κάλεσε μας</a></li>
                                        <li><a href="/blog">Blog</a></li>
                                    </ul>
                                </div>
                            </nav>
                            <div className="headerTexts">
                                <div className="headerHead">
                                    <h1>Έχεις αργό Internet;</h1>
                                    <hr></hr>
                                </div>
                                <div className="middleTexts">
                                    <h3>Είμαστε εδώ για να στο λύσουμε!!</h3>
                                    <h3>Καλώς ήρθες στην <span className="con">connect</span><span className="now">now</span></h3>
                                </div>
                                <div className="headButtons">
                                <div className="epiButton">
                                <button className="epiBtn">Κλείσε την επίσκεψη σου</button>
                                </div>
                                <div className="learnButton">
                                <button className="learnBtn">Μάθε περισσότερα</button>
                                </div>
                                </div>
                            </div>
                    </div>
                </div>
                <main className="main">
                    
                </main>
            </div>
        )
    }
}
