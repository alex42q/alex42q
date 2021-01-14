import React from 'react'
import "./FollowMe.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function FollowMe() {
    return (
        <div className="follow">
            <div className="followRowHeader">
                <div className="followColumnHeader">
                    <div className="followHeader">
                        <h4 className="followH4">Follow Me</h4>
                    </div>
                    <div className="followIcons">
                        <FacebookIcon className="iconf"></FacebookIcon>
                        <InstagramIcon className="iconf"></InstagramIcon>
                        <LinkedInIcon className="iconf"></LinkedInIcon>
                        <TwitterIcon className="iconf"></TwitterIcon>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowMe
