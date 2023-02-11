const express = require("express")
require("dotenv").config()
const connectDb = require("./config/db")
const errorHandler=require("./middlewares/error");
const cors=require('cors')
const mogran = require('morgan')



// Importing routes
const auth = require("./routes/auth")
const users = require("./routes/users")
const posts = require("./routes/posts")
// const comments = require("./routes/comments")

const app = express()

// Connect to mongoDB
connectDb()

// Getting cors enabled domain  from env
const domainsFromEnv=process.env.CORS_DOMAINS||"http://localhost:3000"

const whitelist=domainsFromEnv.split(",").map(item => item.trim())
const corsOptions={
    origin: function(origin,callback) {
        if(!origin||whitelist.indexOf(origin)!==-1) {
            callback(null,true)
        } else {
            callback(new ErrorResponse("Not allowed by CORS",400))
        }
    },
    credentials: true,
}

//Dev logging middleware
if(process.env.NODE_ENV==="development") {
    app.use(morgan("dev"));
  }

// server middlewares
app.use(express.json());
// Enable CORS
app.use(cors(corsOptions))

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