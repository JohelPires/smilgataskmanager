const express = require('express')
const {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks')

const routes = express.Router()

routes.route('/').get(getTasks).post(addTask)
routes.route('/:id').put(updateTask).delete(deleteTask)

module.exports = routes
