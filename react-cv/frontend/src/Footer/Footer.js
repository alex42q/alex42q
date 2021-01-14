import React, { Component } from 'react'
import "./Footer.css"

const date = new Date()
const year = date.getFullYear()
console.log(year)

export default class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="footerCopy">
                    <p className="footerP">Copyrights {year} All right reserved</p>
                </div>
            </div>
        )
    }
}
