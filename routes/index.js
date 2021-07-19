const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("login");
});

router.get("/dashboard", (req, res) => {
	res.send("dashboard");
});
module.exports = router;
