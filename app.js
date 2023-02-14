const express = require('express')
// const bodyParser = require('body_parser')
const tasks = require('./routes/tasks')
const app = express()
const PORT = 5000

app.use(express.json())
app.use('/api/v1/tasks', tasks)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
