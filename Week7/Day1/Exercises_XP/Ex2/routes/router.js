const express = require('express')
const router = express.Router()

// Sample in-memory database for storing to-do items
const todos = [];
let currId=1

// Get all to-do items
router.get('/', (req,res)=>{
    res.json(todos)
})
// Add a new to-do item
router.post('/', (req,res)=>{
    const newTodo = {id: currId++, ...req.body}
    todos.push(newTodo)
    res.status(201).json(newTodo)
})
// Update a to-do item by ID
router.put('/:id', (req,res)=>{
    const {id} =req.params
    const index = todos.findIndex(todo => todo.id == id);
    if (index !== -1) {
        todos[index] = { id: todos[index].id, ...req.body };
        res.json(todos[index]);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
})
// Delete a to-do item by ID
router.delete('/:id', (req,res)=>{
    const {id} =req.params
    const index = todos.findIndex(todo => todo.id == id);
    if (index !== -1) {
        todos.splice(index,1)
        res.status(200).json({message:"Deleted!"})
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
})

module.exports = router;