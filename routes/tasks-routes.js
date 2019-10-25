const router = require('express').Router()
const { createTask, getTask, deleteTask, updateTask } = require('../controllers/tasks')

//Tasks CRUD
router.post('/todo/:todo_id/task', createTask)
router.get('/todo/:todo_id/task', getTask)
router.delete('/todo/:todo_id/task/:task_id', deleteTask)
router.put('/todo/:todo_id/task/:task_id', updateTask)

module.exports = router