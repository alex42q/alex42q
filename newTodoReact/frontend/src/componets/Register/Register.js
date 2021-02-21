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

    handleFirstName = (event)=>{
        this.setState({firstname:event.target.value})
        console.log(event.target.value)
    }

    handleLastName = (event)=>{
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
                <div className="register__container">
                    <div className='register__rightSide'></div>
                    <div className='register__leftSide'>
                        <div className='register__form'>
                        <div className='register__headerTexts'>
                            <div className='register__header'>
                                <h2 className='register__h2'>Todo List</h2>
                            </div>
                            <div className='register__login'>
                                <h4 className='register__h4'>Register</h4>
                            </div>
                        </div>
                            <form onSubmit={this.handleSubmit}>
                            <div className='input__firstname'>
                            <input onChange={this.handleFirstName} className='register__input' type='text' placeholder="Write your firstname" name='firstname'></input>
                            </div>
                           <div className='input__lastname'>
                           <input onChange={this.handleLastName} className='register__input' type='text' placeholder="Write your lastname" name='lastname'></input>
                           </div>
                           <div className="input__email">
                           <input onChange={this.handleEmail} className='register__input' type='text' placeholder="Write your email" name='email'></input>
                           </div>
                            <div className='input__password'>
                                <input onChange={this.handlePassword} className='register__input' type='password' placeholder='Write a valid password' id='password1' name='password'></input>
                            </div>
                            <div className='input__retypePassword'>
                            <input className='register__input' type='password' placeholder='Retype your password' id='password2'></input>
                            </div>
                            <div className='register__button'>
                                <button className='register__btn'>Submit</button>
                            </div>
                            <p className="register__p"><a className='register__link' href="/login">Do you have an account?</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
