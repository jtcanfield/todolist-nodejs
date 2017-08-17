const express = require('express');
const path = require('path');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();
const todosArray = ["Wash the car"];
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));

// Set app to use bodyParser()` middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

//This is the initial rendering, saying to use index.mustache, and to make todosMustache the todosArray
app.get("/", function (req, res) {
  res.render('index', { todosMustache: todosArray });
});

//This means that every time method="post" is called on action="/", it will add to the array and redirect the user
app.post("/", function (req, res) {
  console.log(req.body);
  todosArray.push(req.body.inputtodo);
  console.log(todosArray);
  res.redirect('/');
})

app.listen(3000, function () {
  console.log('Hosted on local:3000')
})
