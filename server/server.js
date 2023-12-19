require('dotenv').config();

const express = require('express');
const pool = require('./database');
const cors = require('cors');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jose');
const port = process.env.PORT || 3000;
const app = express();
const dbPassword = process.env.DB_PASSWORD;


const jwtSecret = process.env.JWT_SECRET || 'KEY2';

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
app.use(express.json());
app.use(cookieParser());

// TODO: authenticate user

function authenticateUser(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: 'Missing token' });
    }
    jwt.verify(token, jwtSecret, (err, decoded) => {
      if (err) {
        console.error('JWT Verification Error:', err);
        return res.status(401).json({ error: 'Invalid token' });
      }
      req.userId = decoded.userId;
      next();
    });
  }
   app.post('/api/register', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);
      if (user.rows.length > 0) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }
  
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = await db.query('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *', [email, hashedPassword]);
      const token = jwt.sign({ userId: newUser.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
      res.status(201).json({ token, userId: newUser.rows[0].id });
    } catch (err) {
      console.error('Login Error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  });

app.listen(port, () => {
    console.log("Server is listening to port " + port);
});

app.post('/api/posts', authenticateUser, async (req, res) => {
    try {
      const post = req.body;
      const newpost = await pool.query(
        "INSERT INTO posts (author, content, date) values ($1, $2, $3) RETURNING*",
        [post.author, post.content, post.date]
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


app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    
    if (user.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    
    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, { httpOnly: true });

    res.json({ message: 'Login successful', token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logout successful' });
});