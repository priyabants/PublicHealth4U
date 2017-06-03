/**
 * http://usejsdoc.org/
 */

var express = require('express');
var morgan = require('morgan');
var path = require('path');


var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'styleSheet.css'));
});

app.get('/ui/jquery.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery.js'));
});

app.get('/ui/jquery.cycle.all.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'jquery.cycle.all.js'));
});

app.get('/ui/image/misc-images/slider1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/image/misc-images', 'slider1.jpg'));
});

app.get('/ui/image/misc-images/slider2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/image/misc-images', 'slider2.jpg'));
});

app.get('/ui/image/misc-images/slider3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/image/misc-images', 'slider3.jpg'));
});

app.get('/ui/image/social/facebook_grey.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/image/social', 'facebook_grey.png'));
});

app.get('/ui/image/social/twitter_grey.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/image/social', 'twitter_grey.png'));
});

app.get('/ui/image/social/google_plus_grey.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/image/social', 'google_plus_grey.png'));
});

app.get('/ui/image/social/youtube_grey.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/image/social', 'youtube_grey.png'));
});

app.get('/ui/image/social/linkedin_grey.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/image/social', 'linkedin_grey.png'));
});

app.get('/ui/image/social/email.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui/image/social', 'email.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`Public health sytem listning to port ${port}!`);
});