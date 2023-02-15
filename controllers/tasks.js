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

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id })
    if (!task) {
      res.status(404).json({ msg: 'Task not found' })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ error })
  }
}

const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
    if (!task) {
      res.status(404).json({ msg: 'Task not found' })
    }
    res.status(200).json({ task })
  } catch (error) {
    res.status(500).json({ error })
  }
}

module.exports = { getTasks, getTask, addTask, updateTask, deleteTask }
