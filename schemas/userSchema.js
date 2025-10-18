const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    userId: String,
    age: Number,
    gender: String
})

module.exports = userSchema