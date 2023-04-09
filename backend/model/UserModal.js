const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    userEmail: {
        type: String,
        require: true
    },
    userContact: {
        type: String,
        require: true
    },
    userPassword: {
        type: String,
        require: true
    }
}, { timestaps: true })

module.exports = mongoose.model("user", userSchema)
