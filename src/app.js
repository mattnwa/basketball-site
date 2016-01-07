"use strict";

var express = require("express"),
    posts = require('./posts.json');

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + './templates');

app.get('/', function(req, res){
  res.send("<h1>this is the express app</h1>");
});

app.get('/blog/:title?', function(req,res){
  var title = req.params.title;
  if(title === undefined) {
    res.status(503);
    res.send("This page is under construction!");
  } else {
  var post = posts[title];
  res.send(post);
}
})

app.listen(3000, function() {
  console.log("The frontend server is running at port 3000");
});
