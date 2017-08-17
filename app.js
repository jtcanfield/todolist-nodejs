const express = require('express');
const path = require('path');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

// Set app to use bodyParser()` middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function(req, res){
  console.log(req.body);
  var text = req.body.text;
  var html = '<p>Your user name is: </p>' + text;
  res.renders(html);
});

app.use('/', function(req, res){
  res.render("index");
});

app.listen(3000, function () {
  console.log('Hosted on local:3000')
})
