// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create an array to store comments
const comments = [];

// Create a route to add comments
app.get('/add', (req, res) => {
    const comment = req.query.comment;
    comments.push(comment);
    res.send('Comment added!');
});

// Create a route to list comments
app.get('/list', (req, res) => {
    res.send(comments);
});

// Start the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});