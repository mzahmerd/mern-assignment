const mongoose = require("mongoose")

const connectDB = () =>{
    mongoose.connect(process.env.MONGO_URL)
        .then((conn) =>{
            console.log(`Database connected: ${conn.connection.host}`)
        })
        .catch((err)=>{
            console.log(err)
        })
}

module.exports = connectDB