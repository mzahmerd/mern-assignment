const express = require("express")
require("dotenv").config()
const connectDb = require("./config/db")
const {getUsers}=require("./controllers/users")

const app = express()

// Connect to mongoDB
connectDb()

// Get port address from environment variables, if null use 4000.
const PORT = process.env.PORT || 4000

const server = app.listen(PORT, ()=>{
    console.log(`Servier has started running on PORT:${PORT}`)
})