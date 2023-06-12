const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

// ROUTES http://localhost:3001/api/post/

// new post
router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      post_body: req.body.post_body,
      user_id: req.session.user_id || req.body.user_id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});
