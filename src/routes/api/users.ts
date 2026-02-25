import { Router } from 'express';

const router = Router();

// Get all users
router.get('/', (req, res) => {
    res.send('Get all users');
});

// Get user by ID
router.get('/:id', (req, res) => {
    res.send(`Get user with ID ${req.params.id}`);
});

// Create a new user
router.post('/', (req, res) => {
    res.send('Create a new user');
});

// Update a user
router.put('/:id', (req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
});

// Delete a user
router.delete('/:id', (req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
});

export default router;