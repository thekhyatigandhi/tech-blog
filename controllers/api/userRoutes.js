const router = require("express").Router();
const { User } = require("../../models");

// ROUTES http://localhost:3001/api/user/

// log-in 
router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username }});

        if(!userData) {
            res.status(400).json({ message: "We're sorry, but the login information you provided is not valid. Please double-check your username and password and try again." });
            return;
        }
        const validatePassword = await userData.checkPassword(req.body.password);


        if(!validatePassword) {
            res.status(400).json({ message: "We're sorry, but the login information you provided is not valid. Please double-check your username and password and try again." });
            return;
        }

        