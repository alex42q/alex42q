const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    todo:{
        type:String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
})

const Todo = mongoose.model("todos", TodoSchema)

module.exports = Todo