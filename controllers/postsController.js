const post = require("../db/posts");

function renderPosts(req, res) {
    post.getAllPosts(function(result) {
        const pageData = {
            posts: result
        }
        res.render("posts.ejs", pageData);
    });
}

function renderPost(req, res) {
    
    const id = req.query.id;

    post.getPostById(id, function(result) {
        const pageData = {
            post: result
        }
        res.render("post.ejs", pageData);
    });
}

function createPost(req, res) {
    if (req.body.submitted) {
        const title = req.body.title;
        const posts = req.body.post;
        const authorId = req.body.author;

        const postObject = { title, posts, authorId};

        post.insertPost(postObject, function(result) {
            res.render("postNew.ejs");
        });

    } else {

        res.render("postNew.ejs");
        
    }
}

module.exports = {renderPosts, renderPost, createPost};