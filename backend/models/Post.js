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
},
{
    timestamps:true,
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
})

// creating virtuals field for post's comments
PostSchema.virtual("comments", {
    ref:"Comment",
    localField:"_id",
    foreignField:"post",
})

module.exports = model("Post", PostSchema)