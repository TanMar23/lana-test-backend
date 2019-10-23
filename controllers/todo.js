const Todo = require('../models/Todo')

//Create
exports.createTodoList = async (req, res) => {
  try {
    const todoList = await Todo.create(req.body) 
    res.status(201).json({message: 'TODO list created successfully', todoList})
  } catch (error){
    res.status(500).json({ message: 'Something went wrong', error })
  }
}

//Read
exports.getTodoList = async (req, res) => {
  try{
    const todoList = await Todo.find()
    res.status(200).json( { message: 'TODO list found', todoList})
  } catch(error){
    res.status(404).json({ message: 'The TODO list does not exist', error})
  }
}

//Delete 
exports.deleteTodoList = async (req, res) => {
  try{
    const { todoList } = req.params
    const todoDeleted = await Todo.findByIdAndDelete(todoList)
    res.status(200).json({ message: 'TODO list deleted', todoDeleted})
  } catch(error){
    res.status(500).json({ message: 'Something went wrong', error})
  }
}