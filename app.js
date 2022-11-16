const express = require('express')
const tasks = require('./routes/task')
const app = express()
//Test Routes
//middleware
app.use(express.json())
// app.get('/hello', (request,reponse) => {
    // reponse.send("Task Manger App")
// })

app.use('/api/v1/tasks', tasks)


// app.get('/api/v1/tasks')
const port = 3000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})