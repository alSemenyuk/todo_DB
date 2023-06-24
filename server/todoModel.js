import mongoose from 'mongoose'

const Todo = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  }
})

export default mongoose.model('Todo', Todo)
