const mongoose=require('mongoose');
const commentSchema = new mongoose.Schema({
    postId: {
        type: String, //postId
    },
    content: {
        type:  String
        },
    username: {
        type: String,
    },
});
module.exports = mongoose.model('comment', commentSchema);