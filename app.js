const express = require('express');
const path = require('path');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();
const todosarray = ["Wash the car"];
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

// Set app to use bodyParser()` middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

app.get("/", function (req, res) {
  res.render('index', { todosmustache: todosarray });
});

app.post("/", function (req, res) {
  console.log(req.body);
  todos.push(req.body.inputtodo);
  console.log(todos);
  res.redirect('/');
})

app.listen(3000, function () {
  console.log('Hosted on local:3000')
})
