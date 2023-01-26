const connectDB = require("./db/connect");
const express = require("express");
const tasks = require("./routes/task");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddlewar = require("./middleware/error-handler");

// Middleware
const app = express();
app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddlewar);

// app.get('/api/v1/tasks')
const port = 3000;
const start = async () => {
	try {
		await connectDB(process.env.MONGOURI);
		app.listen(port, console.log(`Server is listening on port ${port}`));
	} catch (error) {
		console.log(error);
	}
};

start();
