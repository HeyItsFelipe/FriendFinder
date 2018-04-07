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
  name: String,
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

var getFriends = function() {
  console.log('Entered getFriends...');
  return Item.find(function(err, friends) {
    if(err) {
      console.log('getFriends Error!!!');
    }
  });
};

var addFriend = function(data, callback) {
  console.log('Entered addFriend....');
  console.log(data);
  var friendItem = new Item({
    name: data.name,
    location: data.location,
    lat: data.lat,
    lng: data.lng
  });

  friendItem.save(function(err) {
    if(err) {
      console.log('Got an error saving to database...');
      callback(err, null);
    } else {
      console.log('Successfully saved to database....');
      callback(null, 'Successfully saved to database....');
    }
  });
};

module.exports.getFriends = getFriends;
module.exports.addFriend = addFriend;
module.exports.selectAll = selectAll;