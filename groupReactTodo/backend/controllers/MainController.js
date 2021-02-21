const Todos = require("../models/TodosModel")
const RegisterUser = require("../models/RegisterUser")

exports.getMain = (req, res, next)=>{
    if(req.session.loggedin){
        res.send("loggedin")
    }else{
        res.send("notloggedin")
    }
}

exports.postMain = (req, res, next)=>{
    if(req.session.loggedin){
        
        const todo = new Todos({
            todo:req.body.todo,
            userId:req.session._id
        })
        Todos.create(todo, function(err,result){
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
        })
    }
}

exports.getTodos = (req, res, next)=>{
    if(req.session.loggedin){
        RegisterUser.findOne({email:req.session.email})
        .then(user=>{
            if(user){
                console.log(user._id)
                //res.send(user._id)
                // Todos.find({id:req.body._id})
                // .then(result=>{
                //     console.log(result)
                //     res.send([
                //     result
                //     ])
                // })
                // .catch(err=>{
                //     console.log(err)
                // })
                Todos.find({userId:user._id})
                .then(findUserId=>{
                    console.log(findUserId)
                    res.send([
                        findUserId
                    ])
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
}