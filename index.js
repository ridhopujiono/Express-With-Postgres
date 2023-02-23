const express = require('express');
const app = express();
const pool = require('./connection');
const things = require('./things');

app.use('/things', things);

app.get('/', (req, res) => {
    pool.query('SELECT * FROM country', (err, result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    });
});

pool.connect((err, res) => {
    console.log(err);
    console.log(res);
})
app.listen(5000);