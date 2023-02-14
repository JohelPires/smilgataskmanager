let { data } = require('../tempdata')

const getTasks = (req, res) => {
  res.json(data)
}

const getTask = (req, res) => {
  res.json({ id: req.params.id })
}

const addTask = (req, res) => {
  res.json(req.body)
}

const updateTask = (req, res) => {
  res.send('updating task')
}

const deleteTask = (req, res) => {
  res.send('deleting task')
}

module.exports = { getTasks, getTask, addTask, updateTask, deleteTask }
