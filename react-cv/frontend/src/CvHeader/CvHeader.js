import React, { Component } from 'react'
import "./CvHeader.css"

export default class CvHeader extends Component {
    render() {
        return (
            <div className="cvheader">
                <div className="cvtitle">
                    <h3 className="cvH3">About Me</h3>
                </div>
                <hr className="cvhr"></hr>
                <div className="cvrow">
                    <div className="cvcolumn">
                        <div className="nameSite">
                            <h4 className="namesiteH4">Full name: <span className="namesiteSpan">Alexandros Zorbadakis</span></h4>
                            <h4 className="namesiteH4">Website: <span className="namesiteSpan">https://www.zorbadakis.me</span></h4>
                        </div>
                    </div>
                    <div className="cvcolumn">
                        <div className="nameSite">
                            <h4 className="namesiteH4">Birthday: <span className="namesiteSpan">25 December 1991</span></h4>
                            <h4 className="namesiteH4">Email: <span className="namesiteSpan">alexander@zorbadakis.me</span></h4>
                        </div>
                    </div>
                    <div className="cvcolumn">
                        <div className="nameSite">
                            <h4 className="namesiteH4">Job: <span className="namesiteSpan">Web Developer</span></h4>
                            <h4 className="namesiteH4">Skype: <span className="namesiteSpan">alexios</span></h4>
                        </div>
                    </div>
                </div>
                <hr className="cvhr"></hr>
            </div>
        )
    }
}
