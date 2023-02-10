const express = require("express")
require("dotenv").config()
const connectDb = require("./config/db")
const errorHandler=require("./middlewares/error");
const cors=require('cors')



// Importing routes
const auth = require("./routes/auth")
const users = require("./routes/users")
const posts = require("./routes/posts")
// const comments = require("./routes/comments")

const app = express()

// Connect to mongoDB
connectDb()

// server middlewares
app.use(express.json());
// Enable CORS
app.use(cors())

// mounting routes
app.use('/api/auth', auth)
app.use('/api/users', users)
app.use('/api/posts', posts)
// app.use('/api/comments', comments)

// attached errorHandler middleware to provide customize response upon failure.
app.use(errorHandler)

// Get port address from environment variables, if null use 4000.
const PORT = process.env.PORT || 4000

const server = app.listen(PORT, ()=>{
    console.log(`Servier has started running on PORT:${PORT}`)
})