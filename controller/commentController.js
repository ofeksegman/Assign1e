const commentModel = require('../model/comment');
const createComment = async (req, res) => {
    const commentBody = req.body;
    try {
        const savedComment = await commentModel.create(commentBody);
        res.status(201).send(savedComment);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = { 
    createComment,

 };