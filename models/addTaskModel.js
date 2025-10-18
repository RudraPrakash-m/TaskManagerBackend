const mongoose = require("mongoose")
const addTaskSchema = require("../schemas/addTaskSchema")

const ADDTASKMODEL = mongoose.model("task", addTaskSchema)

module.exports = ADDTASKMODEL