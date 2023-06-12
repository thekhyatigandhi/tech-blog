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

// delete comment
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!comment) {
      res.status(404).json({ message: "No comment found with that id!" });
      return;
    }
    res.status(200).json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update comment
router.put("/:id", async (req, res) => {
  try {
    const updateComment = await Comment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!updateComment[0]) {
      res.status(400).json({
        message: "No Comment Found With That ID.",
      });
    }
    res.status(200).json(updateComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
