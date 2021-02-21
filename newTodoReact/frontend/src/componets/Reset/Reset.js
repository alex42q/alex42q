import React, { Component } from 'react'
import axios from "axios"
import "./Reset.css"

export default class Reset extends Component {
    constructor(props){
        super(props)
        this.state = {
            token:'',
            email:''
        }
    axios.get("http://localhost:5000/reset/" + this.props.match.params.id)
    .then(res=>{
        if(res.data.id){
            console.log("Right id")
            this.setState({token:res.data.id})
        }else if(res.data==="Wrong id"){
            this.props.history.push("/errorid")
        }

    })
    .catch(err=>{
        console.log(err)
    })
    
    }
    render() {
        const thisToken = this.state.token
        console.log(thisToken)
        return (
            <div className='reset'>
            <div className='reset__container'>
            <div className='reset__leftSide'>

            </div>
            <div className='reset__rightSide'>
            <form className='reset__form'>
            <div className='reset__formTexts'>
                <h2 className='reset__h2'>ReactTodo</h2>
                <h4 className='reset__h4'>Forget your password recovery</h4>
            </div>
            <input type='hidden' name='resetToken' value={thisToken}></input>
            <div className='resetPassword'>
                <input className='reset__input' type='password' name='password' placeholder='Write your new password' id='resetPassword1'></input>
            </div>
            <div className='retypePassword'>
                <input className='reset__input' type='password' placeholder='Retype your password' id='resetPassword2'></input>
            </div>
            <div className='reset__button'>
                <button className='reset__btn'>Submit</button>
            </div>
            </form>
            </div>
        </div>
            </div>
        )
    }
}
