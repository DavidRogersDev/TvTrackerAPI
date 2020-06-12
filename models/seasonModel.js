const mongoose = require('mongoose');
const Episode = require('./episodeModel')
const { Schema } = mongoose;

const seasonModel = new Schema({
    SeasonNr: { type: Number },
    Episodes: [Episode.schema]

});

module.exports = mongoose.model('Season', seasonModel);