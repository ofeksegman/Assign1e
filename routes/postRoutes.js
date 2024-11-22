const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');

router.post('/',postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.get('/:SenderId', postController.getPostBySenderId);


module.exports = router;
