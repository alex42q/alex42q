import React, { Component } from 'react'
import "./Register.css"
import axios from "axios"

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            retypePassword:''
        }
    }

    onFirstNameChange = (event)=>{
        this.setState({firstname:event.target.value})
        console.log(event.target.value)
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

    onRetypePasswordChange = (event)=>{
        this.setState({retypePassword:event.target.value})
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
        this.props.history.push("/login")
    }
    render() {
        return (
            <div className="register">  
                <div className="register__container">
                    <div className="register__leftSide">

                    </div>
                    <div className='register__rightSide'>
                        <form onSubmit={this.onFormSubmit} className="register__form">
                        <div className='register__texts'>
                            <h2 className='register__h2'>GroupReactTodo</h2>
                            <h4 className='register__h4'>Register</h4>
                        </div>
                            <div className='register__firstname'>
                            <input className='register__input' onChange={this.onFirstNameChange} className='register__input' type='text' name='firstname' placeholder='Write your firstname'></input>
                            </div>
                            <div className='register__lastname'>
                            <input className='register__input' onChange={this.onLastNameChange} className='register__input' type='text' name='lastname' placeholder='Write your lastname'></input>
                            </div>
                            <div className='register__email'>
                            <input className='register__input' onChange={this.onEmailChange} className='register__input' type='email' name='email' placeholder='Write your email'></input>
                            </div>
                            <div className='register__password'>
                            <input className='register__input' onChange={this.onPasswordChange} className='register__input' type='password' name='password' placeholder='Write your password'></input>
                            </div>
                            <div className='register__retypePassword'>
                            <input className='register__input' onChange={this.onRetypePasswordChange} className='register__input' type='password' placeholder='Retype your password'></input>
                            </div>
                            <div className='register__button'>
                                <button className='register__btn' type='submit' className='register__btn'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}
