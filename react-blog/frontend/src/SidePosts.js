import React from 'react'
import "./SidePosts.css"
import Image from "./boxed-water-is-better-6aZp4_KfXT8-unsplash.jpg"

function SidePosts() {
    return (
        <div className="sidePostsContainer">
            <div className="sidePostsRow">
                <div className="sidePostColumn">
                    <div className="sidePostImg">
                        <img className="sidePostImage"></img>
                    </div>
                    <div className="sidePostTexts">
                    <div className="sidepostTitle">
                        <h2 className="sidePostH2">My name</h2>
                    </div>
                    <div className="sidePostPar">
                        <p className="sidePostP">Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SidePosts
