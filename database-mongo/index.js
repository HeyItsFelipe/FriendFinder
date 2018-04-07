var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  name: Number,
  location: String,
  lat: Number,
  lng: Number
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var addFriend = function(data, callback) {
  console.log('Entered addFriend....');
  console.log(data);
  //TODO: Add to database
  //TODO: Start db using mongod
  //TODO: Start db cli using mongo
  //TODO: Add using save, Item.save
  callback(null, 'Success');
};

module.exports.addFriend = addFriend;
module.exports.selectAll = selectAll;