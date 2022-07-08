const express = require("express");
const path = require("path");
const cors = require("cors");
const db = require("./database");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3306;

app.use(cors());
app.use(express.json());

db.connect((err) => {
	if (err) throw err;
	console.log("SQL database connection established successfully!");
});

const mainRouter = require("./routes");
const postsRouter = require("./routes");
const usersRouter = require("./routes");

app.use("/", mainRouter);
app.use("/api/posts", postsRouter);
app.use("/api/users", usersRouter);

app.use(express.static(path.resolve(__dirname, "../build")));

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
