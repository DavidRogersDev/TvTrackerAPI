const mongoose = require('mongoose');

const { Schema } = mongoose;

const episodeModel = new Schema({
    Title: { type: String },
    Released: { type: String },
    Episode: { type: Number },
    imdbRating: { type: Number },
    imdbID: { type: String }
});

module.exports = mongoose.model('Episode', episodeModel); 