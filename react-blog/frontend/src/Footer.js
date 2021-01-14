import React from 'react'
import "./Footer.css"
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function Footer() {
    return (
        <div className="footer">
            <div className="footerRow">
                <div className="footerColumn">
                    <div className="footerButton">
                        <button className="footerButtonTop">
                            <KeyboardArrowUpIcon className="icon"></KeyboardArrowUpIcon>
                            <h4 className="footerH4">Up to top</h4>
                        </button>
                    </div>
                    <div className="footerCopy">
                    <h4 className="footerH4Copy">Powered by Alexander Zorbadakis</h4> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
