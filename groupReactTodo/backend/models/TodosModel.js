const mongoose = require("mongoose")


const TodoSchema = mongoose.Schema({
    todo:{
        type:String
    },

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"register__users"
    }
})

const TodosModel = mongoose.model("todos", TodoSchema)

module.exports = TodosModel