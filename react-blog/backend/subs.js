import mongoose from "mongoose"

const SubSchema = mongoose.Schema({
    email:String
})

export default mongoose.model("subscribes", SubSchema)