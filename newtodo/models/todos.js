const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    todo:{
        type:String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
})

const Todo = mongoose.model("todos", todoSchema)

module.exports = Todo