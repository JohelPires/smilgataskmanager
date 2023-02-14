const express = require('express')
const tasks = require('./routes/tasks')
const app = express()
const PORT = 5000

// routes:

// get tasks

// /api/tasks

// post new task
// delete task
// update task

app.use('/api/tasks', tasks)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
