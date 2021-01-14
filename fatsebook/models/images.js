var mongoose = require('mongoose');
require('mongoose-type-url');

const ImageSchema = new mongoose.Schema({
   photo: { 
    type:Buffer,
    contentType: String
   },
   url: {
    type:String
    },
    destination:{
        type:String
    },
    name:{
        type:String
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"register_users"
    }
})

const Images = mongoose.model("images", ImageSchema)

module.exports= Images