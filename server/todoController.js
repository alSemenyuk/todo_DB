import { TodoService } from './todoService.js'

async function getOne (req, res) {
  try {
    const todo = await TodoService.getOne(req.params.id)

    return res.json(todo)
  } catch (err) {
    console.log(err)
  }
};

async function getAll (req, res) {
  try {
    const todos = await TodoService.getAll()

    return res.json(todos)
  } catch (err) {
    console.log(err)
  }
};

async function create (req, res) {
  try {
    const newTodo = await TodoService.createNewOne(req.body)

    return res.json(newTodo)
  } catch (err) {
    console.log(err)
  }
};

async function remove (req, res) {
  try {
    const removedTodo = await TodoService.deleteOne(req.params.id)

    return res.json(removedTodo)
  } catch (err) {
    console.log(err)
  }
};

async function updete (req, res) {
  try {
    const newTodo = req.body

    const updetedTodo = await TodoService.updete(newTodo)

    return res.json(updetedTodo)
  } catch (err) {
    console.log(err)
  }
};

export const TodoController = {
  getAll,
  getOne,
  create,
  remove,
  updete
}
