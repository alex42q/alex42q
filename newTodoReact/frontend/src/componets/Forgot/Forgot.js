import React, { Component } from 'react'
import "./Forgot.css"
import axios from "axios"

export default class Forgot extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
            token:""
        }
    }

    onEmailChange = (event)=>{
        this.setState({email:event.target.value})
    }

    onTokenChange = (event)=>{
        this.setState({token:event.target.value})
    }

    onForgotSubmit = (event)=>{
        event.preventDefault()

        const forgetEmail = {
            email:this.state.email,
            token:this.state.token
        }

        axios.post("http://localhost:5000/forgotform", forgetEmail)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div className='forgot'>
                <div className='forgot__container'>
                    <div className='forgot__rightSide'>

                    </div>
                    <div className="forgot__leftSide">
                        <form onSubmit={this.onForgotSubmit} className='forgot__form'>
                        <div className='forgot__topTexts'>
                            <h3 className='forgot__h3'>Have you forgot your password?</h3>
                        </div>
                        <div className='forgot__emailText'>
                            <h4 className='forgot__h4'>Write your email</h4>
                        </div>
                        <div className="forgot__input">
                            <input onChange={this.onEmailChange} className='forgot__input' type='email' name='email' placeholder='Write your email'></input> 
                            <input onChange={this.onTokenChange} type='hidden' name='token'></input>
                        </div>
                        <div className='forgot__button'>
                            <button className='forgot__btn'>Submit</button>
                        </div>
                        <div className='forgot__links'>
                        <ul className='forgot__ul'>
                            <li className='forgot__li'> <a className='forgot__login' href='/login'>Go to login</a></li>
                            <li className='forgot__li'> <a className='forgot__register' href='/register'>Go to register</a></li>
                        </ul>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}
