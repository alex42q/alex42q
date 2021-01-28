import React, { Component } from 'react'
import axios from "axios"
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import "./Home.css"

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = { 
            todo: '',
            findTodos: []
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
            // const test = document.querySelectorAll(".test")
            this.setState({findTodos:showAllTodos.data})
            console.log(this.state.findTodos)
            
        })
        .catch(err=>{
            console.log(err)
        })
    }

    handleChange = (event)=>{
        this.setState({todo:event.target.value})
        console.log(event.target.value)
    }

    handleSubmitTodo = (event)=>{
        event.preventDefault()

        axios.post("http://localhost:5000/getTodos", {todo:this.state.todo}, {withCredentials:true})
        .then(res=>{
            console.log(res.data)
            console.log({todo:this.state.todo})
            let test = document.getElementById("test")
            let icon = document.getElementById("icon")
            let newTest = document.createElement("INPUT")
            let bin = document.createElement("i")
            bin.className="fas fa-trash"
            newTest.value = this.state.todo
            test.appendChild(newTest)
            icon.appendChild(bin)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render() {
        const findTodos = this.state.findTodos.map(function(todo){
            return ( <div>
             <input className="pTodo" disabled type="text" value={todo.todo}/>
             <DeleteIcon
             fontSize="large"
             className="deleteIcon"
              />
            </div>)
        })
        return (
            <div className="home">
            <div className="home__container">
            <form onSubmit={this.handleSubmitTodo}>
            <input type="text" name="todo" placeholder="Put your todo" onChange={this.handleChange}></input>
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

                {findTodos}
               </div>
               <div id="icon">
                   
               </div>

            </div>
            </div>
        )
    }
}
