const express = require('express');
const router = express.Router();

const commentsController = require('../controllers/comments');

router.get('/posts/:postId/comments', commentsController.index)
router.post('/posts/:postId/comment', commentsController.create)

module.exports = router