const router = require("express").Router();
const { Comment } = require("../../models");

// ROUTES http://localhost:3001/api/comment/

//new comment
router.post("/", async (req, res) => {
  try {
    const comment = await Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      user_id: req.session.user_id || req.body.user_id,
    });
    res.status(200).json(comment);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
