const router = require("express").Router();

// ROUTES http://localhost:3001/

// render home (main feed; public)
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: { exclude: ["password"] },
        },
        {
          model: Comment,
          include: {
            model: User,
            attributes: ["id", "username"],
          },
        },
      ],
      order: [["updated_at", "DESC"]],
    });
    res.render("home", {
      posts: postData.map((p) => p.get({ plain: true })),
      feed: true,
      loggedIn: req.session.logged_in,
      userId: req.session.user_id,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// render dash (unique to user, shows only user's posts, only accessed when logged in)

router.get("/", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
});

// render login page if not logged in
router.get("/", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
});

// render new post page (if logged in)
router.get("/", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
