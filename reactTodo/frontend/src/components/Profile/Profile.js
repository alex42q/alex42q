import React, { Component } from 'react'
import "./Profile.css"
import axios from "axios"

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username:'',
            oldpassword:'',
            newpassword:''
        }
    axios.get("http://localhost:5000/profile", { withCredentials: true })
    .then(res=>{
        if(res.data==="not authenticated"){
            this.props.history.push("/login")
        }else if(res.data==="authenticated"){
            this.props.history.push("/profile")
        }
    })
    .catch(err=>{
        console.log(err)
    })
}

    componentDidMount(){
        axios.get("http://localhost:5000/profile", { withCredentials: true })
        .then(res=>{
            this.setState({findEmail:res.data.user.username})
            console.log(res.data.user.username)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    emailOnChange = (event)=>{
        this.setState({username:event.target.value})
        console.log(event.target.value)
    }

    emailOnFormSubmit = (event)=>{
        event.preventDefault()
        const email = {
            username:this.state.username
        }
        axios.post("http://localhost:5000/updateEmail", email , {withCredentials:true})
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {

        const findEmail = this.state.findEmail

        return (
            <div className="profile">
                <div className="profile__container">
                    <h1>Change your email</h1>
                    <form onSubmit={this.emailOnFormSubmit}>
                    <div className="emailSection">
                        <h3>{findEmail}</h3>
                        <input type="text" name="username" placeholder="Write your new email" onChange={this.emailOnChange}></input>
                        </div>
                        <button className="btn">Submit</button>
                    </form>
                    <h1>Change your Password</h1>
                    <form>
                        <div className="oldPassword">
                            <input type="password" placeholder="Write your old password" name="oldpassword"></input>
                        </div>
                        <div className="newPassword">
                            <input type="password" placeholder="Write your new password" id="newPassword" name="newpassword"></input>
                        </div>
                        <div className="retypeNewPassword">
                            <input type="password" placeholder="Retype your password" id="retypePassword"></input>
                        </div>
                        <button className="btn">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}
