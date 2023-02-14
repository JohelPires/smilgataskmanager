const express = require('express')
const {
  getTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks')

const routes = express.Router()

routes.route('/').get(getTasks).post(addTask)
routes.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = routes
