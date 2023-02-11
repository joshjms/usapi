const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();
require('dotenv').config()

const { Module } = require("../models/Module");

router.post(
    "/signup",
    passport.authenticate("signup", { session: false }),
    async (req, res, next) => {
        res.json({
            message: "Signup successful",
            user: req.user,
        });
    }
);

router.post("/login", async (req, res, next) => {
    passport.authenticate("login", async (err, user, info) => {
        try {
            if (err || !user) {
                const error = new Error("User not found");

                return res.status(400).json({ message: error.message })
            }

            req.login(user, { session: false }, async (error) => {
                if (error) return res.status(500).json({ message: error.message })

                const body = { _id: user._id, email: user.email };
                const token = jwt.sign({ user: body }, process.env.JWT_SECRET, { expiresIn: 30 * 24 * 60 * 60 });

                return res.json({ token });
            });
        } catch (error) {
            return res.status(500).json({ message: error.message })
        }
    })(req, res, next);
});

module.exports = router;
