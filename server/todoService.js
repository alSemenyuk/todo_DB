import Todo from './todoModel.js'

async function createNewOne (todo) {
  const newTodo = await Todo.create(todo)

  return newTodo
};

async function getOne (id) {
  if (!id) {
    throw new Error('id is not define')
  }

  const todo = Todo.findById(id)

  return todo
};

async function getAll () {
  const todo = await Todo.find()

  return todo
};

async function deleteOne (id) {
  if (!id) {
    throw new Error('id is not define')
  }

  const todo = await Todo.findByIdAndDelete(id)

  return todo
}

async function updete (todo) {
  if (!todo._id) {
    throw new Error('ID is not define')
  }

  const newTodo = await Todo.findByIdAndUpdate(todo._id, todo, { new: true })

  return newTodo
}

export const TodoService = {
  getAll,
  getOne,
  createNewOne,
  deleteOne,
  updete
}
