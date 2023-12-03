const express = require('express');
const router = express.Router();
const Todo = require('../db/models/todo.model');

router.get('/todos', async (req, res) => {
    try{
        const todos = await Todo.find();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/todos', async (req, res) => {
    const {task} = req.body;

    try {
        const newTodo = new Todo({task});
        await newTodo.save();
        res.status(201).json(newTodo)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const todo = await Todo.findByIdAndUpdate(id, { completed: true }, { new: true });
      res.json(todo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      await Todo.findByIdAndDelete(id);
      res.json({ message: 'Todo deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  module.exports = router;