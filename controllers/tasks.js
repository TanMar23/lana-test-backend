const Tasks = require('../models/Task')

//Create
exports.createTask = async (req, res) => {
  try{
    const task = await Tasks.create(req.body)
    res.status(201).json({ message: 'Task created succesfully', task}) 
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error})
  }
}

//Read 
exports.getTask = async(req, res) => {
  try{
    const task = await Tasks.find()
    res.status(200).json({ message: 'Task found', task}) 
  } catch (error) {
    res.status(404).json({ message: 'Task not found', error})
  }
}


//Delete
exports.deleteTask = async (req, res) => {
  try{
    const { task } = req.params
    const deletedTask = await Tasks.findByIdAndDelete(task)
    res.status(200).json({ message: 'Task list deleted', deletedTask})
 } catch (error){
   res.status(500).json({ message: 'Something went wrong', error})
 }
}