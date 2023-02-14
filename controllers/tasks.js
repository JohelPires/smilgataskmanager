const getTasks = (req, res) => {
  res.send('List of all tasks')
}

const addTask = (req, res) => {
  res.send('Adding task')
}

const updateTask = (req, res) => {
  res.send('updating task')
}

const deleteTask = (req, res) => {
  res.send('deleting task')
}

module.exports = { getTasks, addTask, updateTask, deleteTask }
