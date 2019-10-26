const Tasks = require('../models/Task')

//Create
exports.createTask = async (req, res) => {
  try{
    const {todo_id} = req.params
    const task = await Tasks.create({name:req.body.name, todo: todo_id})
    res.status(201).json({ message: 'Task created succesfully', task}) 
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error})
  }
}

//Read 
exports.getTask = async(req, res) => {
  try{
    const {todo_id} = req.params
    const task = await Tasks.find({todo: todo_id},'name todo completed').populate('todo', 'name description -_id')
    res.status(200).json({ message: 'Task found', task}) 
  } catch (error) {
    res.status(404).json({ message: 'Task not found', error})
  }
}

//Update
exports.updateTask = async(req, res) => {
  try{
    const {task_id} = req.params
    const task = await Tasks.findById(task_id)
    let updatedTask
    if (task.completed) {
      updatedTask = await Tasks.findByIdAndUpdate(task_id, {completed: false}, {new:true})
    } else {
      updatedTask = await Tasks.findByIdAndUpdate(task_id, {completed: true}, {new:true})
    }
    res.status(202).json( {message: 'Task updated', updatedTask})
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error})
  }
}


//Delete
exports.deleteTask = async (req, res) => {
  try{
    const { task_id } = req.params
    await Tasks.findByIdAndDelete(task_id)
    res.status(200).json({ message: 'Task list deleted'})
 } catch (error){
   res.status(500).json({ message: 'Something went wrong', error})
 }
}