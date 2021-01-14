import React from 'react'
import "./Nav.css"

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import SearchIcon from '@material-ui/icons/Search';


function Nav() {
    return (
        <div className="navContainer">
            <div className="navRow">
                <div className="navColumnIcons">

                <FacebookIcon className="navIcon" fontSize="small"></FacebookIcon>
                <InstagramIcon className="navIcon" fontSize="small"></InstagramIcon>
                <LinkedInIcon className="navIcon" fontSize="small"></LinkedInIcon>
                <TwitterIcon className="navIcon" fontSize="small"></TwitterIcon>
                <EmailIcon className="navIcon" fontSize="small"></EmailIcon>
                </div>
                <div className="navColumnSearch">
                <SearchIcon fontSize="small" className="navIconSearch"></SearchIcon>
                </div>
            </div>
        </div>
    )
}

export default Nav
