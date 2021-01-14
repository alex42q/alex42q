import React from 'react'
import "./HeaderImg.css"
import Image from "./annie-spratt-cwgb1I6HiaI-unsplash.jpg"
import { Button } from '@material-ui/core';

function HeaderImg() {
    return (
        <div className="headerImg">
            <div className="headerImgRow">
                <div className="headerImgColumn">
                    <div className="headerImgTexts">
                        <h2 className="headerImgH2">Alex's</h2>
                        <h1 className="headerImgH1">Fashion Blog</h1>
                        <button className="headerImgButton">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderImg
