const {Schema, model}= require("mongoose")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
},
{
    timestamps:true
})

// Encrypt password before saving user changes
UserSchema.pre('save', async function (next){
    // Skip, if password is not modified
    if(!this.isModified('password'))next()
    
    // Hash and save the password
    const salt = await bcrypt.genSalt(12)
    this.password =await bcrypt.hash( this.password, salt)
})

// static method for validating hashed password
UserSchema.methods.matchPassword=async function(password) {
    return await bcrypt.compare(password,this.password)
}
module.exports = model("User", UserSchema)