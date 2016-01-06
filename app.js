"use strict";

var express = require("express"),
    posts = require('./src/post.json');

var app = express();
app.get('/', function(req, res){
  res.send("<h1>Teg the express app</h1>");
});

app.get('/blog', function(req,res){
  res.send(posts.title);
})

app.listen(3000, function() {
  console.log("The frontend server is running at port 3000");
});
