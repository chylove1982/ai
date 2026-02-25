import express from 'express';

const router = express.Router();

// Get all projects
router.get('/', (req, res) => {
    res.send('Fetching all projects...');
});

// Create a new project
router.post('/', (req, res) => {
    res.send('Creating a new project...');
});

// Get a specific project
router.get('/:id', (req, res) => {
    const projectId = req.params.id;
    res.send(`Fetching project with ID: ${projectId}`);
});

// Update a project
router.put('/:id', (req, res) => {
    const projectId = req.params.id;
    res.send(`Updating project with ID: ${projectId}`);
});

// Delete a project
router.delete('/:id', (req, res) => {
    const projectId = req.params.id;
    res.send(`Deleting project with ID: ${projectId}`);
});

export default router;