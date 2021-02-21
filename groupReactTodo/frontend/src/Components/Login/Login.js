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

    onEmailChange = (event)=>{
        this.setState({email:event.target.value})
    }

    onPasswordChange = (event)=>{
        this.setState({password:event.target.value})
    }

    onSubmitForm = (event)=>{
        event.preventDefault()
        let message = document.getElementById("message")

        const user = {
            email:this.state.email,
            password:this.state.password
        }

        axios.post("http://localhost:5000/loginform",user, { withCredentials:true })
        .then(res=>{
            console.log(res)
        if(res.data==="nopass"){
            message.textContent = "Wrong Password"
        }else if(res.data==="noemail"){
            message.textContent = "Wrong Email"
        }else if(res.data==="loggedin"){
            this.props.history.push("/")
        }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className='login'>
                <div className='login__container'>
                    <div className='login__leftSide'>

                    </div>
                    <div className='login__rightSide'>
                        <form onSubmit={this.onSubmitForm} className='login__form'>
                            <div className='login__texts'>
                                <h2 className='login__h2'>GroupReactTodo</h2>
                                <h4 className='login__h4'>Login</h4>
                            </div>
                            <div className='login__email'>
                                <input onChange={this.onEmailChange} className='login__input' type='email' name='email' placeholder='Write your email'></input>
                            </div>
                            <div className='login__password'>
                                <input onChange={this.onPasswordChange} className='login__input' type='password' name='password' placeholder='Write your password'></input>
                            </div>
                            <h4 id='message'></h4>
                            <div className='login__button'>
                                <button className='login__btn' type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
