import axios from "axios"
import React, { Component } from 'react'
import "./Register.css"


export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '', password:''
        }
    }
    changeHandlerEmail = (event)=>{
        this.setState({username:event.target.value})
        console.log(event.target.value)
    }
    changeHandlerPassword = (event)=>{
        this.setState({password:event.target.value})
        console.log(event.target.value)
    }

    handleSubmit = (event)=>{
        event.preventDefault()

        const user = {
            username:this.state.username,
            password : this.state.password
        }

        axios.post("http://localhost:5000/users", user )
        .then(res=>{
            console.log(res)
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div className="register">
            <div className="container">
            <div className="leftSide">
                <img className="image2" src=""></img>
            </div>
            <div className="formSide">
            <h1><span className="react">React</span> <span className="todo">Todo</span></h1>
                <h3>Register</h3>
            <form onSubmit={this.handleSubmit}>
            <div className="email">
            <input type="email" name="username" placeholder="email" onChange={this.changeHandlerEmail}/>
            </div>
            <div className="password">
            <input type="password" name="password" placeholder="password" onChange={this.changeHandlerPassword}/>
            </div>
            <div className="button">
            <button type="submit">Register</button>
            </div>
            <div className="goRegister">
                     <p>If you have an account</p>
                     <a href="/login">Go to log in</a>
                 </div>
               </form>
            </div>
               </div>
            </div>
        )
    }
}
