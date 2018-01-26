const mongoose = require('mongoose');

const kittySchema = mongoose.Schema({
  name: String, 
  friends: [
    {
      friend_id: String
    }
  ]
});

module.exports = mongoose.model('Kitten', kittySchema);
