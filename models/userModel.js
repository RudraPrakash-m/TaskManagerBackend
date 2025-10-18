const mongoose = require("mongoose")
const userSchema = require("../schemas/userSchema")

const USERMODEL = mongoose.model("user", userSchema)

module.exports = USERMODEL