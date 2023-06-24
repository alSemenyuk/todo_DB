import Router from 'express'
import { TodoController } from './todoController.js'

export const router = new Router()

router.post('/todo', TodoController.create)
router.get('/todo/:id', TodoController.getOne)
router.get('/todo', TodoController.getAll)
router.delete('/todo/:id', TodoController.remove)
router.put('/todo', TodoController.updete)
