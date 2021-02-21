import React, { Component } from 'react'
import axios from "axios"

export default class Logout extends Component {
    constructor(props){
        super(props)

        axios.get("http://localhost:5000/logout", { withCredentials: true })
        .then(res=>{
            if(res.data==="Cookie deleted!"){
                this.props.history.push("/login")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}
