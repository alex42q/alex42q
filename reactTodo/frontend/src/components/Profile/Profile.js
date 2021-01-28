import React, { Component } from 'react'
import "./Profile.css"
import axios from "axios"

export default class Profile extends Component {
    constructor(props) {
        super(props);
    axios.get("http://localhost:5000/profile", { withCredentials: true })
    .then(res=>{
        if(res.data==="not authenticated"){
            this.props.history.push("/login")
        }else if(res.data==="authenticated"){
            this.props.history.push("/profile")
        }
        console.log(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
    }
    render() {
        return (
            <div>
                <h1>I am the profile</h1>
            </div>
        )
    }
}
