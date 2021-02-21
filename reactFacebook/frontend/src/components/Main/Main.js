import React, { Component } from 'react'
import "./Main.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import PeopleIcon from '@material-ui/icons/People';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import axios from "axios"

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state ={
            post:"",
            firstname:"",
            lastname:"",
            userId:'',
        }

        axios.get("http://localhost:5000/", {withCredentials:true})
        .then(res=>{
            console.log(res)
            if(res.data==="loggedin"){
                this.props.history.push("/")
                console.log(res.data)
            }else if(res.data==="notLoggedIn"){
                this.props.history.push("/login")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    profileIconClick = ()=>{
        let profileLinks = document.getElementById("profileLinks")
        profileLinks.classList.toggle("main__links__after")
    }

    onPostChange = (event)=>{
    this.setState({post:event.target.value})
    console.log(event.target.value)
    }

    onPostSubmit = (event)=>{
        event.preventDefault()
        const post = {
            post:this.state.post,
            firstname:this.state.firstname,
            lastname:this.state.lastname,
            userId:this.state.userId,
        }
        axios.post("http://localhost:5000/post", post, {withCredentials:true})
        .then(res=>{
            console.log(res)
            this.props.history.push('/')
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        return (
            <div className="main">
               <div className="main__nav">
                <div className='main__leftSide'>
                    <div className="main__logo">
                    <FacebookIcon />
                    <h3 className='main__h3'>Facebook</h3>
                    </div>
                    <div className="main__icons">
                    <DynamicFeedIcon 
                        className="feedIcon"
                    />
                    <PeopleIcon 
                        className="peopleIcon"
                    />
                    <ForumIcon 
                        className="forumIcon"
                    />
                    <NotificationsIcon 
                        className="notIcon"
                    />
                    </div>
                </div>
                <div className="main__rightSide">
                    <div className="main__rightSideIcon">
                    <div className="main__rightSideLinkIcon">
                    <PersonIcon
                    className= "main__icon"
                    id="profileIcon"
                    onClick = {this. profileIconClick}
                     />
                    </div>
                        <div id="profileLinks" className="main__links">
                            <h5><a className="main__aLinks" href="/profile">Profile</a></h5>
                            <h5><a className="main__aLinks" href="/Logout">Logout</a></h5>
                        </div>
                    </div>
                </div>
               </div>
               <div className="main__postsAndIcons">
                   <div className="main__postIcons">

                   <div className='main__hosp'>
                   <LocalHospitalIcon />
                    <h3>Covid 19</h3>
                   </div>
                   
                   </div>
                   <div className="main__posts">
                    <form onSubmit={this.onPostSubmit}>
                    <h2>Write something</h2>
                    <input id='post' name='post' onChange={this.onPostChange} placeholder="write something" className='postInput' type='text'></input>
                    <button className='main__btn' type='submit'>Post it</button>
                    </form>
                    <h3>Profile Name </h3>
                    <h5>Post</h5>
                   </div>
                   
                   <div className='main__hosp'>
                   <LocalHospitalIcon />
                    <h3>Covid 19</h3>
                   </div>
               </div>
            </div>
        )
    }
}
