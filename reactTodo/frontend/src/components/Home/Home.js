import React, { Component } from 'react'
import axios from "axios"
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DoneIcon from '@material-ui/icons/Done';
import "./Home.css"

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = { 
            todo: '',
            findTodos: [],
            _id:"",
            ticked:""
        }
        axios.get("http://localhost:5000/", {withCredentials:true})
        .then(res=>{
            if(res.data==="authenticated"){
                this.props.history.push("/")
            }else if(res.data==="not authenticated"){
                this.props.history.push("/login")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    componentDidMount(){
        axios.get("http://localhost:5000/showTodos",{withCredentials:true})
        .then(showAllTodos=>{
            this.setState({findTodos:showAllTodos.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    handleChange = (event)=>{
        this.setState({todo:event.target.value})
        console.log(event.target.value)
    }

    handleGetId = (event)=>{
        this.setState({_id:event.target.value})
        console.log(event.target.value)
    }

    handleChangeTicked = (event)=>{
        this.setState({ticked:event.target.value})
        console.log(event.target.value)
    }

    handleSubmitTodo = (event)=>{
        let mainInput = document.getElementById("mainInput")
        if(mainInput.value===""){
            event.preventDefault()
            alert("Please write a todo")
        }else{
            axios.post("http://localhost:5000/getTodos", {todo:this.state.todo}, {withCredentials:true})
            .then(res=>{
                let test = document.getElementById("test")
                let newTest = document.createElement("INPUT")
                let hiddenInput = document.createElement("INPUT")
                let bin = document.createElement("i")
                let tick = document.createElement("i")
                // bin.className="fas fa-trash"
                bin.className="fas fa-trash fa-2x"
                tick.className="fas fa-check fa-2x icon_tick"
                newTest.disabled = true
                newTest.value = this.state.todo
                hiddenInput.value=this.state.todo
                newTest.style.color = "black"
                test.appendChild(newTest)
                test.appendChild(hiddenInput)
                test.appendChild(bin)
                test.appendChild(tick)
            })
            .catch(err=>{
                console.log(err)
            })
        }

    }


    profileIcon=(event)=>{
        let profileIcon = document.getElementById("nav__ul")
        profileIcon.classList.toggle("nav__ul_after")
    }

    render() {
        const findTodos = this.state.findTodos.map(function(todo){
            console.log(todo.ticked)
            return ( <div className="pTodoAll">
             <input id="deleteInput" className="pTodo" disabled type="text" value={todo.todo}/>
             <input type="hidden" value={todo._id} name="_id"/>
             <input type="hidden" className="pTodoTicked" value={todo.ticked} name="ticked"/>
             <DeleteIcon
             fontSize="large"
             className="deleteIcon"
             onClick={function(event){
                  event.preventDefault()
                  axios.post("http://localhost:5000/deleteTodos", {_id:todo._id}, {ticked:todo.ticked})
                  .then(todo1=>{
                    console.log(todo1.data._id)
                    let pTodoAll = document.querySelectorAll(".pTodoAll")
                    for(let pTodos of pTodoAll){
                        console.log(pTodos.childNodes[1].value)
                        if(todo1.data._id===pTodos.childNodes[1].value){
                            console.log("einai")
                            console.log(pTodos)
                            pTodos.style.animation="deleteTodo 1s ease-out"
                            setTimeout(function(){
                                pTodos.remove()
                            },500)
                           
                        }
                    }
                  })
                  .catch(err=>{
                      console.log(err)
                  })
              }}
              />
            <DoneIcon
            fontSize="large"
            className="icon__tick"
            onClick={function(event){
                event.preventDefault()
                axios.post("http://localhost:5000/ticked", {_id:todo._id}, {ticked:todo.ticked})
                .then(res=>{
                    console.log(todo.ticked)
                    let pTodo = document.querySelectorAll(".pTodoAll")
                    let pTodoTicked = document.querySelectorAll(".pTodoTicked")
                    for(let pTodos of pTodo){
                        console.log(pTodos.childNodes[2].value)
                        pTodos.childNodes[2].value="true"
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            }}
             />
              
            </div>)
        })
        const findTodosID = this.state.findTodos.map(function(todoId){
            return(<div>
                
            </div>)
        })
        return (
            <div className="home">
            <nav className="nav">
                <div className="navLeftSide">
                <h1><span className="react">React</span> <span className="todo">Todo</span></h1>
                </div>
                <div className="navRightSide">
                <AccountCircleIcon 
                    fontSize="large"
                    className="profileIcon"
                    id="profileIcon"
                    onClick={this.profileIcon}
                />
                <ul id="nav__ul" className="nav__ul">
                    <li className="nav__li"><a className="nav__link" href="/profile">My Profile</a></li>
                    <li className="nav__li"><a className="nav__link" href="/logout">Logout</a></li>
                </ul>
                </div>
            </nav>
            <div className="home__container">
            <form onSubmit={this.handleSubmitTodo}>
            <input id="mainInput" type="text" name="todo" placeholder="Put your todo" onChange={this.handleChange}></input>
            <button type="submit" className="home__button">
            <AddIcon 
                fontSize="large"
                className="icon"
            />
            </button>
            </form>
                <div id="showTodos" className="showTodos">
                </div>
               <div id="test" className="test">
               <input type="hidden" value={findTodos._id} name="_id"/>
               <input type="hidden" value={findTodos.ticked} name="ticked" onChange={this.handleChangeTicked}/>
                {findTodos}
                {findTodosID}
               </div>

            </div>
            </div>
        )
    }
}
