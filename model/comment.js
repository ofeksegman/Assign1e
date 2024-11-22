const mongoose=require('mongoose');
const commentSchema = new mongoose.Schema({
    postId: {
        type: String,
        required: true
    },
    content: {
        type:  String
        },
    username: {
        type: String,
        required: true
    },
});
module.exports = mongoose.model('comment', commentSchema);