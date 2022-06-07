const mongoose = require('mongoose')

// need to rework for user login and reg
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"]
      },
      lastName: {
        type: String,
        required: [true, "Last name is required"]
      },
      email: {
        type: String,
        required: [true, "Email is required"]
      },
      password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
      }
    
}, {timestamps:true})

module.exports.User = mongoose.model("User", UserSchema)