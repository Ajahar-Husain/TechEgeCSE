const express = require('express');
const router = express.Router();
const protect = require('../middleare/authMiddleware');

const { createPost } = require('../controllers/postController');

router.post('/', protect, createPost);

module.exports = router;
