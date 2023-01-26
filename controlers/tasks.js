const Task = require("../models/Task");
const { createCustomError } = require("../errors/custom-error");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
	const tasks = await Task.find({});
	res.status(200).json({ tasks });
	// res.send("all items in this file");
});
const createTask = asyncWrapper(async (req, res) => {
	const task = await Task.create(req.body);
	res.status(200).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
	const { id: taskID } = req.params;
	const task = await Task.findOne({ _id: taskID });
	if (!task) {
		return next(createCustomError(`No task with id : ${taskID}`, 404));
	}
	res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
	const { id: taskID } = req.params;
	const task = await Task.findOneAndDelete({ _id: taskID });
	// const { id: taskID } = req.params;
	if (!task) {
		return next(createCustomError(`No task with id : ${taskID}`, 404));
	}
	res.status(200).json({ task });
	// const await Task.deleteOne(task);
	// res.send("delete task");
});
const updateTask = asyncWrapper(async (req, res, next) => {
	const { id: taskID } = req.params;
	const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
		new: true,
		runValidators: true,
	});
	if (!task) {
		return next(createCustomError(`No task with id : ${taskID}`, 404));
	}
	res.status(200).json({ task });
	// res.send("update task");
});

const editTask = asyncWrapper(async (req, res, next) => {
	const { id: taskID } = req.params;
	const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
		new: true,
		runValidators: true,
		overwrite: true,
	});
	if (!task) {
		return next(createCustomError(`No task with id : ${taskID}`, 404));
	}
	res.status(200).json({ task });
	// res.send("update task");
});
module.exports = {
	getAllTasks,
	createTask,
	getTask,
	updateTask,
	deleteTask,
	editTask,
};
