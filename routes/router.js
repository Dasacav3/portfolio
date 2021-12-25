const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("index");
});
router.get("/development", (req, res) => {
	res.render("development");
});

router.get("/blog", (req, res) => {
	res.render("blog");
});

router.get("/contact", (req, res) => {
	res.render("contact");
});

module.exports = { router };
