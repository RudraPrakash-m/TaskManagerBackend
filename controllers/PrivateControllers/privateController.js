const { default: axios } = require("axios")
const ADDTASKMODEL = require("../../models/addTaskModel");

const addTask = async (req, res) => {
  const task = { ...req.body, completed: false };

  try {
    const result = await ADDTASKMODEL.create(task);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add task", error });
  }
};



const getAllTasks = async (req, res) => {
    const { userId } = req.body
    // console.log(userId);


    try {
        const result = await ADDTASKMODEL.find({ userId, completed: false })
        res.json(result)
    } catch (error) {
        res.json(error)
    }

}


const completedtasks = async (req, res) => {
    const { id } = req.body;
    console.log(id);
    

    if (!id) {
        return res.status(400).json({ message: "Task ID is required" });
    }

    try {
        const result = await ADDTASKMODEL.updateOne(
            { _id: id },
            { $set: { completed: true } },
            { runValidators: true }
        );

        if (result.modifiedCount === 0) {
            return res.status(404).json({ message: "Task not found or already completed" });
        }

        res.status(200).json({ message: "Task marked as completed successfully" });
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ message: "Failed to update task" });
    }
};

const getcompletedtasks= async(req, res)=>{
    const { userId } = req.body
    // console.log(userId);

    try {
        const result = await ADDTASKMODEL.find({ userId, completed: true })
        res.json(result)
    } catch (error) {
        res.json(error)
    }

}


module.exports = { addTask, getAllTasks, completedtasks, getcompletedtasks }