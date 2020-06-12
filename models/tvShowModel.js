const mongoose = require('mongoose');

const Ratings = require('./ratingsModel')
const Season = require('./seasonModel')
const ViewedEpisode = require('./viewedEpisode')

const { Schema } = mongoose;

const tvShowModel = new Schema({
    Title: { type: String },
    Year: { type: String },
    Rated: { type: String },
    Released: { type: String },
    Runtime: { type: String },
    Genre: { type: String },
    Director: { type: String },
    Writer: { type: String },
    Actors: { type: String },
    Plot: { type: String },
    Language: { type: String },
    Country: { type: String },
    Awards: { type: String },
    Poster: { type: String },
    Ratings: [Ratings.schema],
    Metascore: { type: String },
    imdbRating: { type: String },
    imdbVotes: { type: String },
    imdbID: { type: String },
    Type: { type: String },
    totalSeasons: { type: Number },
    Response: { type: String },
    Seasons: [Season.schema],
    LastViewedEpisode: ViewedEpisode.schema
});

module.exports = mongoose.model('TvShow', tvShowModel);