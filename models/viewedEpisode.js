const mongoose = require('mongoose');

const { Schema } = mongoose;

const viewedEpisodeModel = new Schema({
    Season: { type: Number },
    Episode: { type: Number },
    EpisodeImdbId: { type: String }
});

module.exports = mongoose.model('ViewedEpisode', viewedEpisodeModel);