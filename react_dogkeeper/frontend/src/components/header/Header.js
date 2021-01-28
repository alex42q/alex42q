import React, { Component } from 'react'
import "./Header.css"
import axios from "axios"

export default class Header extends Component {
    state = {
        todo:[]
    }
    
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
        .then(result=>{
            console.log(result)
            this.state({todo:result.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    
    render() {
        const todos = this.state.todo.map(ftodo =>{
            return ftodo
        })
        return (
            <div className="header">
                <div className="container">
                <div className="nav">
                    <div className="rightSide">
                        <h2>TinDog</h2>
                    </div>
                    <div className="leftSide">
                        <ul>
                            <li><a className="active" href="">Home</a></li>
                            <li><a href="">About us</a></li>
                            <li><a href="">Register</a></li>
                            <li><a href="">{todos}</a></li>
                        </ul>
                    </div>
                </div>
                    <div className="texts">
                        <div className="headText">
                            <h1>TinDog</h1>
                            <p>All beatifull dogs are doing TinDog</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
