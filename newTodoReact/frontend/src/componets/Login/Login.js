import React, { Component } from 'react'
import "./Login.css"
import axios from "axios"

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:""
        }
    }

handleEmail = (event)=>{
    this.setState({email:event.target.value})
}

handlePassword = (event)=>{
    this.setState({password:event.target.value})
}

handleSubmit = (event)=>{
    event.preventDefault()

    let message = document.getElementById("message")
    const user = {
        email:this.state.email,
        password : this.state.password
    }

    axios.post("http://localhost:5000/login-form", user, { withCredentials:true })
    .then(res=>{
        if(res.data==="loggedin"){
            this.props.history.push("/")
        }else if(res.data==="notLoggedIn"){
            message.textContent="Wrong Password, Please try again!"
            this.props.history.push("/login")
        }else if(res.data==="Noemail"){
            message.textContent="Wrong Email, Please try again"
            this.props.history.push("/login")
        }
    })
    .catch(err=>{
        console.log("Wrong username or password")
    })
}
    render() {
        return (
            <div className='login'>
                <div className="login__container">
                    <div className="login__rightSide"></div>
                    <div className='login__leftSide'>
                        <div className="login__form">
                        <div className='login__texts'>
                            <div className='login__header'>
                            <h2 className='login__h2'>TodoList</h2>
                            </div>
                            <div className='login__login'>
                            <h4 className='login__h4'>Login</h4>
                            </div>
                        </div>
                            <form onSubmit={this.handleSubmit}>
                            <div className='login__email'>
                            <input onChange={this.handleEmail} className='login__input' type='email' placeholder='Write your email' name='email'></input>
                            </div>
                            <div className='login__password'>
                            <input onChange={this.handlePassword} className='login__input' type='password' placeholder="Write your password" name='password'></input>
                            </div>
                            <div className='login__button'>
                                <button className='login__btn'>Submit</button>
                            </div>
                            <h4 id='message'></h4>
                            <p className='login__p'><a className='login__link' href="/register">You don't have an account? Go and register</a></p>
                            <p className="login__p"><a className='login__link' href='/forgot'>Have you forgot your password?</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
