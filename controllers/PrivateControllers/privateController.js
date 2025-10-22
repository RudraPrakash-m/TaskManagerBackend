const { default: axios } = require("axios")
const ADDTASKMODEL = require("../../models/addTaskModel");

const addTask = async (req, res) => {
    const task = req.body
    // console.log(task);

    try {
        const result = await ADDTASKMODEL.insertOne(task)
        // console.log(result);

        res.status(200).json(result)

    } catch (error) {
        console.log(error);


        res.json(error)

    }
}


const getAllTasks = async (req, res) => {
    const { userId } = req.body
    // console.log(userId);


    try {
        const result = await ADDTASKMODEL.find({ userId, completed:false })
        res.json(result)
    } catch (error) {
        res.json(error)
    }

}


const completedtasks = async (req, res) => {
    const { userId } = req.body
    // console.log(userId);


    try {
        const result = await ADDTASKMODEL.find({ userId, completed:true })
        res.json(result)
    } catch (error) {
        res.json(error)
    }

}


module.exports = { addTask, getAllTasks, completedtasks }