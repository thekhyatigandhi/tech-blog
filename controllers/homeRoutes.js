const router = require("express").Router();

// ROUTES http://localhost:3001/

// render home (main feed; public)
router.get("/", async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
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
