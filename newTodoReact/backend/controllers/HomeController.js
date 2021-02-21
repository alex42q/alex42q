const RegisterUser = require("../models/RegisterUserModel")
const Todos = require("../models/TodoModel")

exports.getHome = (req, res, next)=>{
    if(req.session.loggedin){
        RegisterUser.findOne({_id:req.session.userId})
        .then(result=>{
            res.send("loggedIn")
        })
        .catch(err=>{
            console.log(err)
        })
    }else{
        res.send("notLoggedIn")
    }
}

exports.postTodo = (req, res, next)=>{
    if(req.session.loggedin){
        const todo =  new Todos({
            todo:req.body.todo,
            userId:req.session.userId
        })
        todo.save(function(err, result){
            if(err){
                console.log(err)
            }else{
                console.log("saved")
                res.send(result)
            }
        })
    }
}


exports.showTodos = (req, res, next)=>{
    if(req.session.loggedin){
        Todos.find({userId:req.session.userId})
        .then(result=>{
            res.send(result)
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

exports.deleteTodos = (req, res, next)=>{
    if(req.session.loggedin){
        Todos.findOneAndDelete({_id:req.body._id})
        .then(findUserId=>{
            res.send(findUserId._id)
        })
        .catch(err=>{
            console.log(err)
        })
    }
}

// exports.showUser = (req, res, next)=>{
//     if(req.session.loggedin){
//         RegisterUser.findOne({email:req.session.email})
//         .then(result=>{
//             res.send([result])
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//     }
// }
