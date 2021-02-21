import React, { Component } from 'react'
import "./ResetPassword.css"
import axios from "axios"



export default class ResetPassword extends Component {
    constructor(props){
        super(props)
        this.state={
            password:"",
            id:"",
        }

    }

    componentDidMount(){
        axios.get("http://localhost:5000/resetpassword/" + this.props.match.params.id)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    onPassChange = (event)=>{
        this.setState({password:event.target.value})
        console.log(event.target.value)
    }

    onIdChange = (event)=>{
        this.setState({id:event.target.value})
        console.log(event.target.value)
    }

    onPassSubmit = (event)=>{
        event.preventDefault()
        const password = {
            id:this.props.match.params.id,
            password:this.state.password
        }
        axios.post("http://localhost:5000/resetpasswordform", password)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        return (
            <div className="resetPassword">
            <form onSubmit={this.onPassSubmit}>
            <input onChange={this.onIdChange} name="id" type="hidden" value={this.props.match.params.id}></input>
                <input onChange={this.onPassChange} type='password' name='password' placeholder='Reset your password'></input>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
