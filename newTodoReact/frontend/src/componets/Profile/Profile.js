import React, { Component } from 'react'
import "./Profile.css"
import axios from "axios"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:[],
            email:'',
            oldpassword:'',
            newpassword:'',
            firstname:'',
            lastname:""
        }
    axios.get("http://localhost:5000/profile", { withCredentials:true })
    .then(res=>{
        console.log(res.data)
        if(res.data==="loggedin"){
            this.props.history.push("/profile")
        }else if(res.data==="not loggedin"){
            this.props.history.push("/login")
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

componentDidMount(){
    axios.get("http://localhost:5000/profileuser", { withCredentials:true })
    .then(res=>{
        console.log(res.data)
        this.setState({user:res.data})
    })
    .catch(err=>{
        console.log(err)
    })
}

onClickNav = (event)=>{
let navList = document.getElementById("navList")
navList.classList.toggle("profile__navListAfter")
}

onEmailChange = (event)=>{
    this.setState({email:event.target.value})
}

onOldPasswordChange = (event)=>{
    this.setState({oldpassword:event.target.value})
}

onNewPasswordChange = (event)=>{
    this.setState({newpassword:event.target.value})
}

onFirstNameChange = (event)=>{
    this.setState({firstname:event.target.value})
}

onLastNameChange = (event)=>{
    this.setState({lastname:event.target.value})
}

onEmailSubmit = (event)=>{
    event.preventDefault()

    const email = {
        email:this.state.email
    }

    axios.post("http://localhost:5000/profilechangemail", email, { withCredentials:true})
    .then(res=>{
        console.log(res.data)
        if(res.data==="email changed"){
            this.props.history.push("/logout")
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

onPasswordSubmit = (event)=>{
    event.preventDefault()
    let newpassword = document.getElementById("newpassword")
    let retypeNewPassword = document.getElementById("retypeNewPassword")
    let passwordMessage = document.getElementById("passwordMessage")

    const passwords = {
        oldpassword:this.state.oldpassword,
        newpassword:this.state.newpassword
    }
    if(newpassword.value!==retypeNewPassword.value){
        event.preventDefault()
        passwordMessage.textContent= "Your new password with the retype password doesn't match. Please try again!"
    }else{
        axios.post("http://localhost:5000/profilechangepassword", passwords, { withCredentials:true })
        .then(res=>{
            if(res.data==="password changed!"){
                this.props.history.push("/logout")
            }else if(res.data==="Oldpassword dont match"){
                passwordMessage.textContent="Your old password is not matched!"
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

}

onFirstNameLastNameSubmit = (event)=>{
    event.preventDefault()

    const firstLast = {
        firstname:this.state.firstname,
        lastname:this.state.lastname
    }

    axios.post("http://localhost:5000/profilefirstlastname", firstLast, { withCredentials:true })
    .then(res=>{
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })
}
    render() {
        const user = this.state.user.map(function(findUser){
            console.log(findUser.email)
            let profileEmail = document.getElementById("profileEmail")
            let profileFormEmail = document.getElementById("profileFormEmail")
            let currentFirstname = document.getElementById("currentFirstname")
            let currentLastname = document.getElementById("currentLastname")
            profileEmail.textContent=findUser.email
            profileFormEmail.textContent = findUser.email
            currentFirstname.textContent= `Your current firstname is: ${findUser.firstname}`
            currentLastname.textContent = `Your current lastname is: ${findUser.lastname}`
        })
        return (
            <div className="profile">
                <div className='profile__nav'>
                    <div className="profile__navContainer">
                        <div className="profile__navLeftSide">
                            <h2 className="profile__navH2">My ReactTodo App</h2>
                        </div>
                        <div className="profile__navRightSide">
                            <div className="profile__navText">
                                <h5 id='profileEmail' className="profile__navH5"></h5>
                            </div>
                            <div className="profile__navIcons">
                            <AccountCircleIcon 
                            className="profile__navIcon"
                            onClick = {this.onClickNav}
                            />
                            <div id='navList' className="profile__navList">
                                <ul className="profile__ul">
                                    <li className="profile__li"><a className="profile__link" href="/">My Todos</a></li>
                                    <li className="profile__li"><a className="profile__link" href="/logout">Logout</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile__container">
                    <form onSubmit={this.onEmailSubmit} className="profile__form">
                    <div className="profile__topFormTexts">
                        <h2 className="profile__email">Change your Email</h2>
                        <h3 className="profileCurrent">Your current Email</h3>
                        <h3 id='profileFormEmail' className="profile__h3"></h3>
                        </div>
                        <div className="profileEmailInput">
                            <input onChange={this.onEmailChange} className='profile__input' type='email' name='email' placeholder='Write your new email'></input>
                        </div>
                        <div className="profile__button">
                            <button className="profile__btn">Submit</button>
                        </div>
                    </form>
                    <form onSubmit={this.onPasswordSubmit} className="profile__passForm">
                        <div className='profile__topFormTexts'>
                            <h2 className="profile__h2">Change your password</h2>
                        </div>
                        <div className="OldPassword">
                            <input onChange={this.onOldPasswordChange} className='profile__input' type='password' name='oldpassword' placeholder="Write your old password"></input>
                        </div>
                        <div className="newPassword">
                            <input onChange={this.onNewPasswordChange} id='newpassword' className='profile__input' type='password' name='newpassword' placeholder="Write your new password"></input>
                        </div>
                        <div className='RetypePassword'>
                            <input className='profile__input' id='retypeNewPassword' type='password' placeholder='Retype your password'></input>
                        </div>
                        <h3 id='passwordMessage'></h3>
                        <div className='profile__button'>
                            <button className='profile__btn'>Submit</button>
                        </div>
                    </form>
                    <form onSubmit={this.onFirstNameLastNameSubmit} className='profile__flForm'>
                        <div className='Profile__topFormTexts'>
                            <h2 className="profile__h2">Change your personal details</h2>
                        </div>
                        <div className='profile__firstname'>
                            <h3 id='currentFirstname' className="profile__firstnameH3"></h3>
                            <input onChange={this.onFirstNameChange} className='profile__input' type='text' name='firstname' placeholder='Change your firstname'></input>
                        </div>
                        <div className="profile__lastname">
                            <h3 id='currentLastname' className='profile__lastnameH3'></h3>
                            <input onChange={this.onLastNameChange} className='profile__input' type='text' name='lastname' placeholder='Change your lastname'></input>
                        </div>
                        <div className="profile__button">
                            <button className="profile__btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
