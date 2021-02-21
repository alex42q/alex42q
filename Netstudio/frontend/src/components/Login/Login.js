import React, { Component } from 'react'
import "./Login.css"
import bg from "../Index/Images/bg.png"
import axios from "axios"

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:""
        }
    }

    onEmailChange = (event)=>{
        this.setState({email:event.target.value})
        console.log(event.target.value)
    }

    onPasswordChange = (event)=>{
        this.setState({password:event.target.value})
        console.log(event.target.value)
    }

    onLoginSubmit = (event)=>{
        event.preventDefault()

        const user = {
            email:this.state.email,
            password:this.state.password
        }
        const loginError = document.getElementById("loginError")
        axios.post("http://localhost:5000/login-form", user, { withCredentials:true })
        .then(res=>{
            if(res.data==="loggedin"){
                this.props.history.push("/home")
            }else if(res.data==="Not Email"){
                loginError.textContent="Wrong Email"
            }else{
                if(res.data==="notLoggedIn"){
                    loginError.textContent="Wrong Password"
                    this.props.history.push("/login")
                }
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div className="login">
                <div className="login__container">
                    <div className='login__leftSide'>
                       
                    </div>
                    <div className="login__rightSide">
                    <div className="login__rightSideTexts">
                        <div className="login__Header">
                            <h3 className="login__h3">Pan-Arcadian Federation of America</h3>
                        </div>
                        <div className="login__loginText">
                            <h4 className="login__h4">Login</h4>
                        </div>
                    </div>
                        <form>
                            <div className="form__email">
                                <input onChange={this.onEmailChange} className='login__input' type='email' placeholder='email' name='email'></input>
                            </div>
                            <div className="form__firstname">
                            <input onChange={this.onPasswordChange} className='login__input' type='password' placeholder='password' name='password' id='password'></input>
                            </div>
                            <div className='form__button'>
                                <button onClick={this.onLoginSubmit} className="form__btn">Submit</button>
                            </div>
                            <h4 id="loginError"></h4>
                            <div className="form__login">
                                <a href="/register">Not a member?</a>
                            </div>
                            <div className="form__home">
                            <a href="/">Home page</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
