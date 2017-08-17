const express = require('express');
const path = require('path');
const mustache = require('mustache-express');
const app = express();
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', function(req, res){
  res.render("index");
});

app.listen(3000, function () {
  console.log('Hosted on local:3000')
})
