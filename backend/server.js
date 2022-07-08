const dotenv = require("dotenv");
const mysql = require("mysql");
const express = require("express");
const path = require("path");
const cors = require("cors");

dotenv.config();

const database = mysql.createConnection({
	host: process.env.host,
	user: process.env.user,
	password: process.env.password,
	port: process.env.port,
	database: process.env.database,
});

const app = express();
const port = process.env.PORT || 3306;

app.use(cors());
app.use(express.json());

database.connect((err) => {
	if (err) throw err;
	console.log("SQL database connection established successfully!");
});

app.get("/api", (req, res) => {
	res.send("Go to /api/users for users and /api/posts for posts");
});

app.get("/api/users", (req, res) => {
	database.query("SELECT * FROM users", (err, result) => {
		if (err) {
			console.log(err);
		}
		res.send(result);
	});
});

app.get("/api/posts", (req, res) => {
	database.query("SELECT * FROM posts", (err, result) => {
		if (err) {
			console.log(err);
		}
		res.send(result);
	});
});

if (process.env.NODE_ENV === "production") {
	app.use(express.static("build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "build", "index.html"));
	});
}

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
