// const { response } = require('express')
const express = require("express");
const router = express.Router();

const {
	getAllTasks,
	getTask,
	updateTask,
	deleteTask,
	createTask,
	editTask,
} = require("../controlers/tasks");

router.route("/").get(getAllTasks);
router.route("/").post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);
router.report("/:id").put(editTask);

module.exports = router;
