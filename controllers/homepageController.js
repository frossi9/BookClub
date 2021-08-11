const post = require("../db/homepage");

function renderPosts(req, res) {
    post.getAllPosts(function(result) {
        const pageData = {
            posts: result
        }
        res.render("index.ejs", pageData);
    });
}


module.exports = {renderPosts};