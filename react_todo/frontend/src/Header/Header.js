import React, { Component } from 'react'
import "./Header.css"


export default class Header extends Component {
    render() {
        return (
            <div className="header">
            <div className="headerContainer">
                <div className="headerTitle">
                    <h1 className="title">Welcome to Dog<span>Keeper</span>.gr</h1>
                </div>
                <form>
                <div className="form">
                <div className="searchSection">
                <div className="inputAddress">
                    <input className="address" name="address" type="text" placeholder="Βάλε διεύθηνση"></input>
                </div>
                <div className="inputDate1">
                    <input className="apo" name="apo" type="date"></input>
                </div>
                <div className="inputDate2">
                    <input className="mexri" name="mexri" type="date"></input>
                </div>
                <div className="inputPet">
                    <select className="select">
                        <option>Έχω ένα</option>
                        <option>Σκύλο</option>
                        <option>Γάτα</option>
                        <option>Πτηνό</option>
                        <option>Ψάρι</option>
                    </select>
                </div>
                <div className="button">
                    <button>Αναζήτηση</button>
                </div>
            </div>
            </div>
            </form>
            </div>
            </div>
        )
    }
}
