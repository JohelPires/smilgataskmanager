const express = require('express')
// const bodyParser = require('body_parser')
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

const app = express()
const PORT = 5000

// app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks', tasks)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    console.log('Connected to database...')
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
