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

// update post
router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updatedPost[0]) {
      res.status(400).json({ message: "No post found with that id!" });
      return;
    }
    res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// delete post
router.delete("/:id", async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!postData) {
      res.status(404).json({ message: "No post with that id!" });
      return;
    }
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single post by ID

// verify if POST belongs to user

// verify if the COMMENT belongs to the user
