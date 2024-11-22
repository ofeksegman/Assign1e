const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');

router.post('/',postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.get('/:senderId', postController.getPostBySenderId);
router.put('/:id', postController.updatePost);

module.exports = router;
