const {Schema, model}= require("mongoose")

const UserSchema = Schema({
    name:{
        type:String,
        required:[true, "Name is required"],
        minlenght:[3, "Name is too short"]
    },
    email:{
        type: String,
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Enter a valid email address",
        ],
        required:[true, "Email is required"]
    },
    password: {
        type: String,
        required: [true,'please add password'],
        minlength: [6,'password must be atleast 6 characters'],
        select: false
    },
})


module.exports = model("User", UserSchema)