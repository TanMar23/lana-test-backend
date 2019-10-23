const router = require('express').Router()
const { createTodoList, getTodoList, deleteTodoList } = require('../controllers/todo')

//TODO CRUD
router.post('/todo', createTodoList)
router.get('/todo', getTodoList)
router.delete('/todo', deleteTodoList)


module.exports = router