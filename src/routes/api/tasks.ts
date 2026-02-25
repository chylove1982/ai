import express from 'express';

const router = express.Router();

// Sample Task API routes

// GET all tasks
router.get('/', (req, res) => {
    res.json({ message: 'Fetching all tasks...' });
});

// POST a new task
router.post('/', (req, res) => {
    const newTask = req.body;
    // Here you would typically save the new task to your database
    res.status(201).json({ message: 'Task created!', task: newTask });
});

// GET a specific task by ID
router.get('/:id', (req, res) => {
    const taskId = req.params.id;
    res.json({ message: `Fetching task with ID ${taskId}...` });
});

// PUT to update a task by ID
router.put('/:id', (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body;
    // Update the task in your database here
    res.json({ message: `Task with ID ${taskId} updated!`, task: updatedTask });
});

// DELETE a task by ID
router.delete('/:id', (req, res) => {
    const taskId = req.params.id;
    // Delete the task from your database here
    res.json({ message: `Task with ID ${taskId} deleted!` });
});

export default router;