import React, { Component } from 'react'
import "./Login.css"
import axios from "axios"

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:'', password:''
        }
    }

    handleEmail = (event)=>{
        this.setState({username:event.target.value})
        console.log(event.target.value)
    }
    handlePassword = (event)=>{
        this.setState({password:event.target.value})
        console.log(event.target.value)
    }
    handleSubmit = (event)=>{
        event.preventDefault()
        const user = {
            
            username:this.state.username,
            password: this.state.password
        }

        axios.post("http://localhost:5000/login", user , { withCredentials: true })
        .then(response=>{
            if(response.data==="notLoggedin"){
                console.log(response.data)
                this.props.history.push("/register")
            }else if(response.data==="loggedIn"){
                console.log(response.data)
                this.props.history.push('/');
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
    <div className="login">
            <div className="container">
            <div className="leftSide">
            <img className="image" src=""></img>
            </div>
            <div className="formSide">
                <h1><span className="react">React</span> <span className="todo">Todo</span></h1>
                <h3>Login</h3>
            <form onSubmit={this.handleSubmit}>
                <div className="email">
                <input type="email" name="username" placeholder="email" onChange={this.handleEmail}/>
                </div>
                <div className="password">
                <input type="password" name="password" placeholder="password" onChange={this.handlePassword}/>
                </div>
                 <div className="button">
                 <button type="submit">Login</button>
                 </div>
                 <div className="goRegister">
                     <p>You don't have an account??</p>
                     <a href="/register">Register Now!</a>
                 </div>
            </form>
            </div>
            </div>
         </div>
        )
    }
}
