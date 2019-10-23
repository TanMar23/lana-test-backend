const router = require('express').Router()
const { createTask, getTask, deleteTask } = require('../controllers/tasks')

//Tasks CRUD
router.post('/task', createTask)
router.get('/task', getTask)
router.delete('/task', deleteTask)


module.exports = router