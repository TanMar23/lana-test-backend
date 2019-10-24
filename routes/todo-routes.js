const router = require('express').Router()
const { createTodoList, getTodoList, deleteTodoList, getOneTodo } = require('../controllers/todo')

//TODO CRUD
router.post('/todo', createTodoList)
router.get('/todo', getTodoList)
router.get('/todo/:id', getOneTodo)
router.delete('/todo/:id', deleteTodoList)


module.exports = router