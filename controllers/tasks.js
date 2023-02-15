// let { data } = require('../tempdata')
const task = require('../models/task')
const Task = require('../models/task')

const getTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({})
    res.status(201).json({ allTasks })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id })
    if (!task) {
      return res.status(404).json({ msg: 'task does not exist' })
    }
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const addTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (error) {
    res.status(500).json({ msg: error })
  }
}

const updateTask = (req, res) => {
  res.send('updating task')
}

const deleteTask = (req, res) => {
  res.send('deleting task')
}

module.exports = { getTasks, getTask, addTask, updateTask, deleteTask }
