const express = require("express")
const { addTask, getAllTasks, completedtasks, getcompletedtasks } = require("../../controllers/PrivateControllers/privateController")

const privateRouter = express.Router()

privateRouter.post("/addtasks", addTask)

privateRouter.post("/alltasks", getAllTasks)

privateRouter.post("/completedtasks", completedtasks)

privateRouter.post("/getcompletedtasks", getcompletedtasks)


module.exports = privateRouter