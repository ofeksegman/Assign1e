const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');

router.post('/',postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
<<<<<<< HEAD
=======
//router.get('/:senderId', postController.getPostBySenderId);
>>>>>>> ac2374ce2783f592b49316f4a90b9ab0e613da7e
router.put('/:id', postController.updatePost);

module.exports = router;
