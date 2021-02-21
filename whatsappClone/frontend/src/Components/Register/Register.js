import React, { Component } from 'react'
import "./Register.css"
import axios from "axios"

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname:"",
            lastname:"",
            email:'',
            password:''
        }
    }

    onFirstNameChange = (event)=>{
        this.setState({firstname:event.target.value})
    }

    onLastNameChange = (event)=>{
        this.setState({lastname:event.target.value})
    }

    onEmailChange = (event)=>{
        this.setState({email:event.target.value})
    }

    onPasswordChange = (event)=>{
        this.setState({password:event.target.value})
    }

    onFormSubmit = (event)=>{
        event.preventDefault()

        const user = {
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
            password:this.state.password
        }

        axios.post("http://localhost:5000/registerform", user)
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
                    <div className='register__rightSide'>
                        <form onSubmit={this.onFormSubmit} className='register__form'>
                            <div className='register__texts'>
                                <h2 className='register__h2'>Whatsapp Clone</h2>
                                <h4 className='register__h4'>Register</h4>
                            </div>
                            <div className='register__firstname'>
                            <input onChange={this.onFirstNameChange} className='register__input' type='text' name='firstname' placeholder="Write your firstname"></input>
                            </div>
                            <div className="register__lastname">
                            <input onChange={this.onLastNameChange} className='register__input' type='text' name='lastname' placeholder='Write your lastname'></input>
                            </div>
                            <div className='register__email'>
                            <input onChange={this.onEmailChange} className='register__input' type='email' name='email' placeholder='Write your email'></input>
                            </div>
                            <div className='register__password'>
                            <input onChange={this.onPasswordChange} className='register__input' type='password' name='password' placeholder='Write your password'></input>
                            </div>
                            <div className='register__retypePassword'>
                            <input className='register__input' type='password' placeholder='Retype your password'></input>
                            </div>
                            <div className='register__button'>
                                <button className='register__btn' type="submit">submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
