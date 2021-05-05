const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String,
    post: {
        type: Schema.Types.ObjectId,
        ref: 'posts'
    },
    follower: {
        type: Schema.Types.ObjectId,
        ref: 'followers'
    },
    following: {
        type: Schema.Types.ObjectId,
        ref: 'following'
    }
});

module.exports = model('User', userSchema);
