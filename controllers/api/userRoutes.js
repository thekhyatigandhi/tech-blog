const router = require("express").Router();
const { User } = require("../../models");

// ROUTES http://localhost:3001/api/user/

// log-in
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res
        .status(400)
        .json({
          message:
            "We're sorry, but the login information you provided is not valid. Please double-check your username and password and try again.",
        });
      return;
    }
    const validatePassword = await userData.checkPassword(req.body.password);

    if (!validatePassword) {
      res
        .status(400)
        .json({
          message:
            "We're sorry, but the login information you provided is not valid. Please double-check your username and password and try again.",
        });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.username = userData.username;
      res.json({ user: userData, message: "You are logged in! Welcome!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
