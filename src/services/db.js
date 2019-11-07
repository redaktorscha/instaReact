const posts = require('../../src/posts.json');
const users = require('../../src/users.json');

module.exports = function () {
    return {
        posts: posts,
        users: users
    }
}