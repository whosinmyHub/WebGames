// set up libraries
const express = require ('express');
const { Pool } = require ('pg');
const cors = require ('cors'); 

// create web server
const app = express ();
app.use (cors ());
app.use (express.json ());

//connect to database
const pool = new Pool ({
    user: 'postgres',
    password: 'password',
    database: 'math_questions',
    host: 'localhost',
    port: 5332,
});

app.get ('/api/questions', async (req, res) => {
    try {
        const result = await pool.query ('SELECT * FROM easy_math_questions;');
        res.json (result.rows);

    } catch (err) {
        console.error (err);
        res.status (500).json ({ error: 'Database query failed' });
    }
});

app.listen (3000, () => 
    console.log ('Backend API running on http://localhost:3000'));