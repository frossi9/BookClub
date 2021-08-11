const connection = require("./connection");

function getAllPosts(callback) {
    const sql = `SELECT posts.*, authors.* FROM posts INNER JOIN authors ON posts.author_id = authors.id ORDER BY posts.date`;
    connection.query(sql, function(err, result) {
        callback(result);
    });
}

function getPostById(id, callback) {
    const sql = `SELECT * FROM posts WHERE post_id = ?`;
    const params = [ id ];
    connection.query(sql, params, function(err, result) {
        callback(result[0]);
    });
}

function insertPost(content, callback) {
    const sql = `INSERT INTO posts (title, post, author_id) VALUES(?, ?, ?)`;
    const params = [content.title, content.posts, content.authorId];

    connection.query(sql, params, function(err, result) {
        callback(result);
    });
}

module.exports = {getAllPosts, getPostById, insertPost};