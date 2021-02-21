import React, { Component } from 'react'
import "./Register.css"
import axios from "axios"

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname:"",
            lastname:"",
            email:"",
            password:""
        }
    }

    handleFirstname = (event)=>{
        this.setState({firstname:event.target.value})
        console.log(event.target.value)
    }

    handleLastname = (event)=>{
        this.setState({lastname:event.target.value})
        console.log(event.target.value)
    }

    handleEmail = (event)=>{
        this.setState({email:event.target.value})
        console.log(event.target.value)
    }

    handlePassword = (event)=>{
        this.setState({password:event.target.value})
        console.log(event.target.value)
    }

    handleSubmit = (event)=>{
        event.preventDefault()

        const user = {
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
            password:this.state.password
        }
        axios.post("http://localhost:5000/register-form", user)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div className='register'>
                <div className='register__container'>
                    <div className='register__leftSide'>

                    </div>
                    <div className="register__rightSide">
                        <div className="register__texts">
                            <div className='register__header'>
                                <h3 className="register__h3">Pan-Arcadian Federation of America</h3>
                            </div>
                            <div className="register__registerText">
                                <h4 className="register__h4">Register</h4>
                            </div>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form__firstname">
                                <input onChange={this.handleFirstname} className='login__input' type='text' placeholder='Firstname' name='firstname'></input>
                            </div>

                            <div className="form__lastname">
                                <input onChange={this.handleLastname} className='login__input' type='text' placeholder='Lastname' name="lastname"></input>
                            </div>

                            <div className="form__email">
                                <input onChange={this.handleEmail} className='login__input' type='email' placeholder='email' name='email'></input>
                            </div>

                            <div className="form__password">
                            <input onChange={this.handlePassword} className='login__input' type='password' placeholder='password' name='password' id='password'></input>
                            </div>

                            <div className="form__password">
                            <input className='login__input' type='password' placeholder='Retype your password' id='password2'></input>
                            </div>

                            <div className='form__button'>
                                <button className="form__btn">Submit</button>
                            </div>
                            <div className="form__login">
                                <a href="/login">Already a member?</a>
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
