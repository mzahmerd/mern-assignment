const mongoose = require("mongoose")

const connectDB = () =>{
    // Disabled strictQuery warning for mongoose 7
    // https://www.mongodb.com/community/forums/t/deprecationwarning-mongoose-the-strictquery/209637
    mongoose.set('strictQuery', false)

    // Connect to mongoDb url from environment variable.
    mongoose.connect(process.env.MONGO_URL)
        .then((conn) =>{
            console.log(`Database connected: ${conn.connection.host}`)
        })
        .catch((err)=>{
            console.log(err)
        })
}

module.exports = connectDB