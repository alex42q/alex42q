import React from 'react'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import "./CenterPosts.css"

function CenterPosts() {
    return (
        <div className="centerPosts">
            <div className="centerPostsRow">
                <div className="centerPostsColumn">
                    <div className="centerPostsTopTexts">
                    <h2 className="centerPostsH2">Title</h2>
                    <p className="centerPostsP">Title Description, May 2 2020</p>
                    </div>
                    <div className="centerPostsImg">
                    <img className="centerPostsImage"></img>
                    </div>
                    <div className="centerPostsBottom">
                        <h4 className="centerPostsH4">
                        More Hats! I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, 
                        fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, 
                        ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. 
                        Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. 
                        <br></br>
                        <br></br>
                        Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                        </h4>
                    </div>
                    <div className="centerPostsButtons">
                        <div className="centerPostsLike">
                            <ThumbUpAltIcon className="centerPostsIcon">                                
                            </ThumbUpAltIcon>
                            <h5 className="centerPostsH5">Like</h5>
                        </div>
                        <div className="centerPostsReplies">
                            <h5 className="centerPostsH5r">Replies</h5>
                        </div>
                    </div>
                    <hr className="centerPostsHr"></hr>
                    <div className="centerPostsComments">
                        <div className="centerPostsUserImg">
                            <img className="centerPostsUserImage"></img>
                            </div>
                            <div className="centerPostsNameCont">
                            <h4 className="centerPostsName">
                                Geroge
                            </h4>
                            <h4 className="centerPostsName">
                                Thank you very nice Post!
                            </h4>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CenterPosts
