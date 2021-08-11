const express = require("express");
const authorController = require("./controllers/authorController");
const homepageController = require("./controllers/homepageController");
const postsController = require("./controllers/postsController");

const router = express.Router();

// router.get("/", homepageController.renderHomepage);

router.get("/authors", authorController.renderAuthors);
router.get("/author", authorController.renderAuthor);
router.get("/new_author", authorController.createAuthor);
router.post("/new_author", authorController.createAuthor);
router.get("/", homepageController.renderPosts);
router.get("/posts", postsController.renderPosts);
router.get("/post", postsController.renderPost);
router.get("/new_post", postsController.createPost);
router.post("/new_post", postsController.createPost);

module.exports = router;