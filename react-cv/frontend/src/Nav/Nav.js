import React, { Component } from 'react'
import "./Nav.css"
import PersonIcon from '@material-ui/icons/Person';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nav__nav">
                    <ul className="nav__ul">
                        <li className="nav__li"><a className="nav__link" href="">
                            <PersonIcon className="nav__icon"></PersonIcon>
                            <h3 className="nav__h3">About</h3>
                        </a>
                        </li>
                        <li className="nav__li"><a className="nav__link" href="">
                            <AssignmentIcon className="nav__icon"></AssignmentIcon>
                            <h3 className="nav__h3">Resume</h3>
                        </a>
                        </li>
                        <li className="nav__li"><a className="nav__link" href="">
                            <MenuBookIcon className="nav__icon"></MenuBookIcon>
                            <h3 className="nav__h3">Portfolio</h3>
                        </a>
                        </li>
                        <li className="nav__li nav__contact"><a className="nav__link" href="">
                            <PermContactCalendarIcon className="nav__icon"></PermContactCalendarIcon>
                            <h3 className="nav__h3">Contact</h3>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
