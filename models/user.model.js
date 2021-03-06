const mongoose = require("mongoose")

const User = mongoose.model(
    "User",
    new mongoose.Schema({
       username: String,
       email: String,
       password: String,
       location: String,
       dogs: [
           {
               type: mongoose.Schema.Types.ObjectId,
               ref: "Dog"
           }
       ] 
    })
)

module.exports = User