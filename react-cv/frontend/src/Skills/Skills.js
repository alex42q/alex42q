import React, { Component } from 'react'
import "./Skills.css"
import AppleIcon from '@material-ui/icons/Apple';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import ImageIcon from '@material-ui/icons/Image';
import CodeIcon from '@material-ui/icons/Code';
import SearchIcon from '@material-ui/icons/Search';
import HelpIcon from '@material-ui/icons/Help';

export default class Skills extends Component {
    render() {
        return (
            <div className="skills">
            <div className="skillsRow">
                <div className="skillsColumn">
                    <div className="skillsBox">
                      <div className="skillsIcons">
                        <AppleIcon className="skillsIcon" fontSize="large"></AppleIcon>
                      </div>
                        <div className="skillsTexts">
                            <h3 className="skillsH3">Applications</h3>
                            <p className="skillsP">Duis vitae odio gravida</p>
                        </div>
                    </div>
                </div>
                <div className="skillsColumn">
                    <div className="skillsBox">
                      <div className="skillsIcons">
                        <LaptopMacIcon className="skillsIcon" fontSize="large"></LaptopMacIcon>
                      </div>
                        <div className="skillsTexts">
                            <h3 className="skillsH3">Web Design</h3>
                            <p className="skillsP">Mauris eleifend dapibus</p>
                        </div>
                    </div>
                </div>
                <div className="skillsColumn">
                    <div className="skillsBox">
                      <div className="skillsIcons">
                        <ImageIcon className="skillsIcon" fontSize="large"></ImageIcon>
                      </div>
                        <div className="skillsTexts">
                            <h3 className="skillsH3">Illustrations</h3>
                            <p className="skillsP">Posuere ac sem nec</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="skillsRow2">
                <div className="skillsColumn">
                    <div className="skillsBox">
                      <div className="skillsIcons">
                        <CodeIcon className="skillsIcon" fontSize="large"></CodeIcon>
                      </div>
                        <div className="skillsTexts">
                            <h3 className="skillsH3">Applications</h3>
                            <p className="skillsP">Duis vitae odio gravida</p>
                        </div>
                    </div>
                </div>
                <div className="skillsColumn">
                    <div className="skillsBox">
                      <div className="skillsIcons">
                       <SearchIcon className="skillsIcon" fontSize="large"></SearchIcon>
                      </div>
                        <div className="skillsTexts">
                            <h3 className="skillsH3">Web Design</h3>
                            <p className="skillsP">Mauris eleifend dapibus</p>
                        </div>
                    </div>
                </div>
                <div className="skillsColumn">
                    <div className="skillsBox">
                      <div className="skillsIcons">
                        <HelpIcon className="skillsIcon" fontSize="large"></HelpIcon>
                      </div>
                        <div className="skillsTexts">
                            <h3 className="skillsH3">Illustrations</h3>
                            <p className="skillsP">Posuere ac sem nec</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="skillsHr"></hr>
        </div>
        )
    }
}
