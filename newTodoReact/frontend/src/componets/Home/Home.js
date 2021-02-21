import React, { Component } from 'react'
import AddIcon from '@material-ui/icons/Add';
import "./Home.css"
import axios from "axios"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            allData:[],
            todo:"",
            userId:"",
            _id:"",
            user:[]
        }
        
        axios.get("http://localhost:5000/", { withCredentials:true })
        .then(res=>{
            if(res.data.loggedIn==="loggedIn"){
                console.log("loggedin")
            }else if(res.data==="notLoggedIn"){
                this.props.history.push("/login")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }


    onHandleTodo = (event)=>{
        this.setState({todo:event.target.value})
        console.log(event.target.value)
    }

    onHandleTodoId = (event)=>{
        this.setState({_id:event.target.value})
    }

    onHandleIdTodo = (event)=>{
        this.setState({userId:event.target.value})
    }

    onTodoClicked = (event) => {
        const todo = {
            _id:this.state._id,
            todo:this.state.todo,
            userId:this.state.userId
        }
        let mainInput = document.getElementById("mainInput")

        if(mainInput.value===""){
            alert("Please write a todo")
        }else{
            axios.post("http://localhost:5000/addtodo", todo, { withCredentials:true })
            .then(res=>{
            let showTodo = document.getElementById("showTodo")
            let showTodosIcons = document.createElement("DIV")
            let input = document.createElement("INPUT")
            let inputHidden = document.createElement("INPUT")
            inputHidden.onChange = (function(event){
                this.setState({_id:event.target.value})
            })
            let bin = document.createElement("i")
            let tick = document.createElement("i")
            tick.className="fas fa-check tick"
            bin.className= "fas fa-trash-alt bin"
            input.className="home__input"
            input.value = this.state.todo
            inputHidden.value= this.state._id
            inputHidden.type="hidden"
            showTodo.append(input)
            showTodo.append(inputHidden)
            showTodo.appendChild(showTodosIcons)
            showTodosIcons.append(bin)
            showTodosIcons.append(tick)
    
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/showtodos", { withCredentials:true })
        .then(res=>{
            this.setState({allData:res.data})
        })
     }

     displayHideNavList = (event)=>{
         let homeNavList = document.getElementById("home__navList")
         homeNavList.classList.toggle("home__navListAfter")
     }

    render() {
        const allDatas = this.state.allData.map(function(data){
            return (<div className="showTodos">
            <input className='home__input' type="text" readOnly value={data.todo}></input>
            <input id='home__inputHidden' className="home__inputHidden" type='hidden' name='id' value={data._id}></input>
            <input key={data.userId} type='hidden' name='userId' value={data.userId} id="userIdInput"></input>
            <i className='fas fa-trash-alt bin2' onClick={function(){
               axios.post("http://localhost:5000/deletetodo", {_id:data._id}, { withCredentials:true })
               .then(res=>{
                    let home__inputHidden = document.querySelectorAll(".home__inputHidden")
                    let showTodos = document.querySelectorAll(".showTodos")
                    // for(let inputHidden of home__inputHidden){
                    //     console.log(inputHidden.value)
                    //     if(inputHidden.value===res.data){
                            
                    //         inputHidden.remove()
                    //     }
                    // }

                    for(let showTodo of showTodos){
                        if(showTodo.childNodes[1].value===res.data){
                            showTodo.style.animation="deleteTodo 1s ease-out"
                            setTimeout(function(){
                                showTodo.remove()
                            },400)
                        }
                    }
               })
               .catch(err=>{
                   console.log(err)
               })
            }}></i>
            <i className="fas fa-check tick2"></i>
            </div>)
        })
        
        // const userData = this.state.user.map(function(userdata){
        //     console.log(userdata.email)
        //     let homeH5 = document.getElementById("homeH5")
        //     homeH5.textContent = userdata.email
        // })
        return (
            <div className='home'>
            <div className="home__nav">
                <div className="home__navContainer">
                    <div className="home__navLeftSide">
                        <h2 className="home__navH2">My ReactTodo App</h2>
                    </div>
                    <div className="home__navRightSide">
                    <div className="home__navText">
                    <h5 id='homeH5' className='home__navH5'></h5>
                    </div>
                       <div className='home__navIcons'>
                       <AccountCircleIcon
                       className='home__navIcon'
                       onClick= {this.displayHideNavList}
                        />
                        <div id='home__navList' className="home__navList">
                            <ul className="home__ul">
                                <li className="home__li"><a className="home__link" href="/profile">My profile</a></li>
                                <li className="home__li"><a className="home__link" href="/logout">Logout</a></li>
                            </ul>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
                <div className='home__container'>
                    <div className='home__inputContainer'>
                    <form onSubmit={this.onTodoClicked}> 
                        <input id="mainInput" onChange={this.onHandleTodo} className='home__input' type='text' name='todo' placeholder='Write your todo'></input>
                        <button type="submit">
                        <AddIcon
                        className='home__icon'
                        fontSize="large"
                         />
                         </button>
                       
                         </form>
                         <div className="showTodo" id="showTodo">{allDatas}</div>
                    </div>
                </div>
            </div>
        )
    }
}
