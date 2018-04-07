var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');

var app = express();
app.use(bodyParser.json());
// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function (req, res) {

  console.log('Entered GET in server....');
  console.log(req.body);

  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
});

app.post('/friend', function(req, res) {
  console.log('Entered POST in server....');
  console.log(req.body);
  items.addFriend(req.body, function(err, data) {
    if(err) {
      console.log('Error in addFriend...');
    } else {
      console.log('Success in addFriend...');
    }
  });

});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});

