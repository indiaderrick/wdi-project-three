const mongoose = require('mongoose');

const exhibitionSchema = mongoose.Schema({
  name: String,
  dates: String,
  rating: Number,
  description: String,
  image: String,
  gallery: {
    type: mongoose.Schema.ObjectId,
    ref: 'Gallery'
  },
  comments: [
    {
      text: String,
      commentAuthor: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
      }
    }
  ]
});

const exhibitionModel = mongoose.model('Exhibition', exhibitionSchema);

module.exports = exhibitionModel;