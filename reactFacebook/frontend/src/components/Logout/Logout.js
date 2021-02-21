import React, { Component } from 'react'
import "./Logout.css"
import axios from "axios"

export default class Logout extends Component {
    constructor(props){
        super(props)
        axios.get("http://localhost:5000/logout", {withCredentials:true})
        .then(res=>{
            console.log(res)
            if(res.data==="Cookie destroy"){
                this.props.history.push("/login")
            }
        })
        .catch(err=>{
            console.log(err)
        })
        this.props.history.push("/login")
        
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
