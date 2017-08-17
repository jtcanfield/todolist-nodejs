const express = require('express');
const path = require('path');
const mustache = require('mustache-express');
const app = express();
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

// Set app to use bodyParser()` middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', function(req, res){
  var email = req.body.email;
  var html = '<p>Your user name is: </p>' + email;
  res.send(html);
});

app.use('/', function(req, res){
  res.render("index");
});

app.listen(3000, function () {
  console.log('Hosted on local:3000')
})
