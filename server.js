var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 4000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/saveUsers.json', function(req, res) {
  fs.readFile('users.json', function(err, formFields) {
    var users = JSON.parse(formFields);
    users.push(req.body);
    fs.writeFile('users.json', JSON.stringify(users, null, 4), function(err) {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(users);
    });
  });
});

app.get('/getUsersList.json', function(req, res) {
  fs.readFile('users.json', function(err, userData) {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(userData));
  });
});

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:4000' + '/');
});

