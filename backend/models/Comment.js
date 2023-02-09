const {Schema, model}= require("mongoose")

const CommentSchema = Schema({
    post:{
        type:Schema.ObjectId,
        ref:"Post",
        required:[true, "Please specify which post to comment on"],
    },
    text:{
        type:String,
        required:[true, "Text is required"],
    },
    author:{
        type:Schema.ObjectId,
        ref:"User",
        required:[true, "Comment must have an author"]
    }
},
{
    timestamps:true
})


module.exports = model("Comment", CommentSchema)