const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    todo:{
        type:String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Register__users"
    }
})

const Todos = mongoose.model("Todos", todoSchema)

module.exports = Todos