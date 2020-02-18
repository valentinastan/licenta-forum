const express = require('express');
const router = express.Router();

const postsController = require('../controllers/posts.js');

router.get('/posts', postsController.index)
router.post('/post', postsController.create)

module.exports = router