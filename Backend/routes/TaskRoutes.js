const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

//get all tasks
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);

    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});

//post new task
router.post('/task', async (req, res) => {
    try {
        const task = new Task({ title: req.body.title });
        await task.save();
        res.status(201).json(task);

    } catch (error) {
        res.status(400).json({ error: 'Failed to creat task' });
    }
});

//update a task by ID
router.put('/task/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id,
            { title: req.body.title, completed: req.body.completed },
            { new: true }
        );
        res.json(updatedTask);

    } catch (error) {
        res.status(400).json({ error: 'Failed to update a task' });

    }
});

//delete a task by ID
router.delete('/task/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: 'Task deleted successfully' });

    } catch (error) {
        res.status(400).json({ error: 'Failed to delete task' });
    }
});

module.exports = router;
