const express = require("express");
const router = express.Router();
const db = require("./database");

router.route("/").get((req, res) => {
	db.query("SELECT * FROM posts", (err, result) => {
		if (err) {
			console.log(err);
		}
		console.log(result);
		res.send(result);
	});
});

router.route("/home").get((req, res) => {
	db.query("SELECT * FROM users", (err, result) => {
		if (err) {
			console.log(err);
		}
		console.log(result);
		res.send(result);
	});
});

module.exports = router;
