require('dotenv').config()
const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: "Parool",
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
  const client = await pool.connect();
  
  try {
        await pool.connect();
        await pool.query(createUserTable);
        await pool.query(createPostsTable);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    } finally {
      client.release();
  }
}

execute(createUserTable, createPostsTable).then(result => {
    if (result) {
        console.log("Up and running!");
    }
})

module.exports = pool;