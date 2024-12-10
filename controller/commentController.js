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

const updateComment= async (req, res) => {
    const {id} = req.params;
    const commentBody = req.body;
    try {
        const comment = await commentModel.findByIdAndUpdate(id,   commentBody, { new: true });
        
        if(!comment) {
            res.status(404).send('comment not found');
        }
        return res.status(200).json(comment);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
};

const deleteComment= async (req, res) => { 
    const { id } = req.params;
    try {
        const comment = await commentModel.findByIdAndDelete(id);
        if (!comment) {
            res.status(404).send('comment not found');
        }
        return res.status(200).json(comment);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
module.exports = { 
    createComment,
    getAllComments,
    updateComment,
    deleteComment
 };