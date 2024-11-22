const commentModel = require('../models/commentModel');
const createComment = async (req, res) => {
    const comment = new commentModel({
        postId: req.body.postId,
        content: req.body.content,
        username: req.body.username
    });
    try {
        const savedComment = await comment.save();
        res.json(savedComment);
    } catch (err) {
        res.json({ message: err });
    }
}
module.exports = { 
    createComment,

 };