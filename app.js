const express = require('express');
const path = require('path');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const app = express();
const file = './data.json';
const fs = require('fs');
const todosArray = ["Wash the car"];
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));

// Set app to use bodyParser()` middleware.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

//This is the initial rendering, saying to use index.mustache, and declares todosMustache
app.get("/", function (req, res) {
  fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
      if (err){
          console.log(err);
      } else {
      obj = JSON.parse(data);
      var arrayfile = obj.todoArray;
      console.log(obj.todoArray);
      // this makes todosMustache the arrayfile that was just downloaded
      res.render('index', { todosMustache: arrayfile });
  }});
  // This will make todosMustache the todosArray
  // res.render('index', { todosMustache: todosArray });
});

//This means that every time method="post" is called on action="/", it will add to the array and redirect the user
app.post("/", function (req, res) {
  var addtolist = req.body.inputtodo
  todosArray.push(addtolist);
  fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
      if (err){
          console.log(err);
      } else {
      obj = JSON.parse(data); //now it an object
      obj.todoArray.push(addtolist); //add some data
      json = JSON.stringify(obj); //convert it back to json
      fs.writeFile('data.json', json, 'utf8'); // write it back
  }});
  res.redirect('/');
});


app.listen(3000, function () {
  console.log('Hosted on local:3000')
})
