const connection = require("./connection");

function getAllPosts(callback) {
    const sql = `SELECT posts.*, authors.id , authors.name FROM posts INNER JOIN authors ON posts.author_id = authors.id`;
    connection.query(sql, function(err, result) {
        callback(result);
    });
}

module.exports = {getAllPosts};