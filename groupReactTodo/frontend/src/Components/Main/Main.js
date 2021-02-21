import React, { Component, createElement } from 'react'
import axios from "axios"
import "./Main.css"
import AddIcon from '@material-ui/icons/Add';

export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            todo:"",
            userId:[],
            findTodo:[]
        }

        axios.get("http://localhost:5000/", { withCredentials:true })
        .then(res=>{
            console.log(res.data)
            if(res.data==="notloggedin"){
                this.props.history.push("/login")
            }else if(res.data==="loggedin"){
                this.props.history.push("/")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    onTodoChange = (event)=>{
        this.setState({todo:event.target.value})
    }

    onUserIdChange = (event)=>{
        this.setState({userId:event.target.value})
    }

    onFormSubmit = (event)=>{
        event.preventDefault()

        const todo = {
            todo:this.state.todo,
            userId:this.state.userId
        }

        axios.post("http://localhost:5000/todoform", todo, { withCredentials:true })
        .then(res=>{
            console.log(res.data.userId)
            let showAllTodos = document.getElementById("showAllTodos")
            let todoInput = document.createElement("input")
            let todoHiddenInput = document.createElement("input")
            todoHiddenInput.value= res.data.userId
            todoHiddenInput.type='hidden'
            todoHiddenInput.name='userId'
            todoInput.className = "main__input"
            todoInput.disabled = true
            todoInput.value = res.data.todo
            showAllTodos.append(todoInput)
            showAllTodos.append(todoHiddenInput)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    componentDidMount(){


        axios.get("http://localhost:5000/gettodos", { withCredentials:true })
        .then(res=>{
            this.setState({findTodo:res.data[0]})
            console.log(res.data[0])
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        const findUserId = this.state.findTodo.map(function(allTodos){
            console.log(allTodos.todo)
            return( <div className="pTodoAll">
            <input className="main__input" type='hidden' value={allTodos._id}></input>
            <input className="main__input" type='text' disabled value={allTodos.todo}></input>
            <input type='hidden' value={allTodos.userId}></input>
            </div>)
        })

        console.log(findUserId)
        return (
            <div className='main'>
                <div className='main__container'>
                    <div className='main__form'>
                        <input onChange={this.onTodoChange} placeholder='Write your todo' name='todo' type='text' className="main__input"></input>
                        <input id="hiddenInputUserId" onChange={this.onUserIdChange} type='hidden' name='userId'></input>
                        <AddIcon 
                         className='main__icon'   
                         onClick ={this.onFormSubmit}
                        />
                        <div className='showTodos' id="showAllTodos">
                            <h2>{findUserId}</h2>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
