const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', function(req, res){
  res.render("index");
});

app.listen(3000, function () {
  console.log('Hosted on local:3000')
})
