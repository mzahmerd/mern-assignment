const {Schema, model}= require("mongoose")

const PostSchema = Schema({
    title:{
        type:String,
        required:[true, "Title is required"],
    },
    text:{
        type:String,
        required:[true, "Text is required"],
    },
    author:{
        type:Schema.ObjectId,
        ref:"User",
        required:[true, "Post must have an author"]
    }
})

module.exports = model("Post", PostSchema)