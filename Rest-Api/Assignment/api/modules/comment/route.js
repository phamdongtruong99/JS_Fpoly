const express = require('express');
const router = express.Router();

const { createComment } = require('./controller')

// router.get('/', getUsers);
router.post('/', createComment);
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);

module.exports = router;