const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: String
    // postCount: Integer,
    // followerCount: Integer,
    // followingCount: Integer
});

module.exports = model('User', userSchema);
