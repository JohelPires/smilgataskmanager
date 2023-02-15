const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must provide name.'],
    trim: true,
    maxlength: [50, 'Maximum length is 50 characters.'],
  },
  completed: { type: Boolean, default: false },
})

module.exports = mongoose.model('Task', TaskSchema)
