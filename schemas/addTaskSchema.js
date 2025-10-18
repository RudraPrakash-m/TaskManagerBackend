const mongoose = require("mongoose")

const addTaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    dueDate: String,
    priority: String,
    userId: String
})

module.exports = addTaskSchema