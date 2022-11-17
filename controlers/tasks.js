const Task = require('../models/Task')
const getAllTasks = (req, res) => {
    res.send("All Items")
}
const createTask = (req, res) => {
    // console.log("Crate Task")
    res.json(req.body)
}
const updateTask = (req, res) => {
    res.send("Update Task")
}
const getTask = (req, res) => {
    res.json({id:req.params.id})
}
const deleteTask = (req, res) => {
    res.send("Delete Task")
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}