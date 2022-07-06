const express = require('express');
const db = require('./database')

const app = express();
const  port = process.env.port;
app.use(express.json())

// Route to get all posts
app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM posts", (err,result)=>{
    if(err) {
    console.log(err)
    }
    console.log(result)
res.send(result)
});});

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})