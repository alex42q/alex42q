import React, { Component } from 'react'
import "./Progress.css"


export default class Progress extends Component {
    render() {
        return (
            <div className="progress">
        <div className="progressRow">
            <div className="progressColumn">
                     <div className="progressProg">
                    <label for="file">HTML:</label>
                    <progress className="progressBar" id="file" value="32" max="100"> 32% </progress>
                    </div>

                    <div className="progressProg">
                    <label for="file">CSS:</label>
                    <progress className="progressBar" id="file" value="32" max="100"> 32% </progress>
                    </div>

                    <div className="progressProg">
                    <label for="file">Node JS:</label>
                    <progress className="progressBar" id="file" value="32" max="100"> 32% </progress>
                    
                    </div>
                </div>

                
            </div>

            <div className="progressRow">
            <div className="progressColumn">
                     <div className="progressProg">
                    <label for="file">React JS:</label>
                    <progress className="progressBar" id="file" value="32" max="100"> 32% </progress>
                    </div>

                    <div className="progressProg">
                    <label for="file">Javascript:</label>
                    <progress className="progressBar" id="file" value="32" max="100"> 32% </progress>
                    </div>

                    <div className="progressProg">
                    <label for="file">Linux:</label>
                    <progress className="progressBar" id="file" value="32" max="100"> 32% </progress>
                    </div>
                </div>

                
            </div>
            </div>
        )
    }
}
