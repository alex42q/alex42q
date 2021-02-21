import React, { Component } from 'react'
import axios from "axios"


export default class Reset extends Component {
    constructor(props){
        super(props)
        this.state ={
            email:"",
            token:'',
        }
    }

    onInputChange = (event)=>{
        this.setState({email:event.target.value})
        console.log(event.target.value)
    }

    onResetSubmit = (event)=>{
        const user = {
            email:this.state.email,
            token:this.state.token
        }
        axios.post("http://localhost:5000/resetform", user)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className="reset">
            <form onClick={this.onResetSubmit}>
                <input onChange={this.onInputChange} type="email" name='email' placeholder='email'></input>
                <input type="hidden" name="resetToken"></input>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
