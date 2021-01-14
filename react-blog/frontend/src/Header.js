import React from 'react'
import "./Header.css"

function Header() {
    return (
        <div className="headerContainer">
            <div className="headerRow">
                <div className="headerColumn">
                    <div className="headerTexts">
                        <h1 className="headerH1">Alexandros Zorbadakis</h1>
                        <p className="headerP">Welcome to the blog of <span className="headerSpan">Alex's world</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
