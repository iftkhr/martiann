const express = require("express");
const router = express.Router();
const db = require("./database");

router.route("/").get((req, res) => {
	res.send("Go to /api/users for users and /api/posts for posts");
});

router.route("/api/posts").get((req, res) => {
	db.query("SELECT * FROM posts", (err, result) => {
		if (err) {
			console.log(err);
		}
		console.log(result);
		res.send(result);
	});
});

router.route("/api/users").get((req, res) => {
	db.query("SELECT * FROM users", (err, result) => {
		if (err) {
			console.log(err);
		}
		console.log(result);
		res.send(result);
	});
});

module.exports = router;
