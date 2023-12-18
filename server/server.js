const express = require('express');
const pool = require('./database');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const port = process.env.PORT || 3000;

const app = express();

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
app.use(express.json());
app.use(cookieParser());

// TODO: authenticate user



app.listen(port, () => {
    console.log("Server is listening to port " + port)
});

app.post('/api/posts', async(req, res) => {
    try {
        const post = req.body;
        const newpost = await pool.query(
            "INSERT INTO posts (author, content, date) values ($2, $3, $4)    RETURNING*", [post.author, post.content, post.date]
        );
        res.json(newpost);
        console.log("a POST request has been initiated");
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/api/posts', async(req, res) => {
    try {
        const posts = await pool.query(
            "SELECT * FROM posts"
        );
        res.json(posts.rows);
        console.log("GET posts request has been initiated");
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/api/posts/:id', async(req, res) => {
    try {
        const { id } = req.params; 
        const posts = await pool.query(
            "SELECT * FROM posts WHERE id = $1", [id]
        );
        res.json(posts.rows[0]);
        console.log("GET a post with route parameter request has been initiated");
    } catch (err) {
        console.error(err.message);
    }
});

app.put('/api/posts/:id', async(req, res) => {
    try {
        if (!req.params) {
            return res.status(400).json({ error: 'No parameters provided' });
        }
        const { id } = req.params;
        const post = req.body;
        const updatepost = await pool.query(
            "UPDATE posts SET author = $2, content = $3, date = $4 WHERE id = $1", [id, post.author, post.content, post.date]
        );
        res.json(updatepost);
        console.log("UPDATE request has been initiated");
    } catch (err) {
        console.error(err.message);
    }
});

app.delete('/api/posts/:id', async(req, res) => {
    try {
        const deletepost = await pool.query(
            "DELETE FROM posts WHERE id = $1", [id]
        );
        res.json(deletepost);
        console.log("DELETE a post request has been initiated");
    } catch (err) {
        console.error(err.message);
    }
});
app.delete('/api/posts/', async (req, res) => {
    try {
        const deletepost = await pool.query(
            "DELETE FROM posts"
        );
        res.json(deletepost);
        console.log("DELETE all posts request has been initiated");
    } catch (err) {
        console.error(err.message);
    }
});