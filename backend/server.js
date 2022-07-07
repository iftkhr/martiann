const express = require('express');
const cors = require('cors');
const db = require('./database');

require('dotenv').config();

const app = express();
const port = process.env.port;

app.use(cors());
app.use(express.json());

db.connect((err) => {
    if (err) throw err;
    console.log("SQL database connection established successfully!");
})

const feedRouter = require('./routes');
const homeRouter = require('./routes');

app.use('/', feedRouter)
app.use('/home', homeRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})