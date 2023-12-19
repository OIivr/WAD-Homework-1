require('dotenv').config()
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: String(process.env.DB_PASSWORD),
    database: "WAD_DB",
    host: "localhost",
    port: "5433"
});

const createUserTable = `
    CREATE TABLE IF NOT EXISTS "users" (
       "id" SERIAL PRIMARY KEY,
       "email" VARCHAR(200) UNIQUE NOT NULL,
       "password" VARCHAR(200) NOT NULL
    );`;

const createPostsTable = `
    CREATE TABLE IF NOT EXISTS "posts" (
    "id" SERIAL PRIMARY KEY,
    "author" VARCHAR(50) NOT NULL,
    "content" VARCHAR(1000) NOT NULL,
    "date" TIMESTAMP WITH TIME ZONE NOT NULL
    );`;

const execute = async(createUserTable, createPostsTable) => {
    try {
        await pool.connect();
        await pool.query(createUserTable);
        await pool.query(createPostsTable);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

execute(createUserTable, createPostsTable).then(result => {
    if (result) {
        console.log("Up and running!");
    }
})

module.exports = pool;

const express = require('express');
app.use(express.json()); 

app.post('/api/users', async (req, res) => {
  const { username, password } = req.body;


  const insertUserQuery = `
    INSERT INTO users (username, password)
    VALUES ($1, $2)
    RETURNING *;  // returns the inserted row
  `;

  try {
    const result = await pool.query(insertUserQuery, [username, password]);
    res.json(result.rows[0]); 
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the user' });
  }
});

