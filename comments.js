// Create web server application with Express
// Run: node comments.js
// Test: curl -X POST -H "Content-Type: application/json" -d '{"body":"body text"}' http://localhost:3000/comments
// Test: curl http://localhost:3000/comments

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

var comments = [];

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  comments.push(req.body);
  res.json(req.body);
});

app.listen(3000, function() {
  console.log('Running on port 3000');
});
