const express = require("express")
const { addTask, getAllTasks } = require("../../controllers/PrivateControllers/privateController")

const privateRouter = express.Router()

privateRouter.post("/addtasks", addTask)

privateRouter.post("/alltasks", getAllTasks)

module.exports = privateRouter