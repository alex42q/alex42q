import React, { Component, createElement } from 'react'
import "./Login.css"
import CloseIcon from '@material-ui/icons/Close';
import axios from "axios"


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:'',
            firstname:'',
            lastname:''
        }
    }

    registerButton = ()=>{
        let register = document.getElementById("register")
        let registerContainer = document.getElementById("register__container")
            registerContainer.classList.toggle("register__container__after")
            console.log(register)
    }

    handleRegisterFirstname = (event)=>{
        this.setState({firstname:event.target.value})
        console.log(event.target.value)
    }

    handleRegisterLastname = (event) =>{
        this.setState({lastname:event.target.value})
        console.log(event.target.value)
    }

    handleRegisterEmail = (event) =>{
        this.setState({email:event.target.value})
        console.log(event.target.value)
    }

    handleRegisterPassword = (event)=>{
        this.setState({password:event.target.value})
        console.log(event.target.value)
    }

    handleRegisterSubmit = (event)=>{
        event.preventDefault()
        const success = document.getElementById("success")
        const successH1 = document.getElementById("successH1")
        const user = {
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            email:this.state.email,
            password:this.state.password
        }
        axios.post("http://localhost:5000/register", user)
        .then(result=>{
            console.log(result)
            if(result.data==="Registered"){
                successH1.textContent = "Success Register"
            }else if(result.data==="Error"){
                successH1.textContent="Error, please try again"
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    handleLoginEmail = (event)=>{
        this.setState({email:event.target.value})
        console.log(event.target.value)
    }

    handleLoginPassword = (event)=>{
        this.setState({password:event.target.value})
        console.log(event.target.value)
    }

    handleLoginSubmit = (event)=>{
        event.preventDefault()
        const Loginuser = {
            email:this.state.email,
            password:this.state.password
        }
        const loginError = document.getElementById("loginError")
        axios.post("http://localhost:5000/login", Loginuser, { withCredentials: true })
        .then(res=>{
            console.log(res)
            if(res.data==="loggedin"){
                this.props.history.push("/")
            }else if(res.data==="Not Email"){
                loginError.textContent="Wrong Email"
            }
            else{
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
                   <div className="login__leftSide">
                   <div className="login__header">
                   <h1 className="login__h1">Facebook</h1>
                   </div>
                    <div className="login__p">
                    Χάρη στο Facebook, συνδέεστε με τους<br></br> 
                    κοντινούς σας ανθρώπους και<br></br> 
                    μοιράζεστε πράγματα μαζί τους.
                    </div>
                   </div>
                   <div className="login__rightSide">
                        <form className="login__form">
                        <div className="login__email">
                        <input onChange={this.handleLoginEmail} className="login__input" type="email" placeholder="Write your e-mail" name="email"></input>
                        </div>
                        <div className="login__password">
                            <input onChange={this.handleLoginPassword} className="login__input" type="password" placeholder="Write your password" name="password"></input>
                        </div>
                        <div className="login__button">
                            <button type="submit" onClick={this.handleLoginSubmit} className="login__btn">Connect</button>
                        </div>
                        <div className="login__forgot">
                            <h5 className="login__h5">Have you forget your password?</h5>
                        </div>
                        <hr className="login__hr"></hr>
                        <div className="login__registerButton">
                            <button onClick={this.registerButton} type='button' id="register" className="login__registerBtn">Register</button>
                        </div>
                        <h4 id="loginError"></h4>
                        </form>
                   </div>
               </div>
               <div id='register__container' className="register__container">
                   <form className="register__form">
                   <div className='register__head'>
                   <div className="register__texts">
                   <h2 className="register__h2">Register</h2>
                   <p className='register__p1'>Register easy and fast</p>
                   <CloseIcon onClick = {this.registerButton} id='registerIcon' className='register__icon' />
                   </div>
                   </div>
                       <div className="register__firstname">
                        <input onChange={this.handleRegisterFirstname} className='register__input' type="text" name='firstname' placeholder='Write your firstname'></input>
                       </div>
                       <div className="register__firstname">
                       <input onChange={this.handleRegisterLastname} className='register__input' type="text" name='lastname' placeholder='Write your lastname'></input>
                           </div>
                           <div className="register__firstname">
                           <input onChange={this.handleRegisterEmail} type="email" name='email' className='register__input' placeholder='Write your email'></input>
                           </div>
                           <div className="register__firstname">
                           <input onChange={this.handleRegisterPassword} type="password" id='password1' className='register__input' name='password' placeholder='Write a valid password'></input>
                           </div>
                           <div className="register__firstname">
                           <input type="password" id='password2' className='register__input' placeholder='Retype your password'></input>
                           </div>  
                           <div className='register__terms'>
                               <p className='register__p'>
                               Αν πατήσετε Εγγραφή, δηλώνετε ότι συμφωνείτε με τους Όρους χρήσης. Μάθετε πώς συλλέγουμε,<br></br> 
                               χρησιμοποιούμε και κοινοποιούμε τα δεδομένα σας ανατρέχοντας στην Πολιτική δεδομένων<br></br> 
                               και πώς χρησιμοποιούμε τα cookies και άλλες παρόμοιες τεχνολογίες ανατρέχοντας στην Πολιτική για τα cookies.<br></br>
                                Μπορεί να λάβετε ειδοποιήσεις μέσω SMS από εμάς, τις οποίες μπορείτε να απενεργοποιήσετε οποιαδήποτε στιγμή.
                               </p>
                           </div>
                           <div className='register__button'>
                               <button type="submit" onClick={this.handleRegisterSubmit} className='register__btn'>Register</button>
                           </div>
                           <div id="success" className="register__success">
                               <h4 id="successH1"></h4>
                           </div>
                   </form>
               </div>
            </div>
        )
    }
}
