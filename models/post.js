const mongoose = require("mongoose")
// const { ObjectId } = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        //default:"no photo"
        required:true
    },
    author: {
        //type: ObjectId,
        type:String,
        required:true
       // ref: "USER"
    },
    location:{
        type:String,
        required:true
    }
    
    
})

mongoose.model("POST", postSchema)